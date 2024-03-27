import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import { ConvertVol } from "../../../Convert/ConvertVol";
import { ConvertAmp } from "../../../Convert/ConvertAmp";
import { ConvertOhm } from "../../../Convert/ConvertOhm";

const Find: FC<{
  whatFind: string;
  setResult: Dispatch<SetStateAction<number>>;
}> = ({ whatFind, setResult }) => {
  const [convertVars, setConvertVars] = useState({ U: 0, I: 0, R: 0 });
  const [vars, setVars] = useState({ U: 0, I: 0, R: 0 });
  const keys: Array<string> = Object.keys(vars);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVars((prevData) => ({
      ...prevData,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const handleClick = () => {
    if (whatFind === "U")
      setResult(vars.R * 10 ** convertVars.R * (vars.I * 10 ** convertVars.I));

    if (whatFind === "R")
      setResult(
        (vars.U * 10 ** convertVars.U) / (vars.I * 10 ** convertVars.I)
      );
    if (whatFind === "I")
      setResult(
        (vars.U * 10 ** convertVars.U) / (vars.R * 10 ** convertVars.R)
      );
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {keys.map((key) => {
          return (
            <Box key={key}>
              {key !== whatFind ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MathJaxContext>
                    <MathJax
                      style={{ minWidth: "24px" }}
                    >{`\\(${key}\\)=`}</MathJax>
                  </MathJaxContext>
                  <TextField
                    type="number"
                    onChange={handleChange}
                    name={key}
                    defaultValue={0}
                  />
                  {key === "U" ? (
                    <ConvertVol
                      convert={convertVars.U}
                      setConvert={setConvertVars}
                    />
                  ) : (
                    <></>
                  )}
                  {key === "I" ? (
                    <ConvertAmp
                      convert={convertVars.I}
                      setConvert={setConvertVars}
                    />
                  ) : (
                    <></>
                  )}
                  {key === "R" ? (
                    <ConvertOhm
                      convert={convertVars.R}
                      setConvert={setConvertVars}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
              ) : undefined}
            </Box>
          );
        })}
      </Box>
      <Button onClick={handleClick} variant="outlined">
        Ok
      </Button>
    </Box>
  );
};
export { Find };
