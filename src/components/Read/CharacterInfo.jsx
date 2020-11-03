import React from 'react'
import { Link } from 'react-router-dom';

function CharacterInfo({ character }) {

    console.log(character)
    return (
        <>
            <tbody>
                <tr>
                    <td>
                    <Link to={`/character/${character.id}`} className="h6 text-warning">{character.name}</Link>
                    </td>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} height="100px" width="100px" className="float-right"/>
                </tr>
            </tbody>

        </>
    )
}

export default CharacterInfo
