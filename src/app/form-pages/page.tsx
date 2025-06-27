import { APP_ROUTES } from '@/consts/routes';
import { getPageMetadata } from '@/utils/getPageMetadata';

export async function generateMetadata() {
  return getPageMetadata(APP_ROUTES.formPages.title);
}

export default async function FormPages() {
  return null;
}
