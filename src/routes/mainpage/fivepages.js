import React, { Component } from 'react';
import { Table, Carousel } from 'antd';
import styles from './other.less';
import FivePage from '../../components/MainPage/FivePage';
import SwitchPages from '../../components/MainPage/FivePage/SwitchPages';
import Donghua from '../../components/MainPage/FivePage/Donghua';
import MySelect from '../../components/MainPage/FivePage/MySelect';
import TreeComponents from '../../components/MainPage/FivePage/TreeComponents';


export default class fivepages extends Component {
    render() {
        const dataSource = [
            {
                name: '张三',
                score: '120,98,105',
                class: 5,
            },{
                name: '李四',
                score: '120',
                class: 5,
            }
        ];
        const columns=[{
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            render: text => text || '--',
        },{
            title: 'score',
            dataIndex: 'score',
            key: 'score',
            ellipsis: true,
            className: styles.m_columns,
            render: (text, rocord) =>{
                const scoreArr = rocord.score.split(',');
                return(
                    <div style={{width: '100%', height: '100%'}}>
                        <Carousel vertical dots={false} autoplay className={styles.m_carousel}>
                            {scoreArr.map(item=>{
                                return <div> {item} </div>
                            })}
                        </Carousel>
                    </div>
                )
            },
        },{
            title: 'class',
            dataIndex: 'class',
            key: 'class',
            render: text => text || '--',
        },{
            title: 'class',
            dataIndex: 'class',
            key: 'class',
            render: text => text || '--',
        },{
            title: 'class',
            dataIndex: 'class',
            key: 'class',
            render: text => text || '--',
        },];
        const scoreArr=[120, 98, 102];
        return (
            <React.Fragment>
                <div style={{display: 'none'}}>
                    <div style={{width: '500px'}}>
                    <Table dataSource={dataSource} columns={columns} />
                    </div>
                    <div style={{width: '5rem', height: '3rem', background: '#eee'}}>
                        <Carousel vertical dots={false} autoplay>
                            {scoreArr.map(item=>{
                                return <div> {item} </div>
                            })}
                        </Carousel>
                    </div>
                    <hr />
                    <FivePage />
                    <hr />
                    <SwitchPages />
                    <Donghua />
                </div>
                <MySelect />
                <hr />
                <TreeComponents />
            </React.Fragment>
            
        )
    }
}
