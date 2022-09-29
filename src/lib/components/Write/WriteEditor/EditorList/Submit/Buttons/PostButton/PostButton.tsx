import DefaultButton from "lib/components/common/Buttons/DefaultButton";
import useWrite from "lib/write/useWrite";

const PostButton = ({ dom }: { dom: any[] }) => {
  const {
    WriteEditorState: { title },
    reset,
  } = useWrite();

  return (
    <DefaultButton
      onClick={() => {
        console.log(dom);
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
