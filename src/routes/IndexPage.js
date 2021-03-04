import React from 'react';
import { connect } from 'dva';
// import { Card} from 'antd';
import style from './index.less';
import { Card, Tabs } from 'antd';
import FirstPage from './firstPage/index';
import ThirdPage from './mainpage/thirdPage';
import FourthPage from './mainpage/fourthPage';
import Fivepages from './mainpage/fivepages';
import SixePage from './mainpage/sixePage';
import Sevenpage from './mainpage/sevenpage';
import SuperTable from './mainpage/superTable';
import KonvaReact from './mainpage/konvaReact';
import ModalSnake from './mainpage/modalSnake';
import AntdvTest from './mainpage/antdvTest';

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
        <TabPane tab='select&tree' key='4'> <Fivepages /></TabPane>
        <TabPane tab='page5' key='5'> <SixePage /></TabPane>
        <TabPane tab='css进度' key='6'> <Sevenpage /></TabPane>
        <TabPane tab='超级数据之table' key='7'><SuperTable /> </TabPane>
        <TabPane tab='konva-react' key='8'><KonvaReact /> </TabPane>
        <TabPane tab='modal之变' key='9'><ModalSnake /> </TabPane>
        <TabPane tab='antdv' key='10'><AntdvTest /> </TabPane>
      </Tabs>
    </div>
  );
}

export default connect()(IndexPage);
