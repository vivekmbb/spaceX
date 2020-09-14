import React from "react";
import { Box, Text } from "grommet";

export const FilterSection = ({ props }: any) => {
  const { selectYear, setSelectYear, selectLaunch, setSelectLaunch, selectLanding, setSelectLanding } = props;
  const years = [
    ["2006", "2007"],
    ["2008", "2009"],
    ["2010", "2011"],
    ["2012", "2013"],
    ["2014", "2015"],
    ["2016", "2017"],
    ["2018", "2019"],
    ["2020"]
  ];

  const launch = [["True", "False"]];

  const landing = [["True", "False"]];

  const getFilter = (clickedInput: any, setClickedInput: any, list: any) => {
    return React.Children.toArray(
      list?.map((object: any, index: number) => (
        <Box direction="row" gap="xlarge" key={index}>
          <Box
            align="start"
            background={clickedInput === object[0] ? "neutral-1" : "accent-1"}
            justify="center"
            onClick={() => setClickedInput(object[0] === clickedInput ? undefined : object[0])}
            pad="small"
            round="6px"
            margin="5px"
          >
            {object[0]}
          </Box>
          {object.length === 2 && (
            <Box
              align="end"
              justify="center"
              background={clickedInput === object[1] ? "neutral-1" : "accent-1"}
              onClick={() => setClickedInput(object[1] === clickedInput ? undefined : object[1])}
              pad="small"
              round="6px"
              margin="5px"
            >
              {object[1]}
            </Box>
          )}
        </Box>
      ))
    );
  };

  return (
    <Box background="white" round="8px" pad={{ bottom: "medium" }}>
      <Text size="medium" weight="bold" margin={{ left: "medium", top: "small" }}>
        Filters
      </Text>
      <Box align="center" border={{ side: "bottom", size: "1px" }} margin={{ left: "large", right: "large" }}>
        <Text size="medium" margin={{ bottom: "small" }}>
          Launch Year
        </Text>
      </Box>
      <Box data-testid="button section" margin="auto">
        {getFilter(selectYear, setSelectYear, years)}
      </Box>
      <Box
        align="center"
        border={{ side: "bottom", size: "1px" }}
        margin={{ left: "large", right: "large", top: "medium" }}
      >
        <Text size="medium" margin={{ bottom: "small" }}>
          Successful Launch
        </Text>
      </Box>
      <Box data-testid="button section" margin="auto">
        {getFilter(selectLaunch, setSelectLaunch, launch)}
      </Box>
      <Box
        align="center"
        border={{ side: "bottom", size: "1px" }}
        margin={{ left: "large", right: "large", top: "medium" }}
      >
        <Text size="medium" margin={{ bottom: "small" }}>
          Successful Landing
        </Text>
      </Box>
      <Box data-testid="button section" margin="auto">
        {getFilter(selectLanding, setSelectLanding, landing)}
      </Box>
    </Box>
  );
};
