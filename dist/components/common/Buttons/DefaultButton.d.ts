/// <reference types="react" />
interface IDefaultButton {
    onClick?: () => any;
    isAbled: boolean;
    children: JSX.Element;
    size: string;
}
declare const DefaultButton: ({ children, onClick, isAbled, size, }: IDefaultButton) => import("@emotion/react/jsx-runtime").JSX.Element;
export default DefaultButton;
