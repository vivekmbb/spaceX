import { Box, ResponsiveContext, Text } from "grommet";
import React from "react";

interface IRocketCard {
  data: any;
}
export const RocketCard = ({ data }: IRocketCard) => {
  const size = React.useContext(ResponsiveContext);
  const getMissionIds = () => {
    return (
      <Box direction="column">
        {React.Children.toArray(
          data?.mission_id?.map((value: string, index: number) => (
            <Text key={index} weight="normal">
              -- {value}
            </Text>
          ))
        )}
      </Box>
    );
  };

  return (
    <Box background="white" round="8px" border="all" fill="vertical">
      <Box background="light-3" margin={size === "small" ? "large" : "medium"} pad="small">
        <img src={data?.links?.mission_patch_small} alt="Logo" />
      </Box>
      <Box direction="column" margin="small" pad="small">
        <Text color="blue" weight="bold" margin={{ bottom: "medium" }}>
          {data?.mission_name + " #"}
          {data?.flight_number}
        </Text>
        <Text weight="bold">Mission Ids: {getMissionIds()}</Text>
        <Text weight="bold">
          Launch Year:{" "}
          <Text weight="normal" color="blue">
            {data?.launch_year}
          </Text>
        </Text>
        <Text weight="bold">
          Successful Launch:{" "}
          <Text weight="normal" color="blue">
            {data?.launch_success ? "True" : "False"}
          </Text>
        </Text>
        <Text weight="bold">
          Successful Landing:{" "}
          <Text weight="normal" color="blue">
            {data?.launch_site?.site_name_long}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
