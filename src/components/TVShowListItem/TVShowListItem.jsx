import React from 'react'
import { SMALL_IMG_COVER_BASE_URL } from '../../config'
import s from './style.module.css'
const TVShowListItem = ({recom,onClickItem}) => {
  return (
    
    <div className={s.container} onClick={()=>onClickItem(recom)}>
        <img src={SMALL_IMG_COVER_BASE_URL+recom.backdrop_path} alt={recom.name} className={s.img}/>
        <div className={s.title}>{recom.name}</div>

    </div>
  )
}

export default TVShowListItem