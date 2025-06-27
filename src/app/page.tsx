import { redirect } from 'next/navigation';

import { APP_ROUTES } from '@/consts/routes';

export default async function Index() {
  redirect(APP_ROUTES.formPages.href);
}
