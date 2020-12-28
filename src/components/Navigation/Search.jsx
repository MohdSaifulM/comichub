import React, { useState } from 'react';
import { Form, FormControl, Button, Modal, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import SearchResults from './SearchResults';

function Search() {



    const [lgShow, setLgShow] = useState(false);
    const [search, setSearch] = useState("a");
    const [query, setQuery] = useState([]);

    const searchURL = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&titleStartsWith=${search}&limit=10&ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;

    function changeHandler(e) {
        setSearch(e.target.value)
    }

    function clickHandler() {
        setLgShow(true)
        setSearch(search.replace(/\s/g, ''));
        searchComics();
    }

    async function searchComics() {
        try {
            let res = await axios.get(searchURL);
            setQuery(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" onChange={changeHandler} />
            <Button variant="outline-warning" onClick={clickHandler}>Search</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {query.length > 0 ? "Search results" : "No results found"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {query.map((el, index) => (
                            <SearchResults query={el} key={index} />
                        ))}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </Form>
    )
}

export default Search
