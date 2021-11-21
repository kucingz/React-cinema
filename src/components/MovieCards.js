import React from 'react'
import { CardGroup } from 'react-bootstrap'
import CardItem from '../components/CardItem'

const MovieCards = ( {movies} ) => {
    return (
        <CardGroup className="justify-content-md-center">
            {movies.map((movie) => (
              <CardItem key={movie.id} movie={movie}/>
            ))}
        </CardGroup>
    )
}

export default MovieCards
