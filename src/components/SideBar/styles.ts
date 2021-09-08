import { createStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

export const styles = () =>
  createStyles({
    sideBarList: {
      marginTop: 20
    },
    rotatingLogo: {
      animation: `$rotation 7s infinite linear`,
      cursor: "pointer",
      margin: 15
    },
    "@keyframes rotation": {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20
    },
    button: {
      width: "50%",
      margin: 10,
      color: standardColors.primaryMain,
      borderColor: standardColors.primaryMain
    },
    backGroundChangeButtons: {
      width: "50%",
      margin: 5,
      color: standardColors.pureWhite
    },
    buttonFilled: {
      color: standardColors.pureWhite,
      backgroundColor: standardColors.primaryMain
    },
    iconButtonNegative: {
      color: standardColors.negative
    },
    iconButtonSecondary: {
      color: standardColors.secondaryMain
    },
    iconButtonPrimary: {
      color: standardColors.primaryMain
    },
    switchContainer: {
      display: "flex",
      justifyContent: "center",
      padding: 20
    }
  });
