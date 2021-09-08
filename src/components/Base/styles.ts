import { createStyles, makeStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

export const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        width: "100%",
        height: "100%",
        overflow: "hidden"
      }
    },
    baseContainer: {
      display: "flex",
      height: "100vh"
    },
    sideBarContainer: {
      flex: 1,
      overflowX: "hidden",
      backgroundColor: standardColors.pureWhite,
      padding: "20px 0",
      textAlign: "center"
    },
    pageContainer: {
      flex: 4,
      boxShadow: "0px 0px 10px 2px #000000"
    },
    pageContent: {
      display: "flex",
      height: "90%",
      justifyContent: "center",
      alignItems: "center"
    },
    message: {
      color: standardColors.darkGreen,
      fontSize: 18,
      padding: 50,
      border: `1px solid ${standardColors.darkGreen}`,
      backgroundColor: standardColors.primaryLight,
      textAlign: "center"
    }
  })
);
