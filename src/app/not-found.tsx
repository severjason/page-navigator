import { Metadata } from 'next';
import { Buttons } from 'src/shared/components';

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
        <h1 className="text-4xl text-secondary-900">Page not found</h1>
        <div className="pt-4">
          <Buttons.Link size="lg" href={APP_ROUTES.root.href}>
            Back to Home
          </Buttons.Link>
        </div>
      </div>
    </div>
  );
}
