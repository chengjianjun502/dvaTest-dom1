import React, { Component } from 'react';
import { Card, Input } from 'antd';
import QRCode  from 'qrcode.react';

export default class siexPages extends Component {

    render() {
        return (
            <div>
                <Card title="二维码生成器">
                    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
                    <QRCode
                        value={this.state.qrUrl}  //value参数为生成二维码的链接
                        size={200} //二维码的宽高尺寸
                        fgColor="#000000"  //二维码的颜色
                    />
                </Card>
            </div>
        )
    }
}
