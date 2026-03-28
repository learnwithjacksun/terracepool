import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  galleryBuilding,
  galleryRenovation,
  galleryVideos,
  type GalleryItem,
  type GalleryVideoItem,
} from "../data/gallery";

const MasonrySection: React.FC<{
  title: string;
  description?: string;
  items: GalleryItem[];
  aosBaseDelay: number;
  onOpen: (src: string) => void;
  altBase: string;
}> = ({ title, description, items, aosBaseDelay, onOpen, altBase }) => (
  <section className="mb-16 md:mb-24 last:mb-0">
    <div
      data-aos="fade-up"
      className="mb-8 md:mb-10 text-center lg:text-left max-w-3xl lg:mx-0 mx-auto"
    >
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-warm-text mb-3 leading-tight">
        {title}
      </h2>
      <p className="text-warm-text-light text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [column-gap:1rem] md:[column-gap:1.5rem] [column-fill:_balance]">
      {items.map((item, index) => (
        <div
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={aosBaseDelay + (index % 5) * 40}
          className="break-inside-avoid mb-4 md:mb-6"
        >
          <button
            type="button"
            onClick={() => onOpen(item.src)}
            className="group relative w-full text-left rounded-2xl overflow-hidden border-2 border-warm-border/30 bg-white warm-shadow transition-all duration-300 hover:border-gold/40 hover:warm-shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <img
              src={item.src}
              alt={`${altBase} ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      ))}
    </div>
  </section>
);

const VideoMasonrySection: React.FC<{
  title: string;
  description: string;
  items: GalleryVideoItem[];
  aosBaseDelay: number;
  videoLabel: string;
}> = ({ title, description, items, aosBaseDelay, videoLabel }) => (
  <section className="mb-16 md:mb-24 last:mb-0">
    <div
      data-aos="fade-up"
      className="mb-8 md:mb-10 text-center lg:text-left max-w-3xl lg:mx-0 mx-auto"
    >
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-warm-text mb-3 leading-tight">
        {title}
      </h2>
      <p className="text-warm-text-light text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
    <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:1rem] md:[column-gap:1.5rem] [column-fill:_balance]">
      {items.map((item, index) => (
        <div
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={aosBaseDelay + (index % 5) * 40}
          className="break-inside-avoid mb-4 md:mb-6"
        >
          <div className="rounded-2xl overflow-hidden border-2 border-warm-border/30 bg-black warm-shadow transition-all duration-300 hover:border-gold/40 hover:warm-shadow-lg">
            <video
              src={item.src}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto object-cover max-h-[min(70vh,480px)] sm:max-h-none"
              aria-label={`${videoLabel} ${index + 1}`}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxSrc, closeLightbox]);

  return (
    <div className="bg-cream text-warm-text font-body antialiased overflow-x-hidden relative min-h-screen">
      <Navbar />

      <main className="pt-32 md:pt-36 pb-20">
        <section
          data-aos="fade-up"
          className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 text-gold text-[10px] md:text-xs font-label tracking-widest uppercase mb-4 md:mb-6">
            <Sparkles size={14} /> {t("gallery.hero.label")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-warm-text mb-4 md:mb-6 leading-[0.95]">
            {t("gallery.hero.title_1")}
            <br />
            <span className="font-serif italic gold-text">
              {t("gallery.hero.title_2")}
            </span>
          </h1>
          <p className="text-base md:text-lg text-warm-text-light leading-relaxed max-w-2xl lg:mx-0 mx-auto">
            {t("gallery.hero.desc")}
          </p>
        </section>

        <section className="max-w-[90rem] mx-auto px-6 md:px-8">
          <MasonrySection
            title={t("gallery.building.title")}
            items={galleryBuilding}
            aosBaseDelay={0}
            onOpen={setLightboxSrc}
            altBase={t("gallery.image_alt_building")}
          />
          <MasonrySection
            title={t("gallery.renovation.title")}
            description={t("gallery.renovation.desc")}
            items={galleryRenovation}
            aosBaseDelay={80}
            onOpen={setLightboxSrc}
            altBase={t("gallery.image_alt_renovation")}
          />
          <VideoMasonrySection
            title={t("gallery.videos.title")}
            description={t("gallery.videos.desc")}
            items={galleryVideos}
            aosBaseDelay={120}
            videoLabel={t("gallery.videos.clip_label")}
          />
        </section>

        <section
          data-aos="fade-up"
          className="max-w-7xl mx-auto px-6 md:px-8 mt-8 md:mt-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 warm-shadow-lg border border-warm-border/30 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-warm-text mb-2">
                {t("gallery.cta_title")}
              </h3>
              <p className="text-warm-text-light text-sm md:text-base max-w-xl">
                {t("gallery.cta_desc")}
              </p>
            </div>
            <Link
              to="/contact"
              className="gold-gradient text-white px-8 py-4 rounded-xl font-bold text-sm md:text-base gold-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center justify-center gap-2 shrink-0"
            >
              {t("gallery.cta_btn")} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t("gallery.lightbox_label")}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={t("gallery.close")}
          >
            <X size={22} />
          </button>
          <img
            src={lightboxSrc}
            alt=""
            className="max-h-[min(90vh,100%)] max-w-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
