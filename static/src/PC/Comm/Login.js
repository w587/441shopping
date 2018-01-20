import React from 'react';

import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component{
 

  constructor(){
    super();
    this. state = {
      confirmDirty: false,
      autoCompleteResult: [],
      disab:true
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var data=JSON.stringify(values)
        fetch(`http://127.0.0.1:3000/PC/Login?data=${data}`).then((response)=>{
          return response.json();
        }).then((data)=>{
           if (data.state==1) {
            message.success('登录成功',3);
            this.props.onOk();
          }else{
            message.error('登录失败：帐号或密码有误',3);
          }
        })
      }
    });
  }


	render(){
    

   const { getFieldDecorator } = this.props.form;
   
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

 
		
    return (
        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入您的邮箱或昵称!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱/昵称" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            )}
          </FormItem>

          <FormItem>
            <a className="login-form-forgot" href="">忘记密码?</a>
            <Button style={{cssFloat:'right'}} type="primary" htmlType="submit" className="login-form-button">
             登录
            </Button>
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
Login = Form.create()(Login);
module.exports = Login