import React, { Component } from 'react';
// import echartTheme from '@/lib/echartsTheme'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
// import ReactEcharts from 'echarts-for-react';
import ReactEchartsCore from 'echarts-for-react/lib/core';


export default class index extends Component {
    getOption=()=>{
        let option = {
            title: {
                text: '网站访问统计'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ]
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <div>
                ------------------------echarts-------------------------
                {/* <ReactEcharts
                    echarts={echarts}
                    option={this.getOption}
                    notMerge
                    lazyUpdate
                    style={{ height: '30rem', width: '100%' }}
                    theme=""
                /> */}
                {/* <ReactEchartsCore
                  echarts={echarts}
                  option={this.getOption}
                  notMerge
                  lazyUpdate
                  style={{ height: '22rem', width: '100%' }}
                //   onChartReady={this.onChartReadyCallback}
                /> */}
            </div>
        )
    }
}
