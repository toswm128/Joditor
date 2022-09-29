import { WriteEditorStateType } from "./type";
declare const _default: import("typesafe-actions").Reducer<WriteEditorStateType, any> & Readonly<{
    handlers: {
        [x: string]: ((state: WriteEditorStateType, action: any) => WriteEditorStateType) | undefined;
    };
    handleAction: any;
    handleType: any;
}>;
export default _default;
