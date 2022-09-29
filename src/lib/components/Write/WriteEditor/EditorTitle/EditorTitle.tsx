import useWrite from "lib/write";
import { useEffect, useState } from "react";

const EditorTitle = () => {
  const [text, setText] = useState("");
  const {
    setTitle,
    WriteEditorState: { title },
  } = useWrite();
  useEffect(() => {
    title && setText(title);
  }, []);
  return (
    <input
      type="text"
      className="title"
      placeholder="제목을 입력해주세요..."
      onChange={(e) => setText(e.target.value)}
      value={text}
      onBlur={() => setTitle(text)}
    />
  );
};

export default EditorTitle;
