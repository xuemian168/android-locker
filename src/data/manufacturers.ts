export interface MultiLangField { zh: string; en: string; hi: string; }

export interface Reference {
  url: string;
  label: string;
}

export interface ManufacturerData {
  id: string;
  name: string;
  logo: string;
  bootloaderUnlock: 'supported' | 'limited' | 'unsupported' | 'unknown';
  kernelSource: 'open' | 'partial' | 'closed' | 'unknown';
  warrantyAfterUnlock: 'maintained' | 'voided' | 'partial' | 'unknown';
  unlockMethod: MultiLangField;
  notes: MultiLangField;
  lastUpdated: string;
  officialPolicy: string;
  /** 解锁等待时长，多语对象 */
  unlockWaitTime?: MultiLangField;
  /** 解锁名额/次数限制，多语对象 */
  unlockQuota?: MultiLangField;
  /** SIM 卡要求，多语对象 */
  simCardRequirement?: MultiLangField;
  /** 账号要求，多语对象 */
  accountLimit?: MultiLangField;
  /** 地区限制，多语对象 */
  regionLimit?: MultiLangField;
  /** 回锁支持，多语对象 */
  relockSupport?: MultiLangField;
  references?: Reference[];
}

export const manufacturersData: ManufacturerData[] = [
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: '/logos/xiaomi.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'voided',
    unlockMethod: {
      zh: '官方解锁工具+社区App申请',
      en: 'Official unlock tool + Community App application',
      hi: 'आधिकारिक अनलॉक टूल + कम्युनिटी ऐप आवेदन'
    },
    unlockWaitTime: {
      zh: 'HyperOS: 72 小时；MIUI: 168/360-2880 小时',
      en: 'HyperOS: 72h; MIUI: 168/360-2880h',
      hi: 'HyperOS: 72 घंटे; MIUI: 168/360-2880 घंटे'
    },
    unlockQuota: {
      zh: '每账号每年最多 4 台设备（HyperOS 与 MIUI 合并计算）',
      en: 'Up to 4 devices per account per year (HyperOS & MIUI combined)',
      hi: 'प्रति खाता प्रति वर्ष अधिकतम 4 डिवाइस (HyperOS और MIUI संयुक्त)'
    },
    simCardRequirement: {
      zh: '需要',
      en: 'Required',
      hi: 'आवश्यक'
    },
    accountLimit: {
      zh: '国行需实名认证，社区等级 5 段，答题通过，注册满 180 天',
      en: 'CN models require real-name authentication, community level 5, quiz passed, account registered for 180 days',
      hi: 'चीनी मॉडल के लिए असली नाम सत्यापन, कम्युनिटी लेवल 5, क्विज़ पास, 180 दिन पुराना खाता आवश्यक'
    },
    regionLimit: {
      zh: '国行/非国行政策不同',
      en: 'Different policies for CN/global models',
      hi: 'चीनी/ग्लोबल मॉडल के लिए अलग नीति'
    },
    relockSupport: {
      zh: '支持',
      en: 'Supported',
      hi: 'समर्थित'
    },
    notes: {
      zh: '国行需通过小米社区 App 申请，解锁权限 14 天有效，解锁后主板等部件失保，部分机型不支持解锁，风控严格，违规账号永久封禁。解锁需插入 SIM 卡并绑定账号，等待时长自绑定起算。部分机型未开源或源码不可用。',
      en: 'CN models require application via Mi Community App, unlock permission valid for 14 days, warranty void after unlock, some models not supported, strict risk control, violating accounts permanently banned. SIM card required and binding, wait time starts from binding. Some models not open source or unusable.',
      hi: 'चीनी मॉडल के लिए Mi Community App से आवेदन आवश्यक, 14 दिन के लिए अनलॉक अनुमति, अनलॉक के बाद वारंटी समाप्त, कुछ मॉडल समर्थित नहीं, सख्त जोखिम नियंत्रण, उल्लंघन करने वाले खाते स्थायी रूप से प्रतिबंधित। सिम कार्ड आवश्यक, बाइंडिंग से प्रतीक्षा समय शुरू। कुछ मॉडल ओपन सोर्स नहीं हैं या उपयोग योग्य नहीं हैं।'
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.miui.com/unlock/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' },
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    logo: '/logos/oneplus.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'maintained',
    unlockMethod: {
      zh: 'Fastboot 命令',
      en: 'Fastboot command',
      hi: 'फास्टबूट कमांड'
    },
    unlockWaitTime: {
      zh: '无',
      en: 'None',
      hi: 'अगर'
    },
    simCardRequirement: {
      zh: '不需要',
      en: 'No need',
      hi: 'आवश्यक नहीं'
    },
    relockSupport: {
      zh: '支持',
      en: 'Supported',
      hi: 'समर्थित'
    },
    notes: {
      zh: '无需申请解锁码，无任何解锁限制。解锁后 TEE 功能暂时屏蔽，回锁后恢复（SOTER key 除外）。一加 9 及以前支持自定义信任根，之后机型暂不支持。\n 手机产品获取 ROOT 后，若刷机（官网下载升级工具自行刷机或官方服务中心免费协助刷机）后可恢复系统则享有正常的三包服务；刷机不可以恢复则只享有保修服务，不适用退换机服务。',
      en: 'No unlock code required, no unlock restrictions. TEE function temporarily disabled after unlock, restored after relock (except SOTER key). OnePlus 9 and earlier models support custom trust root, while later models do not. \n After obtaining ROOT, if the phone can be restored after flashing (download the upgrade tool from the official website and flash it yourself or ask the official service center to help you), you can enjoy normal warranty service; if the phone cannot be restored after flashing, you can only enjoy warranty service, not return and exchange service.',
      hi: 'अनलॉक कोड की आवश्यकता नहीं, कोई अनलॉक सीमा नहीं। अनलॉक के बाद TEE कार्य अल्पकालिक रूप से अक्षम हो जाता है, वापसी के बाद पुनर्स्थापित हो जाता है (SOTER कुंजी को छोड़कर)। एक प्लस 9 और पूर्व मॉडल स्वतंत्र विश्वास जड़ का समर्थन करते हैं, जबकि बाद के मॉडल समर्थित नहीं हैं। \n फोन उपयोगकर्ता को अनलॉक करने के बाद यदि फ़ोन को फ़्लश करके फिर से प्रणाली को पुनर्स्थापित किया जा सकता है (ऑफिसियल वेबसाइट से अपग्रेड टूल डाउनलोड करें और आप स्वयं फ़्लश करें या ऑफिसि यल सेवा केंद्र से मदद लें), तो सामान्य वारंटी सेवा का आनंद ले सकते हैं; यदि फ़्लश करने के बाद फ़ोन को पुनर्स्थापित नहीं किया जा सकता है, तो केवल वारंटी सेवा का आनंद ले सकते हैं, वापसी और विनिमय सेवा लागू नहीं होती।'
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.oneplus.com/support',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' },
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'google',
    name: 'Google Pixel',
    logo: '/logos/google.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'maintained',
    unlockMethod: {
      zh: 'Fastboot OEM 解锁',
      en: 'Fastboot OEM unlock',
      hi: 'फास्टबूट OEM अनलॉक'
    },
    unlockWaitTime: {
      zh: '无',
      en: 'None',
      hi: 'अगर'
    },
    unlockQuota: {
      zh: '无',
      en: 'None',
      hi: 'कोई नहीं'
    },
    regionLimit: {
      zh: '美国 Verizon 版本 Pixel 均不支持 OEM 解锁',
      en: 'US Verizon Pixel models do not support OEM unlock',
      hi: 'US Verizon Pixel मॉडल समर्थित नहीं'
    },
    notes: {
      zh: '启用 OEM 解锁功能需已连接到互联网并已签入 Google（即便设备不久前曾连接到互联网，也仍然可能没有签入 Google）。如需强制签入，请在拨号器中输入 *#*#2432546#*#*',
      en: 'OEM unlock requires being connected to the internet and signed in to Google (even if the device was recently connected to the internet, it may still not be signed in to Google). To force sign in, enter *#*#2432546#*#* in the dialer.',
      hi: 'OEM अनलॉक के लिए इंटरनेट से कनेक्ट होना और जीएन में साइन इन करना आवश्यक है (भले ही उपकरण कुछ समय पहले इंटरनेट से कनेक्ट हो चुका हो, यह जीएन में साइन इन नहीं हो सकता हो)। साइन इन करने के लिए डायलर में *#*#2432546#*#* दर्ज करें।'
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://developers.google.com/android',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/logos/samsung.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '下载模式（部分机型）', en: 'Download mode (limited models)', hi: 'डाउनलोड मोड (सीमित मॉडल)' },
    unlockWaitTime: { zh: '无', en: 'None', hi: 'कोई नहीं' },
    unlockQuota: { zh: '', en: '', hi: '' },
    simCardRequirement: { zh: '', en: '', hi: '' },
    accountLimit: { zh: '', en: '', hi: '' },
    regionLimit: { zh: '仅部分地区/机型', en: 'Only some regions/models', hi: 'केवल कुछ क्षेत्र/मॉडल' },
    relockSupport: { zh: '支持', en: 'Supported', hi: 'समर्थित' },
    notes: { zh: '解锁将导致 KNOX 熔断，钱包、健康等功能失效，保修丢失，TEE 功能部分失效。部分机型解锁还将导致相机永久无法工作。美版设备不支持解锁。', en: 'Unlocking will trigger KNOX fuse, wallet, health and other functions will be disabled, warranty void, some TEE functions lost. Some models may lose camera permanently. US models not supported.', hi: 'अनलॉक करने से KNOX फ्यूज ट्रिगर होगा, वॉलेट, स्वास्थ्य आदि कार्य अक्षम होंगे, वारंटी समाप्त, कुछ TEE कार्य खो सकते हैं। कुछ मॉडल में कैमरा स्थायी रूप से काम नहीं करेगा। US मॉडल समर्थित नहीं।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://developer.samsung.com/',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' },
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: '/logos/huawei.png',
    bootloaderUnlock: 'unsupported',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: {
      zh: '无官方方法（已停止）',
      en: 'No official method (discontinued)',
      hi: 'आधिकारिक तरीका नहीं (अधिकृत नहीं)'
    },
    notes: {
      zh: '自 2018 年起停止提供解锁码',
      en: 'Stopped providing unlock codes since 2018',
      hi: '2018 से लेकर अनलॉक कोड प्रदान नहीं कर रहा'
    },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://consumer.huawei.com/en/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' },
      { url: 'https://github.com/openharmony', label: 'GitHub OpenHarmony' }
    ]
  },
  {
    id: 'oppo',
    name: 'OPPO',
    logo: '/logos/oppo.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '深度测试申请', en: 'Deep testing application', hi: 'गहरा जांच आवेदन' },
    unlockWaitTime: { zh: '720 小时（1 个月）', en: '720 hours (1 month)', hi: '720 घंटे (1 महीना)' },
    unlockQuota: { zh: '部分机型每月限额', en: 'Monthly quota for some models', hi: 'कुछ मॉडल के लिए मासिक क्षमता' },
    simCardRequirement: { zh: '需要', en: 'Required', hi: 'आवश्यक' },
    accountLimit: { zh: '需欢太账号，部分机型支持', en: 'Oppo account required, some models supported', hi: 'ओप्पो खाता आवश्यक, कुछ मॉडल समर्थित' },
    regionLimit: { zh: '仅部分地区/机型', en: 'Only some regions/models', hi: 'केवल कुछ क्षेत्र/मॉडल' },
    relockSupport: { zh: '支持', en: 'Supported', hi: 'समर्थित' },
    notes: { zh: '需登录欢太账号申请深度测试，解锁后 TEE 功能暂时屏蔽，回锁后恢复（SOTER key 除外）。ROOT 后如能刷回官方系统则保修正常，否则仅保修不退换。', en: 'Deep testing application required with Oppo account. TEE temporarily disabled after unlock, restored after relock (except SOTER key). If rooted and flashed back to official system, warranty is normal, otherwise only repair, no return.', hi: 'ओप्पो खाता के साथ गहरा जांच आवेदन आवश्यक, अनलॉक के बाद TEE कार्य अल्पकालिक रूप से अक्षम हो जाता है, वापसी के बाद पुनर्स्थापित हो जाता है (SOTER कुंजी को छोड़कर)। रूट के बाद यदि फ़्लश करके फिर से आधिकारिक सिस्टम में फ़्लश किया जा सकता है, तो वारंटी सामान्य है, अन्यथा केवल रिपेयर, वापसी और विनिमय सेवा लागू नहीं होती।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.oppo.com/en/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'vivo',
    name: 'Vivo',
    logo: '/logos/vivo.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '开发者计划（极少数机型）', en: 'Developer program (very few models)', hi: 'डेवलपर प्रोग्राम (बहुत कम मॉडल)' },
    regionLimit: { zh: '极少数机型支持', en: 'Very few models supported', hi: 'बहुत कम मॉडल समर्थित' },
    relockSupport: { zh: '不支持', en: 'Not supported', hi: 'समर्थित नहीं' },
    notes: { zh: '官方未提供解锁，极少数机型可通过特殊渠道申请。大部分机型未开源或源码不全。', en: 'No official unlock, very few models can apply via special channels. Most models not open source or incomplete.', hi: 'आधिकारिक अनलॉक नहीं, बहुत कम मॉडल विशेष चैनल के माध्यम से लागू कर सकते हैं। अधिकतर मॉडल ओपन सोर्स नहीं है या सोर्स कोड अधूरा है।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.vivo.com/en/',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'realme',
    name: 'Realme',
    logo: '/logos/realme.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '深度测试申请', en: 'Deep testing application', hi: 'गहरा जांच आवेदन' },
    unlockWaitTime: { zh: '168 小时（7 天）', en: '168 hours (7 days)', hi: '168 घंटे (7 दिन)' },
    unlockQuota: { zh: 'GT 系列首月 300 名，次月起每月 200 名，其他系列首月 200 名，次月起每月 200 名', en: 'GT series: 300 in first month, 200 per month after; others: 200 in first month, 200 per month after', hi: 'GT श्रृंखला: पहले महीने में 300, अगले महीने से 200 प्रति महीना; अन्य: पहले महीने में 200, अगले महीने से 200 प्रति महीना' },
    simCardRequirement: { zh: '需要', en: 'Required', hi: 'आवश्यक' },
    accountLimit: { zh: '需欢太账号，资格 7 天有效', en: 'Oppo account required, qualification valid for 7 days', hi: 'ओप्पो खाता आवश्यक, 7 दिन के लिए अधिकृत' },
    relockSupport: { zh: '支持', en: 'Supported', hi: 'समर्थित' },
    notes: { zh: '需登录欢太账号申请深度测试，资格 7 天内有效。ROOT 后如能刷回官方系统则保修正常，否则仅保修不退换。解锁后 TEE 功能暂时屏蔽，回锁后恢复（SOTER key 除外）。', en: 'Deep testing application required with Oppo account, valid for 7 days. If rooted and flashed back to official system, warranty is normal, otherwise only repair, no return. TEE temporarily disabled after unlock, restored after relock (except SOTER key).', hi: 'ओप्पो खाता के साथ गहरा जांच आवेदन आवश्यक, 7 दिन के लिए वैध। रूट के बाद यदि फ़्लश करके फिर से आधिकारिक सिस्टम में फ़्लश किया जा सकता है, तो वारंटी सामान्य है, अन्यथा केवल रिपेयर, वापसी और विनिमय सेवा लागू नहीं होती। अनलॉक के बाद TEE कार्य अल्पकालिक रूप से अक्षम हो जाता है, वापसी के बाद पुनर्स्थापित हो जाता है (SOTER कुंजी को छोड़कर)।' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.realme.com/support',
    references: [
      { url: 'https://github.com/melontini/bootloader-unlock-wall-of-shame', label: 'Wall of Shame' }
    ]
  },
  {
    id: 'motorola',
    name: 'Motorola',
    logo: '/logos/motorola.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'voided',
    unlockMethod: { zh: '官方解锁门户', en: 'Official unlock portal', hi: 'आधिकारिक अनलॉक पोर्टल' },
    notes: { zh: '解锁和刷机支持良好', en: 'Good support for unlocking and custom ROMs', hi: 'अनलॉक और कस्टम रोम के लिए अच्छा समर्थन' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://motorola-global-portal.custhelp.com/',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'sony',
    name: 'Sony',
    logo: '/logos/sony.png',
    bootloaderUnlock: 'supported',
    kernelSource: 'open',
    warrantyAfterUnlock: 'voided',
    regionLimit: {
      zh: '日版无法解锁',
      en: 'Japan models do not support unlock',
      hi: 'जापान मॉडल अनलॉक समर्थित नहीं'
    },
    unlockMethod: { zh: '需要申请解锁码', en: 'Unlock code required', hi: 'अनलॉक कोड आवश्यक' },
    notes: { zh: 'AOSP 支持优秀，部分机型解锁后相机功能可能丢失', en: 'Excellent AOSP support, camera features may be lost after unlock', hi: 'अच्छा AOSP समर्थन, अनलॉक के बाद कैमरा सुविधाएं संभवतः खो जाएंगी' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://developer.sony.com/open-source/aosp-on-xperia-open-devices/get-started/unlock-bootloader/how-to-unlock-bootloader',
    references: [
      { url: 'https://android.fandom.com/wiki/Bootloader_unlocking', label: 'Android Wiki' }
    ]
  },
  {
    id: 'htc',
    name: 'HTC',
    logo: '/logos/htc.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'maintained',
    unlockMethod: { zh: '官方解锁门户', en: 'Official unlock portal', hi: 'आधिकारिक अनलॉक पोर्टल' },
    notes: { zh: '解锁需注册 HTCdev 账户, 提交后会在几分钟内将解锁文件发至邮箱', en: 'Unlock requires HTCdev account, unlock file will be sent to email within minutes', hi: 'अनलॉक के लिए HTCdev खाता आवश्यक है, अनलॉक फ़ाइल को ईमेल में कुछ मिनट में भेजा जाएगा' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.htc.com/support',
    references: [
      { url: 'https://xdaforums.com/t/coolpad-toolkit-utility-open-source.3609653/', label: 'XDA Forums' },
      { url: 'https://www.htcdev.com/bootloader%20unlock', label: 'HTCdev' },
      { url: 'https://www.htcdev.com/DevCenter', label: 'HTCdev DevCenter' }
    ]
  },
  {
    id: 'transsion',
    name: 'Transsion',
    logo: '/logos/transsion.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'partial',
    unlockMethod: { zh: '不详', en: 'Unknown', hi: 'अज्ञात' },
    notes: { zh: '不详', en: 'Unknown', hi: 'अज्ञात' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://www.transsion.com/',
    references: [
      { url: 'https://github.com/Transsion-MT6789-Resources', label: 'GitHub Transsion-MT6789-Resources' },
    ]
  },
  {
    id: 'Meizu',
    name: 'Meizu',
    logo: '/logos/meizu.png',
    bootloaderUnlock: 'limited',
    kernelSource: 'partial',
    warrantyAfterUnlock: 'partial',
    unlockMethod: { zh: '不详', en: 'Unknown', hi: 'अज्ञात' },
    notes: { zh: '官方仅支持 root，但是root 后 OTA 功能失效', en: 'Official only supports root, but OTA function is disabled after root', hi: 'आधिकारिक केवल रूट का समर्थन करता है, लेकिन रूट के बाद OTA कार्य अक्षम हो जाता है' },
    lastUpdated: '2025-06-25',
    officialPolicy: 'https://mroot.flyme.cn/',
    references: [
      { url: 'https://github.com/meizuosc', label: 'GitHub meizuosc' },
      { url: 'https://firmwarespro.com/bootloader/meizu-16-detail', label: 'Firmwarespro' },
      { url: 'https://www.meizu.com/support/unlock', label: 'Meizu Support' },
    ]
  },
  {
    "id": "Asus",
    "name": "Asus",
    "logo": "/logos/asus.png",
    "bootloaderUnlock": "limited",
    "kernelSource": "partial",
    "warrantyAfterUnlock": "voided",
    "unlockMethod": {
      "zh": "部分设备可通过官方解锁工具解锁",
      "en": "Official unlock tool available for some devices",
      "hi": "कुछ उपकरणों के लिए आधिकारिक अनलॉक टूल उपलब्ध है"
    },
    "notes": {
      "zh": "自 2023 年起，华硕移除了官方解锁工具，部分设备无法解锁",
      "en": "Since 2023, Asus has removed the official unlock tool; some devices cannot be unlocked",
      "hi": "2023 से, Asus ने आधिकारिक अनलॉक टूल हटा दिया है; कुछ उपकरणों को अनलॉक नहीं किया जा सकता"
    },
    "lastUpdated": "2025-06-25",
    "officialPolicy": "https://zentalk.asus.com/t5/rog-phone-5/official-bootloader-unlock-os-rollback-support/td-p/254324",
    "references": [
      {
        "url": "https://www.androidpolice.com/thread/asus-wont-support-bootloader-unlocking-anymore/",
        "label": "Android Police"
      },
      {
        "url": "https://www.xda-developers.com/asus-zenfone-9-bootloader-unlock-tool-kernel-sources-firmware/",
        "label": "XDA Developers"
      },
      {
        "url": "https://github.com/asus-development",
        "label": "Asus Development on GitHub"
      }
    ]
  },
]

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'supported':
    case 'open':
    case 'maintained':
      return 'bg-android-500 text-white';
    case 'limited':
    case 'partial':
      return 'bg-yellow-500 text-white';
    case 'unsupported':
    case 'closed':
    case 'voided':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-400 text-white';
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'supported':
    case 'open':
    case 'maintained':
      return '✅';
    case 'limited':
    case 'partial':
      return '⚠️';
    case 'unsupported':
    case 'closed':
    case 'voided':
      return '❌';
    default:
      return '❓';
  }
};
