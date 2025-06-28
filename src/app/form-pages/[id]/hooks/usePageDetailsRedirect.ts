import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { APP_ROUTES } from '@/consts/routes';

export const usePageDetailsRedirect = (pageDetails?: Nullable<FormPage>) => {
  const router = useRouter();

  useEffect(() => {
    if (pageDetails) return;
    router.replace(APP_ROUTES.formPages.href);
  }, [pageDetails, router]);
};
