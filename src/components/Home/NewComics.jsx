import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewComics({ newComics }) {
    return (
        <>
            <Col md="3" className="bg-dark mt-2">
                <Card className="bg-dark">
                    <Card.Img variant="top" src={`${newComics.images[0].path}.${newComics.images[0].extension}`} />
                    <Card.Body className="bg-dark text-warning">
                        <Card.Title className="h6" >{newComics.title}</Card.Title>
                    </Card.Body>
                    <Link to={`/read/${newComics.id}`} className="btn btn-warning">Read</Link>
                </Card>
            </Col>
        </>
    )
}

export default NewComics
