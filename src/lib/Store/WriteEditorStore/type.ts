export type line = {
  id: number;
  text: string;
  tag: string;
  next: number | null;
  prev: number | null;
  src: string;
};

export type trash = { type: string; payload: any };

export type focusLine = number | null;
export type head = number;
export type focusIndex = number;
export type updater = number;
export type banner = Blob | undefined;
export type title = string;

export type WriteEditorStateType = {
  title: title;
  banner: banner;
  body: line[];
  focusLine: focusLine;
  head: head;
  focusIndex: focusIndex;
  updatter: updater;
  setTexter: boolean;
  setFocuser: Boolean;
  tagBoxId: number | null;
  searchWord: string | null;
  tagBoxFocusIdx: number | null;
  putId: string;
};
