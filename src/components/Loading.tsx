import { Box, Skeleton } from "@mui/material";
import React, {FC, ReactElement } from "react";
const Loading:FC=():ReactElement=>{
    return(
        <Box sx={{
            marginTop:'200px',
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Skeleton variant="circular" width={200} height={200} animation="wave"/>
        </Box>
    );
}

export default Loading;