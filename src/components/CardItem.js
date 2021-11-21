import React from 'react'
import {Card, Button, Col} from 'react-bootstrap'
import "./CardItem.css"
const CardItem = ( {movie} ) => {
    return (
        <Card className='mt-5' style={{ width: '22rem' }} >
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default CardItem
