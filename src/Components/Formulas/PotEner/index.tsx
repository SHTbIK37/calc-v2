import type { FC } from "react";
import { RedirectButton } from "../../RedirectButton";
import Typography from "@mui/material/Typography";

const PotEner: FC = () => {
  return (
    <>
      <RedirectButton />
      <Typography variant="h5" color="initial">
        В разработке...
      </Typography>
    </>
  );
};
export { PotEner };
