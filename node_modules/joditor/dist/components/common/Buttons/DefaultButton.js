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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { buttonBackgroundColor, buttonTextColor } from "lib/style/color";
var DefaultButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, isAbled = _a.isAbled, size = _a.size;
    var DefaultButtonCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transition: 0.1s all;\n    outline: none;\n    border: 0;\n    cursor: pointer;\n    border-radius: 8px;\n    min-width: ", ";\n    height: ", ";\n    padding: 0 16px;\n    background-color: ", ";\n    color: ", ";\n    font-size: 18px;\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n  "], ["\n    transition: 0.1s all;\n    outline: none;\n    border: 0;\n    cursor: pointer;\n    border-radius: 8px;\n    min-width: ", ";\n    height: ", ";\n    padding: 0 16px;\n    background-color: ", ";\n    color: ", ";\n    font-size: 18px;\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n  "])), (size === "L" && "104px") ||
        (size === "M" && "91px") ||
        (size === "S" && "78px"), (size === "L" && "48px") ||
        (size === "M" && "42px") ||
        (size === "S" && "36px"), isAbled
        ? buttonBackgroundColor.abled.basic
        : buttonBackgroundColor.disabled.basic, isAbled ? buttonTextColor.abled : buttonTextColor.disabled, isAbled
        ? buttonBackgroundColor.abled.hover
        : buttonBackgroundColor.disabled.hover, isAbled
        ? buttonBackgroundColor.abled.active
        : buttonBackgroundColor.disabled.active);
    return (_jsx("button", __assign({ css: DefaultButtonCss, onClick: onClick }, { children: children }), void 0));
};
export default DefaultButton;
var templateObject_1;
