import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import type { Dispatch, FC, SetStateAction } from "react";

const ConvertKG: FC<{
  setConvert: Dispatch<SetStateAction<any>>;
  convert: number;
}> = ({ setConvert, convert }) => {
  const handleChange = (event: SelectChangeEvent<number>) => {
    console.log(event.target.name);
    setConvert((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Box>
      <Select onChange={handleChange} name={"m"} value={convert}>
        <MenuItem value={-3}>мг</MenuItem>
        <MenuItem value={0}>Кг</MenuItem>
        <MenuItem value={3}>Тонна</MenuItem>
      </Select>
    </Box>
  );
};
export { ConvertKG };
