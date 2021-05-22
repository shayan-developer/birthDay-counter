import { Avatar, Spin } from 'antd'
import React, { useEffect } from 'react'
import styles from "../../../styles/Items.module.css"
export default function Items({name ,photo,month ,day,index}) {
    return (
                <div className={styles.contain} key={index}>
                <Avatar size={55} src={photo} />
                <div className={styles.info}>
                    <p className={styles.name}> {name}</p>
                    <p className={styles.counter}> {month} روز مانده</p>
                </div>
                </div>
    )
}
// 