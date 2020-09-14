// tslint:disable: no-submodule-imports
import "@testing-library/jest-dom/extend-expect";
import { Box } from "grommet";
import React from "react";
import renderer from "react-test-renderer";
import { FilterSection } from "../FilterSection";

describe("Filter Section Component", () => {
  it("Filter Section component", () => {
    const Wrapper = (props: any) => <Box pad="medium">{props.children}</Box>;

    const ChildFunction = () => {
      const [selectYear, setSelectYear] = React.useState();
      const [selectLaunch, setSelectLaunch] = React.useState();
      const [selectLanding, setSelectLanding] = React.useState();

      const props = {
        selectYear,
        setSelectYear,
        selectLaunch,
        setSelectLaunch,
        selectLanding,
        setSelectLanding
      };

      return <FilterSection props={props} />;
    };
    const component = renderer
      .create(
        <Wrapper>
          <ChildFunction />
        </Wrapper>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
