import { Avatar, Button, Tooltip } from 'antd'
import styles from "../../../styles/Items.module.css"
import { DeleteFilled } from '@ant-design/icons';
export default function Items({ name, photo, month, day, index }) {
    return (
        <div className={styles.contain} >
            <Avatar size={55} src={photo} />

            <div className={styles.info}>
                <p className={styles.name}> {name}</p>
                <p className={styles.counter}> {month} روز مانده</p>
            </div>
        </div>
    )
}
