import React, { ReactNode } from 'react';

import { Layouts } from 'src/shared/components';

import { FormPageLayout } from '@/app/form-pages/components/FormPageLayout';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Layouts.Public>
      <FormPageLayout>{children}</FormPageLayout>
    </Layouts.Public>
  );
}
