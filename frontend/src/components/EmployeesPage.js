import { Container } from "@mui/material";
import EmployeeList from "./EmployeeList";

export default function EmployeesPage() {
  return (
    <Container sx={{ mt: 3 }}>
      <EmployeeList />
    </Container>
  );
}
