import React, { Component } from 'react';
import Chart from '../component/chart';
import * as action from '../redux/action'
import {connect} from 'react-redux';
import Spinner from '../hoc/spinner'

class historical extends Component {
    state={
    }
    componentDidMount(){
        this.props.initHistoricalData();
    }
    render() {
        return (
            <Spinner loading={this.props.loading}>
                <Chart series={this.props.series}/>
            </Spinner>
        );
    }
}
const mapStateToProps = ({Historical}) => {
    return {
        series: Historical.series,
        loading:Historical.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initHistoricalData: () => {
            dispatch(action.initHistoricalData())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(historical);