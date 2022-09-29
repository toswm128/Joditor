import { WriteEditorStateType } from "./type";

const WriteEditorState: WriteEditorStateType = {
  body: [
    {
      id: 0,
      text: "",
      tag: "div",
      next: null,
      prev: null,
      src: "",
    },
  ],
  trashList: [],
  recycleList: [],
  title: "",
  banner: undefined,
  updatter: 1,
  focusLine: 0,
  head: 0,
  focusIndex: 999999,
  setTexter: false,
  setFocuser: false,
  tagBoxId: null,
  searchWord: null,
  tagBoxFocusIdx: null,
  putId: "",
};

export default WriteEditorState;
