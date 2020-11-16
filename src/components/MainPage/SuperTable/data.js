
const renderTable = {
    renderColumns(columnsNum = 10, dataNum = 10){
    const columns = [];
    const dataSource = [];
    let itemObj = {};

    for(let i = 0; i < columnsNum; i ++){
        columns.push({
            title: `title_key${i}`,
            dataIndex: `key${i}`,
            key: `key${i}`,
            fixed: i === 0 ? 'left' : '',
        })
    }
    
    for(let i = 0; i < dataNum; i++){
        for(let j = 0; j < columnsNum; j++){
            itemObj[`key${j}`] = `dKey${i}_cKey${j}`;
            dataSource.push(itemObj)
        }
    }
    return {columns, dataSource};
   },
} 

export default renderTable;