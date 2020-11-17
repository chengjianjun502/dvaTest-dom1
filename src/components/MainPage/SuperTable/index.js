import { Affix, Table } from 'antd';
import React, { Component } from 'react';
import renderTable from './data';
import styles from './index.less';

let scrollBar = null; // 表格滑动条
let fisTable = null; // 隐藏表头滚动条
let bottomScroll = null; // 底部滚动条
export default class index extends Component {
    state={
        isHide: true,
    }

    componentDidMount(){
        const scrollBarArr = document.getElementsByClassName('ant-table-body');
        console.info('scrollBarArr:', scrollBarArr)
        if (scrollBarArr.length > 1) {
            scrollBar = scrollBarArr[scrollBarArr.length - 1];
            scrollBar.addEventListener('scroll', this.tableScroll1);
        }
        fisTable = document.getElementsByClassName('ant-table-body')[0];
        bottomScroll = document.getElementById('bottomScroll');
        bottomScroll.addEventListener('scroll', this.tableScroll2)
    }
    tableScroll1 = () => {
        // let num = 150 * 300 / 1920;
        // fisTable.scrollLeft += num;
        if (scrollBar && fisTable && bottomScroll) {
            fisTable.scrollLeft = scrollBar.scrollLeft;
            bottomScroll.scrollLeft = scrollBar.scrollLeft;
        }
    }

    tableScroll2 = () => {
        if(bottomScroll && scrollBar && fisTable){
            fisTable.scrollLeft = bottomScroll.scrollLeft;
            scrollBar.scrollLeft = bottomScroll.scrollLeft;
        }
    }

    contentScroll = (affixed) => {
        // console.info('affixed:', affixed);
        if (!affixed) {
          this.setState({ isHide: true });
        } else if (affixed) {
          this.setState({ isHide: false });
        }
    }
    render() {
        const {columns, dataSource} = renderTable.renderColumns(30, 20); // 两个入参分别是: a1|表头长度 a2|其他长度
        // console.info('dataSource:', dataSource)
        const tableProps = {
            columns,
            dataSource,
            pagination:{
                pageSize: 20,
            },
            scroll:{ x: 'max-content' }
        }
        return (
            <React.Fragment>
                <Affix offsetTop={0}>
                    <div style={{padding: '0 1rem', height: '4rem', lineHeight: '4rem', background: '#aaa'}}>
                        <h1>超级数据表--数据量特别巨大</h1>
                    </div>
                    <div className={styles['m-table']}>
                        <Table 
                            columns={columns}
                            dataSource={[dataSource[0]]}
                            pagination={false}
                            scroll={{x: 'max-content'}}
                            getPopupContainer={() => document.getElementById('scrollTable')}
                        />
                    </div>
                </Affix>
                
                <div style={{ zIndex: 1, transform: 'translateY(-54px)' }}>
                    <Table 
                        {...tableProps}
                        getPopupContainer={() => document.getElementById('scrollTable')}
                     />
                </div>
                {/* 手动控制的滚动条 4500 = 150 * 30 */}
                {<Affix style={{ position: 'absolute', bottom: '0px', visibility: this.state.isHide ? "hidden" : '' }} offsetBottom={0} onChange={this.contentScroll}>
                    <div id="bottomScroll" style={{ overflow: 'auto', width: 'calc(100vw - 17px)' }}>
                        <div style={{ width: '4500px', height: '2rem' }} />
                    </div>
                </Affix>}
            </React.Fragment>
            
        )
    }
}
