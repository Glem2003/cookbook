import i18n from '../../i18n'

// type
import type { State, Action } from './type'

export const initState = {
    isLang: i18n.language,
    isShow: false,
    isLoad: false
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {

        // control
        case 'TOGGLE':
            return { ...state, isShow: !state.isShow }
        case 'CLOSE':
            return { ...state, isShow: false }

        // state
        case "ACTIVE":
            return { ...state, isLoad: true }
        case "DONE":
            return { ...state, isLoad: false }

        default:
            return state
    }

}
