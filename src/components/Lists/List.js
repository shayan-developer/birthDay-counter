import React from 'react'
import Add from '../Add/Add'
import Items from './Items/Items'
import styles from "../../styles/List.module.css"
import {useSelector}from "react-redux"
export default function List() {
    const {person} =useSelector(state=>state) ;
    return (
        < >
            <div>
            <p className={styles.text}>{person.length} تولد در پیش رو</p>
                <Items />
            </div>

            <Add />
        </>
    )
}
