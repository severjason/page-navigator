'use client';

import { Buttons } from 'src/shared/components';

import { APP_ROUTES } from '@/consts/routes';

export default function Error() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="text-2xl p-4 text-secondary-900">Sorry! Something went wrong.</h1>
      <div className="pt-4">
        <Buttons.Link href={APP_ROUTES.root.href} size="lg">
          Back home
        </Buttons.Link>
      </div>
    </div>
  );
}
