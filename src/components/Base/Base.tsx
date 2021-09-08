import { Sidebar } from "components/SideBar/SideBar";
import * as React from "react";
import { TopBar } from "components/TopBar";

import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { getColor } from "store/color.selector";

const BaseComponent: React.FC = ({ children }) => {
  const classes = useStyles();
  const colorFromStore = useSelector(getColor);
  return (
    <div className={classes.baseContainer}>
      <div className={classes.sideBarContainer}>
        <Sidebar />
      </div>
      <main
        className={classes.pageContainer}
        style={{ backgroundColor: colorFromStore }}
        data-component="main-content-component"
      >
        <TopBar />
        <div className={classes.pageContent}>{children}</div>
      </main>
    </div>
  );
};

export const Base = BaseComponent;
