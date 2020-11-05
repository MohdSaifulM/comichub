import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import SearchResults from './SearchResults';

function Search() {

    

    const [lgShow, setLgShow] = useState(false);
    const [search, setSearch] = useState("a");
    const [confirm, setConfirm] = useState();
    const [query, setQuery] = useState([]);
    const [results, setResults] = useState([]);

    const searchURL = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&titleStartsWith=${search}&limit=20&ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;

    function changeHandler(e) {
        setSearch(e.target.value)
    }

    function clickHandler() {
        setConfirm(search)
    }

    useEffect(() => {
        searchComics();
    }, [])

    async function searchComics() {
        try {
            let res = await axios.get(searchURL);
            setQuery(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(search)

    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" onChange={changeHandler} />
            <Button variant="outline-warning" onClick={clickHandler}>Search</Button>
            {query.map((el, index) => (
                <SearchResults query={el} key={index} />
            ))}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Search Results
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </Form>
    )
}

export default Search
