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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useWrite from "lib/write";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import EditorItem from "./EditorItem/EditorItem";
import styled from "@emotion/styled";
import Submit from "./Submit/Submit";
import CancelButton from "./Submit/Buttons/CancelButton";
var EditorList = function () {
    var _a = useWrite(), _b = _a.WriteEditorState, body = _b.body, head = _b.head, dropLine = _a.dropLine;
    var dom = [];
    var next;
    var snext;
    body.map(function (_, key) {
        next = snext;
        if (key === 0) {
            next = body[head].next;
            snext = next;
            dom.push(body[head]);
        }
        if (next !== null) {
            snext = body[next].next;
            dom.push(body[next]);
        }
        else {
            return null;
        }
    });
    return (_jsxs(_Fragment, { children: [_jsx(DragDropContext, __assign({ onDragEnd: function (result) {
                    var _a, _b;
                    if (!result.destination)
                        return;
                    console.log(result.destination.index, dom);
                    dropLine(result.source.index, (_a = result.destination) === null || _a === void 0 ? void 0 : _a.index, +result.draggableId, dom[(_b = result.destination) === null || _b === void 0 ? void 0 : _b.index].id);
                } }, { children: _jsx(Droppable, __assign({ droppableId: "droppable" }, { children: function (provided) { return (_jsxs(EditorListContainer, __assign({ ref: provided.innerRef }, provided.droppableProps, { children: [dom.map(function (line, key) { return (_jsx(EditorItem, { line: line, index: key }, line.id)); }), provided.placeholder] }), void 0)); } }), void 0) }), void 0), _jsxs(Buttons, { children: [_jsx(Submit, { dom: dom }, void 0), _jsx(CancelButton, {}, void 0)] }, void 0)] }, void 0));
};
var EditorListContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"])));
var Buttons = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"])));
export default EditorList;
var templateObject_1, templateObject_2;
