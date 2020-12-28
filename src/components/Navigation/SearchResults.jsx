import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

function SearchResults({ query }) {


        console.log("Results", query)
        return (
            <ListGroupItem >
                <a href={`/read/${query.id}`} className="h6 text-secondary text-center">{query.title}</a>
                <img src={`${query.thumbnail.path}.${query.thumbnail.extension}`} height="100px" width="auto" className="float-right" />
            </ListGroupItem>
        )
    }

export default SearchResults
