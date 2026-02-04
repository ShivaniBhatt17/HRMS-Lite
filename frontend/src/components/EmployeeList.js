import { useEffect, useState } from "react";
import api from "../api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await api.get("employees/");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await api.delete(`employees/${id}/`);
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        All Employees
      </Typography>

      {employees.length === 0 ? (
        <Typography color="text.secondary">
          No employees found
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Employee ID</b></TableCell>
              <TableCell><b>Full Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Department</b></TableCell>
              <TableCell align="right"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.employee_id}</TableCell>
                <TableCell>{emp.full_name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="error"
                    onClick={() => deleteEmployee(emp.id)}
                    aria-label="delete employee"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}
