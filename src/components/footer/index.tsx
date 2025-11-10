import { useTranslation } from "react-i18next"

// componets
import { Box, Typography, Divider } from "@mui/material"

// style
import { contentCenter } from "../../assets/style/common"
import { textStyle } from "./style"

// utils
import { getToday } from "../../utils/getToday"

const Footer = () => {

    const {t} = useTranslation()
    const today = getToday()

    return (
        <Box height={'100%'} display={'flex'} p={2}>
            <Box flex={1}></Box>
            <Box flex={3} {...contentCenter}>
                <Typography {...textStyle}>
                    Glem2003 © {t('copyright')}.
                </Typography>
            </Box>
            <Divider orientation='vertical' />
            <Box flex={1} {...contentCenter}>
                <Typography {...textStyle}>{today}</Typography>
            </Box>
        </Box>
    )
}

export default Footer