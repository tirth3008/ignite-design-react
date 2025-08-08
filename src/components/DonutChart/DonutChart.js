import React from "react";
import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
} from "devextreme-react/pie-chart";
import { populationByRegions } from "./data.js";
import "./donutchart.scss";

function customizeTooltip(arg) {
  return {
    text: `${arg.argumentText}\n${(arg.percent * 100).toFixed(0)}%`,
  };
}

const DonutChart = () => {
  return (
    <div>
      <PieChart
        id='pie'
        type='doughnut'
        palette={[
          "#2b63fe",
          "#FE4E2B",
          "#FEB42B",
          "#4FD6F8",
          "#CC2DDB",
          "#2BFECD",
        ]}
        dataSource={populationByRegions}
      >
        <Series argumentField='region'>
          <Label visible={false} format='millions'>
            <Connector visible={true} />
          </Label>
        </Series>

        <Legend
          margin={20}
          color={"#fff"}
          horizontalAlignment='center'
          verticalAlignment='bottom'
        />
        <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
          <Format type='millions' />
        </Tooltip>
      </PieChart>
    </div>
  );
};

export default DonutChart;
