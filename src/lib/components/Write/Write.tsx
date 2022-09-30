import { WriteContainer } from "lib/components/Write/WriteStyle";
import { IJoditorOption } from "lib/Joditor";
import WriteEditor from "./WriteEditor";

const Write = ({ onSubmit, onCancle }: IJoditorOption) => {
  return (
    <WriteContainer>
      <WriteEditor onSubmit={onSubmit} onCancle={onCancle} />
    </WriteContainer>
  );
};

export default Write;
