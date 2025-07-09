import { useEffect } from 'react';

export interface ContentProtectionOptions {
  disableRightClick?: boolean;
  disableKeyboardShortcuts?: boolean;
  disableDevTools?: boolean;
  disablePrint?: boolean;
  showWarnings?: boolean;
}

export const useContentProtection = (options: ContentProtectionOptions = {}) => {
  const {
    disableRightClick = true,
    disableKeyboardShortcuts = true,
    disableDevTools = true,
    disablePrint = true,
    showWarnings = true
  } = options;

  useEffect(() => {
    const handlers: Array<() => void> = [];

    // 禁用右键菜单
    if (disableRightClick) {
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        if (showWarnings) {
          console.log('右键菜单已被禁用');
        }
        return false;
      };
      document.addEventListener('contextmenu', handleContextMenu);
      handlers.push(() => document.removeEventListener('contextmenu', handleContextMenu));
    }

    // 禁用键盘快捷键
    if (disableKeyboardShortcuts) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // 禁用 Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+S, Ctrl+U, Ctrl+P
        if (e.ctrlKey && ['a', 'c', 'v', 's', 'u', 'p'].includes(e.key.toLowerCase())) {
          e.preventDefault();
          if (showWarnings) {
            console.log(`Ctrl+${e.key.toUpperCase()} is disabled`);
          }
          return false;
        }
        
        // 禁用 F12 开发者工具
        if (e.key === 'F12') {
          e.preventDefault();
          if (showWarnings) {
            console.log('F12 is disabled');
          }
          return false;
        }

        // 禁用 Ctrl+Shift+I (开发者工具)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
          e.preventDefault();
          if (showWarnings) {
            console.log('Ctrl+Shift+I is disabled');
          }
          return false;
        }

        // 禁用 Ctrl+Shift+C (元素选择器)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
          e.preventDefault();
          if (showWarnings) {
            console.log('Ctrl+Shift+C is disabled');
          }
          return false;
        }

        // 禁用 Ctrl+Shift+J (控制台)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
          e.preventDefault();
          if (showWarnings) {
            console.log('Ctrl+Shift+J is disabled');
          }
          return false;
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      handlers.push(() => document.removeEventListener('keydown', handleKeyDown));
    }

    // 禁用打印
    if (disablePrint) {
      const handleBeforePrint = (e: Event) => {
        e.preventDefault();
        if (showWarnings) {
          alert('Print is disabled');
        }
      };
      window.addEventListener('beforeprint', handleBeforePrint);
      handlers.push(() => window.removeEventListener('beforeprint', handleBeforePrint));
    }

    // 开发者工具检测
    if (disableDevTools) {
      let devtools = { open: false };
      const threshold = 160;
      
      const detectDevTools = () => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          if (!devtools.open) {
            devtools.open = true;
            if (showWarnings) {
              console.clear();
              console.log('%cWarning: Developer tools detected', 'color: red; font-size: 20px; font-weight: bold;');
              console.log('%cContent is protected, please respect intellectual property', 'color: orange; font-size: 14px;');
            }
          }
        } else {
          devtools.open = false;
        }
      };

      const interval = setInterval(detectDevTools, 1000);
      handlers.push(() => clearInterval(interval));
    }

    // 禁用选择和拖拽
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };
    
    const handleDragStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    handlers.push(() => {
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    });

    // 清理函数
    return () => {
      handlers.forEach(cleanup => cleanup());
    };
  }, [disableRightClick, disableKeyboardShortcuts, disableDevTools, disablePrint, showWarnings]);
}; 