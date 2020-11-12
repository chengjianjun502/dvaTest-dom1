import React, { Component } from 'react';
import { Select } from 'antd';
// import styles from './fourstyle.less';

const {Option} = Select;
export default class FourthPage extends Component {
    state={
        values: ['jack'],
    }
    handleChange= (value) => {
        const { values: oldValue = [] } = this.state;
        if(oldValue.includes('jack')){
            this.setState({values: value.filter(item => item !== 'jack')});
        } else if (!value.includes('jack')){
            this.setState({values: value})
        } else {
            this.setState({values:['jack']})
        }
        
    }
    render() {
        const { values = [] } = this.state;
        return (
            <div style={{padding: '4rem'}}>
                <Select onChange={this.handleChange} value={values} mode="multiple" style={{ width: 220 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </div>
        )
    }
}
