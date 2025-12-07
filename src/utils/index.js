const PAGE_ROUTES = {
  Home: '/',
  States: '/states',
  History: '/history',
  Food: '/food',
  Stories: '/stories',
  Festivals: '/festivals',
  Quizzes: '/quizzes',
  Instagram: '/instagram',
  AboutUs: '/about-us',
  ExecutiveBoard: '/executive-board',
  LightTheLegacy: '/light-the-legacy',
  ShareYourDiwali: '/share-your-diwali',
  IndiaMap: '/india-map'
};

export const createPageUrl = (name) => {
  if (!name) return '/';
  if (name.startsWith('State-')) {
    const slug = name.replace(/^State-/, '').toLowerCase();
    return `/state/${slug}`;
  }
  return PAGE_ROUTES[name] || `/${name.toLowerCase()}`;
};

export const slugify = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
