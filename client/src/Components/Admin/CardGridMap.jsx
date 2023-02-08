import {
  BadgeDelta,
  Block,
  Card,
  ColGrid,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import React from "react";

const data = [
  {
    title: "Sales VGA",
    metric: "$ 21,400",
    progress: 50,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Sales Mouse",
    metric: "$ 12,699",
    progress: 30,
    target: "$ 60,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Sales Drives",
    metric: "$ 7,340",
    progress: 20,
    target: "$ 90,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
];

const CardGridMap = () => {
  return (
    <ColGrid
      numColsMd={2}
      numColsLg={3}
      marginTop="mt-6"
      gapX="gap-x-6"
      gapY="gap-y-6"
    >
      {data.map((item, id) => (
        <Card key={id} decoration="top" decorationColor="teal">
          <Flex alignItems="items-start">
            <Block>
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
            </Block>
            <BadgeDelta text={item.delta} color="orange" />
          </Flex>
          <Flex marginTop="mt-4" spaceX="space-x-2">
            <Text>{`${item.progress}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar
            percentageValue={item.progress}
            marginTop="mt-3"
            color="orange"
          />
        </Card>
      ))}
    </ColGrid>
  );
};

export default CardGridMap;
