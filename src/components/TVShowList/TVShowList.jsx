import React from 'react'
import TVShowListItem from '../TVShowListItem/TVShowListItem'
import s from './style.module.css'
const TVShowList = ({recommendations,onClickItem}) => {
  return (
    <>
        <div className={s.title}>You may also like</div>
        <div className={s.list}>
            {
                recommendations &&
                recommendations.map((recom) =>(
                 <span className={s.tv_show_list_item} key={recom.id}>  
                 <TVShowListItem recom ={recom} onClickItem={onClickItem} />
                 </span> 
                ))
            }
        </div> 
    </>
  )
}

export default TVShowList