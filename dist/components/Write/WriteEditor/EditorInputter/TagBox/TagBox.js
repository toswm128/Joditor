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
import styled from "@emotion/styled";
import { browserColor } from "lib/style/color";
import TagList from "./TagList";
var TagBox = function (_a) {
    var _b;
    var inputterRef = _a.inputterRef;
    var t = (_b = inputterRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().top;
    var poser = function () {
        if (t && t - window.pageYOffset > 0) {
            return "-333px";
        }
        return "33px";
    };
    return (_jsxs(TagBoxContainer, __assign({ style: { top: poser() }, tabIndex: 0 }, { children: [_jsx(TagBoxTitle, { children: "\uAE30\uBCF8 \uD0DC\uADF8" }, void 0), _jsx(TagList, {}, void 0)] }), void 0));
};
var TagBoxContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  left: 12px;\n  position: absolute;\n  width: 300px;\n  min-height: 320px;\n  max-height: 320px;\n  overflow-y: auto;\n  top: -320px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  z-index: 999;\n  padding: 8px;\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);\n"], ["\n  left: 12px;\n  position: absolute;\n  width: 300px;\n  min-height: 320px;\n  max-height: 320px;\n  overflow-y: auto;\n  top: -320px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  z-index: 999;\n  padding: 8px;\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);\n"])), browserColor);
var TagBoxTitle = styled.h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  font-size: 0.5rem;\n  font-weight: normal;\n"], ["\n  margin: 0;\n  font-size: 0.5rem;\n  font-weight: normal;\n"])));
export default TagBox;
var templateObject_1, templateObject_2;
