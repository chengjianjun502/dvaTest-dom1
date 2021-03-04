import { Modal, Button, Icon, notification } from 'antd';
import React, { Component } from 'react';
import ModalSnake from '../../components/MainPage/ModalSnake';

let m_scroll = null;

export default class modalSnake extends Component {

  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  componentDidMount(){
    window.addEventListener('scroll', this.mfunction);
    // m_scroll =  document.getElementById('mContent');
    // m_scroll.addEventListener('scroll', this.mfunction.bind(this));
  }

  mfunction =(e)=> {
    // console.info('scroll---------------------', e)
    console.info(document.body.offsetTop, 888)
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e, type) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    if(type === 2){
        this.openNotification();
    }
  };
  renderTitle = () => {
    return(
      <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '2rem' }}>
        <span>打电话</span>
        <span style={{ cursor: 'pointer', color: '#00000073' }} title="最小化" onClick={e => this.handleCancel(e, 2)}><Icon type="minus" /></span>
      </div>
    );
  }

  openNotification = () => {
    notification.info({
      key: 'calling',
      message: '通话中。。。',
      description:<div>当前通话对象：{this.getCallTime(this.m_modal.state.num)}<Button onClick={() => {notification.close('calling'); this.showModal()}}>返回通话界面</Button></div>,
      placement: 'bottomRight',
      duration: null,
      onClose: this.showModal,
    });
  };

  getCallTime = (num) => {
    setInterval(()=> { num += 1}, 1000);
    return num;
  }
  render() {
    return (
      <div id="mContent" style={{ height: '2000px', width: '3000px', borderLeft: '2rem #aaa solid'}}>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title={this.renderTitle()}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        //   destroyOnClose
        >
          <ModalSnake ref={c => this.m_modal = c} />
        </Modal>
    </div>
    )
  }
}
