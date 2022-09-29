var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
import { basicColor, DisabledColor } from "lib/style/color";
export var H1 = styled.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  & > div > textarea {\n    font-size: 2rem !important;\n    font-weight: bold;\n  }\n"], ["\n  margin: 0;\n  & > div > textarea {\n    font-size: 2rem !important;\n    font-weight: bold;\n  }\n"])));
export var H2 = styled.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n  & > div > textarea {\n    font-size: 1.5rem !important;\n    font-weight: bold;\n  }\n"], ["\n  margin: 0;\n  & > div > textarea {\n    font-size: 1.5rem !important;\n    font-weight: bold;\n  }\n"])));
export var H3 = styled.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0;\n  & > div > textarea {\n    font-size: 1.17rem !important;\n    font-weight: bold;\n  }\n"], ["\n  margin: 0;\n  & > div > textarea {\n    font-size: 1.17rem !important;\n    font-weight: bold;\n  }\n"])));
export var A = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n  & > div > textarea {\n    color: ", ";\n    text-decoration: underline;\n  }\n"], ["\n  margin: 0;\n  & > div > textarea {\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), DisabledColor);
export var Code = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0;\n  & > div > textarea {\n    position: absolute;\n    left: 10px;\n    z-index: -10;\n    opacity: 0;\n  }\n"], ["\n  margin: 0;\n  & > div > textarea {\n    position: absolute;\n    left: 10px;\n    z-index: -10;\n    opacity: 0;\n  }\n"])));
export var CallOut = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 0;\n  & > div > textarea {\n    padding: 24px 12px !important;\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"], ["\n  margin: 0;\n  & > div > textarea {\n    padding: 24px 12px !important;\n    background-color: ", ";\n    border-radius: 4px;\n  }\n"])), basicColor);
export var Img = styled.img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0;\n  max-width: 100%;\n  object-fit: cover;\n"], ["\n  margin: 0;\n  max-width: 100%;\n  object-fit: cover;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
