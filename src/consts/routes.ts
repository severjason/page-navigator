export type AppRoute = {
  title: string;
  href: string;
};

export const APP_ROUTES = {
  root: {
    title: 'Main page',
    href: '/',
  },
  formPages: {
    title: 'Form pages selection',
    href: '/form-pages',
  },
  formPagesDetails: {
    title: 'Form page Details',
    href: '/form-pages/:id',
  },
} as const satisfies Record<string, AppRoute>;
