import React, { Component } from 'react';
import Chart from '../component/chart'
import Spinner from '../hoc/spinner';
import socketIOClient from "socket.io-client";
import {csvToJSON} from '../utils/util'

class liveChart extends Component {
    constructor(props) {
    super(props);
    this.socket=socketIOClient('http://kaboom.rksv.net/watch');
    this.state = {
             loading:true,
             series:[{
                name: 'candle',
                data:[]
              }]
            }
}

    componentDidMount(){
        if(this.socket.disconnected){

            try {
                const stringifiedData= localStorage.getItem("offlineData");
                const data = JSON.parse(stringifiedData);
                this.setState({series:[{
                    name: 'candle',
                    data:data
                  }],
                  loading:false
                })
            } catch (error) {
                console.log(error)
            }  
        }    
        this.socket.emit('sub',{state:true},function(payload){console.log("subscribed")});
        let that=this;
        this.socket.on("data",function(data,ack){
            const newData=csvToJSON([data])
            ack(1);
            const oldData=that.state.series[0].data;
            that.setState({series:[{
                name: 'candle',
                data:[...oldData,...newData]
              }],
              loading:false
            })
          })
        this.socket.on('error',function(data){
            that.setState({loading:false})
            console.log(data)
          })
    }
    componentWillUnmount(){
        this.socket.emit('unsub',{state:false},function(payload){console.log(payload,payload.state)})
        localStorage.setItem("offlineData",JSON.stringify(this.state.series[0].data))
    }
    render() {
        return (
            <Spinner loading={this.state.loading}>
                <Chart series={this.state.series} text={"OHLC Live Chart"}/>
            </Spinner>
        );
    }
}

export default liveChart;