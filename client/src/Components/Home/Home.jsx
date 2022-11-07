import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rout from "../Rout/Rout";
import axios from 'axios'
//import data from "../data.json";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Home = () => {
    const [data, setdata] = useState([]);
    const fetchdata = async () => {

        const config = {
            headers: {
                url: `http://localhost:8080/firewall/rules/all`
            }
        }
        const res = await axios.get("http://localhost:5000/get", config);
        setdata(res.data);
    }
    useEffect(() => {
        fetchdata();

    }, [1 == 1])

    return (
        <>

            <Grid container spacing={2} sx={{ marginTop: "1rem" }} justifyContent="center"
                alignItems="center">
                {
                    data.map((elem) => {
                        return (
                            <Rout key={elem.switch_id} data={elem} />
                        )
                    })
                }
            </Grid>

        </>
    );
};

export default Home;
