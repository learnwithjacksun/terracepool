import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20 md:pb-28">
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
              <Sparkles size={14} /> {t('portfolio.hero.label')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-warm-text leading-[0.9] mb-4 md:mb-6">
              {t('portfolio.hero.title_1')}<br />
              <span className="font-serif italic gold-text">{t('portfolio.hero.title_2')}</span>
            </h1>
            <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-lg">
              {t('portfolio.hero.desc')}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-dark aspect-[4/3] md:aspect-auto md:h-[550px] cursor-pointer warm-shadow">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPiBc5DLQf8NcV32AYqT3IKStIZu_ni5FXd38tMw3CWVKBuX8h9_qqwtHhTluC2CTmxfN0sdTKadL8n3XB2nZ5a8Zt-wg32ImXXT0jnK1FHWyOWX_ICfBMc7C6bKYlc-bgkEXQZlgZb7Wv_LV47S1acoxn0hCPNyULRBHFcXoBa8ZUXo6bPdZXUTnka0BjPlqNinOIrrgY42rlupwBM0taLjtBdm-C_SzKvYQPgc9u3QQNHOfa5jdd1qB58ONhaPyiWgl0JSWpGJ-" alt={t('portfolio.projects.items.1.title')} />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-text/80 via-transparent to-transparent opacity-80 md:opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-gold-light text-[9px] md:text-[10px] font-label tracking-[0.2em] uppercase mb-1.5 md:mb-2 block">{t('portfolio.projects.labels.terrace_pool')}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{t('portfolio.projects.items.1.title')}</h3>
                    <p className="text-white/80 md:text-white/70 flex items-center gap-1.5 text-xs md:text-sm"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> {t('portfolio.projects.items.1.location')}</p>
                  </div>
                  <div className="gold-gradient w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-white md:scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight size={20} className="md:w-[22px] md:h-[22px]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-dark aspect-square md:aspect-auto md:h-[550px] cursor-pointer warm-shadow">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrAroQA3MX2ZQG88qEbPhjz2QWzzSw2B3uKHY0zDuo9NaM4Yekk7FJe9Hlqk8r8aL1OPCG8bRz0gBatod0DvQSdlj8UqU-A8XZ9FqNzjkr1HPwitU8EyqxRGKBEPCZnkelPjOsR4tUTZEG8whjQ5KzL9eRaXZPTIRC_fiCMfAE6C89d5MSV_0qARoPDoiDiTZ1THxnCG247MBL76bTciWqfSzav4LMCOCaNXIk7FmiYpwz-0z9H5Y2ldy1FFP_zSX_cJsIaaA0i6Ab" alt={t('portfolio.projects.items.2.title')} />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-text/80 via-transparent to-transparent opacity-80 md:opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-gold-light text-[9px] md:text-[10px] font-label tracking-[0.2em] uppercase mb-1.5 md:mb-2 block">{t('portfolio.projects.labels.terrace_pool')}</span>
                        <h3 className="text-xl font-bold text-white mb-1">{t('portfolio.projects.items.2.title')}</h3>
                        <p className="text-white/80 md:text-white/70 flex items-center gap-1.5 text-xs md:text-sm"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> {t('portfolio.projects.items.2.location')}</p>
                    </div>
                    <div className="gold-gradient w-8 h-8 rounded-full flex items-center justify-center text-white md:hidden transition-transform duration-300">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-dark aspect-square md:aspect-auto md:h-[350px] cursor-pointer warm-shadow">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbO-dtEhM8elQwCEt1KayoSoE2xX43ZvDBXgqp5lCT3r6_sYEsUqX-ErjJgzC0SPPM8JBgz6XtYXMEDkBtkGbBxVRzeEd9Ppjty8uD6mMWNXZHqU9Xo2K3SrYLJgCrvaYfWO0OtOA2P0qDwldna60oUkq6Fm7ImcqqB91b2nIbZAj-UExlQvYflXnF1nGO8yQzDXSh26gFz4KijUQlWkUAzslB23AUrflt7GiL8Wiih41orAPBiUmnUK6AmsAUTR1WzZH5woUHvv3H" alt={t('portfolio.projects.items.3.title')} />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-text/80 via-transparent to-transparent opacity-80 md:opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-gold-light text-[9px] md:text-[10px] font-label tracking-[0.2em] uppercase mb-1.5 md:mb-2 block">{t('portfolio.projects.labels.terrace_pool')}</span>
                        <h3 className="text-xl font-bold text-white mb-1">{t('portfolio.projects.items.3.title')}</h3>
                        <p className="text-white/80 md:text-white/70 flex items-center gap-1.5 text-xs md:text-sm"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> {t('portfolio.projects.items.3.location')}</p>
                    </div>
                    <div className="gold-gradient w-8 h-8 rounded-full flex items-center justify-center text-white md:hidden transition-transform duration-300">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-dark aspect-[4/3] md:aspect-auto md:h-[350px] cursor-pointer warm-shadow">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4V1ZmbVpVmo_xwgWW_xZWN7NQDvfo6yaT_bs5YpYhHlM0rndH6NpQ_MsB0_NuuVSR7uNDGEc3ahUgdvCjBCZb07lRBgml9GbUogaHq-TBEl4tiYHye5lHecWxILeiJCrPGQdPJUoK1iXtke-JPI8YQrDHw5WAr_QdQsWMqpY29BD1MzBYApYHe4xZrzMC0BYqM8_uRjLWLoqU98kM24cmsgY6MaK7ObfCNy_AYrO1obke45v0ytiD3onQaIqORoMslqFyv-jW0Nn0" alt={t('portfolio.projects.items.4.title')} />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-text/80 via-transparent to-transparent opacity-80 md:opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-gold-light text-[9px] md:text-[10px] font-label tracking-[0.2em] uppercase mb-1.5 md:mb-2 block">{t('portfolio.projects.labels.renovation')}</span>
                        <h3 className="text-2xl font-bold text-white mb-1">{t('portfolio.projects.items.4.title')}</h3>
                        <p className="text-white/80 md:text-white/70 flex items-center gap-1.5 text-xs md:text-sm"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> {t('portfolio.projects.items.4.location')}</p>
                    </div>
                    <div className="gold-gradient w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-white md:scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={20} className="md:w-[22px] md:h-[22px]" />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Link to="/contact" className="gold-gradient text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              {t('portfolio.cta_btn')} <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
