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
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import DefaultButton from "lib/components/common/Buttons/DefaultButton";
import useWrite from "lib/write/useWrite";
var PostButton = function (_a) {
    var dom = _a.dom;
    var _b = useWrite(), title = _b.WriteEditorState.title, reset = _b.reset;
    return (_jsx(DefaultButton, __assign({ onClick: function () {
            console.log(dom);
            reset();
        }, isAbled: title ? true : false, size: "M" }, { children: _jsx(_Fragment, { children: "\uC791\uC131\uD558\uAE30" }, void 0) }), void 0));
};
export default PostButton;
