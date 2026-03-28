import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, ArrowRight, Droplets, Zap, Thermometer, Layers, Weight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PoolTechPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20 md:pb-28">
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-14 md:mb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
              <Sparkles size={14} /> {t('pool_tech.hero.label')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text mb-4 md:mb-6 leading-[0.95]">
              {t('pool_tech.hero.title_1')}<br /><span className="font-serif italic gold-text">{t('pool_tech.hero.title_2')}</span>
            </h1>
            <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-lg">
              {t('pool_tech.hero.desc')}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">{t('pool_tech.why.title_1')} <span className="font-serif italic gold-text">{t('pool_tech.why.title_2')}</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Weight, title: t('pool_tech.why.items.lightweight.title'), desc: t('pool_tech.why.items.lightweight.desc') },
              { icon: Layers, title: t('pool_tech.why.items.durability.title'), desc: t('pool_tech.why.items.durability.desc') },
              { icon: ShieldCheck, title: t('pool_tech.why.items.warranty.title'), desc: t('pool_tech.why.items.warranty.desc') },
              { icon: Droplets, title: t('pool_tech.why.items.filtration.title'), desc: t('pool_tech.why.items.filtration.desc') },
              { icon: Thermometer, title: t('pool_tech.why.items.climate.title'), desc: t('pool_tech.why.items.climate.desc') },
              { icon: Zap, title: t('pool_tech.why.items.efficiency.title'), desc: t('pool_tech.why.items.efficiency.desc') },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 group hover:gold-border transition-all duration-500 warm-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[60px] group-hover:bg-gold/6 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center mb-4 md:mb-6">
                    <feature.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-warm-text mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-warm-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Putting Tech to Work */}
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-5 md:space-y-6">
                <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase">
                  <Sparkles size={14} /> {t('pool_tech.putting_tech.label')}
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-warm-text leading-[1.05]">
                  {t('pool_tech.putting_tech.title')}
                </h2>
                <p className="text-sm md:text-base text-warm-text-light leading-relaxed">
                  {t('pool_tech.putting_tech.p1')}
                </p>
                <p className="text-sm md:text-base text-warm-text-light leading-relaxed">
                  {t('pool_tech.putting_tech.p2_prefix')}{' '}
                  <strong className="text-warm-text">{t('pool_tech.putting_tech.p2_bold')}</strong>
                </p>
                <p className="text-sm md:text-base text-warm-text-light leading-relaxed">
                  {t('pool_tech.putting_tech.p3')}
                </p>
                <p className="text-sm md:text-base text-warm-text-light leading-relaxed">
                  {t('pool_tech.putting_tech.p4_prefix')}{' '}
                  <strong className="text-warm-text">{t('pool_tech.putting_tech.p4_bold')}</strong>{' '}
                  {t('pool_tech.putting_tech.p4_suffix')}<br />
                  <a href="#fact-box" className="text-teal-accent underline underline-offset-4 hover:text-gold transition-colors duration-300 font-medium">
                    {t('pool_tech.putting_tech.p4_link')}
                  </a>
                </p>
              </div>
              <div className="rounded-2xl md:rounded-3xl overflow-hidden warm-shadow-lg">
                <img
                  src="/gallery/img45.jpeg"
                  alt="Pool construction materials"
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Premier Material */}
        <section className="py-16 md:py-28 bg-cream-dark/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-20">
              <div>
                <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
                  <Sparkles size={14} /> {t('pool_tech.premier_material.label')}
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-warm-text leading-[1.05]">
                  {t('pool_tech.premier_material.title')}
                </h2>
              </div>
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 warm-shadow gold-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/3 rounded-full blur-[60px]"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Sparkles className="text-gold" size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-warm-text mb-3">
                    {t('pool_tech.premier_material.card_title')}
                  </h3>
                  <p className="text-sm text-warm-text-light leading-relaxed mb-3">
                    {t('pool_tech.premier_material.card_desc')}
                  </p>
                  <p className="text-sm text-warm-muted italic">
                    {t('pool_tech.premier_material.card_detail')}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-5 md:space-y-8">
                {[
                  { icon: Weight, text: t('pool_tech.premier_material.benefits.lightweight') },
                  { icon: Layers, text: t('pool_tech.premier_material.benefits.durability') },
                  { icon: Droplets, text: t('pool_tech.premier_material.benefits.resistance') },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <item.icon className="text-gold" size={20} />
                    </div>
                    <p className="text-base md:text-lg font-bold text-warm-text leading-snug pt-1.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl md:rounded-3xl overflow-hidden warm-shadow-lg">
                <img
                  src="https://terracepool.com/wp-content/uploads/2025/07/Composite-Fibre-Durability-1536x843.webp"
                  alt="Fiber composite stone hard"
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fact Box */}
        <section id="fact-box" className="py-16 md:py-28 bg-[#0a1628]">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-8 md:mb-12">
              <span className="text-gold/60 text-[10px] md:text-xs font-label tracking-widest uppercase block mb-4">
                {t('pool_tech.fact_box.label')}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 md:mb-6">
                {t('pool_tech.fact_box.title')}
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-3xl">
                {t('pool_tech.fact_box.intro')}
              </p>
              <p className="text-sm md:text-base text-white/50 mt-3 italic">
                {t('pool_tech.fact_box.tagline')}
              </p>
            </div>

            {/* Why Fiber Composites */}
            <div className="bg-[#111d33] rounded-2xl md:rounded-3xl p-6 md:p-10 mb-8 md:mb-12 border border-white/5">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                <span className="text-2xl">💡</span> {t('pool_tech.fact_box.why_title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                  { key: 'strength', color: 'text-red-400' },
                  { key: 'maintenance', color: 'text-green-400' },
                  { key: 'engineering', color: 'text-blue-400' },
                  { key: 'sustainable', color: 'text-yellow-400' },
                ].map((item) => (
                  <div key={item.key}>
                    <h4 className={`text-sm font-bold ${item.color} mb-2`}>
                      {t(`pool_tech.fact_box.why_items.${item.key}.title`)}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {t(`pool_tech.fact_box.why_items.${item.key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where They Perform Best */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-8">
                {t('pool_tech.fact_box.where_title')}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { key: 'aerospace', icon: '✈️' },
                  { key: 'automotive', icon: '🚗' },
                  { key: 'infrastructure', icon: '🏗️' },
                  { key: 'energy', icon: '⚡' },
                  { key: 'marine', icon: '🚢' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center gap-4 bg-[#111d33] rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 border border-white/5 hover:border-gold/20 transition-all duration-300">
                    <span className="text-lg md:text-xl">{item.icon}</span>
                    <p className="text-sm md:text-base text-white/70 font-medium">
                      {t(`pool_tech.fact_box.where_items.${item.key}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-milk">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="gold-gradient rounded-2xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center warm-shadow-lg animate-gradient-shift">
              <div className="relative z-10">
                <div className="text-white/80 mb-4 md:mb-6"><ShieldCheck size={48} className="mx-auto" /></div>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
                  <span className="font-serif italic">{t('pool_tech.warranty_section.title_1')}</span> {t('pool_tech.warranty_section.title_2')}
                </h2>
                <p className="text-white/75 text-sm md:text-lg max-w-2xl mx-auto mb-7 md:mb-10">
                  {t('pool_tech.warranty_section.desc')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gold-dark px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-cream hover:translate-y-[-2px] transition-all duration-300 w-full sm:w-auto justify-center">
                    {t('pool_tech.warranty_section.contact_btn')} <ArrowRight size={20} />
                  </Link>
                  <Link to="/prices" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center">
                    {t('pool_tech.warranty_section.pricing_btn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoolTechPage;
