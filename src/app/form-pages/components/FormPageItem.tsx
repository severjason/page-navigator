import React, { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';
import { useParams, useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Buttons } from 'src/shared/components';
import { CircleCheckIcon, DocumentIcon, InfoIcon } from 'src/shared/icons';

import { PageDragType, useItemsDropAndDrop } from '@/app/form-pages/hooks/useItemsDropAndDrop';
import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { APP_ROUTES } from '@/consts/routes';
import { generatePath } from '@/utils/generatePath';

import { DropIndicator } from './DropIndicator';
import { FormPageSettings } from './FormPageSettings';

type FormPageElementProps = {
  page: FormPage;
  index: number;
  isLast?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
};

const ElementIcon: React.FC<
  ComponentPropsWithRef<typeof InfoIcon> & Pick<FormPageElementProps, 'index' | 'isLast'>
> = ({ index, isLast, ...props }) => {
  if (index === 0) return <InfoIcon {...props} />;
  if (isLast) return <CircleCheckIcon {...props} />;
  return <DocumentIcon {...props} />;
};

const FormPageElement: React.FC<FormPageElementProps> = ({ index, isLast, page, ref, className }) => {
  const { id: paramId } = useParams<{ id?: string }>();
  const router = useRouter();

  const isActive = paramId === page.id;

  const handleClick = () => {
    if (isActive) return;

    router.push(generatePath(APP_ROUTES.formPagesDetails.href, { id: page.id }));
  };

  return (
    <Buttons.Base
      data-page-id={page.id}
      ref={ref}
      variant={isActive ? 'default' : 'secondary'}
      onClick={handleClick}
      className={clsx('group', className)}
    >
      <ElementIcon
        data-type={'start-icon'}
        data-active={isActive}
        index={index}
        isLast={isLast}
        className={'data-[active=true]:text-primary-500 group-focus-visible:text-primary-500'}
      />
      {page.title}
      <FormPageSettings {...page} />
    </Buttons.Base>
  );
};

export const DraggableFormPageElement: React.FC<FormPageElementProps> = (props) => {
  const { ref, state } = useItemsDropAndDrop(props.page);
  return (
    <div className={'relative flex flex-nowrap'}>
      <FormPageElement ref={ref} {...props} className={state.type === PageDragType.isDragging ? 'opacity-40' : ''} />
      {state.type === PageDragType.isDraggingOver && state.closestEdge ? (
        <DropIndicator edge={state.closestEdge} isFirst={props.index === 0} />
      ) : null}
      {state.type === PageDragType.preview ? createPortal(<FormPageElement {...props} />, state.container) : null}
    </div>
  );
};
