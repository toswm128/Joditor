import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../Store/rootReducer";
import {
  ADD_LINE,
  UNDO,
  FOCUS_LINE,
  FOCUS_NEXT_LINE,
  FOCUS_PREV_LINE,
  REMOVE_LINE,
  REMOVE_LINE_ONLY,
  SET_IMG,
  SET_LINE_TEXT,
  SET_TAG_TO_UL,
  UNSET_IMG,
  REDO,
  DROP_IMG,
  SET_BANNER,
  SET_TITLE,
  RESET,
  OPEN_TAG_BOX,
  CLOSE_TAG_BOX,
  SET_TAG_TO_H1,
  SET_TAG_TO_H3,
  SET_TAG_TO_H2,
  SET_TAG_TO_A,
  DROP_LINE,
  SET_TAG_TO_CODE,
  SET_TAG_TO_CALL_OUT,
  SEARCH_TAG,
  FOCUS_PREV_TAG,
  FOCUS_NEXT_TAG,
  FOCUS_SET_UP_TAG,
  PUT_SET_UP,
} from "../Store/WriteEditorStore/actions";

const useWrite = () => {
  const dispatch = useDispatch();
  const WriteEditorState = useTypedSelector((state) => state.WriteEditor);

  const setLineText = useCallback(
    (text: string | undefined, id: number, index?: number) => {
      dispatch({
        type: SET_LINE_TEXT,
        payload: { text, id, index },
      });
    },
    [dispatch]
  );

  const clickInputter = useCallback(
    (id: number) => {
      dispatch({
        type: FOCUS_LINE,
        payload: id,
      });
    },
    [dispatch]
  );

  const enterInputter = useCallback(
    (id: number, next: number | null) => {
      dispatch({
        type: ADD_LINE,
        payload: { id, next },
      });
    },
    [dispatch]
  );

  const removeLine = useCallback(
    (id: number, next: number | null, prev: number | null) => {
      dispatch({
        type: REMOVE_LINE,
        payload: { id, next, prev },
      });
    },
    [dispatch]
  );

  const removeLineOnly = useCallback(
    (id: number, next: number | null, prev: number | null) => {
      dispatch({
        type: REMOVE_LINE_ONLY,
        payload: { id, next, prev },
      });
    },
    [dispatch]
  );

  const dropLine = useCallback(
    (
      source: number,
      destination: number,
      id: number,
      destinationID: number
    ) => {
      dispatch({
        type: DROP_LINE,
        payload: { source, destination, id, destinationID },
      });
    },
    [dispatch]
  );

  const setImg = useCallback(
    (id: number, src: string) => {
      dispatch({
        type: SET_IMG,
        payload: { id, src },
      });
    },
    [dispatch]
  );
  const unsetImg = useCallback(
    (id: number) => {
      dispatch({
        type: UNSET_IMG,
        payload: id,
      });
    },
    [dispatch]
  );

  const dropImg = useCallback(
    (id: number, src: string, isA?: boolean) => {
      dispatch({
        type: DROP_IMG,
        payload: { id, src, isA },
      });
    },
    [dispatch]
  );

  const setTag2Ul = useCallback(
    (id: number, focusIndex: number) => {
      dispatch({
        type: SET_TAG_TO_UL,
        payload: { id, focusIndex },
      });
    },
    [dispatch]
  );
  const setTag2H1 = useCallback(
    (id: number) => {
      dispatch({
        type: SET_TAG_TO_H1,
        payload: id,
      });
    },
    [dispatch]
  );
  const setTag2H2 = useCallback(
    (id: number) => {
      dispatch({
        type: SET_TAG_TO_H2,
        payload: id,
      });
    },
    [dispatch]
  );
  const setTag2H3 = useCallback(
    (id: number) => {
      dispatch({
        type: SET_TAG_TO_H3,
        payload: id,
      });
    },
    [dispatch]
  );
  const setTag2A = useCallback(
    (id: number) => {
      dispatch({
        type: SET_TAG_TO_A,
        payload: id,
      });
    },
    [dispatch]
  );
  const setTag2Code = useCallback(
    (id: number) => {
      dispatch({
        type: SET_TAG_TO_CODE,
        payload: id,
      });
    },
    [dispatch]
  );
  const setTag2CallOut = useCallback(
    (id: number) => {
      dispatch({
        type: SET_TAG_TO_CALL_OUT,
        payload: id,
      });
    },
    [dispatch]
  );
  const searchTag = useCallback(
    (searchWord: string) => {
      dispatch({
        type: SEARCH_TAG,
        payload: searchWord,
      });
    },
    [dispatch]
  );
  const focusSetUpTag = useCallback(() => {
    dispatch({
      type: FOCUS_SET_UP_TAG,
    });
  }, [dispatch]);

  const focusNextLine = useCallback(
    (id: number, focusIndex: number) => {
      dispatch({
        type: FOCUS_NEXT_LINE,
        payload: { id, focusIndex },
      });
    },
    [dispatch]
  );

  const focusPrevLine = useCallback(
    (id: number, focusIndex: number) => {
      dispatch({
        type: FOCUS_PREV_LINE,
        payload: { id, focusIndex },
      });
    },
    [dispatch]
  );

  const undo = useCallback(() => {
    dispatch({
      type: UNDO,
    });
  }, [dispatch]);

  const redo = useCallback(() => {
    dispatch({
      type: REDO,
    });
  }, [dispatch]);

  const setBanner = useCallback(
    (file: File) => {
      dispatch({
        type: SET_BANNER,
        payload: file,
      });
    },
    [dispatch]
  );
  const setTitle = useCallback(
    (text: string) => {
      dispatch({
        type: SET_TITLE,
        payload: text,
      });
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    dispatch({
      type: RESET,
    });
  }, [dispatch]);

  const openTagBox = useCallback(
    (id: number) => {
      dispatch({
        type: OPEN_TAG_BOX,
        payload: id,
      });
    },
    [dispatch]
  );
  const closeTagBox = useCallback(() => {
    dispatch({
      type: CLOSE_TAG_BOX,
    });
  }, [dispatch]);

  const focusNextTag = useCallback(() => {
    dispatch({
      type: FOCUS_NEXT_TAG,
    });
  }, [dispatch]);

  const focusPrevTag = useCallback(() => {
    dispatch({
      type: FOCUS_PREV_TAG,
    });
  }, [dispatch]);

  const putSetUp = useCallback(
    (body: any, title: any, id: any) => {
      dispatch({
        type: PUT_SET_UP,
        payload: { body, title, id },
      });
    },
    [dispatch]
  );

  return {
    clickInputter,
    enterInputter,
    setLineText,
    removeLine,
    removeLineOnly,
    dropLine,
    setImg,
    dropImg,
    unsetImg,
    setTag2Ul,
    setTag2H1,
    setTag2H2,
    setTag2H3,
    setTag2A,
    setTag2Code,
    setTag2CallOut,
    searchTag,
    focusSetUpTag,
    focusNextLine,
    focusPrevLine,
    undo,
    redo,
    setBanner,
    setTitle,
    reset,
    openTagBox,
    closeTagBox,
    focusNextTag,
    focusPrevTag,
    putSetUp,
    WriteEditorState,
  };
};

export default useWrite;
