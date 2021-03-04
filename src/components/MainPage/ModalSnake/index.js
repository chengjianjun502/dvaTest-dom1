import React, { Component } from 'react';
import styles from './index.less';


export default class index extends Component {

    state = {
        num: 0,
    }
    componentDidMount(){
        this.changeState();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    changeState = () => {
        let { num } = this.state;
        this.timer = setInterval(()=> {
          num += 1;
          this.setState({ num }) 
        }, 1000);
    }
    render() {
        return (
            <div>
                num:----------------{this.state.num}
                <div className={styles.dialog_box_l}>ggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhffffffffffffffffjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
                <br></br>
                <div className={styles.dialog_box_r}>12434</div>
            </div>
        )
    }
}
