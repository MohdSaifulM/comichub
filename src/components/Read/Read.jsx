import React, { useState } from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
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
        newPage > 1 && setNewPage(newPage - 1);
    }

    imageShow(params.id, newPage).then(function (url) {
        setImageURL(url)
    })

    return (
        <>
            <Container>
                <Image src={imageURL} alt="image here" width="100%" height="100%" />
                <Button variant="outline-warning" onClick={prevPage} className="float-left my-3">Prev</Button>
                <Button variant="outline-warning" onClick={nextPage} className="float-right my-3">Next</Button>
            </Container>
        </>
    )
}

export default Read
