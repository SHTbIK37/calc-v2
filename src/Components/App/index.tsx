import { type FC } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router";

import "./App.css";
import { ChooseForm } from "../ChooseForm";
import { GravityForce } from "../Formulas/GravityForce";
import { OhmLow } from "../Formulas/OhmLow";
import { PotEner } from "../Formulas/PotEner";
import { OhmPower } from "../Formulas/OhmPower";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/gravityforce" element={<GravityForce />} />
      <Route path="/ohmlow" element={<OhmLow />} />
      <Route path="/potener" element={<PotEner />} />
      <Route path="/ohmpower" element={<OhmPower />} />
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
