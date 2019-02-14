import React from 'react'
// import './backgroundIndex.less'
import {
    Form, Input, Row, Col, Button,
  } from 'antd';
  
  class DeviceForm extends React.Component {
    state = {
      confirmDirty: false
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            {...formItemLayout}
            label="设备id"
          >
            {getFieldDecorator('deviceId', {
              rules: [{
                required: true, message: '请输入设备id',
              }],
            })(
              <Input maxLength='50' />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="设备名称"
          >
            {getFieldDecorator('deviceId', {
              rules: [{
                required: true, message: '请输入设备名称',
              }],
            })(
              <Input maxLength='50' />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">确认添加</Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
 
const Device = Form.create({ name: 'add_device' })(DeviceForm);
export default Device