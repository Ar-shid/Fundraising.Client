import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        colors: ["#00BAB5"],
      },
      series: [
        {
          name: "series-1",
          data: [20, 45, 20, 45, 33, 45, 60, 20, 45, 45, 45, 90],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default BarChart;
