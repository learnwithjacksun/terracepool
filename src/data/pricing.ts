export interface PricingOption {
  id: string;
  nameKey: string;
  price: number;
  image?: string;
  drawingImage?: string;
}

export interface PricingCategory {
  categoryId: string;
  nameKey: string;
  type: 'single' | 'multiple'; // 'single' for radio/exclusive choices, 'multiple' for checkboxes
  options: PricingOption[];
}

export const poolModels: PricingOption[] = [
  { id: 'ibiza', nameKey: 'pricing.models.ibiza', price: 13500, image: '/models/image_0_4.jpeg', drawingImage: '/models/image_0_5.jpeg' },
  { id: 'formentera', nameKey: 'pricing.models.formentera', price: 16000, image: '/models/image_0_6.jpeg', drawingImage: '/models/image_0_7.jpeg' },
  { id: 'sotogrande', nameKey: 'pricing.models.sotogrande', price: 9900, image: '/models/image_1_9.jpeg', drawingImage: '/models/image_1_10.jpeg' },
  { id: 'alicante', nameKey: 'pricing.models.alicante', price: 10900, image: '/models/image_1_11.jpeg', drawingImage: '/models/image_1_12.jpeg' },
  { id: 'mallorca', nameKey: 'pricing.models.mallorca', price: 11900, image: '/models/image_2_14.jpeg', drawingImage: '/models/image_2_15.jpeg' },
  { id: 'menorca', nameKey: 'pricing.models.menorca', price: 21500, image: '/models/image_2_16.jpeg', drawingImage: '/models/image_2_17.jpeg' }
];

export const pricingCategories: PricingCategory[] = [
  {
    categoryId: 'stairs',
    nameKey: 'pricing.categories.stairs',
    type: 'single',
    options: [
      { id: 'step_small', nameKey: 'pricing.options.step_small', price: 800 },
      { id: 'step_big', nameKey: 'pricing.options.step_big', price: 1000 },
      { id: 'special_step', nameKey: 'pricing.options.special_step', price: 990 },
      { id: 'tech_room_step', nameKey: 'pricing.options.tech_room_step', price: 1200 }
    ]
  },
  {
    categoryId: 'benches',
    nameKey: 'pricing.categories.benches',
    type: 'multiple',
    options: [
      { id: 'bench_short', nameKey: 'pricing.options.bench_short', price: 1000 },
      { id: 'bench_long', nameKey: 'pricing.options.bench_long', price: 1250 },
      { id: 'air_bench', nameKey: 'pricing.options.air_bench', price: 2200 }
    ]
  },
  {
    categoryId: 'equipment',
    nameKey: 'pricing.categories.equipment',
    type: 'multiple',
    options: [
      { id: 'pipe_package', nameKey: 'pricing.options.pipe_package', price: 790 },
      { id: 'electric_heater', nameKey: 'pricing.options.electric_heater', price: 490 },
      { id: 'heat_pump', nameKey: 'pricing.options.heat_pump', price: 1850 },
      { id: 'salt_chlorinator', nameKey: 'pricing.options.salt_chlorinator', price: 1995 }
    ]
  },
  {
    categoryId: 'finish',
    nameKey: 'pricing.categories.finish',
    type: 'single',
    options: [
      { id: 'ceramic_interior', nameKey: 'pricing.options.ceramic_interior', price: 3100 },
      { id: 'ceramic_top', nameKey: 'pricing.options.ceramic_top', price: 3900 }
    ]
  },
  {
    categoryId: 'covers',
    nameKey: 'pricing.categories.covers',
    type: 'single',
    options: [
      { id: 'bubble_cover', nameKey: 'pricing.options.bubble_cover', price: 850 },
      { id: 'spa_cover_25', nameKey: 'pricing.options.spa_cover_25', price: 1250 },
      { id: 'spa_cover_36', nameKey: 'pricing.options.spa_cover_36', price: 2250 },
      { id: 'lamella_cover', nameKey: 'pricing.options.lamella_cover', price: 4500 } // Minimum listed price
    ]
  },
  {
    categoryId: 'transport',
    nameKey: 'pricing.categories.transport',
    type: 'single',
    options: [
      { id: 'mainland_spain', nameKey: 'pricing.options.mainland_spain', price: 1650 },
      { id: 'balearic_islands', nameKey: 'pricing.options.balearic_islands', price: 2650 } // 1650 + 1000 surcharge
    ]
  }
];
