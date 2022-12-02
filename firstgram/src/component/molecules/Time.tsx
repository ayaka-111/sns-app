import React from 'react'

interface Props{
    data:any
}

function Time(props:Props) {
    const timestamp = props.data.toDate()
    const year = timestamp.getFullYear()
    const month = (timestamp.getMonth()+1)
    const day = timestamp.getDate()
    const hour = timestamp.getHours()
    const min = timestamp.getMinutes()
  return (
    <div style={{marginLeft:"auto",fontSize:"16px"}}>
    {year}年{month}月{day}日{hour}:{min}
    </div>
  )
}

export default Time