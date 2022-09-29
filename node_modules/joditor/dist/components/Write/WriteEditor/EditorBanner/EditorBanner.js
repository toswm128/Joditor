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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import useWrite from "lib/write";
import { useEffect, useState } from "react";
var EditorBanner = function () {
    var _a = useWrite(), WriteEditorState = _a.WriteEditorState, setBanner = _a.setBanner;
    var banner = WriteEditorState.banner;
    var _b = useState(), src = _b[0], setSrc = _b[1];
    useEffect(function () {
        banner && setSrc(URL.createObjectURL(banner));
    }, [banner]);
    var onDropImg = function (e) {
        e.preventDefault();
        setBanner(e.dataTransfer.files[0]);
    };
    var onChange = function (e) {
        if (e.target.files && e.target.files.length) {
            var fileData = e.target.files[0];
            setBanner(fileData);
        }
    };
    return (_jsxs(_Fragment, { children: [src ? (_jsx("label", __assign({ htmlFor: "banner" }, { children: _jsx("img", { style: { width: "100%", height: "100%", objectFit: "cover" }, src: src, alt: "" }, void 0) }), void 0)) : (_jsx("label", __assign({ htmlFor: "banner" }, { children: "\uC774\uBBF8\uC9C0 \uC5C6\uC74C" }), void 0)), _jsx("input", { type: "file", id: "banner", onDrop: function (e) {
                    onDropImg(e);
                }, onChange: function (e) {
                    onChange(e);
                }, style: { width: "0px" } }, void 0)] }, void 0));
};
export default EditorBanner;
