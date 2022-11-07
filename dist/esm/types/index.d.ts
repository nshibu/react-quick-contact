/// <reference types="react" />
import React, { ReactNode } from 'react';

interface OCBProps {
    name: string;
    icon: ReactNode;
    bgColor: string;
    color: string;
    href: string;
}
declare const QCButton: (props: OCBProps) => JSX.Element;

interface ReactQuickContactProps {
    buttonLabel: string;
    buttonIcon: ReactNode;
    name?: string;
    designation?: string;
    message?: string;
    profileImageUrl: string;
    alignment: 'left' | 'right';
    buttons?: Array<React.FC | ReactNode>;
}

declare const ReactQuickContact: (props: ReactQuickContactProps) => JSX.Element;

export { QCButton, ReactQuickContact };
