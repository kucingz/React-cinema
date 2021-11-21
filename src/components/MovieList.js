import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/MovieList.css'
import MovieCards from './MovieCards'
import axios from 'axios'
import { alignPropType } from 'react-bootstrap/esm/types'
const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/movies')
                setMovies(response.data)
            } catch(err) {
                console.log(err)
            }
        }
    fetchMovies()
    }, [])
    console.log(movies)
    return (
        <Container fluid="sm">
            <Row>
                <MovieCards movies={movies}></MovieCards>
            </Row>
        </Container>
    )
}

export default MovieList
