import { type FC } from "react";
import { TFromulaLinkProps } from "./types";
import { Link as RLink } from "react-router-dom";
import { Box } from "@mui/material";
const FormulaLink: FC<TFromulaLinkProps> = (props) => {
  return (
    <Box
      sx={{
        flex: "0 0 19%",
        border: "1px solid #3f50b5",
        borderRadius: "8px",
        textAlign: "center",
      }}
      color="black"
    >
      <RLink style={{ textDecoration: "none" }} to={props.elem.href}>
        {props.elem.name}
      </RLink>
    </Box>
  );
};
export { FormulaLink };
