import React from 'react'
export default ({Img,Sex,Model,Price}) => {
    return(
<div className='box'>
        <img src={Img} className="pic"/>
        <div data-name={Model}>{Model}</div>
        <div className={Sex}>{Sex}</div>
        <div className='cost' data-value-price={Price}>Price</div>
</div>
    )
}