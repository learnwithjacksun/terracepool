import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20 md:pb-28">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-14 md:mb-20 text-center">
          <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
            <Sparkles size={14} /> {t('prices.hero.label')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text mb-4 md:mb-6 leading-[0.95]">
            {t('prices.hero.title_1')} <span className="font-serif italic gold-text">{t('prices.hero.title_2')}</span>
          </h1>
          <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-2xl mx-auto">
            {t('prices.hero.desc')}
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Terrace Pool */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden warm-shadow group hover:gold-border transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[60px]"></div>
              <div className="relative z-10 flex-1">
                <h3 className="text-[10px] md:text-sm font-label uppercase tracking-widest text-gold mb-1.5 md:mb-2">{t('prices.cards.terrace.title')}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-black text-warm-text">{t('prices.cards.terrace.price')}</span>
                  <p className="text-warm-muted text-xs md:text-sm mt-1">{t('prices.cards.terrace.price_label')}</p>
                </div>
                <p className="text-warm-muted text-sm leading-relaxed mb-6 md:mb-8 min-h-[60px]">
                  {t('prices.cards.terrace.desc')}
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-8">
                  {(t('prices.cards.terrace.features', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-warm-text-light">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-teal-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 mt-auto pt-4 md:pt-6">
                  <Link to="/contact" className="gold-gradient text-white w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2">
                    {t('prices.cards.get_quote')} <ArrowRight size={18} />
                  </Link>
              </div>
            </div>

            {/* Pool Renovation - Featured */}
            <div className="bg-warm-text rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden warm-shadow-lg md:scale-[1.02] flex flex-col border border-gold/20">
              <div className="absolute top-0 right-0 w-56 h-56 bg-gold/10 rounded-full blur-[80px]"></div>
              <div className="absolute top-4 right-4 bg-gold text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 md:px-3 py-1 rounded-full">{t('prices.cards.popular')}</div>
              <div className="relative z-10 flex-1">
                <h3 className="text-[10px] md:text-sm font-label uppercase tracking-widest text-gold-light mb-1.5 md:mb-2">{t('prices.cards.renovation.title')}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-black text-cream">{t('prices.cards.renovation.price')}</span>
                  <p className="text-cream-darker/60 text-xs md:text-sm mt-1">{t('prices.cards.renovation.price_label')}</p>
                </div>
                <p className="text-cream-darker/60 text-sm leading-relaxed mb-6 md:mb-8 min-h-[60px]">
                  {t('prices.cards.renovation.desc')}
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-8">
                  {(t('prices.cards.renovation.features', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start md:items-center gap-3 text-sm text-cream-darker/70">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-gold-light shrink-0 mt-0.5 md:mt-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 mt-auto pt-4 md:pt-6">
                  <Link to="/contact" className="bg-cream text-gold-dark w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-white hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    {t('prices.cards.get_quote')} <ArrowRight size={18} />
                  </Link>
              </div>
            </div>

            {/* Custom / Premium */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden warm-shadow group hover:gold-border transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[60px]"></div>
              <div className="relative z-10 flex-1">
                <h3 className="text-[10px] md:text-sm font-label uppercase tracking-widest text-gold mb-1.5 md:mb-2">{t('prices.cards.custom.title')}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl font-black text-warm-text">{t('prices.cards.custom.price')}</span>
                  <p className="text-warm-muted text-xs md:text-sm mt-1">{t('prices.cards.custom.price_label')}</p>
                </div>
                <p className="text-warm-muted text-sm leading-relaxed mb-6 md:mb-8 min-h-[60px]">
                  {t('prices.cards.custom.desc')}
                </p>
                <ul className="space-y-2.5 md:space-y-3 mb-8">
                  {(t('prices.cards.custom.features', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-warm-text-light">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-teal-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 mt-auto pt-4 md:pt-6">
                  <Link to="/contact" className="bg-warm-text text-cream w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2">
                    {t('prices.cards.discuss')} <ArrowRight size={18} />
                  </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="max-w-3xl mx-auto px-6 md:px-8 mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 warm-shadow gold-border">
            <h3 className="text-lg md:text-xl font-bold text-warm-text mb-3 md:mb-4">{t('prices.note.title')}</h3>
            <p className="text-warm-muted text-sm leading-relaxed mb-5 md:mb-6">
              {t('prices.note.desc')}
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-gold font-bold text-sm hover:gap-3 transition-all">
              {t('prices.note.link')} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricesPage;
