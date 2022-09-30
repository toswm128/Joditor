import { WriteContainer } from "../../components/Write/WriteStyle";
import { IJoditorOption } from "../../Joditor";
import WriteEditor from "./WriteEditor";

const Write = ({ onSubmit, onCancle }: IJoditorOption) => {
  return (
    <WriteContainer>
      <WriteEditor onSubmit={onSubmit} onCancle={onCancle} />
    </WriteContainer>
  );
};

export default Write;
