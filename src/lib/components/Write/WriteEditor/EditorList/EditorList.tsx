import useWrite from "../../../../write";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import EditorItem from "./EditorItem/EditorItem";
import { line } from "../../../../Store/WriteEditorStore/type";
import styled from "@emotion/styled";
import Submit from "./Submit/Submit";
import CancelButton from "./Submit/Buttons/CancelButton";
import { IJoditorOption } from "../../../../Joditor";
import { useEffect } from "react";

const EditorList = ({ onSubmit, onCancle }: IJoditorOption) => {
  const {
    WriteEditorState: { body, head },
    dropLine,
  } = useWrite();
  const lines: any[] = [];

  let next: number | null;
  let snext: number | null;

  body.map((_, key: number) => {
    next = snext;
    if (key === 0) {
      next = body[head].next;
      snext = next;
      lines.push(body[head]);
    }
    if (next !== null) {
      snext = body[next].next;
      lines.push(body[next]);
    } else {
      return null;
    }
  });

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          dropLine(
            result.source.index,
            result.destination?.index,
            +result.draggableId,
            lines[result.destination?.index].id
          );
        }}
      >
        <Droppable droppableId="droppable">
          {(provided) => (
            <EditorListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lines.map((line: line, key: number) => (
                <EditorItem key={line.id} line={line} index={key} />
              ))}
              {provided.placeholder}
            </EditorListContainer>
          )}
        </Droppable>
      </DragDropContext>
      <Buttons>
        <Submit lines={lines} onSubmit={onSubmit} />
        <CancelButton onCancle={onCancle} />
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
