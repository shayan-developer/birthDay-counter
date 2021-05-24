import { Avatar} from 'antd'
import styles from "../../../styles/Items.module.css"
import Counter from '../../Counter/Counter'
import { UserOutlined } from '@ant-design/icons';
export default function Items({ name, photo, month, day, index }) {
    return (
        <div className={styles.contain} >
            <Avatar size={{xs:40,sm:60,md:60,lg:70 ,xl:70 ,xxl:75}}
            icon={<UserOutlined />} 
            src={photo} 
            alt={name}
            />

            <div className={styles.info}>
                <p className={styles.name}> {name}</p>
                <div className={styles.counter}> <Counter day={day} month={month}/></div>
            </div>
        </div>
    )
}
