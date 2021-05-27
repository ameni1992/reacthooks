import React from 'react'
import {Card}from 'react-bootstrap'
const MovieCard=({movie}) =>{
    return (
        <div className="poster">
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>
      <h2> Name :{movie.name} </h2>
      </Card.Title>
    <Card.Text>
     <h5>Description :{movie.description}  </h5>
    </Card.Text>
    <Card.Text>
     <h5 >Rating: {movie.rating}</h5>
    </Card.Text>
    <Card.Text>
     <h5 >Date: {movie.date}</h5>
    </Card.Text>  
  </Card.Body>
</Card>  
        </div>
    );
};

export default MovieCard
