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
import img from "lib/assets/png/link.png";
var Hyperlink = function () {
    var setTag2A = useWrite().setTag2A;
    var selectTag = useTags().selectTag;
    return (_jsxs(TagContainer, __assign({ onClick: function () {
            selectTag(setTag2A);
        } }, { children: [_jsx("img", { src: img, alt: "" }, void 0), _jsxs("div", { children: [_jsx("h1", { children: "\uD558\uC774\uD37C\uB9C1\uD06C" }, void 0), _jsx("span", { children: "\uC678\uBD80 \uB9C1\uD06C" }, void 0)] }, void 0)] }), void 0));
};
export default Hyperlink;
