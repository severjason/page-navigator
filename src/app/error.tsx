'use client';

import Link from 'next/link';

import { Buttons } from '@/components';
import { APP_ROUTES } from '@/consts/routes';

export default function Error() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="text-2xl p-4">{'Sorry! Something went wrong.'}</h1>
      <div className="pt-4">
        <Link href={APP_ROUTES.root.href}>
          <Buttons.Base size="lg">Back home</Buttons.Base>
        </Link>
      </div>
    </div>
  );
}
