import React from 'react'
import { Modal, Button } from 'antd';
import styles from "../../styles/Add.module.css"
import InputAdd from './InputAdd';
import { useDispatch, useSelector } from 'react-redux';
import { checkmodal } from '../../redux/actions/action';
export default function Add() {
const {modal}=useSelector(state=>state) 
const dispatch=useDispatch()
    const showModal = () => {
    dispatch(checkmodal(true))
    };

    const handleOk = () => {
        dispatch(checkmodal(false))

    };

    const handleCancel = () => {
        dispatch(checkmodal(false))

    };

    return (
        <>
            <Button className={styles.btn} onClick={showModal}>
                اضافه کردن
      </Button>
            <Modal title={<p style={{fontFamily:"sahel"}}>اضافه کردن تولد </p>} visible={modal} onOk={handleOk} onCancel={handleCancel}>
                <InputAdd/>
            </Modal>
        </>
    )
}
