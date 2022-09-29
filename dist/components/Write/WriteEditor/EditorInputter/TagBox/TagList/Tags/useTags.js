import useWrite from "lib/write/useWrite";
var useTags = function () {
    var _a = useWrite(), _b = _a.WriteEditorState, tagBoxId = _b.tagBoxId, tagBoxFocusIdx = _b.tagBoxFocusIdx, setLineText = _a.setLineText, closeTagBox = _a.closeTagBox, setTag2H1 = _a.setTag2H1, setTag2H2 = _a.setTag2H2, setTag2H3 = _a.setTag2H3, setTag2A = _a.setTag2A, setTag2Code = _a.setTag2Code, setTag2CallOut = _a.setTag2CallOut;
    var selectTag = function (setTag) {
        if (typeof tagBoxId === "number") {
            setTag(tagBoxId);
            setLineText("", tagBoxId);
            closeTagBox();
        }
    };
    var selectTagId = function () {
        if (typeof tagBoxId === "number") {
            switch (tagBoxFocusIdx) {
                case 0:
                    setTag2H1(tagBoxId);
                    break;
                case 1:
                    setTag2H2(tagBoxId);
                    break;
                case 2:
                    setTag2H3(tagBoxId);
                    break;
                case 3:
                    setTag2A(tagBoxId);
                    break;
                case 4:
                    setTag2Code(tagBoxId);
                    break;
                case 5:
                    setTag2CallOut(tagBoxId);
                    break;
            }
            setLineText("", tagBoxId);
            closeTagBox();
        }
    };
    return { selectTag: selectTag, selectTagId: selectTagId };
};
export default useTags;
