import { createSelectorHook } from "react-redux";
import { combineReducers } from "redux";

import WriteEditorReducer from "./WriteEditorStore/reducer";
import { WriteEditorStateType } from "./WriteEditorStore/type";

const rootReducer = combineReducers({
  WriteEditor: WriteEditorReducer,
});

export type RootStateType = {
  WriteEditor: WriteEditorStateType;
};

export const useTypedSelector = createSelectorHook<RootStateType>();

export default rootReducer;
