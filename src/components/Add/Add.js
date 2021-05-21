import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import styles from "../../styles/Add.module.css"
import InputAdd from './InputAdd';
export default function Add() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button className={styles.btn} onClick={showModal}>
                تولد
      </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <InputAdd/>
            </Modal>
        </>
    )
}
