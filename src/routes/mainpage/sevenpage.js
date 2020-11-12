import React, { Component } from 'react';
import SevenPage from '../../components/MainPage/SevenPage.js';
import { Select, Pagination, Row, Col, Input } from 'antd';
// import './other.less';

export default class sevenpage extends Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    handlePageChange = (value) => {
        console.info(value, 8989);
    }
    dropdownRender=(menuNode) => {
        return(
            <Row gutter={[12, 16]}>
                <Col span={24}>
                    <Input.Search />
                </Col>
                <Col span={24}>
                    {menuNode}
                </Col>
                <Col span={24}>
                    <Pagination size="small" pageSize={10} total={50} onChange={this.handlePageChange} />
                </Col>
            </Row>
        )
    }
    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
        children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
        }
        // children.push(
        //     <Select.Option value='disabled' disabled className={styles.mselect} >
        //         <Pagination size="small" pageSize={10} total={50} onChange={this.handlePageChange} />
        //     </Select.Option>
        // )
        return (
            <div>
                <SevenPage />
                <hr/>
                {/* <Select
                    mode="multiple"
                    style={{ width: '50%' }}
                    allowClear
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={this.handleChange}
                    open
                    dropdownRender={(menuNode, props) => this.dropdownRender(menuNode, props)}
                >
                    {children}
                </Select> */}
                <div className="mDiv">2332323</div>
            </div>
        )
    }
}
