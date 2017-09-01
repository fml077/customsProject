
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { Link } from 'react-router';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem className='width80'>
            <Input prefix={<Icon type="user" style={{ fontSize: 15, color: '#08c' }} />} placeholder="账号" />
        </FormItem>
        <FormItem className='width80'>
            <Input prefix={<Icon type="lock" style={{ fontSize: 15, color: '#08c' }} />} type="password" placeholder="密码" />
        </FormItem>
        <FormItem className='loginAlignLeft'>
          <div>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className='alignLeft;'>记住密码</Checkbox>
            )}
            <a className="login-form-forgot alignLeft" href="">忘记密码</a>
          </div>
          <div>
	          <Button type="primary" htmlType="submit" className="login-form-button">
	            <Link to='/'>登录</Link>
	          </Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;