import React, { useEffect } from 'react'
import Add from '../Add/Add'
import Items from './Items/Items'
import styles from "../../styles/List.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useEasybase } from 'easybase-react'
import { Spin } from 'antd'
import { getBirth } from '../../redux/actions/action'

export default function List() {
    const dipatch =useDispatch()
    const {loading}=useSelector(state=>state)
    const { configureFrame,
        Frame,
        sync,
    } = useEasybase()
  useEffect(()=>{
      dipatch(getBirth())
  },[])
    console.log(loading);
    return (
        < >
            <div>
                <p className={styles.text}>{Frame().length} تولد در پیش رو</p>
                {loading?<span className={styles.spin}><Spin size='large' /></span>:Frame().map((el,i)=> <Items {...el} index={i}/>)}
            </div>

            <Add />
        </>
    )
}
