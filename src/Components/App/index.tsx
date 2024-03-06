import React, { type FC } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChooseForm } from "../ChooseForm";
import { Routes, Route } from "react-router";

const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box sx={{ margin: "0 auto", width: "80%" }}>
            <Typography
              sx={{ margin: "10px auto", width: "fit-content" }}
              variant="h3"
              color="initial"
            >
              Калькулятор физических величин
            </Typography>
            <Typography variant="h5" color="initial">
              Напишите называние формулы:
            </Typography>
            <ChooseForm />
          </Box>
        }
      />
    </Routes>
  );
};

export default App;
