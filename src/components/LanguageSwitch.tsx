import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { Language } from '@/data/translations';

interface LanguageSwitchProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languageNames: Record<Language, string> = {
  zh: '中文',
  en: 'English',
  hi: 'हिन्दी'
};

const languageFlags: Record<Language, string> = {
  zh: '🇨🇳',
  en: '🇺🇸',
  hi: '🇮🇳'
};

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 计算当前路径去除语言前缀
  const getBasePath = () => {
    const path = location.pathname;
    if (path.startsWith('/zh/')) return path.replace(/^\/zh/, '');
    if (path.startsWith('/en/')) return path.replace(/^\/en/, '');
    if (path.startsWith('/hi/')) return path.replace(/^\/hi/, '');
    return path;
  };

  const handleLanguageChange = (lang: Language) => {
    // 跳转到对应语言前缀路径
    const base = getBasePath();
    navigate(`/${lang}${base}`);
    onLanguageChange(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languageFlags[currentLanguage]} {languageNames[currentLanguage]}
          </span>
          <span className="sm:hidden">
            {languageFlags[currentLanguage]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white z-50">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as Language)}
            className={`cursor-pointer gap-2 ${
              currentLanguage === code ? 'bg-android-50' : ''
            }`}
          >
            <span>{languageFlags[code as Language]}</span>
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
