import { Avatar } from 'antd'
import React from 'react'
import styles from "../../../styles/Items.module.css"
export default function Items() {
    return (
        <div className={styles.contain}>
            <Avatar size={50} src={'https://www.next.co.uk/nxtcms/resource/image/4027550/portrait_ratio4x5/320/400/d4246ca2ae19d00c51b1b61083bce176/RJ/label-mix.jpg'} />
            <div className={styles.info}>
                <p className={styles.name}> سینا محمدی</p>
                <p className={styles.counter}> 50روز مانده</p>
            </div>
        </div>
    )
}
