import React from 'react'
import { Link } from 'react-router-dom';
import {ListGroupItem} from 'react-bootstrap';

function ComicsDisplay({ comics }) {

    return (
        <>
            <ListGroupItem className="bg-dark">
                <Link to={`/read/${comics.id}`} className="h6 text-warning">{comics.title}</Link>
                <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} height="100px" width="auto" className="float-right" />
            </ListGroupItem>
        </>
    )
}

export default ComicsDisplay
