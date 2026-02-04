import { Card, CardContent, Typography, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function EmployeeSaved({ employee }) {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          color="success.main"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <CheckCircleIcon />
          Employee Saved Successfully
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography><b>Employee ID:</b> {employee.employee_id}</Typography>
        <Typography><b>Name:</b> {employee.full_name}</Typography>
        <Typography><b>Email:</b> {employee.email}</Typography>
        <Typography><b>Department:</b> {employee.department}</Typography>
      </CardContent>
    </Card>
  );
}
