import React, { } from 'react'
import Add from '../Add/Add'
import Items from './Items/Items'
import styles from "../../styles/List.module.css"
import { useEasybase } from 'easybase-react'
import { Spin } from 'antd'

export default function List() {
    const {
        Frame
    } = useEasybase()
    return (
        < >
            <p className={styles.text}>{Frame().length} تولد در پیش رو</p>
            <div className={styles.contain}>
                {!Frame().length ? <span className={styles.spin}><Spin size='large' /></span> :
                    Frame().map((el, i) => <Items {...el} index={i} key={i} />)}
            </div>
            <Add />
        </>
    )
}
