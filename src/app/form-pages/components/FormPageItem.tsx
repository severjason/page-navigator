import React, { ComponentPropsWithRef } from 'react';

import { useParams, useRouter } from 'next/navigation';
import { Buttons } from 'src/shared/components';
import { CircleCheckIcon, DocumentIcon, InfoIcon } from 'src/shared/icons';

import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { APP_ROUTES } from '@/consts/routes';
import { generatePath } from '@/utils/generatePath';

import { FormPageSettings } from './FormPageSettings';

type FormPageElementProps = FormPage & {
  index: number;
  isLast?: boolean;
};

const ElementIcon: React.FC<
  ComponentPropsWithRef<typeof InfoIcon> & Pick<FormPageElementProps, 'index' | 'isLast'>
> = ({ index, isLast, ...props }) => {
  if (index === 0) return <InfoIcon {...props} />;
  if (isLast) return <CircleCheckIcon {...props} />;
  return <DocumentIcon {...props} />;
};

export const FormPageElement: React.FC<FormPageElementProps> = ({ index, isLast, ...props }) => {
  const { id: paramId } = useParams<{ id?: string }>();
  const router = useRouter();

  const isActive = paramId === props.id;

  const handleClick = () => {
    if (isActive) return;

    router.push(generatePath(APP_ROUTES.formPagesDetails.href, { id: props.id }));
  };

  return (
    <Buttons.Base data- variant={isActive ? 'default' : 'secondary'} onClick={handleClick} className={'group '}>
      <ElementIcon
        data-type={'start-icon'}
        data-active={isActive}
        index={index}
        isLast={isLast}
        className={'data-[active=true]:text-primary-500 group-focus-visible:text-primary-500'}
      />
      {props.title}
      <FormPageSettings {...props} />
    </Buttons.Base>
  );
};
