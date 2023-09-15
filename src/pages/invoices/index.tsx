import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Invoice, mockInvoices } from "../../data/mockData";
import { useTheme } from "@mui/material";

const Invoices = () => {
  const { palette } = useTheme();
  const main = palette.primary.main;

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row: { cost } }: { row: Invoice }) => {
        return <Typography color={main}>{cost}</Typography>;
      },
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box
      m="1rem"
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: main,
        },
      }}
    >
      <Header title="Invoices" subTitle="Invoice details" />
      <DataGrid
        checkboxSelection
        rows={mockInvoices}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};
export default Invoices;
