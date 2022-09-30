import { TagContainer } from "./TagsStyle";
import useWrite from "../../../../../../../write/useWrite";
import useTags from "./useTags";
import img from "../../../../../../../assets/png/h1.png";

const Title1 = () => {
  const { setTag2H1 } = useWrite();
  const { selectTag } = useTags();

  return (
    <TagContainer
      onClick={() => {
        selectTag(setTag2H1);
      }}
    >
      <img src={img} alt="" />
      <div>
        <h1>제목1</h1>
        <span>섹션 제목(대)</span>
      </div>
    </TagContainer>
  );
};

export default Title1;
