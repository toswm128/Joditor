import { createSelectorHook } from "react-redux";
import { combineReducers } from "redux";
import WriteEditorReducer from "./WriteEditorStore/reducer";
var rootReducer = combineReducers({
    WriteEditor: WriteEditorReducer,
});
export var useTypedSelector = createSelectorHook();
export default rootReducer;
