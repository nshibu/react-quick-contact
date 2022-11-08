import React, { ReactNode } from "react";
export interface ReactQuickContactProps {
    buttonLabel: string;
    buttonIcon: ReactNode;
    buttonColor: string;
    name?: string;
    designation?: string;
    message?: string;
    profileImageUrl: string;
    alignment: 'left' | 'right';
    buttons?: Array<React.FC | ReactNode>;
}
