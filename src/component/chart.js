
import React from 'react';
import  ReactApexChart from "react-apexcharts";
import dayjs from 'dayjs';

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        interval:1,
        series: [],
        options: {
          chart: {
            height: 450,
            type: 'candlestick',
          },
          title: {
            text: 'CandleStick Chart - Category X-axis',
            align: 'left'
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    fontSize: '12px',
                    color: '#fff',
                    background: '#00E396'
                  },
                  orientation: 'horizontal',
                  offsetY: 7,
                  text: 'Annotation Test'
                }
              }
            ]
          },
          tooltip: {
            enabled: true,
          },
          xaxis: {
            type: 'category',
            labels: {
              formatter: function(val) {
                return dayjs(val).format('MMM DD HH:mm')
              }
            }
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
      };
    }
    render() {
      return (
  <div id="chart">
    <ReactApexChart options={this.state.options} series={this.props.series} type="candlestick" height={450} />
  </div>
      )
    }}
export default ApexChart;