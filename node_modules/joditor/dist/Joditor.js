var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import WritePage from "lib/pages/WritePage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Store";
function Joditor() {
    var store = createStore(rootReducer, composeWithDevTools());
    return (_jsx(Provider, __assign({ store: store }, { children: _jsx(WritePage, {}, void 0) }), void 0));
}
export default Joditor;
