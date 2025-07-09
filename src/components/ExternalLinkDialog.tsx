import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { Translations } from '@/data/translations';

interface ExternalLinkDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  url: string;
  translations: Translations;
}

const ExternalLinkDialog: React.FC<ExternalLinkDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  url,
  translations
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleConfirm();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  // 截断过长的URL显示
  const truncateUrl = (url: string, maxLength: number = 60) => {
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };

  // 切换展开/收起状态
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // 复制URL到剪贴板
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  // 检查URL是否需要截断
  const needsTruncation = url.length > 60;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent 
        className="max-w-md"
        onKeyDown={handleKeyDown}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-orange-500" />
            {translations.externalLinkWarning.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-3">
            <p>{translations.externalLinkWarning.description}</p>
            
            <div className="bg-gray-50 p-3 rounded-md border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">
                  {translations.externalLinkWarning.urlLabel}
                </p>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="h-6 px-2 text-xs"
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        {translations.externalLinkWarning.urlCopied}
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        {translations.externalLinkWarning.copyUrl}
                      </>
                    )}
                  </Button>
                  {needsTruncation && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleExpanded}
                      className="h-6 px-2 text-xs"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-3 w-3 mr-1" />
                          {translations.externalLinkWarning.hideFullUrl}
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-3 w-3 mr-1" />
                          {translations.externalLinkWarning.showFullUrl}
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
              <div className="relative">
                <p 
                  className={`text-sm text-blue-600 break-all font-mono transition-all duration-300 ${
                    isExpanded ? 'max-h-32 overflow-y-auto' : 'max-h-6 overflow-hidden'
                  }`}
                  title={url}
                >
                  {isExpanded || !needsTruncation ? url : truncateUrl(url)}
                </p>
                {!isExpanded && needsTruncation && (
                  <div className="absolute bottom-0 right-0 bg-gradient-to-l from-gray-50 to-transparent w-8 h-6" />
                )}
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              {translations.externalLinkWarning.disclaimer}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            {translations.externalLinkWarning.cancelButton}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleConfirm}
            className="bg-orange-500 hover:bg-orange-600"
          >
            {translations.externalLinkWarning.confirmButton}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExternalLinkDialog; 