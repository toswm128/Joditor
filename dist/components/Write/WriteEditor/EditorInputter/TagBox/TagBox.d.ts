/// <reference types="react" />
interface ITagBox {
    inputterRef: React.RefObject<HTMLTextAreaElement>;
}
declare const TagBox: ({ inputterRef }: ITagBox) => JSX.Element;
export default TagBox;
