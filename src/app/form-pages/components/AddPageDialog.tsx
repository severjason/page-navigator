import React, { FormEventHandler, useState } from 'react';

import { useAddPageContext } from '@/app/form-pages/hooks/useAddPage';
import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';
import { Buttons, Dialogs, Forms } from '@/shared/components';

export const AddPageDialog = () => {
  const [newTitle, setNewTitle] = useState('');
  const { isOpened, onClose, selectedId } = useAddPageContext();
  const { onAddPage } = useFormPageContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value);

  if (!selectedId) return null;

  const handleSubmit: FormEventHandler<HTMLFormElement> = () => {
    onAddPage(selectedId, { title: newTitle.trim() });
    onClose();
    setNewTitle('');
  };

  return (
    <Dialogs.Base open={isOpened} onOpenChange={onClose} title="Name your form page">
      <Forms.Form onSubmit={handleSubmit} className="p-2 flex flex-col gap-2">
        <Forms.Input maxLength={25} autoFocus label={'Title'} onChange={handleChange} value={newTitle} />
        <div className="flex flex-row justify-end">
          <Buttons.Base disabled={!newTitle.trim()} type="submit">
            Continue
          </Buttons.Base>
        </div>
      </Forms.Form>
    </Dialogs.Base>
  );
};
