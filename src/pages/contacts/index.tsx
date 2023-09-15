import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { mockContacts } from "../../data/mockData";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";

const Contacts = () => {
  const { palette } = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar Id", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];
  return (
    <Box
      m="1rem"
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: palette.primary.main,
        },
      }}
    >
      <Header title="Contacts" subTitle="Contact info for future reference" />
      <DataGrid
        rows={mockContacts}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default Contacts;
