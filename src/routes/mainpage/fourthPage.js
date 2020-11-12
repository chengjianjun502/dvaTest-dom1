import React, { Component } from 'react';
import { connect } from 'dva';
import FourthPage from '../../components/MainPage/FourthPage';
import { Button } from 'antd';

class fourthPage extends Component {
    handleClick=()=>{
        console.info(this.fourthPage);
    }

    handleClick2=()=>{
        console.info('bnt2');
        this.props.dispatch({
            type: 'example/add'
        });
    }
    render() {
    const {example} = this.props;
    console.info('example:', example);
    return (
        <div>
            第四页
            <FourthPage ref={(c)=>{this.fourthPage = c}} />
            <Button onClick={this.handleClick}>按钮</Button>
            <Button onClick={this.handleClick2}>按钮2</Button>
            <div>name:{example.name} </div>
            <div>add:=> {example.num} </div>
        </div>
    )
  }
}
export default connect(({ example }) => ({
    name: example.name,
    example,
  }))(fourthPage);