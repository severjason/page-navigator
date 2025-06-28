import React from 'react';

import clsx from 'clsx';
import { Buttons } from 'src/shared/components';

import { useAddPageContext } from '@/app/form-pages/hooks/useAddPage';
import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { PlusIcon } from '@/shared/icons';

export const AddPageButton = () => {
  const { onOpen } = useAddPageContext();
  const { pages } = useFormPageContext();

  return (
    <Buttons.Base onClick={() => onOpen(pages[pages.length - 1].id)}>
      <PlusIcon className="h-4 w-4" />
      Add page
    </Buttons.Base>
  );
};

type AddPageIconButtonProps = {
  prevItemId: string;
  className?: string;
};

export const AddPageIconButton: React.FC<AddPageIconButtonProps> = ({ className, prevItemId }) => {
  const { onOpen } = useAddPageContext();

  return (
    <span className={clsx('absolute flex w-full z-20 justify-center items-center bg-transparent', className)}>
      <Buttons.Icon size="sm" onClick={() => onOpen(prevItemId)} icon={<PlusIcon />} />
    </span>
  );
};
