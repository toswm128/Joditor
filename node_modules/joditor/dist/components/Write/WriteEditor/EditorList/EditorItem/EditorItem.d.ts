/// <reference types="react" />
import { line } from "lib/Store/WriteEditorStore/type";
interface TEditorItem {
    line: line;
    index: number;
}
declare const EditorItem: ({ line, index }: TEditorItem) => JSX.Element;
export default EditorItem;
