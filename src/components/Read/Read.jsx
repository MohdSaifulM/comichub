import React, { useState } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { imageShow } from '../../utilz/functions'

function Read() {
    const [imageURL, setImageURL] = useState([])

    imageShow().then(function(url){
        setImageURL(url)
    })

    return (
        <>
            <Container>
                <Image src={imageURL} alt="image here" width="100%"/>
                <Button>Prev</Button>
                <Button>Next</Button>
            </Container>
        </>
    )
}

export default Read
