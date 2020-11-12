import React, { Component } from 'react';
import styles from './index.less';
import { Row, Col } from 'antd';

export default class index extends Component {

    handleStrgh =(str)=>{
        const list = [];
        if(str.includes('更多条件')){
            const firstIndex = str.indexOf('(');
            const lastIndex = str.lastIndexOf(')');
            const gjsx = str.substring(firstIndex, lastIndex + 1);
            const tjgl = str.substring(lastIndex + 2);
            const tjgl2 = str.substring(0, firstIndex - 5);
            if(gjsx.includes('排除')){
                const arr = gjsx.split('排除');
                list.push({
                    title: '高级筛选',
                    bh: arr[0], 
                    pc: arr[1],
                })
            } else {
                list.push({
                    title: '高级筛选',
                    bh: gjsx,
                });
            }
            list.push({
                title: '条件过滤',
                bh: `${tjgl2}${tjgl}`,
            })
        }
        return list;
    }
    render() {
        const step = '3';
        return (
            <Row style={{display:'flex'}}>
                <Col style={{ height:'3rem', lineHeight: '3rem', fontWeight:'bolder', width: 'max-content', marginRight: '2rem' }}>账户诊断</Col>
                <Col className={styles.msteps}>
                    <div className={step === '1' || step === '2' || step === '3' ? styles.bgColor : ''}>1.账户诊断</div>
                    <div className={step === '2' || step === '3' ? styles.bgColor : ''}>2.生成建议书</div>
                    <div className={step === '3' ? styles.bgColor : ''}>3.完成</div>
                </Col>
            </Row>
        )
    }
}
