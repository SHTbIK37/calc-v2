import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const AnswerAmp: FC<{
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
      <Select onChange={handleChange} name={"I"} value={convert}>
        <MenuItem value={3}>мА</MenuItem>
        <MenuItem value={0}>А</MenuItem>
        <MenuItem value={-3}>КА</MenuItem>
      </Select>
    </Box>
  );
};
export { AnswerAmp };
