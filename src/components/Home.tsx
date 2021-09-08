import React from "react";
import { useStyles } from "../components/Base/styles";

export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <section className={classes.message}>
        Just a container with a fixed background color.
        <br />
        The background color behind this container will change with the button usage.
      </section>
    </div>
  );
};
