import { Avatar, Spin } from 'antd'
import React, { useEffect } from 'react'
import styles from "../../../styles/Items.module.css"
import {useSelector,useDispatch}from "react-redux"
import { getBirth } from '../../../redux/actions/action';
export default function Items() {
    const {person,loading} = useSelector(state=>state);
    const dispath=useDispatch()
    useEffect(() => {
        dispath(getBirth())
    }, [])
    return (
        <>
        {loading ?<span className={styles.spin}><Spin size='large' /></span> : person.map((per,index)=>{
                return<div className={styles.contain} key={index}>
                <Avatar size={55} src={per.photo} />
                <div className={styles.info}>
                    <p className={styles.name}> {per.name}</p>
                    <p className={styles.counter}> {per.month}روز مانده</p>
                </div>
                </div>
                
            })}
        </>
    )
}
