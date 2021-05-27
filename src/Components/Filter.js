import React from 'react'
import Star from './Star'
const Filter = ({setSearch,handlechange}) => {

    return (
        <div className="filter">
            <input className="byn" type="text"placeholder="Search By Name " 
            onChange= {(e)=>setSearch(e.target.value)} />
            <Star onChange={(e)=>handlechange(e)} />
    
            </div>
              
    )
     
}


export default Filter
