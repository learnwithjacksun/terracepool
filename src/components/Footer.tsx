import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English (EN)" },
  { code: "es", name: "Español (ES)" },
  { code: "fr", name: "Français (FR)" },
  { code: "sv", name: "Svenska (SV)" },
];

/** Legacy Google Maps embed (no API key). Centered on the geocoded address search. */
function googleMapsEmbedSrc(query: string, hl: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=${hl}&z=16&output=embed`;
}

function googleMapsOpenHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const hl = (() => {
    const code = i18n.resolvedLanguage?.split("-")[0] || "en";
    return ["en", "es", "fr", "sv"].includes(code) ? code : "en";
  })();

  const mapQueries = {
    estepona: "Av. Puerta del Mar, 59, 29680 Estepona, Málaga, Spain",
    palma: "Carrer d'Anselm Turmeda, 9, 07010 Palma, Illes Balears, Spain",
  } as const;

  const mapBlocks = [
    {
      labelKey: "footer.location_estepona_label" as const,
      addressKey: "footer.location_estepona_address" as const,
      titleKey: "footer.map_estepona_title" as const,
      query: mapQueries.estepona,
    },
    {
      labelKey: "footer.location_palma_label" as const,
      addressKey: "footer.location_palma_address" as const,
      titleKey: "footer.map_palma_title" as const,
      query: mapQueries.palma,
    },
  ];

  return (
    <footer className="bg-cream-dark border-t border-warm-border py-12 md:py-16 px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-4">
            <img
              src="/Terrace-Pool-Logo-w.png"
              alt="Terrace Pool"
              className="h-10 md:h-12"
            />
          </div>
          <p className="text-warm-text-light text-sm font-bold mb-1">
            Scandinavian Quality Wood & Construction S.L.
          </p>
          <p className="text-warm-muted text-sm leading-relaxed">
            {t("footer.desc")}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-4 md:mb-5">
            {t("footer.services")}
          </h4>
          <ul className="space-y-2 md:space-y-3 text-sm text-warm-muted">
            <li>
              <Link
                className="hover:text-gold transition-colors duration-300 whitespace-nowrap"
                to="/terrace-pools"
              >
                {t("nav.terrace_pools")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gold transition-colors duration-300 whitespace-nowrap"
                to="/pool-renovations"
              >
                {t("nav.pool_renovations")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gold transition-colors duration-300 whitespace-nowrap"
                to="/pool-tech"
              >
                {t("nav.pool_technology")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gold transition-colors duration-300 whitespace-nowrap"
                to="/prices"
              >
                {t("nav.prices")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-4 md:mb-5">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-2 md:space-y-3 text-sm text-warm-muted">
            <li>
              <a
                className="hover:text-gold transition-colors duration-300"
                href="tel:+34632939849"
              >
                +34 632 939 849
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold transition-colors duration-300"
                href="mailto:info@terracepool.com"
              >
                info@terracepool.com
              </a>
            </li>
            <li>{t("footer.hours_val")}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-4 md:mb-5">
            {t("footer.locations")}
          </h4>
          <p className="text-warm-muted text-sm leading-relaxed mb-4">
            {t("footer.location_blurb")}
          </p>
          <ul className="space-y-4 text-sm text-warm-muted">
            {mapBlocks.map((m) => (
              <li key={m.labelKey}>
                <span className="font-bold text-warm-text block mb-1">
                  {t(m.labelKey)}
                </span>
                <span className="leading-relaxed">{t(m.addressKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 md:mt-12 pt-8 md:pt-10 border-t border-warm-border grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {mapBlocks.map((m) => (
          <div key={m.labelKey} className="flex flex-col">
            <p className="font-bold text-warm-text text-sm mb-1">{t(m.labelKey)}</p>
            <p className="text-warm-muted text-xs mb-3 leading-relaxed">
              {t(m.addressKey)}
            </p>
            <div className="relative w-full overflow-hidden rounded-xl border border-warm-border warm-shadow aspect-[4/3] min-h-[200px] max-h-[280px] bg-warm-border/20">
              <iframe
                title={t(m.titleKey)}
                src={googleMapsEmbedSrc(m.query, hl)}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={googleMapsOpenHref(m.query)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs text-gold hover:underline font-medium"
            >
              {t("footer.open_in_maps")}
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex items-center  md:gap-6 gap-2 mb-3 text-warm-muted text-xs font-bold uppercase tracking-widest">
          <Globe size={14} /> {t("footer.language")}
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          {languages.map((lng) => (
            <div
              key={lng.code}
              onClick={() => i18n.changeLanguage(lng.code)}
              className={`text-left text-sm cursor-pointer transition-colors ${i18n.resolvedLanguage?.substring(0, 2) === lng.code ? "text-gold font-bold" : "text-warm-muted hover:text-gold"}`}
            >
              {lng.name}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 md:mt-12 pt-6 md:pt-8 border-t border-warm-border text-center">
        <p className="text-warm-muted text-xs md:text-sm">
          © 2024 Scandinavian Quality Wood & Construction S.L.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
