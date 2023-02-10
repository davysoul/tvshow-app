import React from 'react'
import FiveStarRating from '../fiveStarRating/FiveStarRating'
import s from './style.module.css'
const TVShowDetail = ({currentTVShow}) => {
  const rating = currentTVShow.vote_average/2
  return (
    <div>
        <div className={s.title}>{currentTVShow.name}</div>
        <div className={s.rating_container}>
          <FiveStarRating rating={rating}/>
          <div className={s.rating}>{rating}</div>
        </div>
       
        <div className={s.overview}>{currentTVShow.overview}</div>
    </div>
  )
}

export default TVShowDetail