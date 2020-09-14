// tslint:disable: no-submodule-imports
import "@testing-library/jest-dom/extend-expect";
import { Box } from "grommet";
import React from "react";
import renderer from "react-test-renderer";
import { MainPageComponent } from "../MainPageComponent";

describe("Main Page Component", () => {
  const rocketinformation = [
    {
      flight_number: 6,
      mission_name: "Falcon 9 Test Flight",
      mission_id: ["EE86F74"],
      launch_year: "2010",
      launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      launch_success: true,
      links: {
        mission_patch_small: "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png"
      }
    }
  ];

  it("Main Page component", () => {
    const Wrapper = (props: any) => <Box pad="medium">{props.children}</Box>;
    const component = renderer
      .create(
        <Wrapper>
          <MainPageComponent result={rocketinformation} />
        </Wrapper>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
