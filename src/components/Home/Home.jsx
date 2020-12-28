import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeaturedJumbotron from './FeaturedJumbotron';
import NewComics from './NewComics'
import { Row, Col } from 'react-bootstrap';


function Home() {

    const [featured, setFeatured] = useState([])
    const [newComics, setNewComics] = useState([])

    const featuredURL = `https://gateway.marvel.com/v1/public/comics/90549?ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;
    const newURL = `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=lastWeek&limit=8&ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;

    

    async function getNewComics() {
        try {
            let res = await axios.get(newURL);
            setNewComics(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getFeatured() {
        try {
            let res = await axios.get(featuredURL);
            setFeatured(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFeatured();
        getNewComics();
    }, [])

    return (

        <>
            {featured.map((el, index) => (
                <FeaturedJumbotron featured={el} key={index} />
            ))}

            <Col md="12">
                <h4 className="text-warning">New this week</h4>
                <Row>
                    {newComics.map((el, index) => (
                        <NewComics newComics={el} key={index} />
                    ))}
                </Row>
            </Col>
        </>
    )
}
export default Home;