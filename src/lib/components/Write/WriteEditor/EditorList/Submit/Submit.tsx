import { dom } from "lib/Joditor";
import useWrite from "lib/write/useWrite";
import PostButton from "./Buttons/PostButton";

export interface ISubmit {
  lines: any[];
  onSubmit?: (dom: dom) => void;
}

const Submit = ({ lines, onSubmit }: ISubmit) => {
  const {
    WriteEditorState: { title },
  } = useWrite();

  return <PostButton onSubmit={onSubmit} dom={{ title, lines }} />;
};

export default Submit;
