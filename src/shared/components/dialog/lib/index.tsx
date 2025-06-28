'use client';

import * as SheetPrimitive from '@radix-ui/react-dialog';

export { DialogContent as Content, type SheetContentProps } from './Content';
export { DialogDescription as Description } from './Description';
export { DialogHeader as Header } from './Header';
export { DialogTitle as Title } from './Title';

const Root = SheetPrimitive.Root;

const Portal = SheetPrimitive.Portal;

export { Root, Portal };
