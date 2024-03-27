import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useEffect, useRef, useState, type FC } from "react";

import { RedirectButton } from "../../RedirectButton";
import Button from "@mui/material/Button";
import { Find } from "./Find";
import type { TGravityVars } from "./types";
import { AnswerN } from "../../AnswersConvert/AnswerN";
import { AnswerKG } from "../../AnswersConvert/AnswerKG";

const GravityForce: FC = () => {
  const [variableComponent, setVariableComponent] = useState(<></>);
  const [result, setResult] = useState<number>(0);
  const [convertAnswer, setConvertAnswer] = useState<TGravityVars>({
    F: 0,
    m: 0,
  });
  const vars = { F: "Сила", m: "Масса" };
  const keys: Array<string> = Object.keys(vars);
  const answerLetter = useRef("");
  useEffect(() => {
    setResult(0);
  }, [variableComponent]);
  return (
    <Box
      sx={{
        margin: "16px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <RedirectButton />
      <MathJaxContext>
        <MathJax>{"Формула силы тяжести: \\(F=m*g\\)"}</MathJax>
        <MathJax>{"\\(F\\) - Сила тяжести"}</MathJax>
        <MathJax>{"\\(m\\) - Масса тела"}</MathJax>
        <MathJax>
          {"\\(g\\) - Гравитационная постоянная = \\(9,80665м/с^2\\)"}
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
                answerLetter.current = elem;
                setVariableComponent(
                  <Find whatFind={elem} setResult={setResult} />
                );
              }}
            >
              {elem}
            </Button>
          );
        })}
      </Box>
      {variableComponent}
      {result !== 0 && (
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <Typography variant="inherit">
            Ответ: {answerLetter.current} ={" "}
            {((result * 10 ** convertAnswer[answerLetter.current]) as number)
              .toFixed(5)
              .toString()
              .replace(".", ",")}
          </Typography>
          {answerLetter.current === "F" ? (
            <AnswerN convert={convertAnswer.F} setConvert={setConvertAnswer} />
          ) : null}
          {answerLetter.current === "m" ? (
            <AnswerKG convert={convertAnswer.m} setConvert={setConvertAnswer} />
          ) : null}
        </Box>
      )}
    </Box>
  );
};
export { GravityForce };
