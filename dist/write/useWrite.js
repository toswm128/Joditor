import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "lib/Store/rootReducer";
import { ADD_LINE, UNDO, FOCUS_LINE, FOCUS_NEXT_LINE, FOCUS_PREV_LINE, REMOVE_LINE, REMOVE_LINE_ONLY, SET_IMG, SET_LINE_TEXT, SET_TAG_TO_UL, UNSET_IMG, REDO, DROP_IMG, SET_BANNER, SET_TITLE, RESET, OPEN_TAG_BOX, CLOSE_TAG_BOX, SET_TAG_TO_H1, SET_TAG_TO_H3, SET_TAG_TO_H2, SET_TAG_TO_A, DROP_LINE, SET_TAG_TO_CODE, SET_TAG_TO_CALL_OUT, SEARCH_TAG, FOCUS_PREV_TAG, FOCUS_NEXT_TAG, FOCUS_SET_UP_TAG, PUT_SET_UP, } from "lib/Store/WriteEditorStore/actions";
var useWrite = function () {
    var dispatch = useDispatch();
    var WriteEditorState = useTypedSelector(function (state) { return state.WriteEditor; });
    var setLineText = useCallback(function (text, id, index) {
        dispatch({
            type: SET_LINE_TEXT,
            payload: { text: text, id: id, index: index },
        });
    }, [dispatch]);
    var clickInputter = useCallback(function (id) {
        dispatch({
            type: FOCUS_LINE,
            payload: id,
        });
    }, [dispatch]);
    var enterInputter = useCallback(function (id, next) {
        dispatch({
            type: ADD_LINE,
            payload: { id: id, next: next },
        });
    }, [dispatch]);
    var removeLine = useCallback(function (id, next, prev) {
        dispatch({
            type: REMOVE_LINE,
            payload: { id: id, next: next, prev: prev },
        });
    }, [dispatch]);
    var removeLineOnly = useCallback(function (id, next, prev) {
        dispatch({
            type: REMOVE_LINE_ONLY,
            payload: { id: id, next: next, prev: prev },
        });
    }, [dispatch]);
    var dropLine = useCallback(function (source, destination, id, destinationID) {
        dispatch({
            type: DROP_LINE,
            payload: { source: source, destination: destination, id: id, destinationID: destinationID },
        });
    }, [dispatch]);
    var setImg = useCallback(function (id, src) {
        dispatch({
            type: SET_IMG,
            payload: { id: id, src: src },
        });
    }, [dispatch]);
    var unsetImg = useCallback(function (id) {
        dispatch({
            type: UNSET_IMG,
            payload: id,
        });
    }, [dispatch]);
    var dropImg = useCallback(function (id, src, isA) {
        dispatch({
            type: DROP_IMG,
            payload: { id: id, src: src, isA: isA },
        });
    }, [dispatch]);
    var setTag2Ul = useCallback(function (id, focusIndex) {
        dispatch({
            type: SET_TAG_TO_UL,
            payload: { id: id, focusIndex: focusIndex },
        });
    }, [dispatch]);
    var setTag2H1 = useCallback(function (id) {
        dispatch({
            type: SET_TAG_TO_H1,
            payload: id,
        });
    }, [dispatch]);
    var setTag2H2 = useCallback(function (id) {
        dispatch({
            type: SET_TAG_TO_H2,
            payload: id,
        });
    }, [dispatch]);
    var setTag2H3 = useCallback(function (id) {
        dispatch({
            type: SET_TAG_TO_H3,
            payload: id,
        });
    }, [dispatch]);
    var setTag2A = useCallback(function (id) {
        dispatch({
            type: SET_TAG_TO_A,
            payload: id,
        });
    }, [dispatch]);
    var setTag2Code = useCallback(function (id) {
        dispatch({
            type: SET_TAG_TO_CODE,
            payload: id,
        });
    }, [dispatch]);
    var setTag2CallOut = useCallback(function (id) {
        dispatch({
            type: SET_TAG_TO_CALL_OUT,
            payload: id,
        });
    }, [dispatch]);
    var searchTag = useCallback(function (searchWord) {
        dispatch({
            type: SEARCH_TAG,
            payload: searchWord,
        });
    }, [dispatch]);
    var focusSetUpTag = useCallback(function () {
        dispatch({
            type: FOCUS_SET_UP_TAG,
        });
    }, [dispatch]);
    var focusNextLine = useCallback(function (id, focusIndex) {
        dispatch({
            type: FOCUS_NEXT_LINE,
            payload: { id: id, focusIndex: focusIndex },
        });
    }, [dispatch]);
    var focusPrevLine = useCallback(function (id, focusIndex) {
        dispatch({
            type: FOCUS_PREV_LINE,
            payload: { id: id, focusIndex: focusIndex },
        });
    }, [dispatch]);
    var undo = useCallback(function () {
        dispatch({
            type: UNDO,
        });
    }, [dispatch]);
    var redo = useCallback(function () {
        dispatch({
            type: REDO,
        });
    }, [dispatch]);
    var setBanner = useCallback(function (file) {
        dispatch({
            type: SET_BANNER,
            payload: file,
        });
    }, [dispatch]);
    var setTitle = useCallback(function (text) {
        dispatch({
            type: SET_TITLE,
            payload: text,
        });
    }, [dispatch]);
    var reset = useCallback(function () {
        dispatch({
            type: RESET,
        });
    }, [dispatch]);
    var openTagBox = useCallback(function (id) {
        dispatch({
            type: OPEN_TAG_BOX,
            payload: id,
        });
    }, [dispatch]);
    var closeTagBox = useCallback(function () {
        dispatch({
            type: CLOSE_TAG_BOX,
        });
    }, [dispatch]);
    var focusNextTag = useCallback(function () {
        dispatch({
            type: FOCUS_NEXT_TAG,
        });
    }, [dispatch]);
    var focusPrevTag = useCallback(function () {
        dispatch({
            type: FOCUS_PREV_TAG,
        });
    }, [dispatch]);
    var putSetUp = useCallback(function (body, title, id) {
        dispatch({
            type: PUT_SET_UP,
            payload: { body: body, title: title, id: id },
        });
    }, [dispatch]);
    return {
        clickInputter: clickInputter,
        enterInputter: enterInputter,
        setLineText: setLineText,
        removeLine: removeLine,
        removeLineOnly: removeLineOnly,
        dropLine: dropLine,
        setImg: setImg,
        dropImg: dropImg,
        unsetImg: unsetImg,
        setTag2Ul: setTag2Ul,
        setTag2H1: setTag2H1,
        setTag2H2: setTag2H2,
        setTag2H3: setTag2H3,
        setTag2A: setTag2A,
        setTag2Code: setTag2Code,
        setTag2CallOut: setTag2CallOut,
        searchTag: searchTag,
        focusSetUpTag: focusSetUpTag,
        focusNextLine: focusNextLine,
        focusPrevLine: focusPrevLine,
        undo: undo,
        redo: redo,
        setBanner: setBanner,
        setTitle: setTitle,
        reset: reset,
        openTagBox: openTagBox,
        closeTagBox: closeTagBox,
        focusNextTag: focusNextTag,
        focusPrevTag: focusPrevTag,
        putSetUp: putSetUp,
        WriteEditorState: WriteEditorState,
    };
};
export default useWrite;
