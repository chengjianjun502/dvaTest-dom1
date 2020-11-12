import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import QRCode  from 'qrcode.react';

export default class SwitchPages extends Component {
    state={
        checked: true,
        qrUrl:'https://www.baidu.com/',
    }
    handleClick=()=>{
        this.setState({
            checked: !this.state.checked,
        })
    }
    handleChange=(e)=>{
        this.setState({
            checked: e,
        })
    }
    render() {
        const str = `123,
        456,
        tom.`;
        return (
            <div>
                <Switch checked={this.state.checked} onChange={this.handleChange} />
                <Button onClick={this.handleClick}>来呀！！~</Button>
                <QRCode
                    value={this.state.qrUrl}  //value参数为生成二维码的链接
                    size={200} //二维码的宽高尺寸
                    fgColor="#000000"  //二维码的颜色
                />
                <hr />
                <div>
                    {`123,345,789.`}
                    {str}
                </div>
            </div>
        )
    }
}
