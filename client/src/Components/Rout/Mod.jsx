import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Mod = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>rule_id</TableCell>
              <TableCell align="right">priority</TableCell>
              <TableCell align="right">in_port</TableCell>
              <TableCell align="right">dl_src</TableCell>
              <TableCell align="right">dl_dst</TableCell>
              <TableCell align="right">dl_type</TableCell>
              <TableCell align="right">nw_src</TableCell>
              <TableCell align="right">nw_dst</TableCell>
              <TableCell align="right">ipv6_src</TableCell>
              <TableCell align="right">ipv6_dst</TableCell>
              <TableCell align="right">nw_proto</TableCell>
              <TableCell align="right">tp_src</TableCell>
              <TableCell align="right">tp_dst</TableCell>
              <TableCell align="right">actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((elem) => (
              <TableRow
                key={elem.rule_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                
                <TableCell>{elem.rule_id || "N/A"}</TableCell>
                <TableCell align="right">{elem.priority || "N/A"}</TableCell>
                <TableCell align="right">{elem.in_port || "N/A"}</TableCell>
                <TableCell align="right">
                  {elem.dl_src || "<xx:xx:xx:xx:xx:xx>"}
                </TableCell>
                <TableCell align="right">
                  {elem.dl_dst || "<xx:xx:xx:xx:xx:xx>"}
                </TableCell>
                <TableCell align="right">{elem.dl_type || "N/A"}</TableCell>
                <TableCell align="right">
                  {elem.nw_src || "<xxx.xxx.xxx.xxx/xx>"}
                </TableCell>
                <TableCell align="right">
                  {elem.nw_dst || "<xxx.xxx.xxx.xxx/xx>"}
                </TableCell>
                <TableCell align="right">
                  {elem.ipv6_src ||
                    "<xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xx>"}
                </TableCell>
                <TableCell align="right">
                  {elem.ipv6_dst ||
                    "<xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx/xx>"}
                </TableCell>
                <TableCell align="right">{elem.nw_proto || "N/A"}</TableCell>
                <TableCell align="right">{elem.tp_src || "N/A"}</TableCell>
                <TableCell align="right">{elem.tp_dst || "N/A"}</TableCell>
                <TableCell align="right">{elem.actions || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Mod;
