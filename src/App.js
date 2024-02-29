// // import Button from '@mui/material/Button'
// import { Button, Typography } from "@mui/material";
// import { Settings, Add } from "@mui/icons-material";
// import styled from "@emotion/styled";
// // import SettingsIcon from '@mui/icons-material/Settings';
// //hello world

// function App() {
//   //using emotion components with styled
//   const BlueButton = styled(Button)({
//     backgroundColor: "skyblue",
//     color: "#888",
//     margin: 5,
//     "&:hover": {
//       backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//       backgroundColor: "gray",
//       color: "white",
//     },
//   });
//   return (
//     <div className="App">
//       <Button variant="text" startIcon={<Settings />}>
//         Settings
//       </Button>
//       <Button
//         variant="contained"
//         onClick={() => {
//           alert("clicked");
//         }}
//       >
//         Contained
//       </Button>
//       <Button
//         variant="contained"
//         startIcon={<Add />}
//         color="success"
//         onClick={() => {
//           alert("clicked");
//         }}
//       >
//         Add
//       </Button>
//       <Button variant="outlined" disabled>
//         Outlined
//       </Button>
//       <Typography variant="h1" component="p">
//         h1. Heading in p element
//       </Typography>
//       <BlueButton> 1st</BlueButton>
//       <BlueButton> 2nd</BlueButton>
//     </div>
//   );
// }

// export default App;
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import { Box, Grid, Stack } from '@mui/material';

function App(){

  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={4}>
    //       <Sidebar/>
    //   </Grid>
    //   <Grid item xs={4}>
    //       <Feed/>
    //   </Grid>
    //   <Grid item xs={4}>
    //       <Rightbar/>
    //   </Grid>
    // </Grid>
    <Box>
      <Stack direction="row" spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App;