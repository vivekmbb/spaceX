import { Grommet } from "grommet";
import React from "react";
import { LayoutComponent } from "./LayoutComponent";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

export const IndexComponent = () => {
  return (
    <Grommet theme={theme} themeMode="dark" full>
      <LayoutComponent />
    </Grommet>
  );
};
