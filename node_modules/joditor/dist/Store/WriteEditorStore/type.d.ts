export declare type line = {
    id: number;
    text: string;
    tag: string;
    next: number | null;
    prev: number | null;
    src: string;
};
export declare type trash = {
    type: string;
    payload: any;
};
export declare type focusLine = number | null;
export declare type head = number;
export declare type focusIndex = number;
export declare type updater = number;
export declare type banner = Blob | undefined;
export declare type title = string;
export declare type WriteEditorStateType = {
    title: title;
    banner: banner;
    body: line[];
    trashList: trash[];
    recycleList: trash[];
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
