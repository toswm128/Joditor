/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { buttonBackgroundColor, buttonTextColor } from "../../../style/color";

interface IDefaultButton {
  onClick?: () => any;
  isAbled: boolean;
  children: JSX.Element;
  size: string;
}

const DefaultButton = ({
  children,
  onClick,
  isAbled,
  size,
}: IDefaultButton) => {
  const DefaultButtonCss = css`
    transition: 0.1s all;
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    min-width: ${(size === "L" && "104px") ||
    (size === "M" && "91px") ||
    (size === "S" && "78px")};
    height: ${(size === "L" && "48px") ||
    (size === "M" && "42px") ||
    (size === "S" && "36px")};
    padding: 0 16px;
    background-color: ${isAbled
      ? buttonBackgroundColor.abled.basic
      : buttonBackgroundColor.disabled.basic};
    color: ${isAbled ? buttonTextColor.abled : buttonTextColor.disabled};
    font-size: 18px;
    &:hover {
      background-color: ${isAbled
        ? buttonBackgroundColor.abled.hover
        : buttonBackgroundColor.disabled.hover};
    }
    &:active {
      background-color: ${isAbled
        ? buttonBackgroundColor.abled.active
        : buttonBackgroundColor.disabled.active};
    }
  `;

  return (
    <button css={DefaultButtonCss} onClick={onClick}>
      {children}
    </button>
  );
};

export default DefaultButton;
