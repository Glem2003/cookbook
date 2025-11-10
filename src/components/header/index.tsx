import { Box, AppBar, Toolbar, MenuItem } from "@mui/material"

//style
import { contentRight, contentLeft } from "../../assets/style/common"

// icon
import { DinnerDiningIcon } from '../../assets/icon/index'

const Header = () => {
    return (
        <Box display={'flex'} height={'100%'}>
            <AppBar sx={{ height: 80, pt: 1 }} color="error" >
                <Toolbar>
                    <Box {...contentLeft} border={'1px solid white'}>
                        <DinnerDiningIcon sx={{ fontSize: 60 }} />
                    </Box>
                    <Box flex={'auto'} component={'nav'} {...contentRight} gap={2}>
                        <MenuItem>
                            A
                        </MenuItem>
                        <MenuItem>
                            B
                        </MenuItem>
                        <MenuItem>
                            C
                        </MenuItem>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header