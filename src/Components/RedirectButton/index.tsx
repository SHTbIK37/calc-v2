import { FC } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const RedirectButton: FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
      variant="outlined"
    >
      Веруться на главную
    </Button>
  );
};
export { RedirectButton };
