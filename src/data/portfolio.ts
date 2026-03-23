export interface PortfolioProject {
  slug: string;
  image: string;
  gallery: string[];
  categoryKey: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ojen-marbella',
    image: 'https://terracepool.com/wp-content/uploads/2025/07/Roof-Terrace-Pool.webp',
    categoryKey: 'portfolio.projects.labels.terrace_pool',
    gallery: [
      'https://terracepool.com/wp-content/uploads/2025/07/Stunning-Rooftop-Pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Terrace-Pool-Construction.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Filling-a-Terrace-Pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Raised-Terrace-Pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Terrace-Pool-Spain.jpg'
    ]
  },
  {
    slug: 'la-quinta-marbella',
    image: 'https://terracepool.com/wp-content/uploads/2025/07/Plunge-pool-Marbella-e1752060744592.jpg',
    categoryKey: 'portfolio.projects.labels.terrace_pool',
    gallery: [
      'https://terracepool.com/wp-content/uploads/2025/07/La-Quinta-Terrace-Pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Plunge-pool-Marbella-e1752060744592.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Tailor-made-pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Luxury-pool-tile.jpg'
    ]
  },
  {
    slug: 'el-higueron-fuengirola',
    image: 'https://terracepool.com/wp-content/uploads/2021/03/Terrace-pool-Fuengirola.jpg',
    categoryKey: 'portfolio.projects.labels.terrace_pool',
    gallery: [
      'https://terracepool.com/wp-content/uploads/2025/07/Terrace-Lounge-Pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Terrace-splash-pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Pool-tilings.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Tailor-built-terrace-pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Quality-Pool-installations.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Terrace-pool-filter.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Plunge-pool.jpg',
      'https://terracepool.com/wp-content/uploads/2025/07/Installation-Terrace-Pool.jpg'
    ]
  },
  {
    slug: 'costa-del-sol-renovation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4V1ZmbVpVmo_xwgWW_xZWN7NQDvfo6yaT_bs5YpYhHlM0rndH6NpQ_MsB0_NuuVSR7uNDGEc3ahUgdvCjBCZb07lRBgml9GbUogaHq-TBEl4tiYHye5lHecWxILeiJCrPGQdPJUoK1iXtke-JPI8YQrDHw5WAr_QdQsWMqpY29BD1MzBYApYHe4xZrzMC0BYqM8_uRjLWLoqU98kM24cmsgY6MaK7ObfCNy_AYrO1obke45v0ytiD3onQaIqORoMslqFyv-jW0Nn0',
    categoryKey: 'portfolio.projects.labels.renovation',
    gallery: []
  }
];
