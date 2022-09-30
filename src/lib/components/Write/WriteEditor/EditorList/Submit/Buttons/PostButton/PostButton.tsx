import DefaultButton from "../../../../../../../components/common/Buttons/DefaultButton";
import useWrite from "../../../../../../../write/useWrite";
import { ISubmit } from "../../Submit";

const PostButton = ({ dom, onSubmit }: ISubmit) => {
  const {
    WriteEditorState: { title },
    reset,
  } = useWrite();

  return (
    <DefaultButton
      onClick={() => {
        onSubmit && onSubmit(dom);
        reset();
      }}
      isAbled={title ? true : false}
      size={"M"}
    >
      <>작성하기</>
    </DefaultButton>
  );
};

export default PostButton;
