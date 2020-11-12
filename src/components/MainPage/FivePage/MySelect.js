import React, { Component } from 'react';
import { Form, Select, message, Button} from 'antd';

class MySelect extends Component {
    state={
        value: ['eg', 'fg'],
    }
    accountTypeChange=(value)=>{
        this.setState({
            value,
        })
    }

    hendleSubmit=()=>{
        console.info('111:',this.props.form.isFieldTouched('gj'));
        
        message.info('ok!!!!!!!!!');
    }

    handleClick=(key)=>{
        const { value = [] } = this.state;
        value.push(key);
        // this.setState({
        //     value: Array.from(new Set(value)),
        // })
        this.state.value = Array.from(new Set(value));

        this.props.form.setFieldsValue({
            gj: Array.from(new Set(value)),
        })
    }
    render() {
        const { value = [] } = this.state;
        const { getFieldDecorator, getFieldsValue, getFieldValue, setFieldsValue } = this.props.form;

        return (
            <React.Fragment>
            <div style={{margin: '5rem auto', width: '500px'}}>
                <Form >
                    <Form.Item 
                        label='国家'
                    >
                        {getFieldDecorator('gj',{initialValue:value, rules:[{ required: true, message: '必选!' }]})( // initialValue:value,
                            <Select
                                // value={value} 
                                // onChange={this.accountTypeChange}
                                style={{width: '300px'}}
                                allowClear
                                mode="multiple"
                                dropdownMatchSelectWidth={false}
                            >
                                <Select.Option value='zg' key='zg'>中国</Select.Option>
                                <Select.Option value='mg' key='mg'>美国</Select.Option>
                                <Select.Option value='eg' key='eg'>e国</Select.Option>
                                <Select.Option value='fg' key='fg'>f国</Select.Option>
                            </Select>
                        )}
                    </Form.Item>
                </Form>
                <Button onClick={() => this.handleClick('zg')}>中国</Button>
                <Button onClick={() => this.handleClick('mg')}>美国</Button>
                <Button onClick={() => this.handleClick('eg')}>e国</Button>
                <Button onClick={() => this.handleClick('fg')}>f国</Button>
                <Button onClick={this.hendleSubmit}>提交</Button>
            </div>
            <hr/>
            <div>
                <Select
                    value={value} 
                    onChange={this.accountTypeChange}
                    style={{width: '300px'}}
                    allowClear
                    mode="multiple"
                    dropdownMatchSelectWidth={false}
                >
                    <Select.Option value='zg' key='zg'>中国</Select.Option>
                    <Select.Option value='mg' key='mg'>美国</Select.Option>
                    <Select.Option value='eg' key='eg'>e国</Select.Option>
                    <Select.Option value='fg' key='fg'>f国</Select.Option>
                </Select>
            </div>
            </React.Fragment>
            
        )
    }
}
export default Form.create()(MySelect);