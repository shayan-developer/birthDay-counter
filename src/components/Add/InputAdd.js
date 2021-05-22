import { Upload, message, Button, Input, InputNumber, Form } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
export default function InputAdd() {
    const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
      };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="لطفا نام را وارد کنید" />
                </Form.Item>
                    <Form.Item
                        name={'month'}
                        label="ماه تولد "
                        rules={[
                            {
                                type: 'number',
                                min: 1,
                                max: 12,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name={'month'}
                        label="روز تولد "
                        rules={[
                            {
                                type: 'number',
                                min: 1,
                                max: 31,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                <Form.Item
                    name="upload"
                    label="عکس"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

