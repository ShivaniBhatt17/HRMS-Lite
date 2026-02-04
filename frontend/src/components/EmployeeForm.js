import { useState } from "react";
import api from "../api";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const [msg, setMsg] = useState(null);

  const submit = async () => {
  // frontend validation
  if (!form.employee_id || !form.full_name || !form.email) {
    setMsg({ type: "error", text: "All fields are required" });
    return;
  }

  try {
    // ✅ ADD THESE LINES HERE
    const res = await api.post("employees/", form);

    // send saved employee back to parent (App.js)
    onSuccess(res.data);

    setForm({
      employee_id: "",
      full_name: "",
      email: "",
      department: "",
    });

    setMsg({ type: "success", text: "Employee added successfully" });
  } catch (err) {
  let errorMessage = "Failed to save employee";

  if (err.response?.data) {
    const data = err.response.data;

    // DRF field-level errors
    if (typeof data === "object") {
      errorMessage = Object.values(data).flat().join(" ");
    } 
    // Generic error message
    else if (typeof data === "string") {
      errorMessage = data;
    }
  }

  setMsg({
    type: "error",
    text: errorMessage,
  });
}
};

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add New Employee
          </Typography>

          {["employee_id", "full_name", "email", "department"].map((field) => (
            <TextField
              key={field}
              fullWidth
              margin="dense"
              label={field.replace("_", " ").toUpperCase()}
              value={form[field]}
              onChange={(e) =>
                setForm({ ...form, [field]: e.target.value })
              }
            />
          ))}

          <Button
            variant="contained"
            startIcon={<PersonAddIcon />}
            sx={{ mt: 2 }}
            onClick={submit}
          >
            Save Employee
          </Button>
        </CardContent>
      </Card>

      <Snackbar
        open={!!msg}
        autoHideDuration={4000}
        onClose={() => setMsg(null)}
      >
        <Alert severity={msg?.type}>{msg?.text}</Alert>
      </Snackbar>
    </>
  );
}
