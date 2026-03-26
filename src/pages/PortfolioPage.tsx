import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioProjects } from '../data/portfolio';
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
            {portfolioProjects.map((project, index) => {
              const isLarge = Math.floor(index / 2) % 2 === 0 ? index % 2 === 0 : index % 2 !== 0;
              const title = t(`portfolio.projects.details.${project.slug}.title`);
              const location = t(`portfolio.projects.details.${project.slug}.location`);
              const category = t(project.categoryKey);

              return (
                <Link 
                  key={project.slug} 
                  to={`/portfolio/${project.slug}`} 
                  className={`${isLarge ? 'md:col-span-8' : 'md:col-span-4'} ${index < 2 ? 'md:h-[550px]' : 'md:h-[350px]'} group relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-dark aspect-[4/3] md:aspect-auto cursor-pointer warm-shadow`}
                >
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.image} alt={title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-text/80 via-transparent to-transparent opacity-80 md:opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-gold-light text-[9px] md:text-[10px] font-label tracking-[0.2em] uppercase mb-1.5 md:mb-2 block">{category}</span>
                        <h3 className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-white mb-1`}>{title}</h3>
                        <p className="text-white/80 md:text-white/70 flex items-center gap-1.5 text-xs md:text-sm"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> {location}</p>
                      </div>
                      <div className={`gold-gradient ${isLarge ? 'w-10 md:w-12 h-10 md:h-12' : 'w-8 h-8'} rounded-full flex items-center justify-center text-white ${isLarge ? 'md:scale-0 group-hover:scale-100' : 'md:hidden'} transition-transform duration-300`}>
                        <ArrowUpRight size={isLarge ? 20 : 16} className={isLarge ? "md:w-[22px] md:h-[22px]" : ""} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
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
