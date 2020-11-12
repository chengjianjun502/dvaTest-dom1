import React, { Component } from 'react';
import { Alert, Icon, Row, Col } from 'antd';
import datas from './datas';
import myfunction from './myfunction';

// const data = [{'tom': 13, 'age':13},{'tom': 12, 'age':13},{'tom': 14, 'age':13}];
const { records } = datas;
const idDatas = [];
export default class sixePage extends Component {

    getIddatas =(datas) =>{
        datas.forEach(item => {
            if(item.child && item.child.length > 0){
                this.getIddatas(item.child);
            }
            idDatas.push(item.id);
        })
    }
    handleDatas=(datas)=>{
        const fidArr = [];
        datas.forEach(item => {
            fidArr.push(item.fid);
        })
        const newfidArr = new Set(fidArr); // 去重
        const parentData = []; // 层级数据
        datas.forEach(item => {
            newfidArr.forEach(ele => {
                if(item.id === ele){
                    parentData.push({...item, child: []});
                }
            })
        })
        datas.forEach(item => {
            parentData.forEach(element => {
                if(element.id === item.fid){
                    element.child.push(item);
                }
            })
        })
        this.getIddatas(parentData);
        return parentData;
    }
    rendernode=(ele)=>{
        return(
            <Alert
                type="error"
                message={<span style={{ color: 'red' }}><Icon type="pushpin" /> {ele.name}</span>}
                style={{ marginBottom: '.866rem' }}
            />
        )
    }
    render() {

        const parentData = this.handleDatas(records);
        
        
        const normalData = [] // 普通数据
         records.forEach(item => {
            if(idDatas.indexOf(item.id) < 0){
                normalData.push(item);
            }
         })
        
        const params = myfunction(4,98);
        console.info('params:', params);
        
        
        console.info('normalData:', normalData)

        
        
        return (
            <div>
                {
                    parentData.map(item => {
                        const { id, name, child } = item;
                        return(
                            <div key={id} style={{ width: '100%' }}>
                                {/* <Alert
                                    type="info"
                                    message={<span style={{ color: '#03A9F4' }}><Icon type="pushpin" /> {name}</span>}
                                    style={{ marginBottom: '.866rem' }}
                                /> */}
                                {this.rendernode(item)}
                                {
                                    child.map(ele => {
                                        return (
                                            this.rendernode(ele)
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                {/* <Row>
                    <Col span={12} style={{border: '1px solid #888'}}>
                        <div style={{ height: '300px', width: '100%', background: '#999' }}>123</div>
                    </Col>
                    <Col span={12} style={{border: '1px solid #888'}}>
                        <div style={{ height: '200px', width: '100%', background: '#ccc' }}>456</div>
                    </Col>
                </Row> */}
            </div>
        )
    }
}
