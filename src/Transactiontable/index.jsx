import {
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  ThemeProvider,
  Typography,
  alpha,
  createTheme,
} from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const TransactionTable = () => {
  const theme = createTheme();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  function createData(orderid, orderdate, orderamount, transactionfees) {
    return { orderid, orderdate, orderamount, transactionfees };
  }

  const rows = [
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
    createData("#281209", "7 July,2023", "₹1,278.23", "₹22"),
  ];

  return (
    <Box margin={4}>
      <Box
        marginTop={3}
        marginBottom={3}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Box sx={{ flexBasis: "85%" }}>
          <Typography variant="h5">Transactions | This Month</Typography>
        </Box>
      </Box>
      <Box
        marginTop={4}
        sx={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
          },
        }}
      >
        <Paper>
          <Box padding={2}>
            <Box marginBottom={3} sx={{display: "flex",
                  flexDirection: "row", }}>
                    <Box sx={{flexBasis:"85%"}}>

              <ThemeProvider theme={theme}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      width: "40%",
                    }}
                    placeholder="Search features,tutorials,etc"
                    inputProps={{
                      "aria-label": "Search features,tutorials,etc",
                    }}
                  />
                </Search>
              </ThemeProvider>
                    </Box>
              <Box
                sx={{
                flexBasis:"15%",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
                  
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    border: "1px solid #D9D9D9",
                    borderRadius: "5px",
                    padding: "6px 12px 6px 12px",
                  }}
                >
                  <Typography>Sort</Typography>
                  <IconButton>
                    <ImportExportOutlinedIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #D9D9D9",
                    borderRadius: "5px",
                    padding: "6px 12px 6px 12px",
                  }}
                >
                  <IconButton>
                    <FileDownloadOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "lightgrey" }}>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px    ",
                      }}
                    >
                      Order Id
                    </TableCell>
                    <TableCell align="right">
                      {/* <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleSortRequest('name')}
              >
                Name
              </TableSortLabel> */}
                      Order date
                    </TableCell>
                    <TableCell align="right">Order Amount</TableCell>
                    <TableCell align="right">Transaction fees</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.orderid}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "#146EB4" }}
                      >
                        {row.orderid}
                      </TableCell>
                      <TableCell align="right">{row.orderdate}</TableCell>
                      <TableCell align="right">{row.orderamount}</TableCell>
                      <TableCell align="right">{row.transactionfees}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Box>
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: " 5px",
                  borderColor: "lightgray",
                  width: "8%",
                  padding: "5px",
                }}
              >
                <ListItemButton
                  sx={{
                    backgroundColor: "white",
                    height: "3vh",
                    width: "8%",
                    borderColor: "lightgray",
                    padding: "5px",
                  }}
                >
                  <ListItemIcon sx={{ color: "black", alignItems: "flex-end" }}>
                    <ArrowBackIosNewOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="previous" sx={{ color: "black" }} />
                </ListItemButton>
              </button>
              <Pagination count={10} shape="rounded" />
              <button
                style={{
                  backgroundColor: "white",
                  borderRadius: " 5px",
                  borderColor: "lightgray",
                  width: "8%",
                  padding: "5px",
                }}
              >
                <ListItemButton
                  sx={{
                    backgroundColor: "white",
                    height: "3vh",
                    width: "8%",
                    borderColor: "lightgray",
                    padding: "5px",
                  }}
                >
                  <ListItemText primary="next" sx={{ color: "black" }} />
                  <ListItemIcon sx={{ color: "black" }}>
                    <ArrowForwardIosOutlinedIcon />
                  </ListItemIcon>
                </ListItemButton>
              </button>
            </Box> */}
            <Box>

            <Pagination sx={{display:"flex",justifyContent:"center"}}count={10} shape="rounded" />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default TransactionTable;
