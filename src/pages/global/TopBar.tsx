import { IconButton, InputBase } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import {
  DarkMode,
  LightMode,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { setMode } from "../../state/themeSlice";
import WidgetRapper from "../../components/WidgetWrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);
  return (
    <FlexBetween padding="1rem">
      {/* Search Box */}
      <WidgetRapper>
        <FlexBetween>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchOutlined />
          </IconButton>
        </FlexBetween>
      </WidgetRapper>

      {/* Icons  */}
      <FlexBetween>
        <IconButton onClick={() => dispatch(setMode())}>
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Sidebar;
