import { APP_ROUTES } from '@/consts/routes';
import { getPageMetadata } from '@/utils/getPageMetadata';

export async function generateMetadata() {
  return getPageMetadata(APP_ROUTES.formPagesDetails.title);
}

export default async function PageDetails() {
  return <div />;
}
