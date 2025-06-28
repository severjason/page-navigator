'use client';

import { useParams } from 'next/navigation';

import { useFormPageContext } from '@/app/form-pages/hooks/useFormPageContext';

import { usePageDetailsRedirect } from '../hooks/usePageDetailsRedirect';

export const FormPageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { getPage } = useFormPageContext();

  const pageDetails = getPage(id);

  usePageDetailsRedirect(pageDetails);

  if (!pageDetails) return null;

  return (
    <div className=" px-5 pb-3 flex-1 flex flex-col">
      <div className=" flex-1 flex flex-col bg-gray-900 rounded-lg justify-center items-center">
        <p className="text-white text-4xl p-5">{`Form name: ${pageDetails.title}`}</p>
      </div>
    </div>
  );
};
