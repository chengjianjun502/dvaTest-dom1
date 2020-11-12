import React from 'react';
import { connect } from 'dva';
// import { Card} from 'antd';
import style from './index.less';
import { Tabs } from 'antd';
import FirstPage from './firstPage/index';
import ThirdPage from './mainpage/thirdPage';
import FourthPage from './mainpage/fourthPage';
import Fivepages from './mainpage/fivepages';
import SixePage from './mainpage/sixePage';
import Sevenpage from './mainpage/sevenpage';

const { TabPane } = Tabs;
function IndexPage() {

  return (
    <div >
      <div className={style.divBackGroud}>
        <div className={style.box}>Hello world</div>
      </div>
      <hr/>
      <Tabs>
        <TabPane tab='page1' key='1'> <FirstPage /></TabPane>
        <TabPane tab='page2' key='2'> <ThirdPage /></TabPane>
        <TabPane tab='page3' key='3'> <FourthPage /></TabPane>
        <TabPane tab='page4' key='4'> <Fivepages /></TabPane>
        <TabPane tab='page5' key='5'> <SixePage /></TabPane>
        <TabPane tab='page6' key='6'> <Sevenpage /></TabPane>
      </Tabs>
    </div>
  );
}

export default connect()(IndexPage);
