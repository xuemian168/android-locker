import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

// shacdn SVG装饰
const ShaCdnSVG = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6">
    <circle cx="60" cy="60" r="58" stroke="#43A047" strokeWidth="4" fill="#E8F5E8" />
    <path d="M40 70 Q60 90 80 70" stroke="#8BC34A" strokeWidth="4" fill="none" />
    <circle cx="50" cy="55" r="5" fill="#43A047" />
    <circle cx="70" cy="55" r="5" fill="#43A047" />
  </svg>
);

const langMap = {
  zh: {
    title: '404 未找到',
    desc: '抱歉，您访问的页面不存在。',
    btn: '返回首页'
  },
  en: {
    title: '404 Not Found',
    desc: 'Sorry, the page you visited does not exist.',
    btn: 'Return to Home'
  },
  hi: {
    title: '404 नहीं मिला',
    desc: 'माफ़ कीजिए, आप जिस पृष्ठ को ढूंढ रहे हैं वह मौजूद नहीं है।',
    btn: 'मुख्य पृष्ठ पर लौटें'
  }
};

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // 根据路由前缀自动切换语言
  let lang: 'zh' | 'en' | 'hi' = 'zh';
  if (location.pathname.startsWith('/en')) lang = 'en';
  if (location.pathname.startsWith('/hi')) lang = 'hi';
  const t = langMap[lang];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-android-50 to-white">
      <motion.div
        className="bg-white/90 rounded-lg shadow-lg p-10 max-w-md w-full text-center border border-android-200/50"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <ShaCdnSVG />
        <motion.h1
          className="text-5xl font-bold mb-4 gradient-text"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {t.desc}
        </motion.p>
        <motion.button
          className="bg-android-gradient hover:bg-android-gradient-dark text-white font-semibold px-6 py-2 rounded shadow transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(lang === 'zh' ? '/zh/' : lang === 'en' ? '/en/' : '/hi/')}
        >
          {t.btn}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
