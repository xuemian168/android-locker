import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Star, GitFork, Users, Calendar } from 'lucide-react';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { ManufacturerCard } from '@/components/ManufacturerCard';
import { StatsOverview } from '@/components/StatsOverview';
import { manufacturersData } from '@/data/manufacturers';
import { translations, Language } from '@/data/translations';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

interface IndexProps {
  forcedLanguage?: Language;
}

const Index: React.FC<IndexProps> = ({ forcedLanguage }) => {
  const params = useParams();
  const paramLang = params.lang as Language | undefined;
  const initialLang = forcedLanguage || paramLang || 'zh';
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLang);
  const safeTranslations = translations[currentLanguage] || translations['zh'];
  const t = { ...safeTranslations, lang: currentLanguage };
  const seo = t.seo || {};
  const hreflangs = [
    { lang: 'zh', url: 'https://a.zli.li/zh/' },
    { lang: 'en', url: 'https://a.zli.li/en/' },
    { lang: 'hi', url: 'https://a.zli.li/hi/' }
  ];

  return (
    <>
      <Helmet>
        <html lang={currentLanguage} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        <meta name="twitter:card" content={seo.twitterCard || 'summary'} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}
        {hreflangs.map(h => (
          <link rel="alternate" hrefLang={h.lang} href={h.url} key={h.lang} />
        ))}
        {seo.jsonLd && (
          <script type="application/ld+json">
            {JSON.stringify(seo.jsonLd)}
          </script>
        )}
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-android-50 to-white">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-android-200/50 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">[LOGO预留]</div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">
                    {t.title}
                  </h1>
                  <p className="text-sm text-muted-foreground hidden sm:block">
                    {t.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <LanguageSwitch 
                  currentLanguage={currentLanguage}
                  onLanguageChange={setCurrentLanguage}
                />
                <Button 
                  asChild
                  className="bg-android-gradient hover:bg-android-gradient-dark transition-all duration-300"
                >
                  <a 
                    href="https://github.com/xuemian168/android-locker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.contribute}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12 animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                {t.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-android-100 text-android-800">
                  <Users className="h-4 w-4 mr-2" />
                  {t.communityMaintained}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
                  <Star className="h-4 w-4 mr-2" />
                  {t.contributorsWelcome}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-100 text-purple-800">
                  <Calendar className="h-4 w-4 mr-2" />
                  {t.lastDataUpdate}: 2025-06-25
                </Badge>
              </div>
            </div>
          </section>

          {/* Stats Overview */}
          <StatsOverview manufacturers={manufacturersData} translations={t} />

          {/* Manufacturers Grid */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold gradient-text">
                {t.manufacturers}
              </h3>
              <div className="text-sm text-muted-foreground">
                {manufacturersData.length} {(t.manufacturers || '').toLowerCase()}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {manufacturersData.map((manufacturer, index) => (
                <ManufacturerCard
                  key={manufacturer.id}
                  manufacturer={manufacturer}
                  translations={t}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-android-50 to-blue-50 border-android-200/50">
              <CardHeader>
                <CardTitle className="gradient-text text-xl">
                  {t.aboutTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {t.aboutDescription}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-android-700">
                    {t.howToContribute}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {t.contributeDescription}
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button 
                    asChild
                    variant="outline"
                    className="border-android-300 hover:bg-android-50"
                  >
                    <a 
                      href="https://github.com/xuemian168/android-locker" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GitFork className="h-4 w-4" />
                      GitHub Repository
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-android-200/50 bg-white/50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {t.communityMaintained} • {t.contributorsWelcome}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.lastDataUpdate}: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
