const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'fr', 'it'];

const projectsData = {
  en: {
    list: {
      label: "Our Projects",
      title_1: "Recent",
      title_2: "Installations"
    },
    projects: {
      labels: {
        terrace_pool: "Terrace Pool",
        renovation: "Pool Renovation"
      },
      items: {
        "1": { title: "Rooftop Terrace Pool", location: "Ojén, Marbella" },
        "2": { title: "Custom Terrace Pool", location: "La Quinta, Marbella" },
        "3": { title: "Plunge Terrace Pool", location: "El Higuerón, Fuengirola" },
        "4": { title: "Full Pool Renovation", location: "Costa del Sol" }
      },
      details: {
        "ojen-marbella": {
          title: "Terrace Pool in Ojén (Marbella)",
          location: "Ojén, Marbella",
          description: "An elegant and stylish rooftop pool perfectly placed atop a penthouse in Ojén, just minutes from Marbella. It was custom-built to match the exact dimensions of the terrace and tailored to the client's vision.",
          features_label: "Project Features",
          features: [
            "Rooftop penthouse location",
            "Custom-built dimensions",
            "Private outdoor oasis",
            "Scandinavian engineering",
            "Panoramic mountain views"
          ]
        },
        "la-quinta-marbella": {
          title: "Terrace Pool in La Quinta, Marbella",
          location: "La Quinta, Marbella",
          description: "A custom-built terrace pool in the exclusive area of La Quinta, Marbella, designed to combine luxury with high functionality. Built with Scandinavian precision and premium materials.",
          features_label: "Project Features",
          features: [
            "Total weight under 400 kg/m² (including water)",
            "No building permit required",
            "Tiles from Ceramic Malor",
            "In-house transport & crane installation",
            "Fast and clean execution"
          ]
        },
        "el-higueron-fuengirola": {
          title: "Terrace Pool in El Higuerón",
          location: "El Higuerón, Fuengirola",
          description: "Located in the prestigious urbanization of El Higuerón, this apartment features an exquisite terrace pool offering a serene oasis of luxury and relaxation with breathtaking views.",
          features_label: "Project Features",
          features: [
            "High-end urbanization setting",
            "Tailor-made design and construction",
            "Breathtaking coastal views",
            "Advanced filtration system",
            "Integrated lounge area"
          ]
        }
      }
    },
    cta_btn: "Start Your Own Project"
  },
  es: {
    list: {
      label: "Nuestros Proyectos",
      title_1: "Instalaciones",
      title_2: "Recientes"
    },
    projects: {
      labels: {
        terrace_pool: "Piscina de Terraza",
        renovation: "Reforma de Piscina"
      },
      items: {
        "1": { title: "Piscina en Azotea", location: "Ojén, Marbella" },
        "2": { title: "Piscina de Terraza a Medida", location: "La Quinta" },
        "3": { title: "Piscina de Inmersión", location: "El Higuerón" },
        "4": { title: "Reforma Completa", location: "Costa del Sol" }
      },
      details: {
        "ojen-marbella": {
          title: "Piscina de Terraza en Ojén (Marbella)",
          location: "Ojén, Marbella",
          description: "Una elegante y estilizada piscina en la azotea, perfectamente ubicada sobre un ático en Ojén, a pocos minutos de Marbella. Fue construida a medida para ajustarse a las dimensiones exactas de la terraza y adaptada a la visión del cliente.",
          features_label: "Características del Proyecto",
          features: [
            "Ubicación en ático",
            "Dimensiones construidas a medida",
            "Oasis privado al aire libre",
            "Ingeniería escandinava",
            "Vistas panorámicas a la montaña"
          ]
        },
        "la-quinta-marbella": {
          title: "Piscina de Terraza en La Quinta, Marbella",
          location: "La Quinta, Marbella",
          description: "Una piscina de terraza construida a medida en la exclusiva zona de La Quinta, Marbella, diseñada para combinar lujo con alta funcionalidad. Construida con precisión escandinava y materiales de primera calidad.",
          features_label: "Características del Proyecto",
          features: [
            "Peso total inferior a 400 kg/m² (incluida el agua)",
            "Sin necesidad de licencia de obra",
            "Azulejos de Ceramic Malor",
            "Transporte propio e instalación con grúa",
            "Ejecución rápida y limpia"
          ]
        },
        "el-higueron-fuengirola": {
          title: "Piscina de Terraza en El Higuerón",
          location: "El Higuerón, Fuengirola",
          description: "Situada en la prestigiosa urbanización de El Higuerón, este apartamento cuenta con una exquisita piscina de terraza que ofrece un oasis sereno de lujo y relajación con vistas impresionantes.",
          features_label: "Características del Proyecto",
          features: [
            "Entorno de urbanización de lujo",
            "Diseño y construcción a medida",
            "Impresionantes vistas a la costa",
            "Sistema de filtración avanzado",
            "Zona de estar integrada"
          ]
        }
      }
    },
    cta_btn: "Comienza Tu Propio Proyecto"
  },
  fr: {
    list: {
      label: "Nos Projets",
      title_1: "Installations",
      title_2: "Récentes"
    },
    projects: {
      labels: {
        terrace_pool: "Piscine de Terrasse",
        renovation: "Rénovation de Piscine"
      },
      items: {
        "1": { title: "Piscine de Toit-Terrasse", location: "Ojén, Marbella" },
        "2": { title: "Piscine de Terrasse sur Mesure", location: "La Quinta" },
        "3": { title: "Petite Piscine de Terrasse", location: "El Higuerón" },
        "4": { title: "Rénovation Complète", location: "Costa del Sol" }
      },
      details: {
        "ojen-marbella": {
          title: "Piscine de Terrasse à Ojén (Marbella)",
          location: "Ojén, Marbella",
          description: "Une piscine de toit élégante et raffinée, parfaitement placée au sommet d'un penthouse à Ojén, à quelques minutes de Marbella. Elle a été construite sur mesure pour s'adapter aux dimensions exactes de la terrasse et à la vision du client.",
          features_label: "Caractéristiques du Projet",
          features: [
            "Emplacement sur toit-terrasse",
            "Dimensions sur mesure",
            "Oasis extérieure privée",
            "Ingénierie scandinave",
            "Vues panoramiques sur les montagnes"
          ]
        },
        "la-quinta-marbella": {
          title: "Piscine de Terrasse à La Quinta, Marbella",
          location: "La Quinta, Marbella",
          description: "Une piscine de terrasse construite sur mesure dans le quartier exclusif de La Quinta, Marbella, conçue pour allier luxe et haute fonctionnalité. Construite avec la précision scandinave et des matériaux premium.",
          features_label: "Caractéristiques du Projet",
          features: [
            "Poids total inférieur à 400 kg/m² (eau incluse)",
            "Pas de permis de construire requis",
            "Carrelage Ceramic Malor",
            "Transport interne et installation par grue",
            "Exécution rapide et propre"
          ]
        },
        "el-higueron-fuengirola": {
          title: "Piscine de Terrasse à El Higuerón",
          location: "El Higuerón, Fuengirola",
          description: "Situé dans la prestigieuse urbanisation d'El Higuerón, cet appartement dispose d'une piscine de terrasse exquise offrant une oasis sereine de luxe et de détente avec des vues imprenables.",
          features_label: "Caractéristiques du Projet",
          features: [
            "Cadre d'urbanisation haut de gamme",
            "Conception et construction sur mesure",
            "Vues imprenables sur la côte",
            "Système de filtration avancé",
            "Espace lounge intégré"
          ]
        }
      }
    },
    cta_btn: "Commencez Votre Propre Projet"
  },
  it: {
    list: {
      label: "I Nostri Progetti",
      title_1: "Installazioni",
      title_2: "Recenti"
    },
    projects: {
      labels: {
        terrace_pool: "Piscina da Terrazza",
        renovation: "Ristrutturazione Piscine"
      },
      items: {
        "1": { title: "Piscina su Terrazzo Panoramico", location: "Ojén, Marbella" },
        "2": { title: "Piscina da Terrazza su Misura", location: "La Quinta" },
        "3": { title: "Piscina da Terrazza Plunge", location: "El Higuerón" },
        "4": { title: "Ristrutturazione Completa", location: "Costa del Sol" }
      },
      details: {
        "ojen-marbella": {
          title: "Piscina da Terrazza a Ojén (Marbella)",
          location: "Ojén, Marbella",
          description: "Una piscina panoramica elegante e raffinata, perfettamente posizionata sopra un attico a Ojén, a pochi minuti da Marbella. È stata costruita su misura per adattarsi alle dimensioni esatte della terrazza e alla visione del cliente.",
          features_label: "Caratteristiche del Progetto",
          features: [
            "Posizione su attico panoramico",
            "Dimensioni costruite su misura",
            "Oasi privata all'aperto",
            "Ingegneria scandinava",
            "Vista panoramica sulle montagne"
          ]
        },
        "la-quinta-marbella": {
          title: "Piscina da Terrazza a La Quinta, Marbella",
          location: "La Quinta, Marbella",
          description: "Una piscina da terrazza costruita su misura nella zona esclusiva di La Quinta, Marbella, progettata per unire lusso e alta funzionalità. Costruita con precisione scandinava e materiali premium.",
          features_label: "Caratteristiche del Progetto",
          features: [
            "Peso totale inferiore a 400 kg/m² (acqua inclusa)",
            "Nessun permesso di costruzione richiesto",
            "Piastrelle Ceramic Malor",
            "Trasporto interno e installazione con gru",
            "Esecuzione rapida e pulita"
          ]
        },
        "el-higueron-fuengirola": {
          title: "Piscina da Terrazza a El Higuerón",
          location: "El Higuerón, Fuengirola",
          description: "Situato nella prestigiosa urbanizzazione di El Higuerón, questo appartamento dispone di una squisita piscina da terrazza che offre un'oasi serena di lusso e relax con viste mozzafiato.",
          features_label: "Caratteristiche del Progetto",
          features: [
            "Contesto residenziale di alto livello",
            "Progettazione e costruzione su misura",
            "Vista costiera mozzafiato",
            "Sistema di filtrazione avanzato",
            "Area lounge integrata"
          ]
        }
      }
    },
    cta_btn: "Inizia il Tuo Progetto"
  }
};

const srcDir = path.join('c:', 'Users', 'heisa', 'terracepool', 'src', 'locales');

locales.forEach(lang => {
  const file = path.join(srcDir, lang, 'translation.json');
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  if (json.portfolio) {
    json.portfolio.list = projectsData[lang].list;
    json.portfolio.projects = projectsData[lang].projects;
    json.portfolio.cta_btn = projectsData[lang].cta_btn;
    fs.writeFileSync(file, JSON.stringify(json, null, 2));
    console.log(`Updated ${lang}`);
  }
});
