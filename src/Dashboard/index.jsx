import { Box,  IconButton,  Paper,  Typography, } from '@mui/material';
import React from 'react'
// import { Search } from '@mui/icons-material';
import Navbar from '../Navbar';
import TransactionTable from '../Transactiontable';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Dashboard1 = () => {
  return (
    <Box sx={{ backgroundColor: "#FAFAFA" }}>
      <Navbar title={"Payment"}></Navbar>

      <Box margin={4} marginTop={5} >
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
          <Typography variant="h5">Overview </Typography>
          <Box sx={{display:"flex", flexDirection:"row", border:"1px solid #D9D9D9", width:"10%", borderRadius:"10px", padding:"5px", alignItems:"center"}}>
            
          <Typography >Last Month </Typography>
            <IconButton sx={{alignItems:"center"}}>
                <KeyboardArrowDownOutlinedIcon/>
            </IconButton>
          </Box>
        </Box>
        <Box
          marginTop={4}
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 590,
              height: 128,
            },
          }}
        >
          <Paper sx={{ display: "flex" }}>
            <Box
              sx={{
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography>Online orders</Typography>
              <Typography variant="h3">231</Typography>
            </Box>
          </Paper>
          <Paper sx={{ display: "flex" }}>
            <Box
              sx={{
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography>Amount Recieved</Typography>
              <Typography variant="h3">₹23,92,312.19</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <TransactionTable></TransactionTable>
    </Box>
  );
}

export default Dashboard1
