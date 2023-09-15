import { Box, Typography } from "@mui/material";

const FourOFour = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" fontWeight="bold">
        400
      </Typography>
      <Typography variant="h2" color="red" fontWeight="bold">
        Page Not Found!
      </Typography>
    </Box>
  );
};

export default FourOFour;
