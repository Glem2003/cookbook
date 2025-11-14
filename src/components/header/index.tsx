import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

// components
import { Box, AppBar, Toolbar, MenuItem } from "@mui/material"

//style
import { contentLeft, contentRight } from "../../assets/style/common"
import { navStyle, itemStyle, menuBarStyle, headerStyle, iconStyle } from './style'

// icon
import { DinnerDiningIcon } from '../../assets/icon/index'

// data
import { menu } from '../../data/headerNav'

// hooks
import useBreakPoint from "../../hooks/useBreakPoint"

const Header = () => {

    const { t } = useTranslation()

    const { isMobile } = useBreakPoint()

    return (
        <Box {...headerStyle}>
            <AppBar {...menuBarStyle}>
                <Toolbar>
                    <Link to={'/'}>
                        <Box {...contentLeft}>
                            <DinnerDiningIcon sx={iconStyle} />
                        </Box>
                    </Link>
                    <Box {...navStyle} {...contentRight}>
                        {menu?.map((item, index) => {
                            return (
                                <Link to={`/${item.text}`}>
                                    <MenuItem sx={itemStyle} key={index} >
                                        <item.icon />
                                        {isMobile ? '' : t(item.text).toUpperCase()}
                                    </MenuItem>
                                </Link>
                            )
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header