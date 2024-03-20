import { type FC } from "react";
import Link from "@mui/material/Link";
import { TFromulaLinkProps } from "./types";
const FormulaLink: FC<TFromulaLinkProps> = (props) => {
  return (
    <Link
      sx={{
        flex: "0 0 19%",
        border: "1px solid #3f50b5",
        borderRadius: "8px",
        textAlign: "center",
      }}
      color="black"
      variant="subtitle1"
      underline="hover"
      href={props.elem.href}
    >
      {props.elem.name}
    </Link>
  );
};
export { FormulaLink };
