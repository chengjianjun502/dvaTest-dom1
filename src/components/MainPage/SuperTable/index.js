import { Table } from 'antd';
import React, { Component } from 'react';
import renderTable from './data';
// console.info(renderColumns, 999)

export default class index extends Component {
    render() {
        const {columns, dataSource} = renderTable.renderColumns(20, 20);
        console.info('dataSource:', dataSource)
        const tableProps = {
            columns,
            dataSource,
            pagination:{
                pageSize: 20,
            },
            scroll:{ x: 'max-content' }
        }
        return (
            <div>
                <Table {...tableProps} />
            </div>
        )
    }
}
