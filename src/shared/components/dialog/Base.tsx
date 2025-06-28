'use client';

import React from 'react';

import { Content, Description, Header, Root, SheetContentProps, Title } from './lib';

export type BaseDialogProps = SheetContentProps & {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
};

export const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  onOpenChange,
  title,
  children,
  description,
  ...contentProps
}) => {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Content className="pl-3 pr-3 pb-3 rounded-lg" {...contentProps}>
        <Header>
          {title && <Title className={'pr-8'}>{title}</Title>}
          <Description>{description}</Description>
        </Header>
        {children}
      </Content>
    </Root>
  );
};
