import  { React,useState } from 'react';
import MovieList from './Components/MovieList';
import {MovieData} from './Components/MovieData';
import './App.css'
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import Star from './Components/Star';


const App=()=>{
  // the state should be in the js app to allow us make chages// 
  const[movie,setMovie]=useState(MovieData);
  //   step 1 we have to create an addmovie function //
  const[search,setSearch]=useState("")
  const Add =(newMovie)=>{setMovie([...movie,newMovie]);
  };
  // rating star function
  const[rating,setRating]=useState('')
  const handleChange=(newRating)=>{
    setRating(newRating);
  }
  
  return (
    //bech n3adi movie comme props lel MovieList//
    //movie howa el getter bech yjibelna e tableau eli fih  datamovie
    <div>
      <div className="navbar">
      <Filter setSearch={setSearch} handleChange={handleChange} />
      <AddMovie Add= {Add} />
      </div>

      <MovieList movie={movie} search={search}  rating= {rating} />
      
    </div>
  );
};
    
 
export default App