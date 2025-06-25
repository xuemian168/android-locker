import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ManufacturerData } from '@/data/manufacturers';
import { Translations } from '@/data/translations';
import { Smartphone, Unlock, Code, Shield } from 'lucide-react';

interface StatsOverviewProps {
  manufacturers: ManufacturerData[];
  translations: Translations;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({
  manufacturers,
  translations
}) => {
  const totalManufacturers = manufacturers.length;
  const bootloaderSupported = manufacturers.filter(m => m.bootloaderUnlock === 'supported').length;
  const kernelOpenSource = manufacturers.filter(m => m.kernelSource === 'open').length;
  const warrantyMaintained = manufacturers.filter(m => m.warrantyAfterUnlock === 'maintained').length;

  // 获取当前语言，优先从 translations.lang 获取，否则 fallback zh
  const currentLanguage = (translations as any).lang || 'zh';
  const getLang = (obj: any) => obj?.[currentLanguage] || obj?.zh || obj?.en || '';

  const stats = [
    {
      title: translations.manufacturer,
      value: totalManufacturers,
      icon: Smartphone,
      description: getLang({ zh: '已收录厂商总数', en: 'Total manufacturers tracked', hi: 'कुल निर्माताओं की संख्या' }),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: translations.bootloaderUnlock,
      value: bootloaderSupported,
      icon: Unlock,
      description: `${Math.round((bootloaderSupported / totalManufacturers) * 100)}% ${getLang({ zh: translations.supported, en: translations.supported, hi: translations.supported }).toLowerCase()}`,
      color: 'from-android-500 to-android-600'
    },
    {
      title: translations.kernelSource,
      value: kernelOpenSource,
      icon: Code,
      description: `${Math.round((kernelOpenSource / totalManufacturers) * 100)}% ${getLang({ zh: translations.open, en: translations.open, hi: translations.open }).toLowerCase()}`,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: translations.warrantyAfterUnlock,
      value: warrantyMaintained,
      icon: Shield,
      description: `${Math.round((warrantyMaintained / totalManufacturers) * 100)}% ${getLang({ zh: translations.maintained, en: translations.maintained, hi: translations.maintained }).toLowerCase()}`,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title}
          className={`card-hover animate-bounce-in animate-delay-${index * 100} opacity-0 bg-gradient-to-br ${stat.color} text-white border-0`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/90">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-white/80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {stat.value}
            </div>
            <p className="text-xs text-white/80 mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
