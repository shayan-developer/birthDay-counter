import React from 'react'
import moment from 'jalali-moment'
export default function Counter({ day, month }) {
    const currentTime = parseInt(moment().locale('fa').format("DDD"));
    const userMonth = parseInt(month)
    const currentMonth = parseInt(moment().locale('fa').format("MM"))
    const currentYear = parseInt(moment().locale('fa').format("YYYY"))
    const check = () => {
        if (userMonth < currentMonth) {
            const daysFromNew = parseInt(moment(`${currentYear + 1}/${month}/${day}`, 'YYYY/M/D').format("DDD"));
            const daysfromLast = 365 - currentTime;
            const sumDays = daysFromNew + daysfromLast
            return sumDays
        }
        else {
            const userTime =parseInt(moment(`${currentYear}/${month}/${day}`, 'YYYY/M/D').format("DDD"));
            const sum=userTime-currentTime
            return sum
        }
    }
    return (
            <>
                {check()}  روز تا تولد
            </>
    )
}
