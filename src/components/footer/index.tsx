import { useTranslation } from "react-i18next"

// componets
import { Box, Typography, Divider, IconButton } from "@mui/material"
import Calender from "../common/calendar"

// style
import { contentCenter } from "../../assets/style/common"
import { footerStyle, textStyle } from "./style"

// icon
import { CopyrightRoundedIcon, PublicRoundedIcon } from '../../assets/icon/index'

const Footer = () => {

    const { t } = useTranslation()

    return (
        <Box {...footerStyle}>
            <Box flex={1}>
                <IconButton color="error">
                    <PublicRoundedIcon fontSize="large"/>
                </IconButton>
            </Box>
            <Box flex={3} {...contentCenter}>
                <Typography {...textStyle} {...contentCenter}>
                    Glem2003 <CopyrightRoundedIcon /> {t('copyright').toUpperCase()}
                </Typography>
            </Box>
            <Divider orientation='vertical' />
            <Box flex={1} {...contentCenter}>
                <Calender />
            </Box>
        </Box>
    )
}

export default Footer