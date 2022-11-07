import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import data from './data.json'
import SwitchFlow from './SwitchFlow';
import axios from 'axios';
import { useState } from 'react';

const FlowTable = () => {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
        console.log("fetchData")
        const config = {
            headers: {
                url: `http://localhost:8080/firewall/rules/all`
            }
        }
        const res = await axios.get("http://localhost:5000/get", config);
        setdata(res.data);

    }
    useEffect(() => {

        fetchData();

    }, [1 == 1])
    return (
        <div>
            <Container sx={{ display: "flex", flexDirection: "column" }}>

                {data.map((elem) => {
                    return (
                        <div style={{ margin: "2rem" }} key={elem.switch_id}>
                            <SwitchFlow elem={elem} />
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default FlowTable