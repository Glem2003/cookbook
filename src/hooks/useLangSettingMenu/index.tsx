import { useReducer } from "react";
import { useTranslation } from "react-i18next"

// reducer
import { reducer, initState } from "./reduer";

const useLangSettingMenu = () => {

    const { i18n } = useTranslation()

    const [state, dispatch] = useReducer(reducer, initState)

    // main
    const handleActive = (lang: string) => {
        dispatch({ type: "ACTIVE" })

        setTimeout(() => {
            i18n.changeLanguage(lang)
            dispatch({ type: "DONE" })
        }, 1000)
    }
    const handleToggle = () => dispatch({ type: "TOGGLE" })
    const handleClose = () => dispatch({ type: "CLOSE" })

    // message box
    const handleHide = () => dispatch({ type: "HIDE" })

    return {
        isLang: i18n.language,
        isShow: state.isShow,
        isLoad: state.isLoad,
        isMessageShow: state.isMessageShow,
        handleActive,
        handleToggle,
        handleClose,
        handleHide
    }

}

export default useLangSettingMenu