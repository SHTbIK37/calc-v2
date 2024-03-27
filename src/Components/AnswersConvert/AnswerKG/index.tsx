import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const AnswerKG: FC<{
  setConvert: Dispatch<SetStateAction<number>>;
  convert: number;
}> = ({ setConvert, convert }) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    setConvert(Number(event.target.value));
  };
  return (
    <Box>
      <Select onChange={handleChange} name={"KG"} value={convert}>
        <MenuItem value={3}>мг</MenuItem>
        <MenuItem value={0}>Кг</MenuItem>
        <MenuItem value={-3}>Тонна</MenuItem>
      </Select>
    </Box>
  );
};
export { AnswerKG };
