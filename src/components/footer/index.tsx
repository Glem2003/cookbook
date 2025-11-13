import { useTranslation } from "react-i18next"

// componets
import { Box, Typography, Divider, IconButton, Snackbar } from "@mui/material"
import Calendar from "../common/calendar"
import LangSelectionItem from '../common/langSelectionList'

// style
import { contentCenter, contentLeft, contentRight } from "../../assets/style/common"
import { footerStyle, textStyle } from "./style"

// icon
import { CopyrightRoundedIcon, PublicRoundedIcon } from '../../assets/icon/index'

// hooks
import useLangSettingMenu from "../../hooks/useLangSettingMenu"
import useBreakPoint from "../../hooks/useBreakPoint"

const Footer = () => {

    const { t } = useTranslation()

    const {
        isShow,
        isLoad,
        isMessageShow,
        handleClose,
        handleToggle,
        handleActive
    } = useLangSettingMenu()
    const { isTablet, isMobile } = useBreakPoint()

    console.log(isMessageShow)

    return (
        <Box
            {...footerStyle}
            display={isTablet ? "grid" : footerStyle.display}
            gridTemplateAreas={`
                "lang calendar"
               "copyright copyright"
            `}
        >
            {/* lang settings */}
            <Box flex={1} gridArea={'lang'} {...contentLeft}>
                <IconButton color="error" onClick={handleToggle}>
                    <PublicRoundedIcon fontSize={isMobile ? "medium" : "large"} />
                </IconButton>
            </Box>

            <Box flex={3} {...contentCenter} gridArea={'copyright'}>
                <Typography {...textStyle} {...contentCenter}>
                    Glem2003
                    <CopyrightRoundedIcon />
                    {t('copyright').toUpperCase()}
                </Typography>
            </Box>

            <Divider orientation='vertical' />

            <Box flex={1} {...contentRight} gridArea={'calendar'}>
                <Calendar />
            </Box>

            <LangSelectionItem
                open={isShow}
                loading={isLoad}
                onToggle={handleToggle}
                onClose={handleClose}
                handleBtn={handleActive}
            />

            <Snackbar
                open={isMessageShow}
                message="Change"
            />
            
        </Box>
    )
}

export default Footer