import EditorList from "./EditorList";
import { WriteComponent } from "../WriteStyle";
import EditorBanner from "./EditorBanner/EditorBanner";
import EditorTitle from "./EditorTitle/EditorTitle";
import { IJoditorOption } from "../../../Joditor";

const WriteEditor = ({ onSubmit, onCancle }: IJoditorOption) => {
  return (
    <>
      <WriteComponent>
        <EditorTitle />
        <EditorList onSubmit={onSubmit} onCancle={onCancle} />
      </WriteComponent>
    </>
  );
};

export default WriteEditor;
