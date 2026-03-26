export interface PortfolioProject {
  slug: string;
  image: string;
  categoryKey: string;
  gallery: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'eps-pools',
    image: '/esp/gallery 1.jpeg',
    categoryKey: 'portfolio.projects.labels.terrace_pool',
    gallery: [
      '/esp/gallery 1.jpeg',
      '/esp/gallery 2.jpeg',
      '/esp/gallery 3.jpeg',
      '/esp/gallery 4.jpeg',
      '/esp/gallery 5.jpeg',
      '/esp/gallery 6.jpeg',
      '/esp/gallery 7.jpeg',
      '/esp/gallery 8.jpeg'
    ]
  },
  {
    slug: 'hammam-turkisksauna',
    image: '/hammam/gallary 1.jpeg',
    categoryKey: 'portfolio.projects.labels.terrace_pool',
    gallery: [
      '/hammam/gallary 1.jpeg',
      '/hammam/gallery 2.jpeg',
      '/hammam/gallery 3.jpeg',
      '/hammam/gallery 4.jpeg',
      '/hammam/gallery 5.jpeg',
      '/hammam/gallery 6.jpeg',
      '/hammam/gallery 7.jpeg',
      '/hammam/gallery 8.jpeg'
    ]
  }
];
