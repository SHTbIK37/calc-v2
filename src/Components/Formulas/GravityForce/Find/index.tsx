import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import { constants } from "../../../../utils/constants";
import { ConvertKG } from "../../../Convert/ConvertKG";
import { ConvertN } from "../../../Convert/ConvertN";

const Find: FC<{
  whatFind: string;
  setResult: Dispatch<SetStateAction<number>>;
}> = ({ whatFind, setResult }) => {
  const [convertVars, setConvertVars] = useState({ m: 0, F: 0 });
  const [vars, setVars] = useState({ m: 0, F: 0 });
  const keys: Array<string> = Object.keys(vars);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVars((prevData) => ({
      ...prevData,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const handleClick = () => {
    if (whatFind === "m")
      setResult((vars.F * 10 ** convertVars.F) / constants.g);
    if (whatFind === "F") setResult(vars.m * constants.g * 10 ** convertVars.m);
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
                  {key === "F" ? (
                    <ConvertN
                      convert={convertVars.F}
                      setConvert={setConvertVars}
                    />
                  ) : (
                    <></>
                  )}
                  {key === "m" ? (
                    <ConvertKG
                      convert={convertVars.m}
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
