import { Row, Col } from 'antd'
import { useEasybase } from 'easybase-react'
import React, { useEffect } from 'react'
import styles from "../styles/Birthday.module.css"
import List from './Lists/List'
export default function Birthday() {
    const { configureFrame,
        Frame,
        sync,
    } = useEasybase()

    useEffect( () => {
        configureFrame({tableName: "BIRTHDAY" ,limit:10});
        sync()
    },[])
   
    return (
        <main>
            {}
            <Row justify="center">
                <Col xs={18} md={20}>
                    <div className={styles.container}>
                        
                        <List />
                    </div>
                </Col>
            </Row>
        </main>
    )
}
