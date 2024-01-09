import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, ThemeProvider, Typography, alpha, createTheme } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import React from 'react'
// import { Search } from '@mui/icons-material';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const theme = createTheme();

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Navbar = ({title}) => {
  return (
    <Box >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "15px",
          
        }}
      >
        <Box marginLeft={3}  sx={{ display: "flex", flexDirection: "row",width:"100%" }}>
          <Box sx={{ display: "flex", flexDirection: "row", flexBasis:"30%" }}>
            <Typography variant="h6" >{title}</Typography>
          {/* <Box > */}
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ height: "3vh" }}>
                  <ListItemIcon sx={{justifyContent:"flex-end", alignItems:"flex-end", }}>
                    <HelpOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="How it works" />
                </ListItemButton>
              </ListItem>
            </List>
          {/* </Box> */}
          </Box>

          <Box sx={{flexBasis:"30%"}}>
            <ThemeProvider theme={theme}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase sx={{border:"1px solid lightgray", borderRadius:"10px", width:"150%"}}
                  placeholder="Search features,tutorials,etc"
                  inputProps={{ "aria-label": "Search features,tutorials,etc" }}
                />
              </Search>
            </ThemeProvider>
          </Box>
          <Box>


          </Box>
        </Box>
        <Box sx={{flexBasis:"10%", display:"flex",justifyContent:"space-evenly"}}>
        <IconButton sx={{backgroundColor:"lightgray"}}>
          <MessageOutlinedIcon/>
        </IconButton>
          <IconButton sx={{backgroundColor:"lightgray"}}>
            <ArrowDropDownOutlinedIcon/>
          </IconButton>
        </Box>
      </Paper>
      </Box>

  )
}

export default Navbar
