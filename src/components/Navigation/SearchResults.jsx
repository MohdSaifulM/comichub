import React from 'react';
import Fuse from 'fuse.js';

function SearchResults({ query }) {

    const fuse = new Fuse([query], {
        keys: [
            'title',
        ],
        includeScore: true
    })

    const [results] = (fuse.search('spiderman'));

    // console.log("Results", results)
    return (
        <div>

        </div>
    )
}

export default SearchResults
