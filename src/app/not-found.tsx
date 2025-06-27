import { Metadata } from 'next';
import Link from 'next/link';

import { Buttons } from '@/components';
import { APP_ROUTES } from '@/consts/routes';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Page not found',
    description: 'Page not found',
  };
}

export default function NotFound() {
  return (
    <div className={'flex w-screen h-screen overflow-hidden items-center justify-center flex-col'}>
      <div className="flex flex-col justify-center items-center z-50">
        <h1 className="text-4xl text-primary-900">Page not found</h1>
        <div className="pt-4">
          <Link href={APP_ROUTES.root.href}>
            <Buttons.Base size="lg">Back to Home</Buttons.Base>
          </Link>
        </div>
      </div>
    </div>
  );
}
