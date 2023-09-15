import { Box } from "@mui/material";
import Header from "../../components/Header";
import FlexBetween from "../../components/FlexBetween";
import CustomButton from "../../components/CustomButton";
import { FileDownloadOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const Dashboard = () => {
  const { palette } = useTheme();
  const dark = palette.secondary.dark;
  const backgroundAlt = palette.primary.main;
  return (
    <Box margin="0.75rem">
      <FlexBetween>
        <Header title="Dashboard" subTitle="Summarized Data" />
        <CustomButton
          title="Download Reports"
          style={{
            textTransform: "uppercase",
            backgroundColor: backgroundAlt,
            color: dark,
            padding: "0.5rem",
          }}
          startIcon={<FileDownloadOutlined />}
        />
      </FlexBetween>
    </Box>
  );
};

export default Dashboard;
