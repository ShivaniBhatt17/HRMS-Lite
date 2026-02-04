import AttendanceForm from "./AttendanceForm";
import { Container } from "@mui/material";

export default function AttendancePage() {
  return (
    <Container sx={{ mt: 3 }}>
      <AttendanceForm />
    </Container>
  );
}
