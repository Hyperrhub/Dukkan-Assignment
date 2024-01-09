import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Sidebar';
import { Box } from '@mui/material';
import Dashboard1 from './Dashboard';

function App() {
  return (
   <BrowserRouter>
   <Box sx={{display:"flex", flexDirection:'row'}}>
    <Dashboard></Dashboard>
<Box  marginTop={10} >
{/* <Routes>
  <Route path='/' element={<Dashboard1></Dashboard1>}></Route>
</Routes> */}
   </Box>

</Box>
   </BrowserRouter>
  );
}

export default App;
