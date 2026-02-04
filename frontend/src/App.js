import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import EmployeesPage from "./components/EmployeesPage";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeSaved from "./components/EmployeeSaved";
import { Modal, Box, Fade } from "@mui/material";

export default function App() {
  const [active, setActive] = useState("home");
  const [openAdd, setOpenAdd] = useState(false);
  const [savedEmployee, setSavedEmployee] = useState(null);

  return (
    <>
      <Navbar
        setActive={setActive}
        openAddEmployee={() => {
          setSavedEmployee(null);
          setOpenAdd(true);
        }}
      />

      <Fade in key={active}>
        <Box sx={{ p: 2 }}>
          {active === "home" && <HomePage />}
          {active === "employees" && <EmployeesPage />}
        </Box>
      </Fade>

      {/* Add Employee Modal */}
      <Modal open={openAdd} onClose={() => setOpenAdd(false)}>
        <Box
          sx={{
            width: 500,
            bgcolor: "background.paper",
            p: 3,
            mx: "auto",
            mt: "10vh",
            borderRadius: 2,
          }}
        >
          {!savedEmployee ? (
            <EmployeeForm
              onSuccess={(emp) => {
                setSavedEmployee(emp);
              }}
            />
          ) : (
            <EmployeeSaved employee={savedEmployee} />
          )}
        </Box>
      </Modal>
    </>
  );
}
