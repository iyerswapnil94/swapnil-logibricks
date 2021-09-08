import React from "react";
import { Switch as MuiSwitch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

const useStyles = makeStyles({
  root: {
    width: 50,
    height: 24,
    padding: 0
  },
  switchBase: {
    color: "#818181",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: standardColors.secondaryMain
      }
    }
  },
  thumb: {
    color: standardColors.pureWhite,
    width: 20,
    height: 20,
    margin: 1
  },
  track: {
    borderRadius: "20px",
    backgroundColor: standardColors.darkGrey,
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px"
    },
    "&:after": {
      left: "8px"
    },
    "&:before": {
      right: "7px"
    }
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(26px) !important"
  }
});

export const Switch: React.FC<{ initialState: boolean }> = ({ initialState }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: initialState
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <MuiSwitch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};
