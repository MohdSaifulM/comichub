import React from 'react'
import { Container } from 'react-bootstrap'

function ComicTitle({ info }) {
    return (
        <>
            <h5 className="text-warning text-center">{info.title}</h5>
        </>
    )
}

export default ComicTitle
