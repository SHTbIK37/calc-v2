import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const ConvertN: FC<{
  setConvert: Dispatch<SetStateAction<number>>;
  convert: number;
}> = ({ setConvert, convert }) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    setConvert(Number(event.target.value));
  };
  return (
    <Box>
      <Select onChange={handleChange} name={"Nuton"} value={convert}>
        <MenuItem value={-3}>мН</MenuItem>
        <MenuItem value={0}>Н</MenuItem>
        <MenuItem value={3}>КН</MenuItem>
      </Select>
    </Box>
  );
};
export { ConvertN };
