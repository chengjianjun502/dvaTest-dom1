import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './index.less';

export default class index extends Component {

    componentDidMount(){
        this.renderContnt();
    }

    renderContnt = (x= 180, y=30) => {
        //获取canvas区域
        var canvas = document.getElementById("canvas");
        var canvasHeight = document.getElementById("canvas").height;
        var canvasWidth = document.getElementById("canvas").width;
        //获取绘图canvas的上下文，接收两个参数2d或者3d
        var ctx = canvas.getContext("2d");
        
        // // 绘制背景
        // ctx.fillStyle='#666';
        // ctx.fillRect(0, 0 , canvasWidth,canvasHeight)
        // ctx.globalAlpha=0.8;
        // //画一个空心圆
        // ctx.beginPath();
        // ctx.arc(200,200,50,0,360,false);
        // ctx.lineWidth=5;
        // ctx.strokeStyle="green";
        // ctx.stroke();//画空心圆
        // ctx.closePath();

        ctx.beginPath();
        ctx.lineJoin="round"; // 线相交的样式
        ctx.lineCap="round"; // 线头样式
        ctx.moveTo(x,0);
        ctx.lineTo(canvasWidth,0);
        ctx.lineTo(canvasWidth, canvasHeight);
        ctx.lineTo(0, canvasHeight);
        ctx.lineTo(0, y);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.strokeStyle="#0000ff"; // 笔触颜色
        ctx.stroke(); // 绘制图像
        ctx.fillStyle='#000000aa'
        ctx.fill();
        // 设置成背景图
        document.getElementById('mydiv').style.backgroundImage = 'url("' + ctx.canvas.toDataURL() + '")';
    }
    handleClick = () => {
        this.renderContnt(400, 30);
    }
    render() {
        return (
            <div className={styles.content} >
                <h2>HELLO WORLD!</h2><h2>HELLO WORLD!</h2>
                <canvas  id="canvas"  width="500px" height="500px" style={{ display: 'none' }} ></canvas>
                <div id='mydiv' style={{ position: 'absolute', top: '0', left: '0', height: '500px', width: '500px', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%',}}>
                    <Button style={{ marginTop: '100px' }} onClick={this.handleClick}>点击一下</Button>
                    {/* <Button style={{ marginTop: '100px' }} onClick={this.handleClick}>点击一下</Button> */}
                </div>
            </div>
        )
    }
}
