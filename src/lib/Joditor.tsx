import WritePage from "./pages/WritePage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Store";

export type dom = { title: string; lines: any[] };
export interface IJoditorOption {
  onSubmit?: (dom: dom) => void;
  onCancle?: () => void;
}

function Joditor({ onSubmit, onCancle }: IJoditorOption) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <WritePage onSubmit={onSubmit} onCancle={onCancle} />
    </Provider>
  );
}

export default Joditor;
