import useWrite from "lib/write";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import EditorItem from "./EditorItem/EditorItem";
import { line } from "lib/Store/WriteEditorStore/type";
import styled from "@emotion/styled";
import Submit from "./Submit/Submit";
import CancelButton from "./Submit/Buttons/CancelButton";

const EditorList = () => {
  const {
    WriteEditorState: { body, head },
    dropLine,
  } = useWrite();
  const dom: any[] = [];

  let next: number | null;
  let snext: number | null;

  body.map((_, key: number) => {
    next = snext;
    if (key === 0) {
      next = body[head].next;
      snext = next;
      dom.push(body[head]);
    }
    if (next !== null) {
      snext = body[next].next;
      dom.push(body[next]);
    } else {
      return null;
    }
  });

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          console.log(result.destination.index, dom);
          dropLine(
            result.source.index,
            result.destination?.index,
            +result.draggableId,
            dom[result.destination?.index].id
          );
        }}
      >
        <Droppable droppableId="droppable">
          {(provided) => (
            <EditorListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {dom.map((line: line, key: number) => (
                <EditorItem key={line.id} line={line} index={key} />
              ))}
              {provided.placeholder}
            </EditorListContainer>
          )}
        </Droppable>
      </DragDropContext>
      <Buttons>
        <Submit dom={dom} />
        <CancelButton />
      </Buttons>
    </>
  );
};

const EditorListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default EditorList;
