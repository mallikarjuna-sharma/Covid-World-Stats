import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "red"
    }
  },
  child: {
    backgroundColor: "blue"
  },
  rippleVisible: {
    opacity: 0.5
  },
  "@keyframes mui-ripple-enter": {
    "0%": {
      transform: "scale(0)",
      opacity: 0.1
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0.5
    }
  }
});

function MyButton({ classes, ...other }) {
  const { button: buttonClass, ...rippleClasses } = classes;
  return (
    <Button
      TouchRippleProps={{ classes: rippleClasses }}
      className={buttonClass}
      {...other}
    />
  );
}

export default withStyles(styles)(MyButton);