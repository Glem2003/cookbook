// components
import DefaultPages from "../components/common/defaultPages"
import { Grid, Container, Box, Pagination, Button, Typography } from "@mui/material"

// style
import { contentCenter, contentRight, contentLeft } from '../assets/style/common'

// data
import { warehouseBtns } from "../data/btnItem"

// icon
import { GiMeat,RiPlantFill } from '../assets/icon/index'

const Warehouse = () => {
    return (
        <DefaultPages>
            <Container maxWidth={false}>
                <Grid container spacing={2}>
                    <Grid container size={12}>
                        <Grid border={'1px solid black'} size={8}>
                            filter
                        </Grid>
                        <Grid size={4} gap={2} {...contentRight}>
                            {warehouseBtns.map((item, index) => {
                                return (
                                    <Button
                                        variant="contained"
                                        startIcon={<item.icon />}
                                        color={item.text == 'add' ? 'error' : 'warning'}
                                        key={index}
                                    >
                                        {item.text}
                                    </Button>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid size={12} minHeight={'calc(100vh - 280px)'}>

                        <Box border={'1px solid black'}>
                            <Typography variant="h3" color="textDisabled" {...contentLeft} gap={2} fontWeight={750} letterSpacing={2}>
                                <GiMeat />
                                Meat
                            </Typography>
                        </Box>

                        <Box border={'1px solid black'}>
                            <Typography variant="h3" color="textDisabled" {...contentLeft} gap={2} fontWeight={750} letterSpacing={2}>
                                <RiPlantFill />
                                Vegetable
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid size={12} {...contentCenter} >
                        <Pagination
                            count={10}
                            shape="rounded"
                            variant="outlined"
                            size="large"
                            showFirstButton
                            showLastButton
                        />
                    </Grid>
                </Grid>
            </Container>
        </DefaultPages>
    )
}

export default Warehouse