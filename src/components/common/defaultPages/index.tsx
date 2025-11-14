// components
import { Box, Grid, Divider } from "@mui/material";
import Header from "../../header";
import Footer from "../../footer";

// type
import type { DefaultPagesTypes } from "./type";

// style
import { contentCenter } from "../../../assets/style/common";
import { bodyStyle, headerStyle, mainStyle, footerStyle } from './style'

const DefaultPages: React.FC<DefaultPagesTypes> = ({ children }) => {

  return (
    <Grid {...bodyStyle}>
      <Grid {...headerStyle}>
        <Box component={'header'} height={'100%'}><Header /></Box>
      </Grid>
      <Grid {...mainStyle} {...contentCenter}>
        <Box component={'main'}>{children}</Box>
      </Grid>
      <Grid {...footerStyle}>
        <Divider variant='middle' />
        <Box component={'footer'} height={'100%'}><Footer /></Box>
      </Grid>
    </Grid>
  );
};

export default DefaultPages;
