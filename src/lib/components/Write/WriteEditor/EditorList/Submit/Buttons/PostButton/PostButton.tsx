import { dom } from "lib/Joditor";
import DefaultButton from "../../../../../../../components/common/Buttons/DefaultButton";
import useWrite from "../../../../../../../write/useWrite";

interface IPostButton {
  dom: dom;
  onSubmit?: (dom: dom) => void;
}

const PostButton = ({ dom, onSubmit }: IPostButton) => {
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
      <>Submit</>
    </DefaultButton>
  );
};

export default PostButton;
