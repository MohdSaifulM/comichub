import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

function CharacterInfo({ character }) {

    return (
        <>
            <ListGroupItem className="bg-dark">
                <Link to={`/character/${character.id}`} className="h6 text-warning">{character.name}</Link>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} height="50px" width="50px" className="float-right" />
            </ListGroupItem>

        </>
    )
}

export default CharacterInfo
