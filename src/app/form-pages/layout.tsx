import React, { ReactNode } from 'react';

import { FormPageLayout } from '@/app/form-pages/components/FormPageLayout';
import { Layouts } from '@/components';

export default async function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Layouts.Public>
      <FormPageLayout>{children}</FormPageLayout>
    </Layouts.Public>
  );
}
