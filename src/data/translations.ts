export type Language = 'zh' | 'en' | 'hi';

export interface Translations {
  // Header
  title: string;
  subtitle: string;
  contribute: string;
  
  // Navigation
  overview: string;
  manufacturers: string;
  about: string;
  
  // Table headers
  manufacturer: string;
  bootloaderUnlock: string;
  kernelSource: string;
  warrantyAfterUnlock: string;
  unlockMethod: string;
  notes: string;
  lastUpdated: string;
  officialPolicy: string;
  unlockWaitTime: string;
  unlockQuota: string;
  simCardRequirement: string;
  accountLimit: string;
  regionLimit: string;
  relockSupport: string;
  
  // Status values
  supported: string;
  limited: string;
  unsupported: string;
  unknown: string;
  open: string;
  partial: string;
  closed: string;
  maintained: string;
  voided: string;
  
  // Actions
  viewDetails: string;
  visitOfficial: string;
  
  // Footer
  communityMaintained: string;
  contributorsWelcome: string;
  lastDataUpdate: string;
  
  // About section
  aboutTitle: string;
  aboutDescription: string;
  howToContribute: string;
  contributeDescription: string;
  
  // SEO
  seo?: {
    title: string;
    description: string;
    keywords: string;
    ogImage?: string;
    twitterCard?: string;
    jsonLd?: object;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    title: 'BL List',
    subtitle: '各大手机厂商的Bootloader解锁、内核开源、保修政策对比',
    contribute: '贡献到GitHub',
    
    overview: '概览',
    manufacturers: '厂商列表',
    about: '关于项目',
    
    manufacturer: '厂商',
    bootloaderUnlock: 'Bootloader解锁',
    kernelSource: '内核开源',
    warrantyAfterUnlock: '解锁后保修',
    unlockMethod: '解锁方式',
    notes: '备注',
    lastUpdated: '最后更新',
    officialPolicy: '官方政策',
    unlockWaitTime: '解锁等待时长',
    unlockQuota: '解锁名额/次数',
    simCardRequirement: 'SIM 卡要求',
    accountLimit: '账号要求',
    regionLimit: '地区限制',
    relockSupport: '回锁支持',
    
    supported: '支持',
    limited: '有限支持',
    unsupported: '不支持',
    unknown: '未知',
    open: '开源',
    partial: '部分开源',
    closed: '闭源',
    maintained: '保持',
    voided: '失效',
    
    viewDetails: '查看详情',
    visitOfficial: '访问官方',
    
    communityMaintained: '社区维护项目',
    contributorsWelcome: '欢迎贡献者',
    lastDataUpdate: '数据最后更新',
    
    aboutTitle: '关于本项目',
    aboutDescription: '这个项目旨在帮助Android用户了解不同手机厂商对于Bootloader解锁、内核开源和保修政策的态度。所有数据由社区收集和维护，欢迎大家贡献。',
    howToContribute: '如何贡献',
    contributeDescription: '您可以通过GitHub提交Pull Request来更新数据、修复错误或添加新的手机厂商信息。',
    
    seo: {
      title: 'BL List',
      description: '各大手机厂商的Bootloader解锁、内核开源、保修政策对比',
      keywords: 'Android, Bootloader, Unlock, Kernel, Warranty, Manufacturer, Comparison',
      ogImage: 'https://a.zli.li/og-image.png',
      twitterCard: 'summary_large_image',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Android Manufacturer Bootloader Unlock Status",
        "description": "Comparison of Bootloader unlock, kernel source, and warranty policies across Android manufacturers.",
        "url": "https://a.zli.li/"
      }
    }
  },
  
  en: {
    title: 'BL List',
    subtitle: 'Comparison of Bootloader unlock, kernel source, and warranty policies across manufacturers',
    contribute: 'Contribute on GitHub',
    
    overview: 'Overview',
    manufacturers: 'Manufacturers',
    about: 'About',
    
    manufacturer: 'Manufacturer',
    bootloaderUnlock: 'Bootloader Unlock',
    kernelSource: 'Kernel Source',
    warrantyAfterUnlock: 'Warranty After Unlock',
    unlockMethod: 'Unlock Method',
    notes: 'Notes',
    lastUpdated: 'Last Updated',
    officialPolicy: 'Official Policy',
    unlockWaitTime: 'Unlock Wait Time',
    unlockQuota: 'Unlock Quota',
    simCardRequirement: 'SIM Card Requirement',
    accountLimit: 'Account Requirement',
    regionLimit: 'Region Limit',
    relockSupport: 'Relock Support',
    
    supported: 'Supported',
    limited: 'Limited',
    unsupported: 'Unsupported',
    unknown: 'Unknown',
    open: 'Open Source',
    partial: 'Partial',
    closed: 'Closed Source',
    maintained: 'Maintained',
    voided: 'Voided',
    
    viewDetails: 'View Details',
    visitOfficial: 'Visit Official',
    
    communityMaintained: 'Community Maintained',
    contributorsWelcome: 'Contributors Welcome',
    lastDataUpdate: 'Last Data Update',
    
    aboutTitle: 'About This Project',
    aboutDescription: 'This project aims to help Android users understand different manufacturers\' attitudes towards bootloader unlocking, kernel source availability, and warranty policies. All data is collected and maintained by the community.',
    howToContribute: 'How to Contribute',
    contributeDescription: 'You can contribute by submitting Pull Requests on GitHub to update data, fix errors, or add new manufacturer information.',
    
    seo: {
      title: 'BL List',
      description: 'Comparison of Bootloader unlock, kernel source, and warranty policies across manufacturers.',
      keywords: 'Android, Bootloader, Unlock, Kernel, Warranty, Manufacturer, Comparison',
      ogImage: 'https://a.zli.li/og-image.png',
      twitterCard: 'summary_large_image',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BL List",
        "description": "Comparison of Bootloader unlock, kernel source, and warranty policies across manufacturers.",
        "url": "https://a.zli.li/"
      }
    }
  },
  
  hi: {
    title: 'BL List',
    subtitle: 'निर्माताओं में बूटलोडर अनलॉक, कर्नेल स्रोत और वारंटी नीतियों की तुलना',
    contribute: 'GitHub पर योगदान करें',
    
    overview: 'अवलोकन',
    manufacturers: 'निर्माता',
    about: 'परियोजना के बारे में',
    
    manufacturer: 'निर्माता',
    bootloaderUnlock: 'बूटलोडर अनलॉक',
    kernelSource: 'कर्नेल स्रोत',
    warrantyAfterUnlock: 'अनलॉक के बाद वारंटी',
    unlockMethod: 'अनलॉक विधि',
    notes: 'टिप्पणियां',
    lastUpdated: 'अंतिम अपडेट',
    officialPolicy: 'आधिकारिक नीति',
    unlockWaitTime: 'अनलॉक करने के लिए इंतजार',
    unlockQuota: 'अनलॉक क्वोटा',
    simCardRequirement: 'एसआईएम कारण आवश्यकता',
    accountLimit: 'खाता आवश्यकता',
    regionLimit: 'क्षेत्र सीमा',
    relockSupport: 'रिलॉक समर्थन',
    
    supported: 'समर्थित',
    limited: 'सीमित',
    unsupported: 'असमर्थित',
    unknown: 'अज्ञात',
    open: 'ओपन सोर्स',
    partial: 'आंशिक',
    closed: 'बंद स्रोत',
    maintained: 'बनाए रखा',
    voided: 'रद्द',
    
    viewDetails: 'विवरण देखें',
    visitOfficial: 'आधिकारिक साइट पर जाएं',
    
    communityMaintained: 'समुदाय द्वारा रखरखाव',
    contributorsWelcome: 'योगदानकर्ताओं का स्वागत',
    lastDataUpdate: 'अंतिम डेटा अपडेट',
    
    aboutTitle: 'इस परियोजना के बारे में',
    aboutDescription: 'यह परियोजना एंड्राइड उपयोगकर्ताओं को विभिन्न निर्माताओं के बूटलोडर अनलॉकिंग, कर्नेल स्रोत उपलब्धता और वारंटी नीतियों के प्रति दृष्टिकोण को समझने में मदद करती है।',
    howToContribute: 'योगदान कैसे करें',
    contributeDescription: 'आप डेटा अपडेट करने, त्रुटियों को ठीक करने या नई निर्माता जानकारी जोड़ने के लिए GitHub पर Pull Request सबमिट कर सकते हैं।',
    
    seo: {
      title: 'BL List',
      description: 'निर्माताओं में बूटलोडर अनलॉक, कर्नेल स्रोत और वारंटी नीतियों की तुलना',
      keywords: 'एंड्राइड, बूटलोडर, अनलॉक, कर्नेल, वारंटी, निर्माता, तुलना',
      ogImage: 'https://a.zli.li/og-image.png',
      twitterCard: 'summary_large_image',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BL List",
        "description": "निर्माताओं में बूटलोडर अनलॉक, कर्नेल स्रोत और वारंटी नीतियों की तुलना",
        "url": "https://a.zli.li/"
      }
    }
  }
};
