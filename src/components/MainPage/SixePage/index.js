import React, { Component } from 'react';
import { Alert, Icon, Row, Col, Upload, Button, message } from 'antd';
import datas from './datas';
import myfunction from './myfunction';

// const data = [{'tom': 13, 'age':13},{'tom': 12, 'age':13},{'tom': 14, 'age':13}];
const { records } = datas;
const idDatas = [];
export default class sixePage extends Component {
    state={
        fileList: [],
    }

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

    handleChange = (info) => {
        console.info(info, 999)
        const { file: { type = '' } } = info;
        if(type === 'application/x-zip-compressed'){
            console.info('中断！');
            return false;
        }
        console.info('type:', type)
    }
    hendleBeforeUpload = (file) => {
        console.info(file, 999)
        const { type = '', size = 0 } = file;
        if(type === 'application/x-zip-compressed'){
            console.info('中断！');
            message.warn('不支持上传zip格式文件！')
            return false;
        }else if(size > 20000){
            message.warn('不能大于20000kb');
            return false;
        }
        this.setState({
            fileList: [file]
        })
    
        return true;
    }

    onRemove = (file) => {
        console.info(file, 8888);
        const { uid = '' } = file;
        const newArr = this.state.fileList.filter(i => i.uid !== uid);
        console.info('newArr:', newArr)
        this.setState({
            fileList: newArr,
        })
    }
    render() {

        const parentData = this.handleDatas(records);
        
        
        const normalData = [] // 普通数据
         records.forEach(item => {
            if(idDatas.indexOf(item.id) < 0){
                normalData.push(item);
            }
         })
        
        // const params = myfunction(4,98);

        const upLoadProps = {
            showUploadList: true,
            // accept: '.zip, .rar, .7z',
            // fileList: tempFileList,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            fileList: this.state.fileList,
            // onChange: this.handleChange,
            beforeUpload: this.hendleBeforeUpload,
            onRemove: this.onRemove,
          };
        
        return (
            <div>
                {
                    parentData.map(item => {
                        const { id, name, child } = item;
                        return(
                            <div key={id} style={{ width: '100%' }}>
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


                <br />
                <hr />
                <div style={{ width: '600px' }}>
                    <h3>针对排除ZIP格式的文件上传</h3>
                    <Upload {...upLoadProps}>
                        <Button>
                            <Icon type="upload" /> 点击上传附件
                        </Button>
                    </Upload>
                </div>
                
                <br />

                <br />

            </div>
        )
    }
}
