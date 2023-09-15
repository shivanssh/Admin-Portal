import { Dispatch, SetStateAction, memo } from "react";
import { MenuItem, menuClasses } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

interface ISideBarItemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const SideBarItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: ISideBarItemProps) => {
  const { palette } = useTheme();
  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      component={<Link to={to} />}
      onClick={() => setSelected(title)}
      rootStyles={{
        [`.${menuClasses}`]: {
          backgroundColor: "transparent !important",
          [`&:hover`]: {
            backgroundColor: "transparent !important",
          },
        },
        [`.${menuClasses.active}`]: {
          color: palette.primary.main,
        },
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default memo(SideBarItem);
