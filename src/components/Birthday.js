import { Row, Col } from 'antd'
import { useEasybase } from 'easybase-react'
import React, { useEffect } from 'react'
import styles from "../styles/Birthday.module.css"
import List from './Lists/List'
export default function Birthday() {
    const { configureFrame,
        sync,
    } = useEasybase()

    useEffect( () => {
        configureFrame({tableName: "BIRTHDAY" ,limit:100});
        sync()
    })
   
    return (
        <main>
            <Row justify="center">
                <Col xs={18} md={14}>
                    <div className={styles.container}>
                        
                        <List />
                    </div>
                </Col>
            </Row>
        </main>
    )
}
