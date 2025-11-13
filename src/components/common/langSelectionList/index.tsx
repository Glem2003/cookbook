import { useTranslation } from "react-i18next"

// components
import { Dialog, DialogTitle, DialogContent, Button, IconButton, Typography } from "@mui/material"

// style
import { contentCenter } from "../../../assets/style/common"

// icon
import { CloseIcon } from '../../../assets/icon/index'

// data
import { langMenu } from "../../../data/langMenu"

// hooks
import useLangSettingMenu from "../../../hooks/useLangSettingMenu"

// type
import type { langSelectionItemType } from "./type"

// utils
import capitalize from '../../../utils/capitalize'

const LangSelectionItem: React.FC<langSelectionItemType> = (props) => {

    const { open, onToggle, onClose } = props

    const { isLang, isLoad, handleActive } = useLangSettingMenu()

    const { t } = useTranslation()

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth='lg'
        >
            <DialogTitle sx={{ ...contentCenter, justifyContent: 'space-between' }}>
                <Typography variant="h6">{capitalize(t("language"))} {capitalize(t("settings"))}</Typography>
                <IconButton onClick={onToggle}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', rowGap: 2, columnGap: 4 }}>
                {langMenu.map((item) => {
                    return (
                        <Button
                            variant={isLang == item.value ? "text" : "contained"}
                            key={item.value}
                            disabled={isLang == item.value}
                            onClick={() => handleActive(item.value)}
                            loading={isLoad}
                            color="warning"
                        >
                            {item.text}
                        </Button>
                    )
                })}
            </DialogContent>
        </Dialog>
    )
}

export default LangSelectionItem