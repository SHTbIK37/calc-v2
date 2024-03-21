import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import { constants } from "../../../utils/constants";
import { ConvertKG } from "../../ConvertKG";
import { ConvertNuton } from "../../ConvertNuton";

const Find: FC<{
  whatFind: string;
  setResult: Dispatch<SetStateAction<number>>;
}> = ({ whatFind, setResult }) => {
  const [convert, setConvert] = useState<number>(0);
  const [vars, setVars] = useState({ m: 0, F: 0 });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVars((prevData) => ({
      ...prevData,
      [event.target.name]: Number(event.target.value),
    }));
  };
  const handleClick = () => {
    if (whatFind === "m") setResult((vars.F * 10 ** convert) / constants.g);
    if (whatFind === "F") setResult(vars.m * constants.g * 10 ** convert);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Typography variant="inherit" color="initial">
        Введите значения:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
        {whatFind === "F" ? (
          <ConvertKG convert={convert} setConvert={setConvert} />
        ) : (
          <ConvertNuton convert={convert} setConvert={setConvert} />
        )}
      </Box>
      <Button onClick={handleClick} variant="outlined">
        Ok
      </Button>
    </Box>
  );
};
export { Find };
