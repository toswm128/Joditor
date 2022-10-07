import WriteEditorState from "./state";
import produce from "immer";
import {
  ADD_LINE,
  CLOSE_TAG_BOX,
  DROP_IMG,
  DROP_LINE,
  FOCUS_LINE,
  FOCUS_NEXT_LINE,
  FOCUS_NEXT_TAG,
  FOCUS_PREV_LINE,
  FOCUS_PREV_TAG,
  FOCUS_SET_UP_TAG,
  OPEN_TAG_BOX,
  PUT_SET_UP,
  REDO,
  REMOVE_LINE,
  REMOVE_LINE_ONLY,
  RESET,
  SEARCH_TAG,
  SET_BANNER,
  SET_IMG,
  SET_LINE_TEXT,
  SET_TAG_TO_A,
  SET_TAG_TO_CALL_OUT,
  SET_TAG_TO_CODE,
  SET_TAG_TO_H1,
  SET_TAG_TO_H2,
  SET_TAG_TO_H3,
  SET_TAG_TO_UL,
  SET_TITLE,
  UNDO,
  UNSET_IMG,
} from "./actions";
import { WriteEditorStateType } from "./type";
import { createReducer } from "typesafe-actions";

export default createReducer<WriteEditorStateType>(WriteEditorState, {
  [SET_LINE_TEXT]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload.id].text = action.payload.text;
    }),
  [FOCUS_LINE]: (state, action) =>
    produce(state, (draft) => {
      draft.focusLine = action.payload;
    }),
  [ADD_LINE]: (state, action) =>
    produce(state, (draft) => {
      draft.focusLine = draft.body.length;
      draft.body.push({
        id: draft.body.length,
        text: "",
        tag: "div",
        next: action.payload.next,
        prev: action.payload.id,
        src: "",
      });
      draft.body[action.payload.id].next = draft.body.length - 1;
      if (action.payload.next !== null)
        draft.body[action.payload.next].prev = draft.body.length - 1;
    }),
  [REMOVE_LINE]: (state, action) =>
    produce(state, (draft) => {
      draft.focusIndex = 9999;
      // delete draft.body[action.payload.id];

      if (draft.head !== action.payload.id) {
        draft.body[action.payload.prev].next = action.payload.next;
        draft.focusLine = action.payload.prev;
      } else {
        draft.head = action.payload.next;
        draft.focusLine = action.payload.next;
      }
      if (action.payload.next !== null)
        draft.body[action.payload.next].prev = action.payload.prev;
      draft.setTexter = !draft.setTexter;
    }),
  [REMOVE_LINE_ONLY]: (state, action) =>
    produce(state, (draft) => {
      // delete draft.body[action.payload.id];
      if (draft.head !== action.payload.id) {
        draft.focusIndex = draft.body[action.payload.prev].text.length;
        draft.body[action.payload.prev].text +=
          draft.body[action.payload.id].text;
        draft.body[action.payload.prev].next = action.payload.next;
        if (action.payload.next !== null)
          draft.body[action.payload.next].prev = action.payload.prev;
        draft.focusLine = action.payload.prev;
      }
    }),

  [DROP_LINE]: (state, action) =>
    produce(state, (draft) => {
      const source = draft.body[action.payload.id];
      const nextS = source.next;
      const prevS = source.prev;
      const idS = source.id;
      const destination = draft.body[action.payload.destinationID];
      const nextD = destination.next;
      const prevD = destination.prev;
      const idD = destination.id;

      if (Math.abs(action.payload.source - action.payload.destination) === 1) {
        if (action.payload.source > action.payload.destination) {
          if (prevD !== null) {
            draft.body[prevD].next = idS;
          } else draft.head = idS;
          draft.body[idS].prev = prevD;
          draft.body[idS].next = idD;
          draft.body[idD].prev = idS;
          draft.body[idD].next = nextS;
          if (nextS !== null) {
            draft.body[nextS].prev = idD;
          }
        } else if (action.payload.source < action.payload.destination) {
          if (prevS !== null) {
            draft.body[prevS].next = idD;
          } else draft.head = idD;
          draft.body[idD].prev = prevS;
          draft.body[idD].next = idS;
          draft.body[idS].prev = idD;
          draft.body[idS].next = nextD;
          if (nextD !== null) {
            draft.body[nextD].prev = idS;
          }
        }
      } else {
        if (action.payload.source > action.payload.destination) {
          if (prevD !== null) {
            draft.body[prevD].next = idS;
          } else draft.head = idS;

          draft.body[idS].prev = prevD;
          draft.body[idS].next = idD;
          draft.body[idD].prev = idS;
          if (prevS !== null) {
            draft.body[prevS].next = nextS;
          }
          if (nextS !== null) {
            draft.body[nextS].prev = prevS;
          }
        } else if (action.payload.source < action.payload.destination) {
          if (prevS !== null) {
            draft.body[prevS].next = nextS;
          } else if (nextS !== null) draft.head = nextS;
          draft.body[idS].prev = idD;
          draft.body[idS].next = nextD;
          draft.body[idD].next = idS;
          if (nextS !== null) {
            draft.body[nextS].prev = prevS;
          }
          if (nextD !== null) {
            draft.body[nextD].prev = idS;
          }
        }
      }
    }),

  [SET_IMG]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload.id].src = action.payload.src;
      if (draft.body[action.payload.id].next !== null)
        draft.focusLine = draft.body[action.payload.id].next;
      else draft.focusLine = draft.body[action.payload.id].prev;
    }),
  [UNSET_IMG]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "div";
      draft.body[action.payload].src = "";
      draft.focusLine = action.payload;
    }),
  [DROP_IMG]: (state, action) =>
    produce(state, (draft) => {
      const id = action.payload.id;
      if (draft.body[id].next !== null) draft.focusLine = draft.body[id].next;
      else draft.focusLine = draft.body[id].prev;
      if (draft.body[id].next !== null)
        draft.body[draft.body[id].next!].prev = draft.body.length - 1;

      draft.body.push({
        id: draft.body.length,
        text: "",
        tag: action.payload.isA ? "img" : "a",
        next: draft.body[id].next,
        prev: id,
        src: action.payload.src,
      });
      draft.body[id].next = draft.body.length - 1;
    }),
  [SET_TAG_TO_UL]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload.id].tag = "ul";
      draft.focusIndex = action.payload.focusIndex;
    }),
  [SET_TAG_TO_H1]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "h1";
    }),
  [SET_TAG_TO_H2]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "h2";
    }),
  [SET_TAG_TO_H3]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "h3";
    }),
  [SET_TAG_TO_A]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "a";
    }),
  [SET_TAG_TO_CODE]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "code";
    }),
  [SET_TAG_TO_CALL_OUT]: (state, action) =>
    produce(state, (draft) => {
      draft.body[action.payload].tag = "callOut";
    }),
  [SEARCH_TAG]: (state, action) =>
    produce(state, (draft) => {
      draft.searchWord = action.payload;
    }),
  [FOCUS_NEXT_LINE]: (state, action) =>
    produce(state, (draft) => {
      draft.setFocuser = !draft.setFocuser;
      draft.focusLine = draft.body[action.payload.id].next;
      draft.focusIndex = action.payload.focusIndex;
    }),
  [FOCUS_PREV_LINE]: (state, action) =>
    produce(state, (draft) => {
      draft.setFocuser = !draft.setFocuser;
      draft.focusLine = draft.body[action.payload.id].prev;
      draft.focusIndex = action.payload.focusIndex;
    }),

  [UNDO]: (state) =>
    produce(state, (draft) => {
      // draft.trashList.length &&
      //   draft.recycleList.push(draft.trashList[draft.trashList.length - 1]);
      // const trash = draft.trashList.pop();
      // switch (trash?.type) {
      //   case SET_LINE_TEXT:
      //     draft.body[trash.payload.id].text = trash.payload.text;
      //     draft.focusLine = trash.payload.id;
      //     break;
      //   case ADD_LINE:
      //     draft.body[trash.payload.prev].next = trash.payload.next;
      //     draft.body[trash.payload.next].prev = trash.payload.prev;
      // }
      // draft.updatter += 1;
    }),
  [REDO]: (state) =>
    produce(state, (draft) => {
      // draft.recycleList.length &&
      //   draft.trashList.push(draft.recycleList[draft.recycleList.length - 1]);
      // const recyclables = draft.recycleList.pop();
      // switch (recyclables?.type) {
      //   case SET_LINE_TEXT:
      //     draft.body[recyclables.payload.id].text = recyclables.payload.text;
      //     draft.focusLine = recyclables.payload.id;
      //     break;
      //   case ADD_LINE:
      //     draft.body[recyclables.payload.prev].next = recyclables.payload.id;
      //     draft.body[recyclables.payload.next].prev = recyclables.payload.id;
      // }
      // draft.updatter += 1;
    }),
  [SET_BANNER]: (state, action) =>
    produce(state, (draft) => {
      draft.banner = action.payload;
    }),
  [SET_TITLE]: (state, action) =>
    produce(state, (draft) => {
      draft.title = action.payload;
    }),
  [RESET]: (state) =>
    produce(state, (draft) => {
      draft.body = [
        {
          id: 0,
          text: "",
          tag: "div",
          next: null,
          prev: null,
          src: "",
        },
      ];
      draft.title = "";
      draft.banner = undefined;
      draft.updatter = 1;
      draft.focusLine = 0;
      draft.head = 0;
      draft.focusIndex = 999999;
      draft.setTexter = false;
      draft.setFocuser = false;
      draft.putId = "";
    }),

  [OPEN_TAG_BOX]: (state, action) =>
    produce(state, (draft) => {
      draft.tagBoxId = action.payload;
    }),
  [CLOSE_TAG_BOX]: (state) =>
    produce(state, (draft) => {
      draft.tagBoxId = null;
      draft.searchWord = null;
    }),

  [FOCUS_NEXT_TAG]: (state) =>
    produce(state, (draft) => {
      if (draft.tagBoxFocusIdx === null) {
        draft.tagBoxFocusIdx = 0;
      } else {
        draft.tagBoxFocusIdx += 1;
      }
    }),
  [FOCUS_PREV_TAG]: (state) =>
    produce(state, (draft) => {
      if (draft.tagBoxFocusIdx === null) {
        draft.tagBoxFocusIdx = 0;
      } else {
        draft.tagBoxFocusIdx && (draft.tagBoxFocusIdx -= 1);
      }
    }),
  [FOCUS_SET_UP_TAG]: (state) =>
    produce(state, (draft) => {
      draft.tagBoxFocusIdx = null;
    }),
  [PUT_SET_UP]: (state, action) =>
    produce(state, (draft) => {
      draft.body = action.payload.body;
      draft.title = action.payload.title;
      draft.putId = action.payload.id;
    }),
});
