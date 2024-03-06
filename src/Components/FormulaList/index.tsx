import { FC } from "react";
import Box from "@mui/material/Box";
import { formulas } from "../../utils/formulaArray";
import { FormulaLink } from "../FormulaLink";
import { TFormulaListProps } from "./types";
const FormulaList: FC<TFormulaListProps> = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
      {formulas.map((elem) => {
        if (props.formulaSearch === "")
          return <FormulaLink key={elem.href} elem={elem} />;
        if (elem.name.toLowerCase().includes(props.formulaSearch.toLowerCase()))
          return <FormulaLink key={elem.href} elem={elem} />;
      })}
    </Box>
  );
};
export { FormulaList };
