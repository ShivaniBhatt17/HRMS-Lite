import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

export default function Navbar({ setActive, openAddEmployee }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HRMS Lite
        </Typography>

        <Box>
          <Button
            startIcon={<HomeIcon />}
            color="inherit"
            onClick={() => setActive("home")}
          >
            Home
          </Button>

          <Button
            startIcon={<PeopleIcon />}
            color="inherit"
            onClick={() => setActive("employees")}
          >
            Employees
          </Button>

          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            color="inherit"
            sx={{ ml: 1 }}
            onClick={openAddEmployee}
          >
            Add Employee
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
