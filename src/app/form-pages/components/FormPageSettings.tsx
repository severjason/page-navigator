import React from 'react';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { ClipboardIcon, DotsIcon, DoubleSquaresIcon, FlagIcon, PencilIcon } from 'src/shared/icons';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { FormPage } from '@/app/form-pages/interfaces/formPage';
import { Dropdown } from '@/shared/components';

type MenuLinkProps = React.ComponentPropsWithRef<typeof Dropdown.Lib.MenuItem> & {
  title: string;
  icon: React.ReactNode;
};

const SettingMenuItem: React.FC<MenuLinkProps> = ({ icon, title, className, ...props }) => (
  <Dropdown.Lib.MenuItem className={clsx('flex items-center gap-1.5 text-secondary-950', className)} {...props}>
    {icon}
    {title}
  </Dropdown.Lib.MenuItem>
);

export const FormPageSettings: React.FC<Pick<FormPage, 'id'>> = ({ id }) => {
  const { id: paramId } = useParams<{ id: string }>();
  const { onRemovePage, pages } = useFormPageContext();

  const isDeleteAllowed = pages.length > 1;

  const isActive = paramId === id;

  if (!isActive) return null;

  return (
    <>
      <Dropdown.Lib.Menu>
        <Dropdown.Lib.MenuTrigger asChild>
          <DotsIcon className={'text-secondary-500'} />
        </Dropdown.Lib.MenuTrigger>
        <Dropdown.Lib.MenuContent align="start">
          <Dropdown.Lib.Label
            className={`text-secondary-950 text-base px-3 py-2 bg-secondary-50 border-b-[0.5px] border-secondary-200`}
          >
            Settings
          </Dropdown.Lib.Label>
          <Dropdown.Lib.Group>
            <SettingMenuItem title={'Set as first page'} icon={<FlagIcon className="text-blue-600" />} />
            <SettingMenuItem title={'Rename'} icon={<PencilIcon className="text-secondary-500" />} />
            <SettingMenuItem title={'Copy'} icon={<ClipboardIcon className="text-secondary-500" />} />
            <SettingMenuItem title={'Duplicate'} icon={<DoubleSquaresIcon className="text-secondary-500" />} />
            <Dropdown.Lib.MenuSeparator className="mx-3" />
            <SettingMenuItem
              disabled={!isDeleteAllowed}
              onClick={() => onRemovePage(id)}
              className={'!text-red-500'}
              title={'Delete'}
              icon={<DoubleSquaresIcon className="text-red-500" />}
            />
          </Dropdown.Lib.Group>
        </Dropdown.Lib.MenuContent>
      </Dropdown.Lib.Menu>
    </>
  );
};
