import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { Buttons } from '@/components';
import { APP_ROUTES } from '@/consts/routes';
import { generatePath } from '@/utils/generatePath';

export const FormPageElement: React.FC<FormPage> = ({ id, title }) => {
  const { id: paramId } = useParams<{ id?: string }>();
  const router = useRouter();
  const isActive = paramId === id;

  const handleClick = () => {
    if (isActive) return;

    router.push(generatePath(APP_ROUTES.formPagesDetails.href, { id }));
  };

  return (
    <Buttons.Base className={isActive ? '!bg-green-400' : ''} onClick={handleClick}>
      {title}
    </Buttons.Base>
  );
};
