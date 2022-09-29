declare const useWrite: () => {
    clickInputter: (id: number) => void;
    enterInputter: (id: number, next: number | null) => void;
    setLineText: (text: string | undefined, id: number, index?: number | undefined) => void;
    removeLine: (id: number, next: number | null, prev: number | null) => void;
    removeLineOnly: (id: number, next: number | null, prev: number | null) => void;
    dropLine: (source: number, destination: number, id: number, destinationID: number) => void;
    setImg: (id: number, src: string) => void;
    dropImg: (id: number, src: string, isA?: boolean | undefined) => void;
    unsetImg: (id: number) => void;
    setTag2Ul: (id: number, focusIndex: number) => void;
    setTag2H1: (id: number) => void;
    setTag2H2: (id: number) => void;
    setTag2H3: (id: number) => void;
    setTag2A: (id: number) => void;
    setTag2Code: (id: number) => void;
    setTag2CallOut: (id: number) => void;
    searchTag: (searchWord: string) => void;
    focusSetUpTag: () => void;
    focusNextLine: (id: number, focusIndex: number) => void;
    focusPrevLine: (id: number, focusIndex: number) => void;
    undo: () => void;
    redo: () => void;
    setBanner: (file: File) => void;
    setTitle: (text: string) => void;
    reset: () => void;
    openTagBox: (id: number) => void;
    closeTagBox: () => void;
    focusNextTag: () => void;
    focusPrevTag: () => void;
    putSetUp: (body: any, title: any, id: any) => void;
    WriteEditorState: import("../Store/WriteEditorStore/type").WriteEditorStateType;
};
export default useWrite;
