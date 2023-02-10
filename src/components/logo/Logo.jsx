import React from 'react'
import s from './style.module.css'
const Logo = ({image,title,subtitle}) => {
  return (
    <>
      <div className={s.container}>
        <img src={image} className={s.image} alt=""/>
        <span className={s.title}>{title}</span>
      </div> 
       <span className={s.subtitle}>{subtitle}</span>
    </>
  )
}

export default Logo