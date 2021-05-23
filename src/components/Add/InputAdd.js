import { Upload, message, Button, Input, InputNumber, Form } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import styles from "../../styles/Inputs.module.css"
import { useEasybase } from 'easybase-react';
import { checkmodal } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';
export default function InputAdd() {
    const dispatch=useDispatch()
    const {
        Frame,
        sync
    } = useEasybase()
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    const onFinish = (values) => {
        const { name, month, day, upload } = values;
        Frame().unshift({ name: name, month: month, day: day, photo: upload })
        sync()
        console.log('Received values of form: ', values);
        message.success('با موفقیت اضافه شد ');
        dispatch(checkmodal(false))

    };
    return (
        <>

            <Form
                name="normal_login"
                className={styles.form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    className={styles.input}
                    name="name"
                    rules={[{ required: true, message: 'لطفا نام را وارد کنید' }]}
                >
                    <Input
                        placeholder="لطفا نام را وارد کنید" />
                </Form.Item>
                <Form.Item
                    className={styles.input}
                    name="month"
                    rules={[{ required: true, message: "لطفا ماه تولد را وارد کنید " }]}
                >
                    <Input
                        placeholder="لطفا ماه تولد را وارد کنید " />
                </Form.Item>
                <Form.Item
                    className={styles.input}
                    name="day"
                    rules={[{ required: true, message: "لطفا روز تولد را وارد کنید" }]}
                >
                    <Input
                        placeholder="لطفا روز تولد را وارد کنید" />
                </Form.Item>
                <Form.Item
                    name="upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="https://app.easybase.io/" listType="picture">
                        <Button icon={<UploadOutlined />}> برای انتخاب عکس کلیک کنید </Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className={styles.login}>
                        اضافه کردن
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

