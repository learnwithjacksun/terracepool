import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, ArrowRight, MapPin, Gauge, Ruler } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InstallationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <header className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-24 pb-16">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPiBc5DLQf8NcV32AYqT3IKStIZu_ni5FXd38tMw3CWVKBuX8h9_qqwtHhTluC2CTmxfN0sdTKadL8n3XB2nZ5a8Zt-wg32ImXXT0jnK1FHWyOWX_ICfBMc7C6bKYlc-bgkEXQZlgZb7Wv_LV47S1acoxn0hCPNyULRBHFcXoBa8ZUXo6bPdZXUTnka0BjPlqNinOIrrgY42rlupwBM0taLjtBdm-C_SzKvYQPgc9u3QQNHOfa5jdd1qB58ONhaPyiWgl0JSWpGJ-" alt="Terrace pool overlooking the Mediterranean" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-cream/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-3 md:px-4 py-1.5 text-gold text-[9px] md:text-xs font-label tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8">
                <Sparkles size={12} className="md:w-[14px] md:h-[14px]" /> {t('terrace_pools.hero.label')}
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-warm-text tracking-tighter leading-[0.9] mb-6 md:mb-8">
                {t('terrace_pools.hero.title_1')}<br />
                <span className="font-serif italic gold-text">{t('terrace_pools.hero.title_2')}</span>
              </h1>
              <p className="text-base md:text-xl text-warm-text-light max-w-lg mb-8 md:mb-10 leading-relaxed md:leading-snug">
                {t('terrace_pools.hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/contact" className="gold-gradient text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base hover:translate-y-[-2px] transition-all duration-300 gold-glow flex items-center justify-center gap-2 w-full sm:w-auto">
                  {t('terrace_pools.hero.btn')} <ArrowRight size={18} />
                </Link>
                <Link to="/pool-tech" className="bg-white border border-warm-border text-warm-text px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base hover:border-gold/30 transition-all duration-300 text-center w-full sm:w-auto">
                  {t('terrace_pools.hero.tech_btn')}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-cream to-transparent"></div>
        </header>

        {/* Key Advantages */}
        <section className="py-16 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-gold text-xs font-label tracking-widest uppercase block mb-3 md:mb-4">{t('terrace_pools.advantages.label')}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
              {t('terrace_pools.advantages.title_1')} <span className="font-serif italic gold-text">{t('terrace_pools.advantages.title_2')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Ruler, title: t('terrace_pools.advantages.items.tailored.title'), desc: t('terrace_pools.advantages.items.tailored.desc') },
              { icon: ShieldCheck, title: t('terrace_pools.advantages.items.warranty.title'), desc: t('terrace_pools.advantages.items.warranty.desc') },
              { icon: Gauge, title: t('terrace_pools.advantages.items.lead_times.title'), desc: t('terrace_pools.advantages.items.lead_times.desc') },
              { icon: MapPin, title: t('terrace_pools.advantages.items.local.title'), desc: t('terrace_pools.advantages.items.local.desc') },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 group hover:gold-border transition-all duration-500 warm-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[60px] group-hover:bg-gold/6 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mb-5 md:mb-6">
                    <item.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-warm-text mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Build Process */}
        <section className="py-16 md:py-28 bg-milk">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-gold text-xs font-label tracking-widest uppercase block mb-3 md:mb-4">{t('terrace_pools.process.label')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
                {t('terrace_pools.process.title_1')} <span className="font-serif italic gold-text">{t('terrace_pools.process.title_2')}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { id: '01', title: t('landing.process.steps.1.title'), desc: t('terrace_pools.process.steps.1') },
                { id: '02', title: t('landing.process.steps.2.title'), desc: t('terrace_pools.process.steps.2') },
                { id: '03', title: t('landing.process.steps.3.title'), desc: t('terrace_pools.process.steps.3') },
                { id: '04', title: t('landing.process.steps.4.title'), desc: t('terrace_pools.process.steps.4') },
                { id: '05', title: t('landing.process.steps.5.title'), desc: t('terrace_pools.process.steps.5') },
                { id: '06', title: t('landing.process.steps.6.title'), desc: t('terrace_pools.process.steps.6') },
              ].map(step => (
                <div key={step.id} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-7 group hover:gold-border transition-all duration-500 warm-shadow">
                  <span className="text-4xl md:text-5xl font-black text-cream-darker group-hover:gold-text transition-all duration-300 block mb-3 md:mb-4">{step.id}</span>
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-warm-text">{step.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 md:mt-12 text-center">
              <Link to="/contact" className="gold-gradient text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                {t('terrace_pools.process.journey_btn')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Installations */}
        <section className="py-16 md:py-28 bg-milk">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-10 md:mb-16">
              <span className="text-gold text-xs font-label tracking-widest uppercase block mb-4">{t('landing.installations.label')}</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
                {t('landing.installations.title_1')} <span className="font-serif italic gold-text">{t('landing.installations.title_2')}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                { slug: 'ojen-marbella', title: t('landing.installations.projects.1.title'), desc: t('landing.installations.projects.1.desc'), img: 'https://terracepool.com/wp-content/uploads/2025/07/Roof-Terrace-Pool.webp' },
                { slug: 'la-quinta-marbella', title: t('landing.installations.projects.2.title'), desc: t('landing.installations.projects.2.desc'), img: 'https://terracepool.com/wp-content/uploads/2025/07/Plunge-pool-Marbella-e1752060744592.jpg' },
                { slug: 'el-higueron-fuengirola', title: t('landing.installations.projects.3.title'), desc: t('landing.installations.projects.3.desc'), img: 'https://terracepool.com/wp-content/uploads/2021/03/Terrace-pool-Fuengirola.jpg' },
              ].map((project, i) => (
                <Link key={i} to={`/portfolio/${project.slug}`} className="group cursor-pointer block">
                  <div className="relative h-[220px] md:h-[300px] rounded-2xl md:rounded-3xl overflow-hidden warm-shadow mb-4 md:mb-5">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-warm-text mb-1 md:mb-2">{project.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{project.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="gold-gradient rounded-2xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden warm-shadow-lg animate-gradient-shift text-center">
            <div className="relative z-10 space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white">{t('terrace_pools.cta.title_1')} <span className="font-serif italic">{t('terrace_pools.cta.title_2')}</span></h2>
              <p className="text-white/75 text-sm md:text-lg max-w-xl mx-auto">{t('terrace_pools.cta.desc')}</p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-gold-dark px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-cream hover:translate-y-[-2px] transition-all duration-300 w-full sm:w-auto">
                {t('terrace_pools.cta.btn')} <ArrowRight size={20} className="hidden sm:block" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InstallationsPage;
