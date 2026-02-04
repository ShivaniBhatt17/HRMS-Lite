import { Grid, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function HomePage() {
  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h4">HRMS Dashboard</Typography>
        <Typography color="text.secondary">
          Internal Human Resource Management System
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <PeopleIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6">Employee Management</Typography>
          <Typography color="text.secondary">
            Add, view and manage employee records
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <EventAvailableIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6">Attendance Tracking</Typography>
          <Typography color="text.secondary">
            Track daily employee attendance
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
