import React, { useEffect} from 'react'
import Add from '../Add/Add'
import Items from './Items/Items'
import styles from "../../styles/List.module.css"
import { useEasybase } from 'easybase-react'
import { Spin } from 'antd'
import {useDispatch,useSelector} from "react-redux"
import { checkCount } from '../../redux/actions/action'
export default function List() {
    const {count}=useSelector(state=>state);
    const dispatch=useDispatch()
    const {
        Frame,
        db
    } = useEasybase()
    useEffect(()=>{
        async function getdata(){
            const all= await db().return().all();
            const num=all.length
            dispatch(checkCount(num))}
            getdata()
    },[db])
    
    return (
        < >
            <p className={styles.text}>{count} تولد در پیش رو</p>
            <div className={styles.contain}>
                {!count? <span className={styles.spin}><Spin size='large' /></span> :
                    Frame().map((el, i) => <Items {...el} index={i} key={i} />)}
            </div>
            <Add />
        </>
    )
}
