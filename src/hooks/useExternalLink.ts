import { useState, useCallback } from 'react';

export interface ExternalLinkState {
  isDialogOpen: boolean;
  pendingUrl: string;
}

export const useExternalLink = () => {
  const [state, setState] = useState<ExternalLinkState>({
    isDialogOpen: false,
    pendingUrl: ''
  });

  // 检查是否为外部链接
  const isExternalLink = useCallback((url: string): boolean => {
    if (!url) return false;
    
    // 如果是相对路径，不是外部链接
    if (url.startsWith('/') || url.startsWith('#')) {
      return false;
    }
    
    // 如果是mailto:, tel:等协议，不是外部链接
    if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('sms:')) {
      return false;
    }
    
    try {
      const urlObj = new URL(url);
      const currentHost = window.location.hostname;
      
      // 如果是当前域名，不是外部链接
      if (urlObj.hostname === currentHost) {
        return false;
      }
      
      // 其他情况都认为是外部链接
      return true;
    } catch {
      // 如果URL解析失败，认为不是外部链接
      return false;
    }
  }, []);

  // 处理链接点击
  const handleLinkClick = useCallback((url: string, e?: React.MouseEvent) => {
    if (!isExternalLink(url)) {
      // 如果不是外部链接，直接跳转
      if (e) {
        // 如果有事件对象，让默认行为继续
        return;
      } else {
        // 如果没有事件对象，手动跳转
        window.location.href = url;
      }
      return;
    }

    // 如果是外部链接，阻止默认行为并显示确认弹窗
    if (e) {
      e.preventDefault();
    }
    
    setState({
      isDialogOpen: true,
      pendingUrl: url
    });
  }, [isExternalLink]);

  // 确认跳转
  const confirmNavigation = useCallback(() => {
    if (state.pendingUrl) {
      window.open(state.pendingUrl, '_blank', 'noopener,noreferrer');
    }
    setState({
      isDialogOpen: false,
      pendingUrl: ''
    });
  }, [state.pendingUrl]);

  // 取消跳转
  const cancelNavigation = useCallback(() => {
    setState({
      isDialogOpen: false,
      pendingUrl: ''
    });
  }, []);

  // 创建安全的链接点击处理器
  const createLinkHandler = useCallback((url: string) => {
    return (e: React.MouseEvent) => {
      handleLinkClick(url, e);
    };
  }, [handleLinkClick]);

  return {
    isDialogOpen: state.isDialogOpen,
    pendingUrl: state.pendingUrl,
    isExternalLink,
    handleLinkClick,
    confirmNavigation,
    cancelNavigation,
    createLinkHandler
  };
}; 