import { message, Button, Input, Form, InputNumber } from 'antd';
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
                layout="vertical" 
            >
                <Form.Item
                    className={styles.input}
                    name="name"
                    label="نام"
                    rules={[{ required: true, message: 'لطفا نام را وارد کنید' }]}
                >
                    <Input
                        placeholder="لطفا نام را وارد کنید" />
                </Form.Item>
                <Form.Item
                    name="month"
                   label="ماه تولد"
                    rules={[{ type: 'number', min: 1,
                     max: 12 ,required: true,
                     message: 'لطفا ماه را وارد کنید' 

                    }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="day"
                   label=" روز تولد"
                    rules={[{ type: 'number', min: 1,
                     max: 31 ,required: true,
                     message: 'لطفا روز را وارد کنید' 

                    }]}
                >
                    <InputNumber />
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

