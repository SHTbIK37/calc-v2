import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const ConvertVol: FC<{
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
      <Select onChange={handleChange} name={"U"} value={convert}>
        <MenuItem value={-3}>мВ</MenuItem>
        <MenuItem value={0}>В</MenuItem>
        <MenuItem value={3}>КВ</MenuItem>
      </Select>
    </Box>
  );
};
export { ConvertVol };
