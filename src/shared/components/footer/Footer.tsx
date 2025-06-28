import { APP_CONFIG } from '@/consts/appConfig';

export const Footer = () => {
  return (
    <footer className="h-8 gap-4 px-4 md:px-6 w-max z-1 self-center d-flex">
      <p className="text-black text-sm">{`${APP_CONFIG.mainName} @ ${new Date().getFullYear()}`}</p>
    </footer>
  );
};
