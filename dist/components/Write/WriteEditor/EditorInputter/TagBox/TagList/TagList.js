var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import styled from "@emotion/styled";
import Title1 from "./Tags/Title1";
import Title2 from "./Tags/Title2";
import Title3 from "./Tags/Title3";
import Hyperlink from "./Tags/Hyperlink";
import Code from "./Tags/Code";
import CallOut from "./Tags/CallOut";
import useWrite from "lib/write/useWrite";
import { backgroundColor } from "lib/style/color";
var TagList = function () {
    var _a = useWrite().WriteEditorState, searchWord = _a.searchWord, tagBoxFocusIdx = _a.tagBoxFocusIdx;
    var data = [
        { word: "/제목1", Tag: Title1 },
        { word: "/제목2", Tag: Title2 },
        { word: "/제목3", Tag: Title3 },
        { word: "/하이퍼링크", Tag: Hyperlink },
        { word: "/코드", Tag: Code },
        { word: "/콜아웃", Tag: CallOut },
    ];
    var search = function () {
        return searchWord
            ? data.map(function (_a, key) {
                var word = _a.word, Tag = _a.Tag;
                return word.includes(searchWord) && (_jsx("div", __assign({ style: key === tagBoxFocusIdx ? { background: backgroundColor } : {} }, { children: _jsx(Tag, {}, key) }), key));
            })
            : data.map(function (_a, key) {
                var Tag = _a.Tag;
                return (_jsx("div", __assign({ style: key === tagBoxFocusIdx ? { background: backgroundColor } : {} }, { children: _jsx(Tag, {}, key) }), key));
            });
    };
    return _jsx(TagListContainer, { children: search() }, void 0);
};
var TagListContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
export default TagList;
var templateObject_1;
