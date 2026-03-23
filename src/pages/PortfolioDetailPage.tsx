import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowUpRight, MapPin, CheckCircle2, Sparkles, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { portfolioProjects, type PortfolioProject } from '../data/portfolio';

const PortfolioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const foundProject = portfolioProjects.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Redirect to portfolio if project not found
      navigate('/portfolio');
    }
  }, [slug, navigate]);

  if (!project) return null;

  const openLightbox = (img: string) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-32 md:pt-40 pb-20">
        {/* Navigation / Back Button */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-8 md:mb-12">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-warm-text-light hover:text-gold transition-colors text-sm font-bold group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            {t('nav.portfolio_back', { defaultValue: 'Back to Portfolio' })}
          </Link>
        </section>

        {/* Project Hero Header */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
                <Sparkles size={14} /> {t(project.categoryKey)}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text leading-[0.95] mb-6 md:mb-8">
                {t(`portfolio.projects.details.${project.slug}.title`)}
              </h1>
              <div className="flex items-center gap-2 text-gold-dark font-medium mb-8">
                <MapPin size={18} />
                <span>{t(`portfolio.projects.details.${project.slug}.location`)}</span>
              </div>
              <p className="text-lg md:text-xl text-warm-text-light leading-relaxed mb-10 max-w-xl">
                {t(`portfolio.projects.details.${project.slug}.description`)}
              </p>
              
              <div className="bg-white rounded-3xl p-8 md:p-10 warm-shadow border border-gold/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-gold" />
                  </div>
                  {t(`portfolio.projects.details.${project.slug}.features_label`)}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(t(`portfolio.projects.details.${project.slug}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-warm-text-light text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden warm-shadow-lg group">
              <img 
                src={project.image} 
                alt={t(`portfolio.projects.details.${project.slug}.title`)}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-text/30 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-milk py-20 md:py-32 border-y border-warm-border/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-gold text-xs font-label tracking-widest uppercase block mb-4">
                  {t('portfolio.gallery_label', { defaultValue: 'Immersion Gallery' })}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-warm-text leading-tight">
                  {t('portfolio.gallery_title_1', { defaultValue: 'Visualizing the' })} <span className="font-serif italic gold-text">{t('portfolio.gallery_title_2', { defaultValue: 'Details' })}</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {project.gallery.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream-dark warm-shadow cursor-pointer group ${
                    index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(img)}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-warm-text/0 group-hover:bg-warm-text/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 md:mt-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-warm-text mb-6">
              {t('portfolio.project_cta_title', { defaultValue: 'Inspired by this project?' })}
            </h2>
            <p className="text-base md:text-lg text-warm-text-light mb-10">
              {t('portfolio.project_cta_desc', { defaultValue: 'We can adapt this design to your specific terrace. Contact our experts for a consultation.' })}
            </p>
            <Link to="/contact" className="gold-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg gold-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center justify-center gap-2">
              {t('portfolio.project_cta_btn', { defaultValue: 'Get a Quote Today' })} <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-warm-text/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in" onClick={closeLightbox}>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 rounded-full bg-white/5"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Lightbox" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
