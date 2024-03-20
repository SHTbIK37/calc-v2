import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useState, type FC } from "react";

import { RedirectButton } from "../RedirectButton";
import Button from "@mui/material/Button";
import { Find } from "./Find";
import type { TGravityVars } from "./types";

const GravityForce: FC = () => {
  const [variable, setVariable] = useState(<></>);
  const [result, setResult] = useState<number>(0);
  const vars: TGravityVars = { F: "Сила", m: "Масса" };
  const keys: Array<string> = Object.keys(vars);

  return (
    <Box sx={{ margin: "16px auto" }}>
      <RedirectButton />
      <MathJaxContext>
        <MathJax>{"Формула силы тяжести: \\(F=m*g\\)"}</MathJax>
        <MathJax>{"\\(F\\) - Сила тяжести"}</MathJax>
        <MathJax>{"\\(m\\) - Масса тела"}</MathJax>
        <MathJax>
          {"\\(g\\) - Гравитационная постоянная = \\(9.80665м/с^2\\)"}
        </MathJax>
      </MathJaxContext>
      <Typography variant="inherit" color="initial">
        Выберите что хотите найти:
      </Typography>
      <Box sx={{ display: "flex", gap: "16px" }}>
        {keys.map((elem) => {
          return (
            <Button
              key={elem}
              variant="outlined"
              onClick={() => {
                setVariable(
                  <Find whatFind={elem} names={vars} setResult={setResult} />
                );
              }}
            >
              {elem}
            </Button>
          );
        })}
      </Box>
      {variable}
      {result !== 0 && result}
    </Box>
  );
};
export { GravityForce };
