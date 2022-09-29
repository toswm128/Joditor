var _a;
import WriteEditorState from "./state";
import produce from "immer";
import { ADD_LINE, CLOSE_TAG_BOX, DROP_IMG, DROP_LINE, FOCUS_LINE, FOCUS_NEXT_LINE, FOCUS_NEXT_TAG, FOCUS_PREV_LINE, FOCUS_PREV_TAG, FOCUS_SET_UP_TAG, OPEN_TAG_BOX, PUT_SET_UP, REDO, REMOVE_LINE, REMOVE_LINE_ONLY, RESET, SEARCH_TAG, SET_BANNER, SET_IMG, SET_LINE_TEXT, SET_TAG_TO_A, SET_TAG_TO_CALL_OUT, SET_TAG_TO_CODE, SET_TAG_TO_H1, SET_TAG_TO_H2, SET_TAG_TO_H3, SET_TAG_TO_UL, SET_TITLE, UNDO, UNSET_IMG, } from "./actions";
import { createReducer } from "typesafe-actions";
export default createReducer(WriteEditorState, (_a = {},
    _a[SET_LINE_TEXT] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload.id].text = action.payload.text;
            draft.trashList.push({
                type: SET_LINE_TEXT,
                payload: {
                    id: action.payload.id,
                    text: draft.body[action.payload.id].text,
                },
            });
        });
    },
    _a[FOCUS_LINE] = function (state, action) {
        return produce(state, function (draft) {
            draft.focusLine = action.payload;
        });
    },
    _a[ADD_LINE] = function (state, action) {
        return produce(state, function (draft) {
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
            draft.trashList.push({
                type: ADD_LINE,
                payload: {
                    id: draft.body.length - 1,
                    next: action.payload.next,
                    prev: action.payload.id,
                },
            });
        });
    },
    _a[REMOVE_LINE] = function (state, action) {
        return produce(state, function (draft) {
            draft.focusIndex = 9999;
            // delete draft.body[action.payload.id];
            if (draft.head !== action.payload.id) {
                draft.body[action.payload.prev].next = action.payload.next;
                draft.focusLine = action.payload.prev;
            }
            else {
                draft.head = action.payload.next;
                draft.focusLine = action.payload.next;
            }
            if (action.payload.next !== null)
                draft.body[action.payload.next].prev = action.payload.prev;
            draft.setTexter = !draft.setTexter;
        });
    },
    _a[REMOVE_LINE_ONLY] = function (state, action) {
        return produce(state, function (draft) {
            // delete draft.body[action.payload.id];
            if (draft.head !== action.payload.id) {
                if (draft.updatter !== 1) {
                    draft.trashList.splice(draft.trashList.length - draft.updatter, draft.trashList.length - 1);
                    draft.updatter = 1;
                }
                draft.focusIndex = draft.body[action.payload.prev].text.length;
                draft.body[action.payload.prev].text +=
                    draft.body[action.payload.id].text;
                draft.body[action.payload.prev].next = action.payload.next;
                if (action.payload.next !== null)
                    draft.body[action.payload.next].prev = action.payload.prev;
                draft.focusLine = action.payload.prev;
            }
        });
    },
    _a[DROP_LINE] = function (state, action) {
        return produce(state, function (draft) {
            var source = draft.body[action.payload.id];
            var nextS = source.next;
            var prevS = source.prev;
            var idS = source.id;
            var destination = draft.body[action.payload.destinationID];
            var nextD = destination.next;
            var prevD = destination.prev;
            var idD = destination.id;
            if (Math.abs(action.payload.source - action.payload.destination) === 1) {
                if (action.payload.source > action.payload.destination) {
                    if (prevD !== null) {
                        draft.body[prevD].next = idS;
                    }
                    else
                        draft.head = idS;
                    draft.body[idS].prev = prevD;
                    draft.body[idS].next = idD;
                    draft.body[idD].prev = idS;
                    draft.body[idD].next = nextS;
                    if (nextS !== null) {
                        draft.body[nextS].prev = idD;
                    }
                }
                else if (action.payload.source < action.payload.destination) {
                    if (prevS !== null) {
                        draft.body[prevS].next = idD;
                    }
                    else
                        draft.head = idD;
                    draft.body[idD].prev = prevS;
                    draft.body[idD].next = idS;
                    draft.body[idS].prev = idD;
                    draft.body[idS].next = nextD;
                    if (nextD !== null) {
                        draft.body[nextD].prev = idS;
                    }
                }
            }
            else {
                if (action.payload.source > action.payload.destination) {
                    if (prevD !== null) {
                        draft.body[prevD].next = idS;
                    }
                    else
                        draft.head = idS;
                    draft.body[idS].prev = prevD;
                    draft.body[idS].next = idD;
                    draft.body[idD].prev = idS;
                    if (prevS !== null) {
                        draft.body[prevS].next = nextS;
                    }
                    if (nextS !== null) {
                        draft.body[nextS].prev = prevS;
                    }
                }
                else if (action.payload.source < action.payload.destination) {
                    if (prevS !== null) {
                        draft.body[prevS].next = nextS;
                    }
                    else if (nextS !== null)
                        draft.head = nextS;
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
        });
    },
    _a[SET_IMG] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload.id].src = action.payload.src;
            if (draft.body[action.payload.id].next !== null)
                draft.focusLine = draft.body[action.payload.id].next;
            else
                draft.focusLine = draft.body[action.payload.id].prev;
        });
    },
    _a[UNSET_IMG] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "div";
            draft.body[action.payload].src = "";
            draft.focusLine = action.payload;
        });
    },
    _a[DROP_IMG] = function (state, action) {
        return produce(state, function (draft) {
            var id = action.payload.id;
            if (draft.body[id].next !== null)
                draft.focusLine = draft.body[id].next;
            else
                draft.focusLine = draft.body[id].prev;
            if (draft.body[id].next !== null)
                draft.body[draft.body[id].next].prev = draft.body.length - 1;
            draft.body.push({
                id: draft.body.length,
                text: "",
                tag: action.payload.isA ? "img" : "a",
                next: draft.body[id].next,
                prev: id,
                src: action.payload.src,
            });
            draft.body[id].next = draft.body.length - 1;
        });
    },
    _a[SET_TAG_TO_UL] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload.id].tag = "ul";
            draft.focusIndex = action.payload.focusIndex;
        });
    },
    _a[SET_TAG_TO_H1] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "h1";
        });
    },
    _a[SET_TAG_TO_H2] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "h2";
        });
    },
    _a[SET_TAG_TO_H3] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "h3";
        });
    },
    _a[SET_TAG_TO_A] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "a";
        });
    },
    _a[SET_TAG_TO_CODE] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "code";
        });
    },
    _a[SET_TAG_TO_CALL_OUT] = function (state, action) {
        return produce(state, function (draft) {
            draft.body[action.payload].tag = "callOut";
        });
    },
    _a[SEARCH_TAG] = function (state, action) {
        return produce(state, function (draft) {
            draft.searchWord = action.payload;
        });
    },
    _a[FOCUS_NEXT_LINE] = function (state, action) {
        return produce(state, function (draft) {
            draft.setFocuser = !draft.setFocuser;
            draft.focusLine = draft.body[action.payload.id].next;
            draft.focusIndex = action.payload.focusIndex;
        });
    },
    _a[FOCUS_PREV_LINE] = function (state, action) {
        return produce(state, function (draft) {
            draft.setFocuser = !draft.setFocuser;
            draft.focusLine = draft.body[action.payload.id].prev;
            draft.focusIndex = action.payload.focusIndex;
        });
    },
    _a[UNDO] = function (state) {
        return produce(state, function (draft) {
            draft.trashList.length &&
                draft.recycleList.push(draft.trashList[draft.trashList.length - 1]);
            var trash = draft.trashList.pop();
            switch (trash === null || trash === void 0 ? void 0 : trash.type) {
                case SET_LINE_TEXT:
                    draft.body[trash.payload.id].text = trash.payload.text;
                    draft.focusLine = trash.payload.id;
                    break;
                case ADD_LINE:
                    draft.body[trash.payload.prev].next = trash.payload.next;
                    draft.body[trash.payload.next].prev = trash.payload.prev;
            }
            draft.updatter += 1;
        });
    },
    _a[REDO] = function (state) {
        return produce(state, function (draft) {
            draft.recycleList.length &&
                draft.trashList.push(draft.recycleList[draft.recycleList.length - 1]);
            var recyclables = draft.recycleList.pop();
            switch (recyclables === null || recyclables === void 0 ? void 0 : recyclables.type) {
                case SET_LINE_TEXT:
                    draft.body[recyclables.payload.id].text = recyclables.payload.text;
                    draft.focusLine = recyclables.payload.id;
                    break;
                case ADD_LINE:
                    draft.body[recyclables.payload.prev].next = recyclables.payload.id;
                    draft.body[recyclables.payload.next].prev = recyclables.payload.id;
            }
            draft.updatter += 1;
        });
    },
    _a[SET_BANNER] = function (state, action) {
        return produce(state, function (draft) {
            draft.banner = action.payload;
        });
    },
    _a[SET_TITLE] = function (state, action) {
        return produce(state, function (draft) {
            draft.title = action.payload;
        });
    },
    _a[RESET] = function (state) {
        return produce(state, function (draft) {
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
            draft.trashList = [];
            draft.recycleList = [];
            draft.title = "";
            draft.banner = undefined;
            draft.updatter = 1;
            draft.focusLine = 0;
            draft.head = 0;
            draft.focusIndex = 999999;
            draft.setTexter = false;
            draft.setFocuser = false;
            draft.putId = "";
        });
    },
    _a[OPEN_TAG_BOX] = function (state, action) {
        return produce(state, function (draft) {
            draft.tagBoxId = action.payload;
        });
    },
    _a[CLOSE_TAG_BOX] = function (state) {
        return produce(state, function (draft) {
            draft.tagBoxId = null;
            draft.searchWord = null;
        });
    },
    _a[FOCUS_NEXT_TAG] = function (state) {
        return produce(state, function (draft) {
            if (draft.tagBoxFocusIdx === null) {
                draft.tagBoxFocusIdx = 0;
            }
            else {
                draft.tagBoxFocusIdx += 1;
            }
        });
    },
    _a[FOCUS_PREV_TAG] = function (state) {
        return produce(state, function (draft) {
            if (draft.tagBoxFocusIdx === null) {
                draft.tagBoxFocusIdx = 0;
            }
            else {
                draft.tagBoxFocusIdx && (draft.tagBoxFocusIdx -= 1);
            }
        });
    },
    _a[FOCUS_SET_UP_TAG] = function (state) {
        return produce(state, function (draft) {
            draft.tagBoxFocusIdx = null;
        });
    },
    _a[PUT_SET_UP] = function (state, action) {
        return produce(state, function (draft) {
            draft.body = action.payload.body;
            draft.title = action.payload.title;
            draft.putId = action.payload.id;
        });
    },
    _a));
