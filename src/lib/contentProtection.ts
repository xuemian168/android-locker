/**
 * 内容保护工具函数
 */

// 简单的内容编码/解码函数
export const encodeContent = (content: string): string => {
  return btoa(encodeURIComponent(content));
};

export const decodeContent = (encodedContent: string): string => {
  try {
    return decodeURIComponent(atob(encodedContent));
  } catch (error) {
    console.error('解码失败:', error);
    return '';
  }
};

// 检测开发者工具是否打开
export const detectDevTools = (): boolean => {
  const threshold = 160;
  return (
    window.outerHeight - window.innerHeight > threshold ||
    window.outerWidth - window.innerWidth > threshold
  );
};

// 生成唯一的用户标识
export const generateUserFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 'unknown';

  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('BL List Fingerprint', 2, 2);

  const fingerprint = canvas.toDataURL();
  return btoa(fingerprint).substring(0, 16);
};

// 检查是否为可疑环境
export const isSuspiciousEnvironment = (): boolean => {
  // 检查常见的自动化工具
  const suspiciousProps = [
    'webdriver',
    '__webdriver_evaluate',
    '__selenium_evaluate',
    '__webdriver_script_function',
    '__webdriver_script_func',
    '__webdriver_script_fn',
    '__fxdriver_evaluate',
    '__driver_unwrapped',
    '__webdriver_unwrapped',
    '__driver_evaluate',
    '__selenium_unwrapped',
    '__fxdriver_unwrapped'
  ];

  return suspiciousProps.some(prop => prop in window);
};

// 创建内容保护的事件监听器
export const createProtectionListeners = () => {
  const listeners: Array<() => void> = [];

  // 禁用右键菜单
  const preventContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // 禁用选择
  const preventSelection = (e: Event) => {
    e.preventDefault();
    return false;
  };

  // 禁用拖拽
  const preventDrag = (e: DragEvent) => {
    e.preventDefault();
    return false;
  };

  // 禁用键盘快捷键
  const preventKeyboard = (e: KeyboardEvent) => {
    // 禁用 Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+S, Ctrl+U, Ctrl+P, F12
    if (
      (e.ctrlKey && ['a', 'c', 'v', 's', 'u', 'p'].includes(e.key.toLowerCase())) ||
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key))
    ) {
      e.preventDefault();
      return false;
    }
  };

  // 添加事件监听器
  document.addEventListener('contextmenu', preventContextMenu);
  document.addEventListener('selectstart', preventSelection);
  document.addEventListener('dragstart', preventDrag);
  document.addEventListener('keydown', preventKeyboard);

  // 返回清理函数
  listeners.push(() => {
    document.removeEventListener('contextmenu', preventContextMenu);
    document.removeEventListener('selectstart', preventSelection);
    document.removeEventListener('dragstart', preventDrag);
    document.removeEventListener('keydown', preventKeyboard);
  });

  return () => {
    listeners.forEach(cleanup => cleanup());
  };
};

// 内容保护配置
export interface ContentProtectionConfig {
  enableWatermark: boolean;
  enableRightClickDisable: boolean;
  enableKeyboardDisable: boolean;
  enableDevToolsDetection: boolean;
  enableFingerprinting: boolean;
  watermarkText: string;
  watermarkOpacity: number;
}

export const defaultProtectionConfig: ContentProtectionConfig = {
  enableWatermark: true,
  enableRightClickDisable: true,
  enableKeyboardDisable: true,
  enableDevToolsDetection: true,
  enableFingerprinting: false,
  watermarkText: 'BL List - 内容受保护',
  watermarkOpacity: 0.03
};

// 应用内容保护
export const applyContentProtection = (config: Partial<ContentProtectionConfig> = {}) => {
  const finalConfig = { ...defaultProtectionConfig, ...config };
  const cleanupFunctions: Array<() => void> = [];

  if (finalConfig.enableRightClickDisable || finalConfig.enableKeyboardDisable) {
    const cleanup = createProtectionListeners();
    cleanupFunctions.push(cleanup);
  }

  if (finalConfig.enableDevToolsDetection) {
    const interval = setInterval(() => {
      if (detectDevTools()) {
        console.clear();
        console.log('%c⚠️ 检测到开发者工具', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%c内容受到保护，请尊重知识产权', 'color: orange; font-size: 14px;');
      }
    }, 1000);

    cleanupFunctions.push(() => clearInterval(interval));
  }

  if (finalConfig.enableFingerprinting) {
    const fingerprint = generateUserFingerprint();
    console.log('用户指纹:', fingerprint);
  }

  // 返回清理函数
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
}; 