import { useState } from "react";
import {
  Sidebar as ProSideBar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  CloseOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleOutline,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import { useTheme } from "@mui/material";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { palette } = useTheme();
  const backgroundAlt = palette.background.paper;
  const primaryMain = palette.primary.main;
  return (
    <nav>
      <ProSideBar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: backgroundAlt,
            height: "100vh",
          },
        }}
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed((prevState) => !prevState)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0",
            }}
          >
            {!isCollapsed && (
              <FlexBetween>
                <Typography
                  variant="h3"
                  fontWeight="semibold"
                  sx={{ textTransform: "uppercase" }}
                >
                  admin
                </Typography>
                <IconButton type="button">
                  <CloseOutlined />
                </IconButton>
              </FlexBetween>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              mb="0.5rem"
            >
              <UserImage picturePath="" />
              <Typography variant="h3" m=".5rem 0">
                Test User
              </Typography>
              <Typography variant="h6" color={primaryMain}>
                VP Technology
              </Typography>
            </Box>
          )}
          <Box
            paddingLeft={isCollapsed ? undefined : "5%"}
            marginBottom="0.5rem"
          >
            <SideBarItem
              title="Dashboard"
              icon={<HomeOutlined />}
              to="/"
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              m="0 1rem"
              textAlign={isCollapsed ? "center" : "start"}
            >
              Data
            </Typography>
            <SideBarItem
              title="Manage Team"
              icon={<PeopleOutline />}
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              m="0 1rem"
              textAlign={isCollapsed ? "center" : "start"}
            >
              Pages
            </Typography>
            <SideBarItem
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              m="0 1rem"
              textAlign={isCollapsed ? "center" : "start"}
            >
              Charts
            </Typography>
            <SideBarItem
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <SideBarItem
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSideBar>
    </nav>
  );
};

export default SideBar;
