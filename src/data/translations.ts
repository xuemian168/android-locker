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
  
  // Announcement
  announcement: string;
  
  // About section
  aboutTitle: string;
  aboutDescription: string;
  howToContribute: string;
  contributeDescription: string;
  
  // External Link Warning
  externalLinkWarning: {
    title: string;
    description: string;
    urlLabel: string;
    confirmButton: string;
    cancelButton: string;
    disclaimer: string;
    showFullUrl: string;
    hideFullUrl: string;
    copyUrl: string;
    urlCopied: string;
  };
  
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
    
    announcement: '刷机有风险，刷机请注意备份数据',
    
    aboutTitle: '关于本项目',
    aboutDescription: '这个项目旨在帮助Android用户了解不同手机厂商对于Bootloader解锁、内核开源和保修政策的态度。所有数据由社区收集和维护，欢迎大家贡献。',
    howToContribute: '如何贡献',
    contributeDescription: '您可以通过GitHub提交Pull Request来更新数据、修复错误或添加新的手机厂商信息。',
    
    externalLinkWarning: {
      title: '外部链接提醒',
      description: '您即将跳转到外部网站，该网站内容与本站无关。',
      urlLabel: '目标网址：',
      confirmButton: '确认跳转',
      cancelButton: '取消',
      disclaimer: '请确保您信任该网站后再继续。',
      showFullUrl: '显示完整网址',
      hideFullUrl: '收起网址',
      copyUrl: '复制网址',
      urlCopied: '网址已复制'
    },
    
    seo: {
      title: 'BL List',
      description: '各大手机厂商的Bootloader解锁、内核开源、保修政策对比。刷机有风险，刷机请注意备份数据。',
      keywords: 'Android, Bootloader, Unlock, Kernel, Warranty, Manufacturer, Comparison',
      ogImage: 'https://a.zli.li/og-image.png',
      twitterCard: 'summary_large_image',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Android Manufacturer Bootloader Unlock Status",
        "description": "Comparison of Bootloader unlock, kernel source, and warranty policies across Android manufacturers. 刷机有风险，刷机请注意备份数据。",
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
    
    announcement: 'Flashing is risky. Please back up your data before proceeding',
    
    aboutTitle: 'About This Project',
    aboutDescription: 'This project aims to help Android users understand different manufacturers\' attitudes towards bootloader unlocking, kernel source availability, and warranty policies. All data is collected and maintained by the community.',
    howToContribute: 'How to Contribute',
    contributeDescription: 'You can contribute by submitting Pull Requests on GitHub to update data, fix errors, or add new manufacturer information.',
    
    externalLinkWarning: {
      title: 'External Link Warning',
      description: 'You are about to visit an external website. The content of this site is not related to our site.',
      urlLabel: 'Target URL:',
      confirmButton: 'Continue',
      cancelButton: 'Cancel',
      disclaimer: 'Please ensure you trust this website before proceeding.',
      showFullUrl: 'Show Full URL',
      hideFullUrl: 'Hide URL',
      copyUrl: 'Copy URL',
      urlCopied: 'URL Copied'
    },
    
    seo: {
      title: 'BL List',
      description: 'Comparison of Bootloader unlock, kernel source, and warranty policies across manufacturers. Flashing is risky. Please back up your data before proceeding.',
      keywords: 'Android, Bootloader, Unlock, Kernel, Warranty, Manufacturer, Comparison',
      ogImage: 'https://a.zli.li/og-image.png',
      twitterCard: 'summary_large_image',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BL List",
        "description": "Comparison of Bootloader unlock, kernel source, and warranty policies across manufacturers. Flashing is risky. Please back up your data before proceeding.",
        "url": "https://a.zli.li/"
      }
    }
  },
  
  hi: {
    title: 'BL List',
    subtitle: 'मैन्युफैक्चरर्स में बूटलोडर अनलॉक, कर्नेल सोर्स और वारंटी नीतियों की तुलना',
    contribute: 'GitHub पर योगदान करें',
    
    overview: 'समीक्षा',
    manufacturers: 'मैन्युफैक्चरर्स',
    about: 'परिचय',
    
    manufacturer: 'मैन्युफैक्चरर',
    bootloaderUnlock: 'बूटलोडर अनलॉक',
    kernelSource: 'कर्नेल सोर्स',
    warrantyAfterUnlock: 'अनलॉक के बाद वारंटी',
    unlockMethod: 'अनलॉक विधि',
    notes: 'टिप्पणियां',
    lastUpdated: 'अंतिम अपडेट',
    officialPolicy: 'आधिकारिक नीति',
    unlockWaitTime: 'अनलॉक करने के लिए इंतजार का समय',
    unlockQuota: 'अनलॉक कोटा',
    simCardRequirement: 'सिम कार्ड की आवश्यकता',
    accountLimit: 'खाते की सीमा',
    regionLimit: 'क्षेत्र सीमा',
    relockSupport: 'रिलॉक सहायता',
    
    supported: 'सहयोग किया गया',
    limited: 'सीमित',
    unsupported: 'असमर्थित',
    unknown: 'अज्ञात',
    open: 'ओपन सोर्स',
    partial: 'आंशिक',
    closed: 'बंद रखा',
    maintained: 'बनाए रखा',
    voided: 'रद्द',
    
    viewDetails: 'विवरण देखें',
    visitOfficial: 'आधिकारिक वेबसाइट पर जाएं',
    
    communityMaintained: 'समुदाय द्वारा संचालित',
    contributorsWelcome: 'योगदानकर्ताओं का स्वागत',
    lastDataUpdate: 'अंतिम डेटा का अपडेट',
    
    announcement: 'फ्लैशिंग करना खतरनाक हो सकता है, कृपया फ्लैश करने से पहले अपने डेटा का बैकअप जरूर लें',
    
    aboutTitle: 'इस परियोजना के बारे में',
    aboutDescription: 'यह परियोजना एंड्राइड उपयोगकर्ताओं को विभिन्न मैन्युफैक्चरर्स के बूटलोडर अनलॉकिंग, कर्नेल सोर्स उपलब्धता और वारंटी नीतियों के प्रति दृष्टिकोण को समझने में मदद करती है।',
    howToContribute: 'योगदान कैसे करें',
    contributeDescription: 'आप डेटा अपडेट करने, गलतियाँ सुधारने, या नए मैन्युफैक्चरर्स की जानकारी जोड़ने के लिए GitHub पर Pull Request भेज सकते हैं।',
    
    externalLinkWarning: {
      title: 'बाहरी लिंक चेतावनी',
      description: 'आप एक बाहरी वेबसाइट पर जाने वाले हैं। इस साइट की सामग्री हमारी साइट से संबंधित नहीं है।',
      urlLabel: 'लक्ष्य URL:',
      confirmButton: 'जारी रखें',
      cancelButton: 'रद्द करें',
      disclaimer: 'कृपया आगे बढ़ने से पहले सुनिश्चित करें कि आप इस वेबसाइट पर भरोसा करते हैं।',
      showFullUrl: 'पूरा URL दिखाएं',
      hideFullUrl: 'URL छुपाएं',
      copyUrl: 'URL कॉपी करें',
      urlCopied: 'URL कॉपी किया गया'
    },
    
    seo: {
      title: 'BL List',
      description: 'मैन्युफैक्चरर में बूटलोडर अनलॉक, कर्नेल सोर्स और वारंटी नीतियों की तुलना। फ्लैशिंग जोखिम भरा है। कृपया फ्लैश करने से पहले अपने डेटा का बैकअप लें',
      keywords: 'एंड्राइड, बूटलोडर, अनलॉक, कर्नेल, वारंटी, मैन्युफैक्चरर, तुलना',
      ogImage: 'https://a.zli.li/og-image.png',
      twitterCard: 'summary_large_image',
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BL List",
        "description": "मैन्युफैक्चरर्स में बूटलोडर अनलॉक, कर्नेल सोर्स और वारंटी नीतियों की तुलना। फ्लैशिंग जोखिम भरा है। कृपया फ्लैश करने से पहले अपने डेटा का बैकअप लें",
        "url": "https://a.zli.li/"
      }
    }
  }

};
