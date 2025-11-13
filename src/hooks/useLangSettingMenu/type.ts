export interface State {
    isLang: string
    isShow: boolean
    isLoad: boolean
    isMessageShow: boolean
}

export type Action =
    | { type: "TOGGLE" }
    | { type: "CLOSE" }
    | { type: "ACTIVE" }
    | { type: "DONE" }