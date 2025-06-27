import { APP_CONFIG } from '@/consts/appConfig';

export const getPageMetadata = (title: string) => ({
  title: `${title} | ${APP_CONFIG.mainName}`,
  description: APP_CONFIG.description,
});
