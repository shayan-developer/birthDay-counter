import { Row, Col } from 'antd'
import React from 'react'
import styles from "../styles/Birthday.module.css"
import List from './Lists/List'
export default function Birthday() {
    return (
        <main>
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
