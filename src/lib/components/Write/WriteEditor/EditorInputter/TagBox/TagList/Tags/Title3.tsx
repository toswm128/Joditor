import { TagContainer } from "./TagsStyle";
import useWrite from "../../../../../../../write/useWrite";
import useTags from "./useTags";
import img from "../../../../../../../assets/png/h3.png";

const Title3 = () => {
  const { setTag2H3 } = useWrite();
  const { selectTag } = useTags();
  return (
    <TagContainer
      onClick={() => {
        selectTag(setTag2H3);
      }}
    >
      <img src={img} alt="" />
      <div>
        <h1>제목3</h1>
        <span>섹션 제목(소)</span>
      </div>
    </TagContainer>
  );
};

export default Title3;
