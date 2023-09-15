import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useAppSelector } from "./hooks/stateHooks";
import { themeSettings } from "./theme";
import TopBar from "./pages/global/TopBar";
import SideBar from "./pages/global/SideBar";
import Dashboard from "./pages/dashboard";
import FourOFour from "./pages/fourOFour";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Profile from "./pages/profile";

const App = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Profile />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
