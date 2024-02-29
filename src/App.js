// import Button from '@mui/material/Button'
import { Button, Typography } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";
import styled from "@emotion/styled";
// import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  //using emotion components with styled
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div className="App">
      <Button variant="text" startIcon={<Settings />}>
        Settings
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        startIcon={<Add />}
        color="success"
        onClick={() => {
          alert("clicked");
        }}
      >
        Add
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading in p element
      </Typography>
      <BlueButton> 1st</BlueButton>
      <BlueButton> 2nd</BlueButton>
    </div>
  );
}

export default App;
