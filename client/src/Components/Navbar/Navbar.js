import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from "@mui/material"
import RouterIcon from '@mui/icons-material/Router';

const Navbar = () => {
    const nav = [
        { ind: 1, title: "home", link: "" }, { ind: 2, title: "Configuration", link: "configuration" }, { ind: 3, title: "Stats", link: "stats" },
    ]
    return (
        <div style={{ backgroundColor: "black", display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
            <div style={{ color: "white", display: "flex", flexDirection: "row", alignSelf: "center" }}>
                <RouterIcon sx={{margin:"0em 0.5rem"}} fontSize="large" />
                <Typography variant="h4">SDN Dashboard</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>

                {nav.map((elem) => {
                    return (
                        <Link key={elem.ind} to={`/${elem.link}`}>
                            <Button sx={{margin:"2rem"}} variant="outlined" >
                                <Typography sx={{ margin: "0.5em 0.5em", color: "white" }} variant="h4">  {elem.title} </Typography>
                            </Button>
                        </Link>
                    )
                })}


            </div>
        </div>
    )
}

export default Navbar