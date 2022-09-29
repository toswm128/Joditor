import WritePage from "lib/pages/WritePage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Store";

function Joditor() {
  const store = createStore(rootReducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <WritePage />
    </Provider>
  );
}

export default Joditor;
