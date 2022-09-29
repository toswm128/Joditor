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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TagContainer } from "./TagsStyle";
import useWrite from "lib/write/useWrite";
import useTags from "./useTags";
import img from "lib/assets/png/h3.png";
var Title3 = function () {
    var setTag2H3 = useWrite().setTag2H3;
    var selectTag = useTags().selectTag;
    return (_jsxs(TagContainer, __assign({ onClick: function () {
            selectTag(setTag2H3);
        } }, { children: [_jsx("img", { src: img, alt: "" }, void 0), _jsxs("div", { children: [_jsx("h1", { children: "\uC81C\uBAA93" }, void 0), _jsx("span", { children: "\uC139\uC158 \uC81C\uBAA9(\uC18C)" }, void 0)] }, void 0)] }), void 0));
};
export default Title3;
