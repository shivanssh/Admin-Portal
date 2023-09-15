import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Team as MockTeamData, mockTeam } from "../../data/mockData";
import {
  AdminPanelSettings,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const Team = () => {
  const { palette } = useTheme();
  const main = palette.primary.main;

  const accessIcons = {
    admin: <AdminPanelSettings />,
    manager: <SecurityOutlined />,
    user: <LockOpenOutlined />,
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }: { row: MockTeamData }) => {
        console.log(access);
        return (
          <Box
            width="60%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="5px"
            borderRadius="4px"
            sx={{
              backgroundColor: main,
            }}
          >
            {access && accessIcons[access]}
            <Typography sx={{ textTransform: "upperCase" }} ml=".5rem">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="1rem">
      <Header title="Team" subTitle="Team Info" />
      <DataGrid columns={columns} rows={mockTeam} />
    </Box>
  );
};
export default Team;
