import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English (EN)' },
  { code: 'es', name: 'Español (ES)' },
  { code: 'fr', name: 'Français (FR)' },
  { code: 'it', name: 'Italiano (IT)' }
];

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-cream-dark border-t border-warm-border py-12 md:py-16 px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-4">
            <img src="/Terrace-Pool-Logo-w.png" alt="Terrace Pool" className="h-10 md:h-12" />
          </div>
          <p className="text-warm-text-light text-sm font-bold mb-1">Scandinavian Quality Wood & Construction S.L.</p>
          <p className="text-warm-muted text-sm leading-relaxed">{t('footer.desc')}</p>
        </div>
        <div>
          <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-4 md:mb-5">{t('footer.services')}</h4>
          <ul className="space-y-2 md:space-y-3 text-sm text-warm-muted">
            <li><Link className="hover:text-gold transition-colors duration-300 whitespace-nowrap" to="/terrace-pools">{t('nav.terrace_pools')}</Link></li>
            <li><Link className="hover:text-gold transition-colors duration-300 whitespace-nowrap" to="/pool-renovations">{t('nav.pool_renovations')}</Link></li>
            <li><Link className="hover:text-gold transition-colors duration-300 whitespace-nowrap" to="/pool-tech">{t('nav.pool_technology')}</Link></li>
            <li><Link className="hover:text-gold transition-colors duration-300 whitespace-nowrap" to="/prices">{t('nav.prices')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-4 md:mb-5">{t('footer.contact')}</h4>
          <ul className="space-y-2 md:space-y-3 text-sm text-warm-muted">
            <li><a className="hover:text-gold transition-colors duration-300" href="tel:+34639448448">+34 639 448 448</a></li>
            <li><a className="hover:text-gold transition-colors duration-300" href="mailto:info@terracepool.com">info@terracepool.com</a></li>
            <li>{t('footer.hours_val')}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-4 md:mb-5">{t('footer.locations')}</h4>
          <ul className="space-y-2 md:space-y-3 text-sm text-warm-muted">
            <li>{t('contact.sidebar.hq_addr')}</li>
            <li>{t('contact.sidebar.mallorca_addr')}</li>
          </ul>
          
          <div className="mt-6 pt-6 border-t border-warm-border/50">
             <div className="flex items-center gap-2 mb-3 text-warm-muted text-xs font-bold uppercase tracking-widest">
                <Globe size={14} /> {t('footer.language')}
             </div>
             <div className="flex flex-col gap-2">
                {languages.map(lng => (
                    <button
                      key={lng.code}
                      onClick={() => i18n.changeLanguage(lng.code)}
                      className={`text-left text-sm transition-colors ${i18n.resolvedLanguage?.substring(0, 2) === lng.code ? 'text-gold font-bold' : 'text-warm-muted hover:text-gold'}`}
                    >
                      {lng.name}
                    </button>
                  ))}
             </div>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 md:mt-12 pt-6 md:pt-8 border-t border-warm-border text-center">
        <p className="text-warm-muted text-xs md:text-sm">© 2024 Scandinavian Quality Wood & Construction S.L. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
