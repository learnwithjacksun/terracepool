import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, ArrowRight, Gauge } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RenovationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section data-aos="fade-up" className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Pool renovation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdoyKLXMKDlY79S3ScwnN2sLoujYKPfdJS2gPvzB-FqtYcNHVOxvzSNsnCbBJrhABaCx4rvmoX9EGvNXeNQM1YkJ1CPFfB6mtZAvL1aoLhozfVb4wqYbXI3Ce8L5l-9FfDoYDBvSsePocvkr_P8QoDZ9t74mbQ3Ivvy0AqiybV_yuAjXGGg4dO55M1ZwPD0Jl0HytinUA3EswXbmoRmg1fvIDsLnBMY5QKYN1zzsuYzXsloyKj7scHp6x_qe0nrRX7D3tkBIy9pyln" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl space-y-6 md:space-y-8">
              <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-3 md:px-4 py-1.5 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase">
                <Sparkles size={14} /> {t('renovations.hero.label')}
              </span>
              <h1 className="text-warm-text font-black tracking-tighter text-4xl sm:text-6xl md:text-8xl leading-[1.1]">
                {t('renovations.hero.title_1')}<br />
                <span className="font-serif italic gold-text">{t('renovations.hero.title_2')}</span>
              </h1>
              <p className="text-base md:text-lg text-warm-text-light max-w-lg leading-relaxed">
                {t('renovations.hero.desc')}
              </p>
              <div className="pt-4 md:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6">
                <div className="bg-white rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-center warm-shadow gold-border">
                  <span className="text-2xl md:text-3xl font-black text-gold block">{t('renovations.hero.warranty_val')}</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-warm-muted font-bold">{t('renovations.hero.warranty_label')}</span>
                </div>
                <Link to="/contact" className="gold-gradient text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2">
                  {t('renovations.hero.quote_btn')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Renovate */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-28">
          <div data-aos="fade-up" className="text-center mb-10 md:mb-16">
            <span className="text-gold text-xs font-label tracking-widest uppercase block mb-4">{t('renovations.why.label')}</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text">
              {t('renovations.why.title_1')} <span className="font-serif italic gold-text">{t('renovations.why.title_2')}</span>
            </h2>
            <p className="text-warm-text-light text-base md:text-lg mt-4 max-w-2xl mx-auto">
              {t('renovations.why.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: t('renovations.why.items.structural.title'), desc: t('renovations.why.items.structural.desc') },
              { title: t('renovations.why.items.filtration.title'), desc: t('renovations.why.items.filtration.desc') },
              { title: t('renovations.why.items.finishes.title'), desc: t('renovations.why.items.finishes.desc') },
              { title: t('renovations.why.items.plumbing.title'), desc: t('renovations.why.items.plumbing.desc') },
              { title: t('renovations.why.items.electrical.title'), desc: t('renovations.why.items.electrical.desc') },
              { title: t('renovations.why.items.surrounding.title'), desc: t('renovations.why.items.surrounding.desc') },
            ].map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 200} className="bg-white rounded-xl md:rounded-2xl p-5 md:p-7 group hover:gold-border transition-all duration-500 warm-shadow">
                <CheckCircle2 className="text-teal-accent mb-3 md:mb-4" size={22} />
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-warm-text">{item.title}</h3>
                <p className="text-warm-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical: Fiber Composite Boards */}
        <section data-aos="fade-up" className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-6">
                  <Gauge size={14} className="text-gold" /> Intelligent Improvement
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-warm-text leading-[1.1] mb-8">
                  {t('renovations.technical.title')}
                </h2>
                <p className="text-base md:text-lg text-warm-text-light leading-relaxed mb-12 max-w-2xl">
                  {t('renovations.technical.desc')}
                </p>

                
              </div>

              {/* <div className="lg:col-span-5 pt-10 lg:pt-0">
                <img className='w-full h-full flex items-center justify-center text-warm-muted/30 text-xs font-label uppercase tracking-widest' src='https://terracepool.com/wp-content/uploads/2025/07/Pool-renovation-Composite-info-768x925.png' />
              </div> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <div data-aos="fade-up" data-aos-delay={200} className="space-y-4">
                    <div className="w-full aspect-[16/9] bg-cream-dark rounded-xl overflow-hidden border border-warm-border/30">
                      {/* Image Placeholder */}
                      <img className='w-full h-full flex items-center justify-center text-warm-muted/30 text-xs font-label uppercase tracking-widest object-cover' src='/gallery/img49.jpeg' />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-warm-text mb-2">{t('renovations.technical.features.leak_proof.title')}</h3>
                      <p className="text-sm text-warm-muted leading-relaxed">{t('renovations.technical.features.leak_proof.desc')}</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay={300} className="space-y-4">
                    <div className="w-full aspect-[16/9] bg-cream-dark rounded-xl overflow-hidden border border-warm-border/30">
                      {/* Image Placeholder */}
                      <img className='w-full h-full flex items-center justify-center text-warm-muted/30 text-xs font-label uppercase tracking-widest object-cover' src='/gallery/img50.jpeg' />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-warm-text mb-2">{t('renovations.technical.features.durability.title')}</h3>
                      <p className="text-sm text-warm-muted leading-relaxed">{t('renovations.technical.features.durability.desc')}</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay={400} className="space-y-4">
                    <div className="w-full aspect-[16/9] bg-cream-dark rounded-xl overflow-hidden border border-warm-border/30">
                      {/* Image Placeholder */}
                      <img className='w-full h-full flex items-center justify-center text-warm-muted/30 text-xs font-label uppercase tracking-widest' src='https://terracepool.com/wp-content/uploads/2025/07/Durable-Pool-Renovation-768x547.webp' />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-warm-text mb-2">{t('renovations.technical.features.strength.title')}</h3>
                      <p className="text-sm text-warm-muted leading-relaxed">{t('renovations.technical.features.strength.desc')}</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay={500} className="space-y-4">
                    <div className="w-full aspect-[16/9] bg-cream-dark rounded-xl overflow-hidden border border-warm-border/30">
                      {/* Image Placeholder */}
                      <img className='w-full h-full flex items-center justify-center text-warm-muted/30 text-xs font-label uppercase tracking-widest' src='https://terracepool.com/wp-content/uploads/2025/07/Cheap-Pool-Renovation.webp' />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-warm-text mb-2">{t('renovations.technical.features.cost.title')}</h3>
                      <p className="text-sm text-warm-muted leading-relaxed">{t('renovations.technical.features.cost.desc')}</p>
                    </div>
                  </div>
                </div>
          </div>
        </section>

        {/* Finish Section */}
        <section data-aos="fade-up" className="relative py-20 md:py-32 bg-cream-dark/30 overflow-hidden">
          {/* Water background effect */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://terracepool.com/wp-content/uploads/2025/07/Pool-renovation-Price.webp"
              alt="Water surface"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cream-dark mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
            <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4">
                <Sparkles size={14} /> Custom Finish
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-warm-text mb-6">
                {t('renovations.finishes.title')}
              </h2>
              <p className="text-base md:text-lg text-warm-text-light">
                {t('renovations.finishes.desc')}
              </p>
            </div>

            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div data-aos="fade-up" data-aos-delay={100} className="space-y-6">
                <img className="mx-auto w-40 h-24 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-[10px] font-label uppercase tracking-widest text-warm-muted border border-white/30" src='https://terracepool.com/wp-content/uploads/2025/07/swimming-pool-glass-mosaic-tiles-768x606.jpg' />
                <div>
                  <h3 className="text-xl font-bold text-warm-text mb-3">{t('renovations.finishes.options.liners.title')}</h3>
                  <p className="text-sm text-warm-muted leading-relaxed max-w-xs mx-auto">{t('renovations.finishes.options.liners.desc')}</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay={200} className="space-y-6">
                <img className="mx-auto w-40 h-24 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-[10px] font-label uppercase tracking-widest text-warm-muted border border-white/30" src='https://terracepool.com/wp-content/uploads/2025/07/swimming-pool-glass-mosaic-tiles-768x606.jpg' />
                <div>
                  <h3 className="text-xl font-bold text-warm-text mb-3">{t('renovations.finishes.options.mosaic.title')}</h3>
                  <p className="text-sm text-warm-muted leading-relaxed max-w-xs mx-auto">{t('renovations.finishes.options.mosaic.desc')}</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay={300} className="space-y-6">
                <img className="mx-auto w-40 h-24 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-[10px] font-label uppercase tracking-widest text-warm-muted border border-white/30" src='https://terracepool.com/wp-content/uploads/2025/07/Luxury-pool-tile-768x668.webp' />
                <div>
                  <h3 className="text-xl font-bold text-warm-text mb-3">{t('renovations.finishes.options.tiles.title')}</h3>
                  <p className="text-sm text-warm-muted leading-relaxed max-w-xs mx-auto">{t('renovations.finishes.options.tiles.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section data-aos="fade-up" className="py-16 md:py-28 bg-milk overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div data-aos="fade-up" className="relative">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden warm-shadow-lg">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMxpNtg8hHbRIuZV10cB2e3DpSPR0G9n-QwN7pyq6ZIYsmTDm-TxAyA5J85aWd__CvJ2SR-6DxkaCToaK7AZD3phi6TulCvp8QEwz56Eb3NzfLq0AXhubccImGhqAKzZuOj6xxb9qzm7-mdpz_nwP03sd-pqqKKqdN5HqXAiPqDjN_v6tIRKDmarLC7VxlshXdhLcHfUDQ59i0o_z5wTIqvW5wE4d5Sz8rBgw-RE_feywCYCX24bFf6EkfcT4o155byAV6Ga3SGTDQ" alt="Renovation detail" className="w-full h-[300px] md:h-[450px] object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 warm-glass-strong p-5 md:p-8 rounded-xl md:rounded-2xl gold-border animate-float warm-shadow">
                  <span className="block text-4xl md:text-6xl font-black gold-text leading-none">{t('renovations.hero.warranty_val')}</span>
                  <span className="block text-warm-text font-bold tracking-tighter mt-1 md:mt-2 text-xs md:text-sm uppercase">{t('renovations.hero.warranty_label')}</span>
                </div>
              </div>
              <div data-aos="fade-up" className="space-y-5 md:space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-warm-text leading-tight">
                  {t('renovations.guarantee.title_1')} <span className="font-serif italic gold-text">{t('renovations.guarantee.title_2')}</span>
                </h2>
                <p className="text-base md:text-lg text-warm-text-light leading-relaxed">
                  {t('renovations.guarantee.desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link to="/pool-tech" className="gold-gradient text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold gold-glow hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 justify-center text-sm md:text-base">
                    {t('renovations.guarantee.tech_btn')} <ArrowRight size={18} />
                  </Link>
                  <Link to="/contact" className="bg-white border border-warm-border text-warm-text px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold hover:border-gold/30 transition-all duration-300 text-center text-sm md:text-base">
                    {t('renovations.guarantee.contact_btn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section data-aos="fade-up" className="py-14 md:py-20 px-6 md:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-warm-text mb-4">{t('renovations.areas.title_1')} <span className="font-serif italic gold-text">{t('renovations.areas.title_2')}</span></h2>
          <p className="text-warm-text-light mb-6 md:mb-10 max-w-xl mx-auto text-sm md:text-base">{t('renovations.areas.desc')}</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Estepona', 'Marbella', 'Málaga', 'Nerja', 'Torrevieja', 'Alicante', 'Mallorca'].map(city => (
              <span key={city} className="bg-white rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-warm-text warm-shadow gold-border">{city}</span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section data-aos="fade-up" className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="gold-gradient rounded-2xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden warm-shadow-lg animate-gradient-shift text-center">
            <div className="relative z-10 space-y-5 md:space-y-8">
              <h2 className="text-white text-3xl md:text-6xl font-bold tracking-tighter">{t('renovations.cta.title_1')} <span className="font-serif italic">{t('renovations.cta.title_2')}</span></h2>
              <p className="text-white/75 text-sm md:text-lg max-w-xl mx-auto">{t('renovations.cta.desc')}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gold-dark px-8 md:px-10 py-3.5 md:py-4 rounded-2xl font-bold text-sm md:text-lg hover:bg-cream hover:translate-y-[-2px] transition-all duration-300">
                {t('renovations.cta.btn')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RenovationsPage;
