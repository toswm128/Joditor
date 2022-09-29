import { useCallback } from "react";
import { line } from "lib/Store/WriteEditorStore/type";
import EditorInputter from "../../EditorInputter";
import { A, CallOut, Code, H1, H2, H3, Img } from "../TagsStyle";
import useWrite from "lib/write/useWrite";
import { Draggable } from "react-beautiful-dnd";

interface TEditorItem {
  line: line;
  index: number;
}

const EditorItem = ({ line, index }: TEditorItem) => {
  const { unsetImg } = useWrite();

  const tagTranslator = useCallback(
    (data: line) => {
      switch (data.tag) {
        case "div":
          return (
            <div key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </div>
          );
        case "h1":
          return (
            <H1 key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </H1>
          );
        case "h2":
          return (
            <H2 key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </H2>
          );
        case "h3":
          return (
            <H3 key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </H3>
          );
        case "a":
          console.log("a지나감");
          return (
            <A key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </A>
          );

        case "ul":
          return (
            <ul className="tab" key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </ul>
          );
        case "code":
          return (
            <Code key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </Code>
          );
        case "callOut":
          return (
            <CallOut key={data.id}>
              <EditorInputter data={data} key={data.id} />
            </CallOut>
          );
        case "img":
          return (
            <Img
              src={data.src}
              alt=""
              onError={() => {
                console.log("error");
              }}
              key={data.id}
              onClick={() => unsetImg(data.id)}
            />
          );
      }
    },
    [unsetImg]
  );

  return (
    <Draggable draggableId={`${line.id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {tagTranslator(line)}
        </div>
      )}
    </Draggable>
  );
};

export default EditorItem;
