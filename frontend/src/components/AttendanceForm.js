import { useState } from "react";
import api from "../api";
import {
  Card, CardContent, TextField, Button, Typography,
  MenuItem, Snackbar, Alert
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function AttendanceForm() {
  const [data, setData] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  const [msg, setMsg] = useState(null);

  const submit = async () => {
    try {
      await api.post("attendance/", data);
      setMsg({ type: "success", text: "Attendance marked" });
    } catch (err) {
      setMsg({
        type: "error",
        text: err.response?.data?.error || "Error marking attendance",
      });
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Mark Attendance
          </Typography>

          <TextField fullWidth label="Employee ID" margin="dense"
            onChange={(e) => setData({ ...data, employee: e.target.value })} />

          <TextField fullWidth
                type="date"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                inputProps={{ autoFocus: false }}
            />

          <TextField select fullWidth margin="dense"
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
          >
            <MenuItem value="Present">Present</MenuItem>
            <MenuItem value="Absent">Absent</MenuItem>
          </TextField>

          <Button
            variant="contained"
            startIcon={<EventAvailableIcon />}
            sx={{ mt: 2 }}
            onClick={submit}
          >
            Submit
          </Button>
        </CardContent>
      </Card>

      <Snackbar open={!!msg} autoHideDuration={4000} onClose={() => setMsg(null)}>
        <Alert severity={msg?.type}>{msg?.text}</Alert>
      </Snackbar>
    </>
  );
}
