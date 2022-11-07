import React, { useEffect } from "react";
import { Button, Card, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";
import Mod from "./Mod";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// console.log(data);

const Rout = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [status, setstatus] = useState(false);
  const fetchstatus = async () => {
    const config = {
      headers: {
        url: "http://localhost:8080/firewall/module/status"
      }
    }
    const get = await axios.get("http://localhost:5000/get", config);
    const res = get.data;
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if (element.switch_id === data.switch_id) {
        if (element.status === "disable") setstatus(false);
        else setstatus(true);
        break;
      }

    }

  }
  const handleTurnOn = async () => {
    console.log("turn off")
    const dat = {

      url: `http://localhost:8080/firewall/module/disable/${data.switch_id}`

    }
    const res = await axios.put("http://localhost:5000/put", dat);
    console.log(res.data);
    window.location.reload();
  }
  const handleTurnOff = async () => {
    const dat = {

      url: `http://localhost:8080/firewall/module/enable/${data.switch_id}`

    }
    const res = await axios.put("http://localhost:5000/put", dat);
    console.log(res.data);
    window.location.reload();
  }
  useEffect(() => {
    fetchstatus();
  }, [1 == 1])

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  var col = status === true ? "rgb(0,255,0,0.4)" : "rgb(255,0,0,0.4)";
  return (
    <>
      <Grid item md={4} align="center">
        <div style={{ backgroundColor: col, display: "flex", flexDirection: "row", justifyContent: "space-between", boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px", padding: "1rem", margin: "0.5rem" }}>
          <Typography variant="h6">
            Switch ID : {data.switch_id} <br />
          </Typography>
          <Button onClick={handleOpen}>
            <CodeIcon variant="outlined" color="primary" />
          </Button>{status ? <div>
            <Button onClick={handleTurnOn}>Turn Off</Button>
          </div> : <div>
            <Button onClick={handleTurnOff}>
              Turn ON
            </Button>
          </div>}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 800 }}>
              Switch ID : {data.switch_id}
              {data.access_control_list.length > 0 ? (
                <Mod data={data.access_control_list[0].rules} />
              ) : (
                <>
                  <div>
                    No rules added
                  </div>
                </>
              )}
            </Box>
          </Modal>
        </div>
      </Grid>
    </>
  );
};

export default Rout;
