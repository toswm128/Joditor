import { TagContainer } from "./TagsStyle";
import useWrite from "lib/write/useWrite";
import useTags from "./useTags";
import img from "lib/assets/png/link.png";

const Hyperlink = () => {
  const { setTag2A } = useWrite();
  const { selectTag } = useTags();

  return (
    <TagContainer
      onClick={() => {
        selectTag(setTag2A);
      }}
    >
      <img src={img} alt="" />
      <div>
        <h1>하이퍼링크</h1>
        <span>외부 링크</span>
      </div>
    </TagContainer>
  );
};

export default Hyperlink;
