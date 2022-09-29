interface ILikeButton {
    isLike: boolean;
    onClick: () => any;
    likes: number;
}
declare const LikeButton: ({ isLike, onClick, likes }: ILikeButton) => import("@emotion/react/jsx-runtime").JSX.Element;
export default LikeButton;
