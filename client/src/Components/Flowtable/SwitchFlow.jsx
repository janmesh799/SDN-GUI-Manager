import { Button, Typography, TextField } from '@mui/material';
import { Container } from '@mui/system'; import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react'
import axios from 'axios'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexWrap: "wrap",
    overFlow: "scroll"
};

const SwitchFlow = (props) => {
    const [open, setOpen] = React.useState(false);
    const [rule, setrule] = React.useState({ priority: "", in_port: "", dl_dst: "", dl_type: "", nw_src: "", nw_dst: "", ipv6_dst: "", ipv6_src: "", nw_proto: "", tp_src: "", tp_dst: "", actions: "" });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const data = props.elem;
    const handleChange = (e) => {
        setrule({ ...rule, [e.target.id]: e.target.value })
    }
    const handleSubmit = async ()=>{
        Object.keys(rule).forEach(key => {
            if (rule[key] === '') {
              delete rule[key];
            }
          });
        
        const config = {
            headers:{
                url:`http://localhost:8080/firewall/rules/${data.switch_id}`
            }
        }
        const res = await axios.post("http://localhost:5000/post",rule,config);
        handleClose();
        window.location.reload();

    }
    return (
        <div>
            <Container>
                <div style={{ display: "flex", flexDirecton: "row", alignContent: "center", justifyContent: "space-between" }}>

                    <Typography sx={{ textAlign: "" }}>
                        <b>Switch_id: </b>
                        {data.switch_id}
                    </Typography>
                    <Button onClick={handleOpen} >Add rule</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography variant="h6" > Add Rule</Typography>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div>
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="priority" value={rule.priority} label="priority" placeholder='[ 0 - 65535 ]' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="in_port" value={rule.in_port} label="in_port" placeholder='[ 0 - 65535 ]' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="dl_src" value={rule.dl_src} label="dl_src" placeholder='<xx:xx:xx:xx:xx:xx>' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="dl_dst" value={rule.dl_dst} label="dl_dst" placeholder='<xx:xx:xx:xx:xx:xx>' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="dl_type" value={rule.dl_type} label="dl_type" placeholder='[ “ARP” | “IPv4” | “IPv6” ]' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="nw_src" value={rule.nw_src} label="nw_src" placeholder='<xxx.xxx.xxx.xxx/xx>' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="nw_dst" value={rule.nw_dst} label="nw_dst" placeholder='<xxx.xxx.xxx.xxx/xx>' variant="outlined" />

                                </div>
                                <div >
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="ipv6_src" value={rule.ipv6_src} label="ipv6_src" placeholder='<xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xx>' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="ipv6_dst" value={rule.ipv6_dst} label="ipv6_dst" placeholder='<xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xx>' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="nw_proto" value={rule.nw_proto} label="nw_proto" placeholder='[ “TCP” | “UDP” | “ICMP” | “ICMPv6” ]' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="tp_src" value={rule.tp_src} label="tp_src" placeholder='[ 0 - 65535 ]' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="tp_dst" value={rule.tp_dst} label="tp_dst" placeholder='[ 0 - 65535 ]' variant="outlined" />
                                    <TextField onChange={handleChange} sx={{ width: "90%", margin: "0.5rem 0.5rem" }} id="actions" value={rule.actions} label="actions" placeholder='[ “ALLOW” | “DENY” ]' variant="outlined" />
                                    <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>

                                        <Button onClick={handleSubmit} size="large" variant="contained"  >Add Rule</Button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ width: "100vw " }} aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>

                                        rule_id
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        priority
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        in_port
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        dl_src
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        dl_dst
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        dl_type
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        nw_src
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        nw_dst
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        ipv6_src
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        ipv6_dst
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        nw_proto
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        tp_src
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        tp_dst
                                    </b>
                                    </TableCell>
                                    <TableCell component="th" scope="row"><b>

                                        actions
                                    </b>
                                    </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.access_control_list.length > 0 ? <Tablerow data={data.access_control_list[0].rules} /> : (<div>
                                    <Typography sx={{ textAlign: "center" }} >No rules to list</Typography>
                                </div>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Container>
        </div>
    )
}
const Tablerow = (props) => {
    const arr = props.data;
    return (

        arr.map((row) => (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

                <TableCell component="th" scope="row">
                    {row.rule_id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.priority}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.in_port || "N/A"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.dl_src || "N/A"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.dl_dst || "N/A"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.dl_type}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.nw_src || "<xxx.xxx.xxx.xxx/xx>"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.nw_dst || "<xxx.xxx.xxx.xxx/xx>"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.ipv6_src || "<xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xx>"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.ipv6_dst || "<xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xx>"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.nw_proto}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.tp_src || "N/A"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.tp_dst || "N/A"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.actions}
                </TableCell>

            </TableRow>
        ))
    )
}
export default SwitchFlow