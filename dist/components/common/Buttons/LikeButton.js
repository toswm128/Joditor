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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import heart_white from "assets/png/heart_white.png";
import unHeart from "assets/png/unHeart.png";
import { buttonBackgroundColor, buttonTextColor } from "lib/style/color";
var LikeButton = function (_a) {
    var isLike = _a.isLike, onClick = _a.onClick, likes = _a.likes;
    var LikeButtonCss = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 88px;\n    height: 40px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 16px;\n    transition: 0.1s all;\n    outline: none;\n    border: 0;\n    cursor: pointer;\n    border-radius: 8px;\n    background-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n\n    & > img {\n      width: 29px;\n    }\n  "], ["\n    min-width: 88px;\n    height: 40px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 16px;\n    transition: 0.1s all;\n    outline: none;\n    border: 0;\n    cursor: pointer;\n    border-radius: 8px;\n    background-color: ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n\n    & > img {\n      width: 29px;\n    }\n  "])), isLike
        ? buttonBackgroundColor.abled.basic
        : buttonBackgroundColor.disabled.basic, isLike ? buttonTextColor.abled : buttonTextColor.disabled, isLike
        ? buttonBackgroundColor.abled.hover
        : buttonBackgroundColor.disabled.hover, isLike
        ? buttonBackgroundColor.abled.active
        : buttonBackgroundColor.disabled.active);
    return (_jsxs("button", __assign({ css: LikeButtonCss, onClick: function () { return onClick(); } }, { children: [_jsx("img", { src: isLike ? heart_white : unHeart, alt: "" }, void 0), _jsx("div", { children: likes }, void 0)] }), void 0));
};
export default LikeButton;
var templateObject_1;
