import { Avatar} from 'antd'
import styles from "../../../styles/Items.module.css"
import Counter from '../../Counter/Counter'
import {  HeartTwoTone } from '@ant-design/icons';
export default function Items({ name, month, day, index }) {
    return (
        <div className={styles.contain} >
            <Avatar size={{xs:40,sm:60,md:60,lg:70 ,xl:70 ,xxl:75}}
            icon={< HeartTwoTone twoToneColor="#511281"  />} 
            alt={name}
            />
            <div className={styles.info}>
                <p className={styles.name}> {name}</p>
                <div className={styles.counter}> <Counter day={day} month={month}/></div>
            </div>
        </div>
    )
}
