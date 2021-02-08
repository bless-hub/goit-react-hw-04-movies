import React from "react";
import { defaultTo } from "lodash";
import { Consumer } from "../context";
import { defaultTheme, themes } from "../constants";

function ThemeConsumer(props) {
  return (
    <Consumer>
      {(theme) => props.children(defaultTo(theme, props.defaultTheme))}
    </Consumer>
  );
}

export { ThemeConsumer };
