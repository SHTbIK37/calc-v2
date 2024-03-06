import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormulaList } from "../FormulaList";
import { useState, type ChangeEvent } from "react";

const ChooseForm = () => {
  const [formulaSearch, setFormulaSearch] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormulaSearch(event.target.value);
  };
  return (
    <Box>
      <TextField
        fullWidth
        name="formulaName"
        label="Формула"
        onChange={handleChange}
      />
      <Typography
        sx={{ margin: "10px auto", width: "fit-content" }}
        variant="h5"
        color="initial"
      >
        Список доступных формул
      </Typography>

      <FormulaList formulaSearch={formulaSearch} />
    </Box>
  );
};
export { ChooseForm };
