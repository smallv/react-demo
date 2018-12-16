import React from 'react'
import {makeMap} from '../../../libs/util'
const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const getWeek = makeMap(arr)
const getNowTime = () => {
    let date = new Date()
    let str = `
        ${date.getFullYear()}年
        ${(date.getMonth() + 1 + '').padStart(2, '0')}月
        ${(date.getDate() + '').padStart(2, '0')}日
        ${getWeek(date.getDay())}
        `
    return str
}
const Time = () => {
    return (
        <span>{getNowTime()}</span>
    )
}

export default Time