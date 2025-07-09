import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import { ManufacturerData, getStatusColor, getStatusIcon } from '@/data/manufacturers';
import { Translations } from '@/data/translations';
import ProtectedContent from './ProtectedContent';
import SafeExternalLink from './ExternalLink';

interface ManufacturerCardProps {
  manufacturer: ManufacturerData;
  translations: Translations;
  index: number;
}

export const ManufacturerCard: React.FC<ManufacturerCardProps> = ({
  manufacturer,
  translations,
  index
}) => {
  const getTranslatedStatus = (status: string, type: 'bootloader' | 'kernel' | 'warranty') => {
    switch (status) {
      case 'supported':
      case 'open':
      case 'maintained':
        return type === 'bootloader' ? translations.supported :
               type === 'kernel' ? translations.open : translations.maintained;
      case 'limited':
      case 'partial':
        return type === 'bootloader' ? translations.limited :
               type === 'kernel' ? translations.partial : translations.limited;
      case 'unsupported':
      case 'closed':
      case 'voided':
        return type === 'bootloader' ? translations.unsupported :
               type === 'kernel' ? translations.closed : translations.voided;
      default:
        return translations.unknown;
    }
  };

  const currentLanguage = (translations as any).lang || 'zh';
  const getLang = (obj: any) => obj?.[currentLanguage] || obj?.zh || obj?.en || '';

  return (
    <Card 
      className={`card-hover animate-fade-in animate-delay-${Math.min(index * 100, 400)} opacity-0 bg-gradient-to-br from-white to-android-50/30 border-android-200/50`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 text-lg">
          <img
            src={manufacturer.logo}
            alt={manufacturer.name + ' logo'}
            className="w-8 h-8 object-contain rounded bg-white border border-android-100"
            onError={e => {
              const target = e.currentTarget;
              // fallback: 显示 placeholder.svg
              target.onerror = null;
              target.src = '/placeholder.svg';
            }}
          />
          <span className="gradient-text font-bold">
            {manufacturer.name}
          </span>
        </CardTitle>
      </CardHeader>
      <ProtectedContent
        watermark={`${manufacturer.name} - a.zli.li`}
        showWatermark={true}
        className="content-protected"
      >
        <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {translations.bootloaderUnlock}
            </span>
            <div className="flex items-center gap-2">
              <span className="status-indicator bg-transparent">
                {getStatusIcon(manufacturer.bootloaderUnlock)}
              </span>
              <Badge 
                variant="secondary" 
                className={getStatusColor(manufacturer.bootloaderUnlock)}
              >
                {getTranslatedStatus(manufacturer.bootloaderUnlock, 'bootloader')}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {translations.kernelSource}
            </span>
            <div className="flex items-center gap-2">
              <span className="status-indicator bg-transparent">
                {getStatusIcon(manufacturer.kernelSource)}
              </span>
              <Badge 
                variant="secondary" 
                className={getStatusColor(manufacturer.kernelSource)}
              >
                {getTranslatedStatus(manufacturer.kernelSource, 'kernel')}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {translations.warrantyAfterUnlock}
            </span>
            <div className="flex items-center gap-2">
              <span className="status-indicator bg-transparent">
                {getStatusIcon(manufacturer.warrantyAfterUnlock)}
              </span>
              <Badge 
                variant="secondary" 
                className={getStatusColor(manufacturer.warrantyAfterUnlock)}
              >
                {getTranslatedStatus(manufacturer.warrantyAfterUnlock, 'warranty')}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="pt-2 border-t border-android-100">
          <div className="space-y-2">
            <div>
              <span className="text-xs font-medium text-muted-foreground">
                {translations.unlockMethod}:
              </span>
              <p className="text-sm mt-1">{getLang(manufacturer.unlockMethod)}</p>
            </div>
            {manufacturer.unlockWaitTime && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">{translations.unlockWaitTime}:</span>
                <p className="text-sm mt-1">{getLang(manufacturer.unlockWaitTime)}</p>
              </div>
            )}
            {manufacturer.unlockQuota && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">{translations.unlockQuota}:</span>
                <p className="text-sm mt-1">{getLang(manufacturer.unlockQuota)}</p>
              </div>
            )}
            {manufacturer.simCardRequirement && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">{translations.simCardRequirement}:</span>
                <p className="text-sm mt-1">{getLang(manufacturer.simCardRequirement)}</p>
              </div>
            )}
            {manufacturer.accountLimit && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">{translations.accountLimit}:</span>
                <p className="text-sm mt-1">{getLang(manufacturer.accountLimit)}</p>
              </div>
            )}
            {manufacturer.regionLimit && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">{translations.regionLimit}:</span>
                <p className="text-sm mt-1">{getLang(manufacturer.regionLimit)}</p>
              </div>
            )}
            {manufacturer.relockSupport && (
              <div>
                <span className="text-xs font-medium text-muted-foreground">{translations.relockSupport}:</span>
                <p className="text-sm mt-1">{getLang(manufacturer.relockSupport)}</p>
              </div>
            )}
            <div>
              <span className="text-xs font-medium text-muted-foreground">
                {translations.notes}:
              </span>
              <p className="text-sm mt-1 text-muted-foreground">{getLang(manufacturer.notes)}</p>
            </div>
          </div>
          
          {/* 参考资料展示区 */}
          {manufacturer.references && manufacturer.references.length > 0 && (
            <div className="mt-2">
              <span className="text-xs font-medium text-muted-foreground">Reference:</span>
              <ul className="mt-1 space-y-1">
                {manufacturer.references.map((ref, idx) => (
                  <li key={ref.url + idx}>
                    <SafeExternalLink 
                      href={ref.url} 
                      className="text-xs text-blue-700 underline break-all"
                      translations={translations}
                    >
                      {ref.label}
                    </SafeExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-android-100">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{manufacturer.lastUpdated}</span>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-android-50 border-android-200"
            >
              <SafeExternalLink 
                href={manufacturer.officialPolicy} 
                className="flex items-center gap-1"
                translations={translations}
              >
                <ExternalLink className="h-3 w-3" />
                <span className="text-xs">{translations.visitOfficial}</span>
              </SafeExternalLink>
            </Button>
          </div>
        </div>
      </CardContent>
      </ProtectedContent>
    </Card>
  );
};
