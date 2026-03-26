import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Gauge, ShieldCheck, Award, ArrowRight, Droplets, Sparkles, MapPin, Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioProjects } from '../data/portfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden hide-scrollbar">
        <div className="absolute inset-0 z-0">
          <img
            alt="Terrace pool overlooking Mediterranean"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDscqoZ_XZSHZ9SDsJH0sNCC0noTXHW0ij6DUWad9dfHDyxUdYIcoyFm14bqHKdFsd47BlK6H9HhEfiO2iDfF5slV2mfSuCYsXuoWPXRwE4zoy5g0kCc3gDpH4zmfIlySNSqT9N1BNhCAHKdQmUauc-D08kAre0gDjQ9FKemZsAy6Nqgp5z-wpofVauP06cuWSowkg8R29_QlvTPhe4bLZkcIz45L_qhNhc35Q8b67UTSmJJi8RhEdIoV2pfYfoR7srZ9IYhZG4l5xn"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-up">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 md:mb-8 rounded-full bg-gold/10 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase border border-gold/20">
                <Sparkles size={14} />
                {t('landing.hero.scandinavian_quality')}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-warm-text leading-[0.95] tracking-tighter mb-6 md:mb-8">
                {t('landing.hero.title_1')}<br />
                <span className="font-serif italic gold-text">{t('landing.hero.title_2')}</span>
              </h1>
              <p className="text-base md:text-lg text-warm-text-light mb-8 md:mb-10 leading-relaxed max-w-md">
                {t('landing.hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="gold-gradient text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2">
                  {t('landing.hero.contact_btn')} <ArrowRight size={18} />
                </Link>
                <Link to="/pool-tech" className="bg-white border border-warm-border text-warm-text px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base hover:border-gold/30 hover:bg-cream-dark transition-all duration-300 text-center">
                  {t('landing.hero.tech_btn')}
                </Link>
              </div>
            </div>

            {/* Floating Stat Cards - Desktop only */}
            <div className="hidden lg:flex flex-col gap-5 items-end">
              <div className="warm-glass-strong rounded-2xl p-6 w-72 animate-float warm-shadow gold-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold text-xs font-label tracking-widest uppercase mb-1">{t('landing.stats.warranty.label')}</p>
                    <h3 className="text-2xl font-bold text-warm-text">{t('landing.stats.warranty.val')}</h3>
                    <p className="text-warm-muted text-sm">{t('landing.stats.warranty.sub')}</p>
                  </div>
                  <ShieldCheck className="w-10 h-10 text-gold/25" />
                </div>
              </div>
              <div className="warm-glass-strong rounded-2xl p-6 w-64 animate-float-delayed warm-shadow gold-border mr-12">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold text-xs font-label tracking-widest uppercase mb-1">{t('landing.stats.lead_times.label')}</p>
                    <h3 className="text-2xl font-bold text-warm-text">{t('landing.stats.lead_times.val')}</h3>
                    <p className="text-warm-muted text-sm">{t('landing.stats.lead_times.sub')}</p>
                  </div>
                  <Timer className="w-10 h-10 text-gold/25" />
                </div>
              </div>
              <div className="warm-glass-strong rounded-2xl p-6 w-56 animate-float warm-shadow gold-border mr-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold text-xs font-label tracking-widest uppercase mb-1">{t('landing.stats.coverage.label')}</p>
                    <h3 className="text-2xl font-bold text-warm-text">{t('landing.stats.coverage.val')}</h3>
                    <p className="text-warm-muted text-sm">{t('landing.stats.coverage.sub')}</p>
                  </div>
                  <MapPin className="w-10 h-10 text-gold/25" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stat strip */}
          <div className="flex lg:hidden gap-3 mt-10 overflow-x-auto pb-2 -mx-2 px-2 flex-wrap hide-scrollbar">
            {[
              { label: t('landing.stats.warranty.val'), sub: t('landing.stats.warranty.label') },
              { label: t('landing.stats.lead_times.val'), sub: t('landing.stats.lead_times.label') },
              { label: t('landing.stats.coverage.val'), sub: t('landing.stats.coverage.label') },
            ].map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 200} className="warm-glass-strong rounded-xl p-4 min-w-[130px] gold-border shrink-0">
                <p className="text-lg font-bold text-warm-text">{s.label}</p>
                <p className="text-warm-muted text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent"></div>
      </section>

      {/* USPs */}
      <section className="py-16 md:py-28 bg-milk relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <span className="text-gold text-xs font-label tracking-widest uppercase block mb-4">{t('landing.usps.label')}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
              {t('landing.usps.title_1')} <span className="font-serif italic gold-text">{t('landing.usps.title_2')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: MapPin, title: t('landing.usps.items.local.title'), desc: t('landing.usps.items.local.desc') },
              { icon: Award, title: t('landing.usps.items.tailored.title'), desc: t('landing.usps.items.tailored.desc') },
              { icon: Gauge, title: t('landing.usps.items.lead_times.title'), desc: t('landing.usps.items.lead_times.desc') },
              { icon: ShieldCheck, title: t('landing.usps.items.warranty.title'), desc: t('landing.usps.items.warranty.desc') },
            ].map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 200} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 group hover:gold-border transition-all duration-500 warm-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[60px] group-hover:bg-gold/6 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mb-4 md:mb-6">
                    <item.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-warm-text mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Large Feature Card */}
            <div data-aos="fade-up" className="md:col-span-7 bg-white rounded-2xl md:rounded-3xl p-7 md:p-10 relative overflow-hidden group hover:gold-border transition-all duration-500 warm-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/3 rounded-full blur-[80px] group-hover:bg-gold/6 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mb-4 md:mb-6">
                  <Droplets className="text-gold" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-warm-text mb-3 md:mb-4 tracking-tight">
                  {t('landing.services.renovations.title')}
                </h3>
                <p className="text-warm-text-light text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md">
                  {t('landing.services.renovations.desc')}
                </p>
                <ul className="space-y-2 md:space-y-3">
                  {(t('landing.services.renovations.features', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-warm-text-light">
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pool-renovations" className="inline-flex items-center gap-2 mt-6 md:mt-8 text-gold font-bold text-sm hover:gap-3 transition-all">
                  {t('landing.services.renovations.learn_more')} <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Side Cards */}
            <div className="md:col-span-5 grid grid-cols-1 gap-4 md:gap-5">
              <div data-aos="fade-up" className="gold-gradient rounded-2xl md:rounded-3xl p-6 md:p-8 gold-glow animate-gradient-shift">
                <p className="text-white/70 font-label text-[10px] tracking-widest uppercase mb-1">{t('landing.services.terrace_pools.label')}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">{t('landing.services.terrace_pools.title')}</h3>
                <p className="text-white/60 text-sm mt-1">{t('landing.services.terrace_pools.desc')}</p>
                <Link to="/terrace-pools" className="inline-flex items-center gap-2 mt-4 text-white font-bold text-sm hover:gap-3 transition-all">{t('landing.services.terrace_pools.btn')} <ArrowRight size={16} /></Link>
              </div>
              <div data-aos="fade-up" data-aos-delay={200} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 group hover:gold-border transition-all duration-500 warm-shadow">
                <p className="text-gold text-[10px] font-label tracking-widest uppercase mb-1">{t('landing.services.tech.label')}</p>
                <h3 className="text-xl md:text-2xl font-bold text-warm-text">{t('landing.services.tech.title')}</h3>
                <p className="text-warm-muted text-sm mt-1">{t('landing.services.tech.desc')}</p>
                <Link to="/pool-tech" className="inline-flex items-center gap-2 mt-4 text-gold font-bold text-sm hover:gap-3 transition-all">{t('landing.services.tech.btn')} <ArrowRight size={16} /></Link>
              </div>
              <div data-aos="fade-up" data-aos-delay={300} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 group hover:gold-border transition-all duration-500 warm-shadow">
                <p className="text-gold text-[10px] font-label tracking-widest uppercase mb-1">{t('landing.services.prices.label')}</p>
                <h3 className="text-xl md:text-2xl font-bold text-warm-text">{t('landing.services.prices.title')}</h3>
                <p className="text-warm-muted text-sm mt-1">{t('landing.services.prices.desc')}</p>
                <Link to="/prices" className="inline-flex items-center gap-2 mt-4 text-gold font-bold text-sm hover:gap-3 transition-all">{t('landing.services.prices.btn')} <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-16 md:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <span className="text-gold text-xs font-label tracking-widest uppercase block mb-4">{t('landing.process.label')}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
              {t('landing.process.title_1')} <span className="font-serif italic gold-text">{t('landing.process.title_2')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              { id: '01', title: t('landing.process.steps.1.title'), desc: t('landing.process.steps.1.desc') },
              { id: '02', title: t('landing.process.steps.2.title'), desc: t('landing.process.steps.2.desc') },
              { id: '03', title: t('landing.process.steps.3.title'), desc: t('landing.process.steps.3.desc') },
              { id: '04', title: t('landing.process.steps.4.title'), desc: t('landing.process.steps.4.desc') },
              { id: '05', title: t('landing.process.steps.5.title'), desc: t('landing.process.steps.5.desc') },
              { id: '06', title: t('landing.process.steps.6.title'), desc: t('landing.process.steps.6.desc') },
            ].map((step, i) => (
              <div key={step.id} data-aos="fade-up" data-aos-delay={i * 200} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 group hover:gold-border transition-all duration-500 warm-shadow text-center">
                <span className="text-2xl md:text-3xl font-black gold-text block mb-2 md:mb-3">{step.id}</span>
                <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2 text-warm-text">{step.title}</h3>
                <p className="text-warm-muted text-[11px] md:text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center" data-aos="zoom-in">
            <Link to="/contact" className="gold-gradient text-white px-8 md:px-10 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-2">
              {t('landing.process.btn')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Installations */}
      <section className="py-16 md:py-28 bg-milk">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
            <span className="text-gold text-xs font-label tracking-widest uppercase block mb-4">{t('landing.installations.label')}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
              {t('landing.installations.title_1')} <span className="font-serif italic gold-text">{t('landing.installations.title_2')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-5 md:gap-6">
            {portfolioProjects.slice(0, 2).map((project, i) => (
              <Link key={project.slug} to={`/portfolio/${project.slug}`} data-aos="fade-up" data-aos-delay={i * 200} className="group cursor-pointer block">
                <div className="relative h-[220px] md:h-[300px] rounded-2xl md:rounded-3xl overflow-hidden warm-shadow mb-4 md:mb-5">
                  <img src={project.image} alt={t(`portfolio.projects.details.${project.slug}.title`)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-warm-text mb-1 md:mb-2">{t(`portfolio.projects.details.${project.slug}.title`)}</h3>
                <p className="text-warm-muted text-sm leading-relaxed line-clamp-3">{t(`portfolio.projects.details.${project.slug}.description`)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still Got Questions? */}
      <section className="py-16 md:py-28 px-6 md:px-8 bg-cream" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="gold-gradient rounded-2xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center warm-shadow-lg animate-gradient-shift">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter text-white leading-tight">
                {t('landing.cta.title_1')} <span className="font-serif italic">{t('landing.cta.title_2')}</span>
              </h2>
              <p className="text-sm md:text-lg text-white/75 mb-8 md:mb-10 max-w-xl mx-auto">
                {t('landing.cta.desc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gold-dark px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-cream hover:translate-y-[-2px] transition-all duration-300 shadow-lg w-full sm:w-auto justify-center">
                  {t('landing.cta.contact_btn')} <ArrowRight size={20} />
                </Link>
                <a href="tel:+34639448448" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center">
                  {t('landing.cta.call_btn')} +34 639 448 448
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
