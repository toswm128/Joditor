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
import { useCallback } from "react";
import EditorInputter from "../../EditorInputter";
import { A, CallOut, Code, H1, H2, H3, Img } from "../TagsStyle";
import useWrite from "lib/write/useWrite";
import { Draggable } from "react-beautiful-dnd";
var EditorItem = function (_a) {
    var line = _a.line, index = _a.index;
    var unsetImg = useWrite().unsetImg;
    var tagTranslator = useCallback(function (data) {
        switch (data.tag) {
            case "div":
                return (_jsx("div", { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "h1":
                return (_jsx(H1, { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "h2":
                return (_jsx(H2, { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "h3":
                return (_jsx(H3, { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "a":
                console.log("a지나감");
                return (_jsx(A, { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "ul":
                return (_jsx("ul", __assign({ className: "tab" }, { children: _jsx(EditorInputter, { data: data }, data.id) }), data.id));
            case "code":
                return (_jsx(Code, { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "callOut":
                return (_jsx(CallOut, { children: _jsx(EditorInputter, { data: data }, data.id) }, data.id));
            case "img":
                return (_jsx(Img, { src: data.src, alt: "", onError: function () {
                        console.log("error");
                    }, onClick: function () { return unsetImg(data.id); } }, data.id));
        }
    }, [unsetImg]);
    return (_jsx(Draggable, __assign({ draggableId: "".concat(line.id), index: index }, { children: function (provided) { return (_jsx("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { children: tagTranslator(line) }), void 0)); } }), void 0));
};
export default EditorItem;
