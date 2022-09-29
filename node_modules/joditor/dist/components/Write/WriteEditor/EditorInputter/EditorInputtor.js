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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "@emotion/styled";
import useWrite from "lib/write";
import { useEffect } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import TagBox from "./TagBox";
import useEditorInputter from "./useEditorInputter";
import tag from "lib/assets/png/tag.png";
var EditorInputter = function (_a) {
    var data = _a.data;
    var WriteEditorState = useWrite().WriteEditorState;
    useEffect(function () {
        if (data.id === WriteEditorState.focusLine && inputterRef.current) {
            inputterRef.current.setSelectionRange(9999, 9999);
            inputterRef.current.focus();
        }
    }, [WriteEditorState.focusLine, data.id]);
    var _b = useEditorInputter(data), onChangeText = _b.onChangeText, clickTagButton = _b.clickTagButton, onKeyPressEnter = _b.onKeyPressEnter, onKeyDownArrowUp = _b.onKeyDownArrowUp, onKeyDownArrowDown = _b.onKeyDownArrowDown, onKeyDownSpace = _b.onKeyDownSpace, onKeyDownTab = _b.onKeyDownTab, onKeyDownBackspace = _b.onKeyDownBackspace, onKeyDownZ = _b.onKeyDownZ, onDropUrl = _b.onDropUrl, onBlur = _b.onBlur, dragOver = _b.dragOver, dragLeave = _b.dragLeave, onPasteImg = _b.onPasteImg, click = _b.click, inputterRef = _b.inputterRef, text = _b.text, drogOver = _b.drogOver;
    return (_jsxs(EditorInputterLine, { children: [_jsx("img", { src: tag, alt: "", width: 12, height: 18, onClick: function () { return clickTagButton(); } }, void 0), _jsx(ReactTextareaAutosize, { placeholder: data.id === WriteEditorState.focusLine
                    ? "\uBA85\uB839\uC5B4 \uC0AC\uC6A9\uC2DC \"/\"\uB97C \uC785\uB825\uD558\uC138\uC694"
                    : "", spellCheck: false, 
                // cacheMeasurements
                style: drogOver ? { borderBottom: "5px solid #c4e3f0" } : {}, onKeyDown: function (e) {
                    switch (e.code) {
                        case "Space":
                            onKeyDownSpace();
                            break;
                        case "ArrowUp":
                            onKeyDownArrowUp(e);
                            break;
                        case "ArrowDown":
                            onKeyDownArrowDown(e);
                            break;
                        case "Tab":
                            onKeyDownTab(e);
                            break;
                        case "Backspace":
                            onKeyDownBackspace();
                            break;
                        case "KeyZ":
                            onKeyDownZ(e);
                            break;
                    }
                }, onDrop: onDropUrl, onDragOver: function () {
                    dragOver();
                }, onDragLeave: function () {
                    dragLeave();
                }, className: "content", value: text, ref: inputterRef, disabled: false, onPaste: onPasteImg, onKeyPress: onKeyPressEnter, onClick: function () {
                    click();
                }, onChange: function (e) { return onChangeText(e, data.id); }, onBlur: onBlur }, void 0), data.tag === "code" && (_jsx(SyntaxHighlighter, __assign({ showLineNumbers: true, onClick: function () { return click(); }, language: "javascript", style: docco, wrapLongLines: true, lineProps: {
                    style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                }, customStyle: { width: "100%", cursor: "text", height: "100%" } }, { children: text }), void 0)), data.id === WriteEditorState.tagBoxId &&
                data.id === WriteEditorState.focusLine && (_jsx(TagBox, { inputterRef: inputterRef }, void 0))] }, void 0));
};
var EditorInputterLine = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  & > textarea {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  &:hover {\n    & > img {\n      opacity: 1;\n    }\n  }\n  & > img {\n    opacity: 0;\n    transition: 0.2s;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  & > textarea {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  &:hover {\n    & > img {\n      opacity: 1;\n    }\n  }\n  & > img {\n    opacity: 0;\n    transition: 0.2s;\n  }\n"])));
export default EditorInputter;
var templateObject_1;
