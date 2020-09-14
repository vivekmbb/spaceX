import React from "react";
import { Box, Grid, ResponsiveContext, Text } from "grommet";
import { getResults } from "../services/api";
import { FilterSection } from "./FilterSection";
import { MainPageComponent } from "./MainPageComponent";
import { useHistory } from "react-router-dom";

export const LayoutComponent = () => {
  const [selectYear, setSelectYear] = React.useState();
  const [selectLaunch, setSelectLaunch] = React.useState();
  const [selectLanding, setSelectLanding] = React.useState();

  const history = useHistory();

  const props = {
    selectYear,
    setSelectYear,
    selectLaunch,
    setSelectLaunch,
    selectLanding,
    setSelectLanding
  };

  const [results, setResults] = React.useState<any>();
  const size = React.useContext(ResponsiveContext);

  const columns = size === "large" || size === "medium" ? ["1/4", "3/4"] : [];
  const rows = size === "large" || size === "medium" ? ["40px", "flex", "80px"] : ["40px", "500px", "large", "80px"];
  const areas =
    size === "large" || size === "medium"
      ? [
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "filter", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
          { name: "footer", start: [0, 2], end: [1, 2] }
        ]
      : [
          { name: "header", start: [0, 0], end: [0, 0] },
          { name: "filter", start: [0, 1], end: [0, 1] },
          { name: "main", start: [0, 2], end: [0, 2] },
          { name: "footer", start: [0, 3], end: [0, 3] }
        ];

  React.useEffect(() => {
    getData();
    return () => {
      history.push("/");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectYear, selectLaunch, selectLanding]);

  const getData = async () => {
    try {
      const data = await getResults(constructUriWithParams());
      setResults(data.data);
    } catch (e) {
      alert("Error Getting data");
    }
  };

  const constructUriWithParams = () => {
    const defaultParam = `limit=100`;
    const year = selectYear ? `&launch_year=${selectYear}` : "";
    const launch = selectLaunch ? `&launch_success=${selectLaunch === "True" ? true : false}` : "";
    const landing = selectLanding ? `&land_success=${selectLanding === "True" ? true : false}` : "";
    const finalUri = `https://api.spaceXdata.com/v3/launches?limit=100${year}${launch}${landing}`;
    history.push(`${defaultParam}${year}${launch}${landing}`);
    return finalUri;
  };

  return (
    <Grid rows={rows} columns={columns} fill={"vertical"} areas={areas}>
      <Box gridArea="header" background="light-3">
        <Text size="large" weight="bold" margin={{ left: "xsmall", top: "xsmall" }}>
          SpaceX Launch Programs
        </Text>
      </Box>
      <Box gridArea="filter" background="light-3" pad={size === "small" ? "medium" : "small"}>
        <FilterSection props={props} />
      </Box>
      <Box
        gridArea="main"
        background="light-3"
        pad={size === "small" ? "medium" : "small"}
        margin={{ right: "small" }}
        direction="column"
        overflow="auto"
      >
        {results && <MainPageComponent result={results} />}
      </Box>
      <Box gridArea="footer" background="light-3" align="center">
        <Text size="large" weight="bold" margin="medium">
          Developed By : Vivek
        </Text>
      </Box>
    </Grid>
  );
};
