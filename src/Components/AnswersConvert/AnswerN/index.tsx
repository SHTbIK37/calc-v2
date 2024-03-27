import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const AnswerN: FC<{
  setConvert: Dispatch<SetStateAction<any>>;
  convert: number;
}> = ({ setConvert, convert }) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    setConvert((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Box>
      <Select onChange={handleChange} name={"F"} value={convert}>
        <MenuItem value={3}>мН</MenuItem>
        <MenuItem value={0}>Н</MenuItem>
        <MenuItem value={-3}>КН</MenuItem>
      </Select>
    </Box>
  );
};
export { AnswerN };
