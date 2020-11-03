import React from 'react'
import { Link } from 'react-router-dom';

function ComicsDisplay({ comics }) {

    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <Link to={`/read/${comics.id}`} className="h6 text-warning">{comics.title}</Link>
                    </td>
                    <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} height="100px" width="100px" className="float-right" />
                </tr>
            </tbody>

        </>
    )
}

export default ComicsDisplay
