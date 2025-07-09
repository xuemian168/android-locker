import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProtectedContentProps {
  children: React.ReactNode;
  className?: string;
  watermark?: string;
  showWatermark?: boolean;
  protection?: {
    disableSelect?: boolean;
    disableRightClick?: boolean;
    disableDrag?: boolean;
  };
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({
  children,
  className,
  watermark = 'BL List - a.zli.li',
  showWatermark = true,
  protection = {
    disableSelect: true,
    disableRightClick: true,
    disableDrag: true,
  }
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const handlers: Array<() => void> = [];

    // 禁用选择
    if (protection.disableSelect) {
      const preventSelect = (e: Event) => {
        e.preventDefault();
        return false;
      };
      element.addEventListener('selectstart', preventSelect);
      handlers.push(() => element.removeEventListener('selectstart', preventSelect));
    }

    // 禁用右键菜单
    if (protection.disableRightClick) {
      const preventContextMenu = (e: Event) => {
        e.preventDefault();
        return false;
      };
      element.addEventListener('contextmenu', preventContextMenu);
      handlers.push(() => element.removeEventListener('contextmenu', preventContextMenu));
    }

    // 禁用拖拽
    if (protection.disableDrag) {
      const preventDrag = (e: Event) => {
        e.preventDefault();
        return false;
      };
      element.addEventListener('dragstart', preventDrag);
      handlers.push(() => element.removeEventListener('dragstart', preventDrag));
    }

    // 清理函数
    return () => {
      handlers.forEach(cleanup => cleanup());
    };
  }, [protection]);

  return (
    <div
      ref={contentRef}
      className={cn(
        'relative',
        protection.disableSelect && 'select-none',
        className
      )}
      style={{
        WebkitUserSelect: protection.disableSelect ? 'none' : 'auto',
        MozUserSelect: protection.disableSelect ? 'none' : 'auto',
        msUserSelect: protection.disableSelect ? 'none' : undefined,
        userSelect: protection.disableSelect ? 'none' : 'auto',
        WebkitTouchCallout: protection.disableSelect ? 'none' : undefined,
        WebkitTapHighlightColor: 'transparent',
      } as React.CSSProperties}
    >
      {children}
      
      {/* 水印层 */}
      {showWatermark && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(0,0,0,0.01) 80px,
              rgba(0,0,0,0.01) 160px
            )`,
            zIndex: 1,
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `repeating-conic-gradient(
                from 0deg at 50% 50%,
                transparent 0deg,
                rgba(0,0,0,0.005) 90deg,
                transparent 180deg,
                rgba(0,0,0,0.005) 270deg
              )`,
            }}
          >
            <div
              className="transform rotate-[-15deg] text-gray-300/20 font-bold text-lg whitespace-nowrap select-none pointer-events-none"
              style={{
                fontSize: 'clamp(14px, 2vw, 20px)',
                textShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            >
              {watermark}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtectedContent; 