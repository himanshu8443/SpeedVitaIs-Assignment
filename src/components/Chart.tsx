import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const Chart = ({
  title,
  timeseries,
  values,
}: {
  title: string;
  timeseries: string[];
  values: number[];
}) => {
  echarts.registerTheme("dark", {
    backgroundColor: "#333",
  });
  echarts.registerTheme("light", {
    backgroundColor: "#fff",
  });
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: timeseries,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "line",
        smooth: false,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontSize: 16,
        color: "#627ad3",
      },
    },
  };

  return <ReactECharts option={options} />;
};

export default Chart;
