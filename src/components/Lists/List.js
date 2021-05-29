import React, { useEffect,useCallback} from 'react'
import Add from '../Add/Add'
import Items from './Items/Items'
import styles from "../../styles/List.module.css"
import { useEasybase } from 'easybase-react'
import { Spin } from 'antd'
import {useDispatch,useSelector} from "react-redux"
import { checkCount,getpeople } from '../../redux/actions/action'
export default function List() {
    const {count,data}=useSelector(state=>state);
    const dispatch=useDispatch()
    const {
        db
    } = useEasybase()
    const getdata=useCallback(async()=>{
        const all= await db().return().all();
            const num=all.length;
            dispatch(checkCount(num));
            dispatch(getpeople(all));
    },[db,dispatch])
    useEffect(()=>{
            getdata()
    },[getdata])
    return (
        < >
            <p className={styles.text}>{count} تولد در پیش رو</p>
            <div className={styles.contain}>
                {!count? <span className={styles.spin}><Spin size='large' /></span> :
                    data.map((el, i) => <Items {...el} index={i} key={i} />)}
            </div>
            <Add />
        </>
    )
}
