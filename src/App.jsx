import React, { useEffect, useState } from 'react'
import { TVShowAPI } from './api/tv-show'
import "./global.css"
import s from './style.module.css'
import { BACKDROP_BASE_URL } from './config'
import TVShowDetail from './components/TVShowDetail/TVShowDetail'
import Logo from './components/logo/Logo'
import logo from './assets/images/logo.png'

import TVShowList from './components/TVShowList/TVShowList'
import SearchBar from './components/searchBar/SearchBar'

const App = () => {
    const [currentTVShow,setCurrentTVShow] = useState();
    const [recommendations,setRecommendations] = useState([]);
     const fetchMovies = async ()=>{
      try {
        const populars = await TVShowAPI.fetchPopulars();
       
        if(populars.length >0){
            setCurrentTVShow(populars[0]);
        }
      } catch (error) {
        alert("Error during fetch request"+ error.message)
      }
       
     }
     const fetchRecommendations = async(tvShowId)=>{

      try {
        const recommendations = await TVShowAPI.fetchRecommendations(tvShowId)
        if(recommendations.length > 0){
          setRecommendations(recommendations.slice(0,10))
        }
      } catch (error) {
        alert("Error during recommendations request"+ error.message)
      }
        
     }
     const searchTVShow = async (tvShowName)=>{

      try {
        const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
       if(searchResponse.length > 0)
       setCurrentTVShow(searchResponse[0])
      } catch (error) {
        alert("Error during the request search "+ error.message)
      }
       
     }
   
    useEffect( ()=>{
        fetchMovies()
    },[])

    useEffect(()=>{
      if(currentTVShow){
        fetchRecommendations(currentTVShow.id)
      }
    },[currentTVShow])
  return (
    <div 
     style={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`:"black"}}
    className={s.main_container}
    >
       <div className={s.header}>
         <div className="row">
            <div className="col-4">
                <Logo title="Watowatch" subtitle="Find a show you may like" image ={logo}/>
                
            </div>
            <div className='col-sm-12 col-md-4'>
              
              <SearchBar onSubmit={searchTVShow}/>
                
            </div>
         </div>
      </div>
       <div className={s.tv_show_detail}>{ currentTVShow && <TVShowDetail currentTVShow={currentTVShow}/>}</div> 
       <div className={s.recommendations}>
           {recommendations && recommendations.length> 0 && ( <TVShowList recommendations={recommendations} onClickItem={setCurrentTVShow}/>)}
       </div>
    </div>
      
   
  )
}

export default App