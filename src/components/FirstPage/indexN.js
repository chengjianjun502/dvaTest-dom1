import React, { Component } from 'react';
import { Icon, Tooltip, Button } from 'antd';
import styles from './index.less';

export default class indexN extends Component {
    state={
        deg: -5,
    }
    handleClick=()=>{
        const { deg: oldDeg } = this.state;
        if(oldDeg > -155){
            this.setState({
                deg: oldDeg + -30,
            });
        } else {
            this.setState({ deg: -5 });
        }
    }
    render() {
        const { deg } = this.state;
        return (
            <div style={{width: '500px', height: '1020px'}}>
                <div className={styles.box2}>
                    <div>
                        <div className={styles.boxTxt}><span>开始了</span></div>
                    </div>
                    <div>
                        <div className={styles.boxTxt}><span>加油了</span></div>
                    </div>
                    <div>
                        <div className={styles.boxTxt}><span>努力了</span></div>
                    </div>
                    <div>
                        <div className={styles.boxTxt}><span>奋斗了</span></div>
                    </div>
                    <div>
                        <div className={styles.boxTxt}><span>累了</span></div>
                    </div>
                    <div>
                        <div className={styles.boxTxt}><span>凉了</span></div>
                    </div>
                </div>
                <div style={{width:'400px', height:'200px', overflow:'hidden'}}>
                <div className={styles.box3}>
                    <div>
                    <div className={styles.boxTxt2} style={{transform:'rotate(75deg)', borderTopColor:'#F5FFE8'}}><Tooltip title="prompt text"><span title="8888888">1哈哈哈</span></Tooltip></div>
                    </div>
                    <div>
                    <div className={styles.boxTxt2} style={{transform:'rotate(45deg)', borderTopColor:'#FFFFDF'}}><Tooltip title="prompt text"><span title="99999">2好好好</span></Tooltip></div>
                    </div>
                    <div>
                    <div className={styles.boxTxt2} style={{transform:'rotate(15deg)', borderTopColor:'#FFF4C1'}}><Tooltip title="prompt text"><span title="55555">3大苏打</span></Tooltip></div>
                    </div>
                    <div>
                    <div className={styles.boxTxt2} style={{transform:'rotate(-15deg)', borderTopColor:'#FFDCB9'}}><Tooltip title="prompt text"><span title="666666">4未来了</span></Tooltip></div>
                    </div>
                    <div>
                    <div className={styles.boxTxt2} style={{transform:'rotate(-45deg)', borderTopColor:'#FFBD9D'}}><Tooltip title="prompt text"><span title="41414141">5罗迪克</span></Tooltip></div>
                    </div>
                    <div>
                    <div className={styles.boxTxt2} style={{transform:'rotate(-75deg)', borderTopColor:'#FF8F59'}}><Tooltip title="prompt text"><span title="55252252">6角度看</span></Tooltip></div>
                    </div>
                    <div className={styles.center2} text="hhhhh" title="456465464">
                        <span >当前处于</span> 
                        <span className={styles.text} style={{transform: `rotate(${deg}deg)`}}><Icon type="caret-right" /></span>
                    </div>
                </div>
                </div>
                <Button onClick={this.handleClick}>点击一下试试</Button>
            </div>
        )
    }
}
