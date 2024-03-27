import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const AnswerOhm: FC<{
  setConvert: Dispatch<SetStateAction<any>>;
  convert: number;
}> = ({ setConvert, convert }) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    setConvert((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(1);
  return (
    <Box>
      <Select onChange={handleChange} name={"R"} value={convert}>
        <MenuItem value={3}>мОм</MenuItem>
        <MenuItem value={0}>Ом</MenuItem>
        <MenuItem value={-3}>КОм</MenuItem>
      </Select>
    </Box>
  );
};
export { AnswerOhm };
