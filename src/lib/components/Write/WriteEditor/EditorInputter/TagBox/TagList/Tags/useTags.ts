import useWrite from "lib/write/useWrite";

const useTags = () => {
  const {
    WriteEditorState: { tagBoxId, tagBoxFocusIdx },
    setLineText,
    closeTagBox,
    setTag2H1,
    setTag2H2,
    setTag2H3,
    setTag2A,
    setTag2Code,
    setTag2CallOut,
  } = useWrite();

  const selectTag = (setTag: (any: any) => any) => {
    if (typeof tagBoxId === "number") {
      setTag(tagBoxId);
      setLineText("", tagBoxId);
      closeTagBox();
    }
  };
  const selectTagId = () => {
    if (typeof tagBoxId === "number") {
      switch (tagBoxFocusIdx) {
        case 0:
          setTag2H1(tagBoxId);
          break;
        case 1:
          setTag2H2(tagBoxId);
          break;
        case 2:
          setTag2H3(tagBoxId);
          break;
        case 3:
          setTag2A(tagBoxId);
          break;
        case 4:
          setTag2Code(tagBoxId);
          break;
        case 5:
          setTag2CallOut(tagBoxId);
          break;
      }
      setLineText("", tagBoxId);
      closeTagBox();
    }
  };

  return { selectTag, selectTagId };
};

export default useTags;
