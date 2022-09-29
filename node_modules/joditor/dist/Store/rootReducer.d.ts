import { WriteEditorStateType } from "./WriteEditorStore/type";
declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    WriteEditor: WriteEditorStateType;
}>, import("redux").AnyAction>;
export declare type RootStateType = {
    WriteEditor: WriteEditorStateType;
};
export declare const useTypedSelector: <Selected extends unknown>(selector: (state: RootStateType) => Selected, equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined) => Selected;
export default rootReducer;
