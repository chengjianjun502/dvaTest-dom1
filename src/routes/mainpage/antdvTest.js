import React, { useEffect } from 'react';
import { Graph, Node } from '@antv/x6';
import styles from './antdvTest.less';
import datas from '../../components/MainPage/AntdvTest/datas';

const { jsonData } = datas;


export default function antdvTest() {
      useEffect(() => {
        const graph = new Graph({
            container: document.getElementById('container'),
            width: 800,
            height: 600,
            background: {
                color: '#F7F7FA', // 设置画布背景颜色
            },
            // grid: {
            // size: 10,      // 网格大小 10px
            // visible: true, // 渲染网格背景
            // },
          });
        graph.fromJSON(jsonData);
        // graph.zoom(-0.5);
        // graph.translate(80, 40);
      }, [])

      
    // class Rect extends Node { 
    //     // 省略实现细节
    //     RedRect = Rect.config({
    //         width: 100,
    //         height: 40,
    //         markup: [
    //         {
    //             tagName: 'rect',
    //             selector: 'body',
    //         },
    //         {
    //             tagName: 'text',
    //             selector: 'label',
    //         },
    //         ],
    //         attrs: {
    //         body: {
    //             fill: '#ffffff',
    //             stroke: '#333333',
    //             strokeWidth: 2,
    //         },
    //         label: {
    //             fontSize: 14,
    //             fill: '#333333',
    //             refX: '50%',
    //             refY: '50%',
    //             textAnchor: 'middle',
    //             textVerticalAnchor: 'middle',
    //         },
    //         },
    //         // 通过钩子将自定义选项 label 应用到 'attrs/text/text' 属性上
    //         // propHooks(metadata) {
    //         //     const { label, ...others } = metadata
    //         //     if (label) {
    //         //     ObjectExt.setByPath(others, 'attrs/text/text', label)
    //         //     }
    //         //     return others
    //         // },
    //     });
    // }
    
    // Graph.registerNode('rect', Rect)

    return (
        <div className={styles["app"]}>
            <div id="container" className={styles["app-content"]}></div>
        </div>
    )
}
