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

        {/* Pricing Card */}
        <section className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden warm-shadow border border-gold/10 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-sm font-label uppercase tracking-widest text-gold mb-3">{t('prices.card.title')}</h3>
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-black text-warm-text block">{t('prices.card.price')}</span>
                  <p className="text-warm-muted text-sm md:text-base mt-2">{t('prices.card.price_label')}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {(t('prices.card.features', { returnObjects: true }) as string[]).map((item, i) => {
                    const isNotIncluded = item.toLowerCase().includes('not included');
                    const isAvailable = item.toLowerCase().includes('available');

                    return (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-warm-text-light">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isNotIncluded ? 'bg-red-50 text-red-400' :
                            isAvailable ? 'bg-blue-50 text-blue-400' : 'bg-teal-50 text-teal-500'
                          }`}>
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden warm-shadow-sm border border-warm-border/50">
                  <img src="https://terracepool.com/wp-content/uploads/2025/07/Terrace-Pool-Supplier-768x432.jpg" alt="Terrace Pool" className="w-full h-48 md:h-64 object-cover" />
                </div>

                <div className="bg-cream-dark/30 rounded-2xl p-6 border border-warm-border/20">
                  <p className="text-sm text-warm-text-light italic leading-relaxed mb-6">
                    {t('prices.card.cta')}
                  </p>
                  <Link to="/contact" className="gold-gradient text-white w-full py-4 rounded-2xl font-bold text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2">
                    {t('nav.contact_us')} <ArrowRight size={20} />
                  </Link>
                </div>
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
