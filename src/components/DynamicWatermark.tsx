import React, { useEffect, useState } from 'react';

interface DynamicWatermarkProps {
  text?: string;
  opacity?: number;
  fontSize?: number;
  color?: string;
  rotate?: number;
  zIndex?: number;
  enabled?: boolean;
}

const DynamicWatermark: React.FC<DynamicWatermarkProps> = ({
  text = 'BL List - 内容受保护',
  opacity = 0.03,
  fontSize = 16,
  color = '#000000',
  rotate = -15,
  zIndex = 9999,
  enabled = true
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled || !mounted) return;

    // 创建水印画布
    const createWatermark = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      // 设置画布大小
      canvas.width = 200;
      canvas.height = 100;

      // 设置文字样式
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 旋转画布
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotate * Math.PI) / 180);

      // 绘制文字
      ctx.fillText(text, 0, 0);

      return canvas.toDataURL();
    };

    // 创建水印元素
    const watermarkElement = document.createElement('div');
    watermarkElement.id = 'dynamic-watermark';
    watermarkElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: ${zIndex};
      background-image: url(${createWatermark()});
      background-repeat: repeat;
      background-position: 0 0;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    `;

    // 添加到页面
    document.body.appendChild(watermarkElement);

    // 防止水印被删除
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.removedNodes.forEach((node) => {
            if (node instanceof HTMLElement && node.id === 'dynamic-watermark') {
              // 重新创建水印
              setTimeout(() => {
                const newWatermark = document.createElement('div');
                newWatermark.id = 'dynamic-watermark';
                newWatermark.style.cssText = watermarkElement.style.cssText;
                document.body.appendChild(newWatermark);
              }, 100);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // 清理函数
    return () => {
      observer.disconnect();
      const existingWatermark = document.getElementById('dynamic-watermark');
      if (existingWatermark) {
        existingWatermark.remove();
      }
    };
  }, [text, opacity, fontSize, color, rotate, zIndex, enabled, mounted]);

  // 这个组件不渲染任何内容，只是创建全局水印
  return null;
};

export default DynamicWatermark; 