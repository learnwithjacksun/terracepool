import React from 'react';
import { ArrowRight, Mail, MapPin, Phone, Clock, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20 md:pb-28 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
            <Sparkles size={14} /> {t('contact.hero.label')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text mb-4 md:mb-6 leading-[0.95]">
            {t('contact.hero.title_1')}<br />
            <span className="font-serif italic gold-text">{t('contact.hero.title_2')}</span>
          </h1>
          <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-lg">
            {t('contact.hero.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="lg:col-span-8 bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl relative overflow-hidden warm-shadow">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gold/3 rounded-full blur-[80px]"></div>
            <h3 className="font-bold text-warm-text text-[11px] mb-5 md:mb-6 font-label uppercase tracking-wider">{t('contact.form.title')}</h3>
            <div className="relative z-10">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">{t('contact.form.name')}</label>
                  <input className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm" placeholder={t('contact.form.name_placeholder')} type="text" />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">{t('contact.form.email')}</label>
                  <input className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm" placeholder={t('contact.form.email_placeholder')} type="email" />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">{t('contact.form.phone')}</label>
                  <input className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm" placeholder={t('contact.form.phone_placeholder')} type="tel" />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">{t('contact.form.subject')}</label>
                  <select className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-muted appearance-none focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm">
                    <option>{t('contact.form.subjects.terrace')}</option>
                    <option>{t('contact.form.subjects.renovation')}</option>
                    <option>{t('contact.form.subjects.other')}</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-warm-muted ml-1">{t('contact.form.message')}</label>
                  <textarea className="w-full bg-cream border border-warm-border rounded-xl px-4 py-3.5 md:py-4 text-warm-text placeholder:text-warm-muted/50 focus:border-gold focus:gold-glow-sm transition-all duration-300 text-sm" placeholder={t('contact.form.message_placeholder')} rows={4}></textarea>
                </div>
                <div className="md:col-span-2 pt-2">
                  <button className="gold-gradient text-white w-full px-8 py-4 md:py-5 rounded-2xl font-bold text-base gold-glow hover:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3" type="submit">
                    {t('contact.form.send_btn')} <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl warm-shadow">
              <h3 className="text-base md:text-lg font-bold text-warm-text mb-5 md:mb-6">{t('contact.sidebar.direct')}</h3>
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Phone className="text-gold" size={18} /></div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">{t('contact.sidebar.phone')}</p>
                    <a href="tel:+34639448448" className="text-warm-text font-semibold text-sm hover:text-gold transition-colors">+34 639 448 448</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Mail className="text-gold" size={18} /></div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">{t('contact.sidebar.email')}</p>
                    <a href="mailto:info@terracepool.com" className="text-warm-text font-semibold text-sm hover:text-gold transition-colors">info@terracepool.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Clock className="text-gold" size={18} /></div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">{t('contact.sidebar.hours')}</p>
                    <p className="text-warm-text font-semibold text-sm">{t('contact.sidebar.hours_val')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl warm-shadow">
              <h3 className="text-base md:text-lg font-bold text-warm-text mb-4">{t('contact.sidebar.offices')}</h3>
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><MapPin className="text-gold" size={18} /></div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">{t('contact.sidebar.hq')}</p>
                    <p className="text-warm-text font-semibold text-sm">{t('contact.sidebar.hq_addr')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 md:w-11 h-10 md:h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><MapPin className="text-gold" size={18} /></div>
                  <div>
                    <p className="text-warm-muted text-[10px] font-label uppercase tracking-widest mb-0.5">{t('contact.sidebar.mallorca')}</p>
                    <p className="text-warm-text font-semibold text-sm">{t('contact.sidebar.mallorca_addr')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl warm-shadow">
              <p className="text-warm-text font-bold text-xs md:text-sm text-center">{t('contact.sidebar.serving')}</p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
