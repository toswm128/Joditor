import { jsx as _jsx } from "react/jsx-runtime";
import useWrite from "lib/write";
import { useEffect, useState } from "react";
var EditorTitle = function () {
    var _a = useState(""), text = _a[0], setText = _a[1];
    var _b = useWrite(), setTitle = _b.setTitle, title = _b.WriteEditorState.title;
    useEffect(function () {
        title && setText(title);
    }, []);
    return (_jsx("input", { type: "text", className: "title", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694...", onChange: function (e) { return setText(e.target.value); }, value: text, onBlur: function () { return setTitle(text); } }, void 0));
};
export default EditorTitle;
