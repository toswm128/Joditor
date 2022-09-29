/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import heart_white from "assets/png/heart_white.png";
import unHeart from "assets/png/unHeart.png";
import { buttonBackgroundColor, buttonTextColor } from "lib/style/color";

interface ILikeButton {
  isLike: boolean;
  onClick: () => any;
  likes: number;
}

const LikeButton = ({ isLike, onClick, likes }: ILikeButton) => {
  const LikeButtonCss = css`
    min-width: 88px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    transition: 0.1s all;
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    background-color: ${isLike
      ? buttonBackgroundColor.abled.basic
      : buttonBackgroundColor.disabled.basic};
    color: ${isLike ? buttonTextColor.abled : buttonTextColor.disabled};

    &:hover {
      background-color: ${isLike
        ? buttonBackgroundColor.abled.hover
        : buttonBackgroundColor.disabled.hover};
    }
    &:active {
      background-color: ${isLike
        ? buttonBackgroundColor.abled.active
        : buttonBackgroundColor.disabled.active};
    }

    & > img {
      width: 29px;
    }
  `;

  return (
    <button css={LikeButtonCss} onClick={() => onClick()}>
      <img src={isLike ? heart_white : unHeart} alt="" />
      <div>{likes}</div>
    </button>
  );
};

export default LikeButton;
