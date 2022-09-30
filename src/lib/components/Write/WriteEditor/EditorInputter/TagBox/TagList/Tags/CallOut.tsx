import { TagContainer } from "./TagsStyle";
import useWrite from "../../../../../../../write/useWrite";
import useTags from "./useTags";
import img from "../../../../../../../assets/png/callOut.png";

const CallOut = () => {
  const { setTag2CallOut } = useWrite();
  const { selectTag } = useTags();

  return (
    <TagContainer
      onClick={() => {
        selectTag(setTag2CallOut);
      }}
    >
      <img src={img} alt="" />
      <div>
        <h1>콜아웃</h1>
        <span>특별한 글을 써보세요</span>
      </div>
    </TagContainer>
  );
};

export default CallOut;
