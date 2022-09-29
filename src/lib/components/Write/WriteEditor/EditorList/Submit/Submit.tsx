import PostButton from "./Buttons/PostButton";

interface ISubmit {
  dom: any[];
}

const Submit = ({ dom }: ISubmit) => {
  return <PostButton dom={dom} />;
};

export default Submit;
