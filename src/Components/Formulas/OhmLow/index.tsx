import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { useEffect, useRef, useState, type FC } from "react";

import { RedirectButton } from "../../RedirectButton";
import { Find } from "./Find";
import { AnswerVol } from "../../AnswersConvert/AnswerVol";
import { AnswerOhm } from "../../AnswersConvert/AnswerOhm";
import { AnswerAmp } from "../../AnswersConvert/AnswerAmp";
import type { TConvertVars } from "./types";

const OhmLow: FC = () => {
  const [variableComponent, setVariableComponent] = useState(<></>);
  const [result, setResult] = useState<number>(0);
  const [convertAnswer, setConvertAnswer] = useState<TConvertVars>({
    U: 0,
    I: 0,
    R: 0,
  });
  const vars = { U: "Напряжение", I: "Сила тока", R: "Сопротивление" };
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
        <MathJax>{"Заком Ома: \\(U=I*R\\)"}</MathJax>
        <MathJax>{"\\(U\\) - Напряжение"}</MathJax>
        <MathJax>{"\\(I\\) - Сила тока"}</MathJax>
        <MathJax>{"\\(R\\) - Сопротивление"}</MathJax>
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
              .toFixed(3)
              .toString()
              .replace(".", ",")}
          </Typography>
          {answerLetter.current === "U" ? (
            <AnswerVol
              convert={convertAnswer.U}
              setConvert={setConvertAnswer}
            />
          ) : null}
          {answerLetter.current === "R" ? (
            <AnswerOhm
              convert={convertAnswer.R}
              setConvert={setConvertAnswer}
            />
          ) : null}
          {answerLetter.current === "I" ? (
            <AnswerAmp
              convert={convertAnswer.I}
              setConvert={setConvertAnswer}
            />
          ) : null}
        </Box>
      )}
    </Box>
  );
};
export { OhmLow };
