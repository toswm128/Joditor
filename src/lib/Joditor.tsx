import WritePage from "./pages/WritePage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Store";

export interface IJoditorOption {
  onSubmit?: (dom: any[]) => void;
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
