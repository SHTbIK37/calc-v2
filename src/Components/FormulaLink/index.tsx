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
        minHeight: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      color="black"
    >
      <RLink
        style={{
          textDecoration: "none",
          lineHeight: 1,
        }}
        to={props.elem.href}
      >
        {props.elem.name}
      </RLink>
    </Box>
  );
};
export { FormulaLink };
