import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, message } from 'antd';
import FirstPage from '../../components/FirstPage';
import IndexNsss from '../../components/FirstPage/indexN';
// import exportPdf from './exportPdf';
import { jsPDF } from "jspdf";

class index extends Component {
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({
            type: 'firstPage', // 如果在 model 外调用，需要添加 namespace
            payload: {}, // 需要传递的信息
          });
    }
    handleClick = () =>{
        
        // const doc = new jsPDF();
        // const content = document.getElementById('content');
        // // console.log(content, 90)
        // // const specialElementHandlers = {
        // //     '#editor': function(element, renderer){
        // //         return true;
        // //     }
        // // };
        // var filename = 'hello.pdf'; 
        // doc.addHTML(<span>222222222222222222222222222222222222222222</span>, function(){
        //     doc.output("save", filename)
        // })
        message.info('hello')
    }
    render() {
        const data = "{\"8192\":\"【中国稳健前行】从抗疫看中国\n科技制度优势【中国稳健前行】从抗疫看中国科技制度优势中国稳健前行】从抗疫看中\n国科技制度优势中国稳健前行】从抗疫看中国科技制度优势\"}";
        const obj={
            name: 'tom\nTom',
            age: 12,
            lever: 'A',
        }
        const jsonData = JSON.stringify(obj);
        console.info(jsonData, 1111111111111111);


        
        const textss = JSON.stringify(data);
        console.info(textss, 445)

        // const textaa = JSON.parse(data);
        // console.info(textaa, typeof(textaa), 666)

        const { products } = this.props;
        // const text  = '【中国稳健前行】从抗疫看中国↵科技制度优势【中国稳健前行】从抗疫看中国科技制度优势中国稳健前行】从抗疫看中↵国科技制度优势中国稳健前行】从抗疫看中国科技制度优势';
        const txTemp = textss.replace(/\\n/g, '<br />');
        console.info(JSON.parse(txTemp), typeof(JSON.parse(txTemp)), 777)
        console.info(txTemp, JSON.parse(txTemp), 8989)
        
        return (
            <div id="content" style={{width:'500px', margin:'100px auto 0', border:'2px solid #eee'}}>
                123<Button onClick={this.handleClick}>点击</Button>
                <hr/>
                {products}
                <FirstPage />
                <IndexNsss /> 
            </div>
        )
    }
}
export default connect(({ firstPage }) => ({
    products: firstPage,
  }))(index);