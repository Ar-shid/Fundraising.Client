import React, { Component } from "react";
import Chart from "react-apexcharts";

class CircleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%", // smaller hollow = thicker ring
            },
            track: {
              background: "#CCF1F0", // background ring color
              strokeWidth: "100%", // full thickness
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: true,
                fontSize: "22px",
                fontWeight: 600,
                color: "#333",
                offsetY: 0,
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        colors: ["#00BAB5"], // progress color
      },
      series: [60], // percentage
    };
  }
  render() {
    return (
      <div className="app">
        <div className="mixed-chart circle-chart">
          <div className="inner-card">
            <p>My Balance</p>
            <h4>$125,577,000</h4>
          </div>
          <h1>Top Campaigns </h1>
          <div className="inner-card-chart">
            <div>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={350}
                width="40%"
              />
            </div>
            <div>
              <h4>Playground Renovation</h4>
            </div>
          </div>
          <div className="inner-card-chart">
            <div>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={350}
                width="40%"
              />
            </div>
            <div>
              <h4>Youth Soccer Foundation</h4>
            </div>
          </div>
          <div className="inner-card-chart">
            <div>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radialBar"
                height={350}
                width="40%"
              />
            </div>
            <div>
              <h4>Youth Soccer Foundation</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CircleChart;
