import { Button } from "@mui/material";

interface ICustomBtnProps {
  title: string;
  variant?: "outlined" | "text" | "contained";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  style?: {
    [key: string]: any;
  };
}

const CustomButton = ({
  title,
  variant = "outlined",
  startIcon,
  endIcon,
  style,
}: ICustomBtnProps) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={style}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
