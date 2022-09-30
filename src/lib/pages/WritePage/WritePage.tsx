import Write from "lib/components/Write";
import { IJoditorOption } from "lib/Joditor";

const WritePage = ({ onSubmit, onCancle }: IJoditorOption) => {
  return (
    <>
      <Write onSubmit={onSubmit} onCancle={onCancle} />
    </>
  );
};

export default WritePage;
