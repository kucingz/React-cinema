import React from 'react'
import { CardGroup, Col } from 'react-bootstrap'
import CardItem from '../components/CardItem'

const MovieCards = ( {movies} ) => {
    return (
        movies.map((movie) => (
            <Col className="d-flex justify-content-center" md={4}>
                <CardItem key={movie.id} movie={movie}/>
            </Col>
        ))
    )
}

export default MovieCards
