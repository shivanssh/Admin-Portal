import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

interface IHeaderProps {
  title: string;
  subTitle: string;
}

const Header = ({ title, subTitle }: IHeaderProps) => {
  const { palette } = useTheme();
  return (
    <Box padding="0.5rem">
      <Typography textTransform="uppercase" variant="h1" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h3" color={palette.primary.main}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
