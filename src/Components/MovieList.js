import React from 'react'
import MovieCard from './MovieCard'
import star from './Star'

const  MovieList =({movie,search,rating}) =>{
    return (
        <div>
            <div className="list">
    { movie
    
    .filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()) || el.rating>=rating) 
    .map((movie)=>(
       
        //n3aytou lel moviecard w na3toha props w ma nasouch el key bech ma ytal3elnech ereur fel console//
    
      <MovieCard  movie = {movie}  key = {movie.id}  />
      
    
    ))}
    </div>
        </div>
    )
}

export default MovieList
