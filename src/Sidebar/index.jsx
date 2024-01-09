import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,  Paper, ThemeProvider, Typography, alpha, createTheme } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Dashboard1 from '../Dashboard';


const Dashboard = ({ sx }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row",width:"100%" }}>
    <Box sx={{ display: "flex", flexDirection: "column" ,position:"relative",width:"15%"}}>
      <Box sx={{ backgroundColor: "#1E2640", height: "100vh",position:"fixed" , width:"15%" }}>
        <Box sx={{ width: "100%", marginLeft: "0", height: "8vh" }}>
          <img src="/Image.png" alt=""></img>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <AssignmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <GridViewOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Products" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <LocalShippingOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Delivery" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <CampaignOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <SignalCellularAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Analysics" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <PaymentsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Payments" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <NearMeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Tools" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Discounts" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <PeopleAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Audience" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <PaletteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Appearance" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <BoltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Plugins" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Box position={"absolute"}>
          <Box position={"fixed"} sx={{ bottom:0 }}>
            <Box
              sx={{
                backgroundColor: "#353C53",
                marginLeft: "11px",
                borderRadius: "10px",
                
              }}
            >
              <ListItem disablePadding>
                <ListItemButton sx={{ height: "7vh" }}>
                  <ListItemIcon sx={{ color: "white" }}>
                    <AccountBalanceWalletOutlinedIcon />
                  </ListItemIcon>
                  <Box display={"flex"} sx={{ flexDirection: "column" }}>
                    <ListItemText
                      primary="Available credits"
                      sx={{ color: "white", fontSize: "3px" }}
                    />
                    <ListItemText
                      primary="222.10"
                      sx={{ color: "white", fontSize: "1px" }}
                    />
                  </Box>
                </ListItemButton>
              </ListItem>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box sx={{ width:"100%", paddingLeft:"20px"}}>

    <Dashboard1 ></Dashboard1>
    </Box>
    </Box>
  );
};

export default Dashboard;




