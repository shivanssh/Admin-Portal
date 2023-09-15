import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const WidgetRapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "0.25rem",
  padding: "0.5rem 0.5rem 0.25rem 0.5rem",
}));

export default WidgetRapper;
