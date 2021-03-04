import { Graph, Node } from '@antv/x6';

class Rect extends Node { 
    // 省略实现细节 
}

Rect.config({
    width: 100,
    height: 40,
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        fill: '#ffffff',
        stroke: '#333333',
        strokeWidth: 2,
      },
      label: {
        fontSize: 14,
        fill: '#333333',
        refX: '50%',
        refY: '50%',
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
      },
    },
    // 通过钩子将自定义选项 label 应用到 'attrs/text/text' 属性上
    // propHooks(metadata) {
    //   const { label, ...others } = metadata
    //   if (label) {
    //     ObjectExt.setByPath(others, 'attrs/text/text', label)
    //   }
    //   return others
    // },
  })

  Graph.registerNode('m-rect', Rect)