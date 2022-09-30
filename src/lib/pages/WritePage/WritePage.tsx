import Write from "../../components/Write";
import { IJoditorOption } from "../../Joditor";

const WritePage = ({ onSubmit, onCancle }: IJoditorOption) => {
  return (
    <>
      <Write onSubmit={onSubmit} onCancle={onCancle} />
    </>
  );
};

export default WritePage;
