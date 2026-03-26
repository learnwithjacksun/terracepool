import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'es', name: 'ES' },
  { code: 'fr', name: 'FR' },
  { code: 'sv', name: 'SV' }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.terrace_pools'), path: '/terrace-pools' },
    { label: t('nav.pool_renovations'), path: '/pool-renovations' },
    { label: t('nav.pool_technology'), path: '/pool-tech' },
    { label: t('nav.prices'), path: '/prices' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
        <div className="warm-glass rounded-2xl px-5 md:px-6 py-3 md:py-3.5 flex justify-between items-center warm-shadow">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src="/Terrace-Pool-Logo-w.png" alt="Terrace Pool" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  location.pathname === link.path
                    ? 'text-gold border-b border-gold pb-0.5 whitespace-nowrap'
                    : 'text-warm-muted hover:text-gold transition-colors duration-300 whitespace-nowrap'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher Desktop */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-warm-muted hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <Globe size={16} /> 
                {i18n.resolvedLanguage?.substring(0, 2) || 'EN'} 
                <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown */}
              {langOpen && (
                <div className="absolute top-full right-0 mt-3 w-32 bg-white rounded-xl warm-shadow-lg overflow-hidden py-1 border border-warm-border/50 animate-fade-in">
                  {languages.map(lng => (
                    <button
                      key={lng.code}
                      onClick={() => changeLanguage(lng.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${i18n.resolvedLanguage?.substring(0, 2) === lng.code ? 'bg-gold/10 text-gold font-bold' : 'text-warm-text hover:bg-cream-dark'}`}
                    >
                      {lng.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="hidden md:flex gold-gradient text-white px-5 py-2 rounded-xl text-sm font-bold hover:scale-[0.97] active:scale-95 transition-all duration-300 gold-glow-sm"
            >
              {t('nav.contact_us')}
            </Link>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3">
               {/* Mobile Lang Button */}
               <button 
                onClick={() => {
                  const currentIndex = languages.findIndex(l => l.code === i18n.resolvedLanguage?.substring(0, 2));
                  const nextIndex = (currentIndex + 1) % languages.length;
                  i18n.changeLanguage(languages[nextIndex].code);
                }}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-cream-dark text-warm-text font-bold text-xs uppercase"
              >
                {i18n.resolvedLanguage?.substring(0, 2) || 'EN'}
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-cream-dark text-warm-text hover:bg-gold/10 transition-all"
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-warm-text/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm rounded-2xl bg-white warm-shadow-lg p-6 transition-all duration-300 ${
            open ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-6 scale-95 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-gold/10 text-gold font-bold'
                    : 'text-warm-text hover:bg-cream-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-warm-border grid grid-cols-4 gap-2 mb-4">
               {languages.map(lng => (
                    <button
                      key={lng.code}
                      onClick={() => changeLanguage(lng.code)}
                      className={`text-center py-2 rounded-lg text-xs font-bold transition-colors ${i18n.resolvedLanguage?.substring(0, 2) === lng.code ? 'bg-gold text-white' : 'bg-cream-dark text-warm-muted'}`}
                    >
                      {lng.name}
                    </button>
                  ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="gold-gradient text-white w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gold-glow"
            >
              {t('nav.contact_us')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
