import useWrite from "lib/write";
import { useCallback, useRef, useState } from "react";
import useTags from "./TagBox/TagList/Tags/useTags";
var useEditorInputter = function (data) {
    var _a = useState(data.text), text = _a[0], setText = _a[1];
    var _b = useState(false), drogOver = _b[0], setDrogOver = _b[1];
    var inputterRef = useRef(null);
    var spaceFlag = useRef(false);
    var _c = useWrite(), setLineText = _c.setLineText, focusNextLine = _c.focusNextLine, focusPrevLine = _c.focusPrevLine, setTag2Ul = _c.setTag2Ul, removeLine = _c.removeLine, removeLineOnly = _c.removeLineOnly, setTag2A = _c.setTag2A, redo = _c.redo, undo = _c.undo, dropImg = _c.dropImg, setImg = _c.setImg, searchTag = _c.searchTag, enterInputter = _c.enterInputter, clickInputter = _c.clickInputter, openTagBox = _c.openTagBox, closeTagBox = _c.closeTagBox, focusNextTag = _c.focusNextTag, focusPrevTag = _c.focusPrevTag, focusSetUpTag = _c.focusSetUpTag, WriteEditorState = _c.WriteEditorState;
    var selectTagId = useTags().selectTagId;
    var onChangeText = function (e, id) {
        if (e.target.value.startsWith("/")) {
            openTagBox(id);
            searchTag(e.target.value.substring(1));
        }
        else if (WriteEditorState.tagBoxId)
            closeTagBox();
        setText(e.target.value);
    };
    var clickTagButton = function () {
        click();
        WriteEditorState.tagBoxId !== null ? closeTagBox() : openTagBox(data.id);
    };
    var onKeyPressEnter = useCallback(function (e) {
        if (e.key === "Enter" && e.shiftKey === false) {
            if (WriteEditorState.tagBoxFocusIdx !== null) {
                selectTagId();
                focusSetUpTag();
            }
            else {
                setLineText(text, data.id);
                enterInputter(data.id, data.next);
            }
            e.preventDefault();
        }
    }, [
        data.id,
        data.next,
        enterInputter,
        selectTagId,
        WriteEditorState.tagBoxFocusIdx,
        focusSetUpTag,
        setLineText,
        text,
    ]);
    var onKeyDownArrowUp = useCallback(function (e) {
        e.preventDefault();
        if (inputterRef.current && !e.nativeEvent.isComposing) {
            if (WriteEditorState.tagBoxId !== null) {
                focusPrevTag();
                console.log(WriteEditorState.tagBoxId);
            }
            else
                focusPrevLine(data.id, inputterRef.current.selectionEnd);
        }
    }, [data.id, focusPrevLine, focusPrevTag, WriteEditorState.tagBoxId]);
    var onKeyDownArrowDown = useCallback(function (e) {
        e.preventDefault();
        if (inputterRef.current && !e.nativeEvent.isComposing) {
            if (WriteEditorState.tagBoxId !== null) {
                focusNextTag();
            }
            else
                focusNextLine(data.id, inputterRef.current.selectionEnd);
        }
    }, [data.id, focusNextLine, focusNextTag, WriteEditorState.tagBoxId]);
    var onKeyDownSpace = useCallback(function () {
        if (inputterRef.current) {
            setLineText(text, data.id, inputterRef.current.selectionEnd);
            spaceFlag.current = true;
        }
    }, [data.id, setLineText, text]);
    var onKeyDownTab = useCallback(function (e) {
        e.preventDefault();
        if (data.tag !== "ul") {
            inputterRef.current &&
                setTag2Ul(data.id, inputterRef.current.selectionEnd);
        }
    }, [data.id, data.tag, setTag2Ul]);
    var onKeyDownBackspace = useCallback(function () {
        if (data.next !== null || WriteEditorState.head !== data.id) {
            if (text.length === 0)
                removeLine(data.id, data.next, data.prev);
            else if (inputterRef.current &&
                inputterRef.current.selectionEnd +
                    inputterRef.current.selectionStart ===
                    0) {
                removeLineOnly(data.id, data.next, data.prev);
            }
            else {
                spaceFlag.current && setLineText(text, data.id);
                spaceFlag.current = false;
            }
        }
    }, [
        data.id,
        data.next,
        data.prev,
        removeLine,
        removeLineOnly,
        setLineText,
        WriteEditorState.head,
        text,
    ]);
    var onKeyDownZ = useCallback(function (e) {
        if (e.metaKey === true || e.ctrlKey === true) {
            if (!e.nativeEvent.isComposing) {
                e.preventDefault();
                if (e.shiftKey === true) {
                    redo();
                }
                else {
                    text !== data.text && setLineText(text, data.id);
                    undo();
                }
            }
        }
    }, [data.text, data.id, redo, undo, text, setLineText]);
    var onDropUrl = useCallback(function (e) {
        e.preventDefault();
        setDrogOver(false);
        if (e.dataTransfer.files[0] !== undefined) {
            // dropImg(data.id, URL.createObjectURL(e.dataTransfer.files[0]), true);
        }
        else if (e.dataTransfer.getData("url") !== undefined) {
            console.log(e.dataTransfer.types, e.dataTransfer.getData("url"));
            // dropImg(data.id, e.dataTransfer.getData("url"), true);
        }
    }, [data.id]);
    var onBlur = useCallback(function (e) {
        if (text !== data.text)
            setLineText(text, data.id);
        if (!(WriteEditorState.tagBoxId === null) &&
            e.currentTarget.nextSibling) {
            !e.currentTarget.nextSibling.contains(e.relatedTarget) && closeTagBox();
        }
    }, [data.text, data.id, text, WriteEditorState.tagBoxId]);
    var dragOver = useCallback(function () {
        setDrogOver(true);
    }, []);
    var dragLeave = useCallback(function () {
        setDrogOver(false);
    }, []);
    var onPasteImg = useCallback(function (e) {
        e.clipboardData.items[0] &&
            e.clipboardData.items[0].getAsString(function (string) {
                if (string.startsWith("http")) {
                    setLineText(string, data.id);
                    setTag2A(data.id);
                }
            });
        // e.clipboardData.files[0] &&
        //   setImg(data.id, URL.createObjectURL(e.clipboardData.files[0]));
    }, [data.id, setLineText, setTag2A]);
    var click = useCallback(function () {
        clickInputter(data.id);
    }, [data.id]);
    return {
        onChangeText: onChangeText,
        clickTagButton: clickTagButton,
        onKeyPressEnter: onKeyPressEnter,
        onKeyDownArrowUp: onKeyDownArrowUp,
        onKeyDownArrowDown: onKeyDownArrowDown,
        onKeyDownSpace: onKeyDownSpace,
        onKeyDownTab: onKeyDownTab,
        onKeyDownBackspace: onKeyDownBackspace,
        onKeyDownZ: onKeyDownZ,
        onDropUrl: onDropUrl,
        onBlur: onBlur,
        dragOver: dragOver,
        dragLeave: dragLeave,
        onPasteImg: onPasteImg,
        click: click,
        inputterRef: inputterRef,
        text: text,
        drogOver: drogOver,
    };
};
export default useEditorInputter;
