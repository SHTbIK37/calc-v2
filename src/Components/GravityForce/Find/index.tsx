import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import { constants } from "../../../utils/constants";
import type { TGravityVars } from "../types";

const Find: FC<{
  whatFind: string;
  names: TGravityVars;
  setResult: Dispatch<SetStateAction<number>>;
}> = ({ whatFind, names, setResult }) => {
  const [vars, setVars] = useState({ m: 0, F: 0 });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVars((prevData) => ({
      ...prevData,
      [event.target.name]: Number(event.target.value),
    }));
  };
  const handleClick = () => {
    console.log(vars);
    console.log(whatFind);
    if (whatFind === "m") setResult(vars.F / constants.g);
    if (whatFind === "F") {
      console.log(2);
      setResult(vars.m * constants.g);
    }
  };

  return (
    <Box>
      <Typography variant="inherit" color="initial">
        Введите значения:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MathJaxContext>
          <MathJax>{`\\(${whatFind === "F" ? "m" : "F"}\\)=`}</MathJax>
        </MathJaxContext>
        <TextField
          type="number"
          onChange={handleChange}
          name={whatFind === "F" ? "m" : "F"}
          label={whatFind === "F" ? "Масса" : "Сила"}
          defaultValue={0}
        />
      </Box>
      <Button onClick={handleClick} variant="outlined">
        Ok
      </Button>
    </Box>
  );
};
export { Find };
