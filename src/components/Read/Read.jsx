import React, { useState } from 'react';
import { Container, Button, Image, Row } from 'react-bootstrap';
import { imageShow } from '../../utilz/functions';
import { useParams } from 'react-router-dom';

function Read() {
    const [imageURL, setImageURL] = useState([]);
    const [newPage, setNewPage] = useState(1);

    const params = useParams();

    function nextPage() {
        setNewPage(newPage + 1);
    }

    function prevPage() {
        setNewPage(newPage - 1);
    }

    imageShow(params.id, newPage).then(function (url) {
        setImageURL(url)
    })

    return (
        <>
            <Container>
                <Image src={imageURL} alt="image here" width="100%"/>
                <Button variant="outline-warning" onClick={prevPage}>Prev</Button>
                <Button variant="outline-warning" onClick={nextPage}>Next</Button>
            </Container>
        </>
    )
}

export default Read
