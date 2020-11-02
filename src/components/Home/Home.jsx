import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeaturedJumbotron from './FeaturedJumbotron';
import NewComics from './NewComics'
import { Row, Col } from 'react-bootstrap';


function Home() {

    const [featured, setFeatured] = useState([])
    const [newComics, setNewComics] = useState([])

    const featuredURL = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisMonth&title=The%20Amazing%20Spider-man&orderBy=issueNumber&limit=1&ts=msaif&apikey=82cda42dd19af664e9174418d24abbcf&hash=d6c8a826b2d3e79d9b38eed5958f19c5`;
    const newURL = `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=lastWeek&limit=8&ts=msaif&apikey=82cda42dd19af664e9174418d24abbcf&hash=d6c8a826b2d3e79d9b38eed5958f19c5`;

    useEffect(() => {
        getFeatured();
        getNewComics();
    }, [])

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


    return (

        <>
            {featured.map((el, index) => (
                <FeaturedJumbotron featured={el} />
            ))}

            <Col md="12">
                <h4 className="text-warning">New this month</h4>
                <Row>
                    {newComics.map((el, index) => (
                        <NewComics newComics={el} />
                    ))}
                </Row>
            </Col>
        </>
    )
}
export default Home;