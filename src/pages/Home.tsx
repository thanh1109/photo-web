import React, {ReactElement, FC, useEffect} from "react";
import { Box, Typography } from "@mui/material";

const URL = 'https://api.unsplash.com/';
// function getPhotos(){
//     return fetch(URL + '/photos', {
//         method: 'GET'
//     }).then((res) => {console.log(res)})
// }


const Home:FC<any> = (): ReactElement => {
    useEffect(() => {
        fetch(URL + 'photos', {
            method:'GET'
        }).then((res) => {console.log(res)})
    },);
    return(
        <Box sx ={{
            flexGrow:1,
            backgroundColor:'white-smoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}   
        >
            <Typography variant="h3">Home</Typography>
        </Box>
    );
}

export default Home;