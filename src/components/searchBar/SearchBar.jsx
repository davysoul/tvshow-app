import React from 'react'
import { Search as SearchIcon } from 'react-bootstrap-icons'
import s from './style.module.css'
const SearchBar = ({onSubmit}) => {
    const submit = (e)=>{
      if(e.key === "Enter" && e.target.value.trim() !== ""){
        onSubmit(e.target.value);
      }
    }
  return (
    <>
       <SearchIcon size={27} className={s.icon}/>
       <input 
         type="text"
         placeholder="Search a  tv show  do you like"
         className={s.input} onKeyUp={submit}/>
    </>
  )
}

export default SearchBar