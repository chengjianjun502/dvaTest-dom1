import React, { Component } from 'react';
import { Tree, Input } from 'antd';
import Treedata from './Treedata';
import styles from './tree.less';
const { Search } = Input;
const { TreeNode } = Tree;

const { records= []} = Treedata;
const dataList = [];

export default class TreeComponents extends Component {

    state={
        searchValue: '',
        records,
        autoExpandParent: false,
        selectedKeys: [],
        expandedKeys: [],
    }

    componentDidMount(){
        this.generateList(records);
        this.test();
        // console.info(dataList, 4545);
    }
    onSelect = (selectedKeys, info) => {
        const { title: name = '' } = info.node.props;
        console.log("selected", selectedKeys);
        this.setState({
            selectedKeys,
        })
      };

    onExpand = expandedKeys => {
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
      };
    renderTitle=(searchValue, title)=>{
        debugger;
        const index = title.indexOf(searchValue);
        const beforeStr = title.substr(0, index);
        const afterStr = title.substr(index + searchValue.length);
        const mtitle =
          (index > -1) ? (
            <span>
              {beforeStr}
              <span style={{ color: '#f50' }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{title}</span>
          );
        return mtitle;
    }

    generateList = (data) => {
        data.forEach(item => {
            const { value, name, child = [] } = item;
            dataList.push({key: value, title: name});
            if(child.length > 0){
                this.generateList(child);
            }
        });
    };

    getParentKey = (key, tree) => {
        let parentKey;
        tree.forEach(item => {
            const { value, child = [] } = item;
            if(child.length > 0){
                if(child.some(ele => ele.value === key)){
                    parentKey = value;
                } else if(this.getParentKey(key, child)){
                    parentKey = this.getParentKey(key, child);
                }
            }
        })
        return parentKey;
      };
    onChange = e => {
        debugger;
        const { value } = e.target;
        const datas = dataList;
        console.info(datas, 11);
        const expandedKeys = datas.map(item => {
            if (item.title.indexOf(value) > -1) {
              return this.getParentKey(item.key, records);
            }
            return null;
          })
          .filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
          expandedKeys,
          searchValue: value,
          autoExpandParent: true,
        });
      };


// 把新数组和就数组中不同的元素取出来
    test=()=>{
        const oldarr = [1,2,13,14,15];
        // const newArr = [1,2,14];
        const newArr = [1,2,14,13,15,17];

        const data = [];
        newArr.forEach(item => {
            if(!oldarr.includes(item)){
                data.push(item)
            }
        })
        oldarr.forEach(item => {
            if(!newArr.includes(item)){
                data.push(item)
            }
        })
        console.info('data:', data);
    }  

    render() {
        const { searchValue, records, autoExpandParent, selectedKeys, expandedKeys } = this.state;
        const renderTreeNode = (data, searchValue = '') => {
            return(
                data.map(item => {
                    const { type } = item;
                    const title = this.renderTitle(searchValue,item.name);
                    if (item.child.length > 0){
                        return (
                            <TreeNode selectable={type === '3' ? true: false} key={item.value} title={title} className={ type === '3' ? styles.tree : ''}>
                                {renderTreeNode(item.child, searchValue)}
                            </TreeNode>)
                    } else {
                        return <TreeNode selectable={type === '3' ? true: false} key={item.value} title={title} className={ type === '3' ? styles.tree : ''} />
                    }
                })
            )
        }
        return (
            <div>
                <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
                <Tree
                    onSelect={this.onSelect}
                    multiple={true}
                    blockNode={true}
                    className={styles.treeUl}
                    autoExpandParent={autoExpandParent}
                    selectedKeys={selectedKeys}
                    expandedKeys={expandedKeys}
                    onExpand={this.onExpand}
                >
                    {renderTreeNode(records, searchValue)}
                </Tree>
            </div>
        )
    }
}
