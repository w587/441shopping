import React from 'react';

import { Form, 
  Input, 
  Tooltip, 
  Icon, 
  Cascader, 
  Select, 
  Row, 
  Col, 
  Checkbox, 
  Button, 
  AutoComplete,
  message} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class Regist extends React.Component{
 

  constructor(){
    super();
    this. state = {
      confirmDirty: false,
      autoCompleteResult: [],
      disab:true
    };
  }

  // 填写完毕，提交表单
  handleSubmit(e){

    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var data=JSON.stringify(values);
        fetch(`http://127.0.0.1:3000/PC/regist?data=${data}`).then((response)=>{
          return response.json();
        }).then((data)=>{
          if (data.state==1) {
            message.success('注册成功',3);
            this.props.onOk();
          }else{
            message.error('注册失败：一个邮箱只能注册一个帐号',3);
          }
          
        })
      }
    })
  }

  // 确认密码
  handleConfirmBlur(e){
    var value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  // 密码不一致提示
  checkPassword (rule, value, callback){
    var form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }


  checkConfirm(rule, value, callback){
    var form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange(value){
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }




	render(){
    

    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
   
      var formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

  var tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

  var prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
  );

  var websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
  ));

  var btn=this.state.disab? <Button disabled type="primary" htmlType="submit">注册</Button>:
                            <Button type="primary" htmlType="submit">注册</Button>
		return (
       <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '输入您的邮箱!',
            }, {
              required: true, message: '邮箱不能为空!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '密码不能为空!',
            }, {
              validator: this.checkConfirm.bind(this),
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次输入密码!',
            }, {
              validator: this.checkPassword.bind(this),
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              昵称&nbsp;
              <Tooltip title="你想要别人怎么称呼你?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="联系电话"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的电话号码' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox onChange={this.boxChange.bind(this)}>我已经阅读<a href="">《用户协议》</a></Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {this.state.disab? <Button disabled type="primary" htmlType="submit">注册</Button>:
                            <Button type="primary" htmlType="submit">注册</Button>}
        </FormItem>
      </Form>
		);

	}
  boxChange(e){
    this.setState({
      disab:!e.target.checked
    })
  }

}
Regist = Form.create()(Regist);
module.exports = Regist