import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import styles from './index.less';

export default class TimeLine extends Component {
    
    /** 数字在下模块 */
    rbm=(type, value)=>{
        return(
            <div className={styles.timeLineItemBottom}>
                <div className={type===1? styles.bagRed: null}>{value}</div>
            </div>
        )
    }
    /** 数字在上模块 */
    rtm=(type, value)=>{
        return(
            <div className={styles.timeLineItemTop}>
                <div className={type===1?styles.bagRed : null}>{value}</div>
            </div>
        )
    }

    getNewArray = (arr, size)=>{ // size = 3
        const arrNum = Math.ceil(arr.length/size, 10); // 4
        let index = 0; // 初始
        let resIndex = 0;
        const result = [];
        while(index< arrNum){
            result[index]= arr.slice(resIndex,size+resIndex);
            resIndex += size;
            index++;
        }
        return result;
    }


    render() {
        const arr = [{key:13,name: 'test3'},{key:42,name: 'test4'},{key:15,name: 'test5'},{key:16,name: 'test6'},{key:7,name: 'test7'}];
        
        // const newArr=[
        //     [{key:1,name: 'test1'},{key:2,name: 'test2'},{key:3,name: 'test3'}],
        //     [{key:4,name: 'test4'},{key:5,name: 'test5'},{key:6,name: 'test6'}],
        //     [{key:7,name: 'test7'},{key:8,name: 'test8'},{key:9,name: 'test9'}],
        //     [{key:10,name: 'test0'}],
        // ]
        const storted = arr.sort((a, b) => a.key - b.key);
        console.info('storted:', storted);
        
        const newArr = this.getNewArray(arr, 3);
        console.info('arr2:', newArr);
        // const time = (new Date()).getTime();
        // const time1 = '20200103';
        // const time11 = '20201103';
        // const rq = moment(Number(time)).format('YYYY-MM-DD');
        // const rq2 = moment(time1).format('YYYY-MM-DD');
        return (
            <React.Fragment>
                <div style={{padding:'100px'}}>
                    {/* {rq}{rq2}
                    <br />
                    {moment(time11).format('YYYY-MM-DD')} */}
                {
                    newArr.map((item,index)=>{
                        if(index%2===0){
                            return(
                                <div className={styles.zxl}>
                                    {
                                    item.map((ele, eleIndex)=>{
                                        if(eleIndex%2===0){
                                            return this.rbm(1,ele.name)
                                        }
                                        return this.rtm(1,ele.name)
                                    })
                                    }
                                    {(index + 1)!==newArr.length &&<div className={styles.rightRadius} />}
                                </div>
                            )
                        }
                        return(
                            <div className={styles.dxl}>
                                {item.map((ele, eleIndex)=>{
                                    if(eleIndex%2===0){
                                        return this.rbm(1,ele.name)
                                    }
                                    return this.rtm(1,ele.name)
                                })}
                                {(index + 1)!==newArr.length &&<div className={styles.leftRadius} />}
                            </div>
                        )
                    })
                }
                </div>
            </React.Fragment>
        )
    }
}
