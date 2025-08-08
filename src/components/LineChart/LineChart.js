import React from "react";

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Margin,
  Tooltip,
  Grid,
} from "devextreme-react/chart";
import service from "./data.js";
import "./linechart.scss";

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();

const LineChart = () => {
  return (
    <React.Fragment>
      <Chart
        palette={["#FEB42B", "#4FD6F8", "#2BFECD", "#CC2DDB"]}
        dataSource={countriesInfo}
      >
        <CommonSeriesSettings argumentField='country' />
        {energySources.map((item) => (
          <Series key={item.value} valueField={item.value} name={item.name} />
        ))}
        <Margin bottom={20} />
        <ArgumentAxis
          valueMarginsEnabled={false}
          discreteAxisDivisionMode='crossLabels'
        >
          <Grid visible={true} />
        </ArgumentAxis>
        <Legend
          verticalAlignment='bottom'
          horizontalAlignment='center'
          itemTextPosition='bottom'
        />

        <Tooltip enabled={true} />
      </Chart>
    </React.Fragment>
  );
};
export default LineChart;
