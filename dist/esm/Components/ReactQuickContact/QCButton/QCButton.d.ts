import { ReactNode } from 'react';
import "./QCButton.css";
interface OCBProps {
    name: string;
    icon: ReactNode;
    bgColor: string;
    color: string;
    href: string;
}
declare const QCButton: (props: OCBProps) => JSX.Element;
export default QCButton;
