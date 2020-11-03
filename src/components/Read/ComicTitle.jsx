import React from 'react'
import { Container } from 'react-bootstrap'

function ComicTitle({ info }) {
    return (
        <>
            <Container className="text-center mb-5">
                <h4 className="text-warning">{info.title}</h4>
            </Container>
        </>
    )
}

export default ComicTitle
