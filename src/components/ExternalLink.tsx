import React from 'react';
import { useExternalLink } from '@/hooks/useExternalLink';
import ExternalLinkDialog from './ExternalLinkDialog';
import { Translations } from '@/data/translations';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  translations: Translations;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
  translations,
  target,
  rel,
  onClick
}) => {
  const {
    isDialogOpen,
    pendingUrl,
    isExternalLink,
    handleLinkClick,
    confirmNavigation,
    cancelNavigation,
    createLinkHandler
  } = useExternalLink();

  const handleClick = (e: React.MouseEvent) => {
    // 如果有自定义的onClick处理器，先调用它
    if (onClick) {
      onClick(e);
      // 如果preventDefault被调用，就不处理链接跳转
      if (e.defaultPrevented) {
        return;
      }
    }

    // 处理链接跳转逻辑
    handleLinkClick(href, e);
  };

  // 如果不是外部链接，直接渲染普通链接
  if (!isExternalLink(href)) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // 如果是外部链接，渲染带确认弹窗的链接
  return (
    <>
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
      
      <ExternalLinkDialog
        isOpen={isDialogOpen}
        onClose={cancelNavigation}
        onConfirm={confirmNavigation}
        url={pendingUrl}
        translations={translations}
      />
    </>
  );
};

export default ExternalLink; 