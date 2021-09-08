import { Button, Divider, IconButton, withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import ReactLogo from "images/reactJs-icon.svg";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { styles } from "./styles";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Switch } from "./Switch";
import { standardColors } from "src/config/colorConfig";

interface IProps extends WithStyles {}

const SideBarComponent: React.FC<IProps> = ({ classes }) => {
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(
    (color: string) => () => {
      dispatch({ type: "UPDATE_COLOR_REQUEST", payload: color });
    },
    []
  );

  const getColorfulButtons = useMemo(() => {
    const { darkGreen, darkAmber, darkRed, darkGrey, primaryMain, negative } = standardColors;
    const colorArray = [darkGreen, darkAmber, darkRed, darkGrey, primaryMain, negative];
    return colorArray.map(color => {
      return (
        <Button
          onClick={handleButtonClick(color)}
          style={{ backgroundColor: color }}
          className={classNames(classes.backGroundChangeButtons)}
          variant="contained"
        >
          BUTTON
        </Button>
      );
    });
  }, []);

  return (
    <>
      <ReactLogo className={classes.rotatingLogo} />
      <Divider />
      <section className={classes.buttonsContainer}>
        <Button className={classNames(classes.button, classes.buttonFilled)} variant="contained">
          BUTTON
        </Button>
        <Button className={classes.button} variant="outlined">
          BUTTON
        </Button>
        <Button className={classes.button}>BUTTON</Button>
      </section>
      <Divider />
      <section>
        <IconButton className={classes.iconButtonNegative}>
          <IndeterminateCheckBoxOutlinedIcon />
        </IconButton>
        <IconButton className={classes.iconButtonPrimary}>
          <AddBoxOutlinedIcon />
        </IconButton>
        <IconButton className={classes.iconButtonSecondary}>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <br />
        <IconButton className={classes.iconButtonNegative}>
          <IndeterminateCheckBoxIcon />
        </IconButton>
        <IconButton className={classes.iconButtonPrimary}>
          <AddBoxIcon />
        </IconButton>
        <IconButton className={classes.iconButtonSecondary}>
          <CheckBoxIcon />
        </IconButton>
      </section>
      <Divider />
      <section className={classes.switchContainer}>
        <Switch initialState={true} />
        <Switch initialState={false} />
      </section>
      <Divider />
      <section>
        <h3>Click below buttons for background change functionality</h3>
        {getColorfulButtons}
      </section>
    </>
  );
};

export const Sidebar = withStyles(styles)(SideBarComponent);
