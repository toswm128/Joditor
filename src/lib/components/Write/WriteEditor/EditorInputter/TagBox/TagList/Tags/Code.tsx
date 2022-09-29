import { TagContainer } from "./TagsStyle";
import useWrite from "lib/write/useWrite";
import useTags from "./useTags";
import img from "lib/assets/png/code.png";

const Code = () => {
  const { setTag2Code } = useWrite();
  const { selectTag } = useTags();

  return (
    <TagContainer
      onClick={() => {
        selectTag(setTag2Code);
      }}
    >
      <img src={img} alt="" />
      <div>
        <h1>코드</h1>
        <span>코드 작성</span>
      </div>
    </TagContainer>
  );
};

export default Code;
