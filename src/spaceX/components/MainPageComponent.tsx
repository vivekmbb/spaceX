import { Box, Grid, ResponsiveContext } from "grommet";
import React from "react";
import { RocketCard } from "./RocketCard";

interface IMainPageComponent {
  result: any;
}

export const MainPageComponent = ({ result }: IMainPageComponent) => {
  const size = React.useContext(ResponsiveContext);
  const count = size === "large" ? 4 : size === "medium" ? 2 : 1;
  const [newData, setnewData] = React.useState<any>();

  React.useEffect(() => {
    const constructedData = chunkArray(result, count);
    setnewData(constructedData);
  }, [size, result, count]);

  const chunkArray = (myArray: any[], chunk_size: number) => {
    let results = [];
    const newArray = [...myArray];
    while (newArray?.length) {
      results.push(newArray.splice(0, chunk_size));
    }
    return results;
  };

  const getGrids = () => {
    return newData?.map((object: any[], index: number) => (
      <Grid
        columns={{
          count,
          size: "auto"
        }}
        key={index}
        gap="10px"
        responsive={true}
        margin="xsmall"
        fill={true}
      >
        {getChildren(object)}
      </Grid>
    ));
  };

  const getChildren = (childrenData: any) => {
    return childrenData?.map((object: any, index: number) => <RocketCard key={index} data={object} />);
  };

  return newData ? <Box>{getGrids()}</Box> : null;
};
