import { TagContainer } from "./TagsStyle";
import useWrite from "lib/write/useWrite";
import useTags from "./useTags";
import img from "lib/assets/png/h2.png";

const Title2 = () => {
  const { setTag2H2 } = useWrite();
  const { selectTag } = useTags();
  return (
    <TagContainer
      onClick={() => {
        selectTag(setTag2H2);
      }}
    >
      <img src={img} alt="" />
      <div>
        <h1>제목2</h1>
        <span>섹션 제목(중)</span>
      </div>
    </TagContainer>
  );
};

export default Title2;
