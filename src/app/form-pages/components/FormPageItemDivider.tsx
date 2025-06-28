import React from 'react';

import clsx from 'clsx';

import { AddPageIconButton } from '@/app/form-pages/components/AddPageButton';

type FormPageItemDividerProps = {
  prevItemId: string;
};

export const FormPageItemDivider: React.FC<FormPageItemDividerProps> = ({ prevItemId }) => (
  <div className="w-5 shrink-0 transition-all flex items-center overflow-hidden group relative hover:w-14">
    <AddPageIconButton
      prevItemId={prevItemId}
      className={'invisible opacity-0  group-hover:visible group-hover:opacity-100 transition-opacity'}
    />
    <div
      className={clsx(
        'flex-1 h-[1.5px] transition-all group-hover:bg-position-[6.6px_0]',
        'bg-position-[5px_0] bg-repeat bg-size-[6.6px_100%] custom-divider',
      )}
    />
  </div>
);
