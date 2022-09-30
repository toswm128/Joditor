import PostButton from "./Buttons/PostButton";

type dom = any[];
export interface ISubmit {
  dom: any[];
  onSubmit?: (dom: dom) => void;
}

const Submit = ({ dom, onSubmit }: ISubmit) => {
  return <PostButton onSubmit={onSubmit} dom={dom} />;
};

export default Submit;
