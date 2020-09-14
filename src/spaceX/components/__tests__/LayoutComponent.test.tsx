// tslint:disable: no-submodule-imports
import "@testing-library/jest-dom/extend-expect";
import { Box } from "grommet";
import React from "react";
import renderer from "react-test-renderer";
import { LayoutComponent } from "../LayoutComponent";

describe("Layout Component Information Component", () => {
  it("Layout component", () => {
    const Wrapper = (props: any) => <Box pad="medium">{props.children}</Box>;
    const component = renderer
      .create(
        <Wrapper>
          <LayoutComponent />
        </Wrapper>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
