import React, { useState, useEffect } from 'react';
import { Container, Button, Image, Row, Col, Table } from 'react-bootstrap';
import { imageShow, listPages } from '../../utilz/functions';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ComicTitle from './ComicTitle';
import CharacterInfo from './CharacterInfo';

function Read() {

    const [imageURL, setImageURL] = useState([]);
    const [newPage, setNewPage] = useState(1);
    const [length, setLength] = useState();
    const [comicInfo, setComicInfo] = useState([]);
    const [characterInfo, setCharacterInfo] = useState([]);

    const params = useParams();

    const comicURL = `https://gateway.marvel.com/v1/public/comics/${params.id}?ts=msaif&apikey=82cda42dd19af664e9174418d24abbcf&hash=d6c8a826b2d3e79d9b38eed5958f19c5`;
    const characterURL = `https://gateway.marvel.com/v1/public/comics/${params.id}/characters?ts=msaif&apikey=82cda42dd19af664e9174418d24abbcf&hash=d6c8a826b2d3e79d9b38eed5958f19c5`;

    useEffect(() => {
        getComicInfo();
        getCharacterInfo();
    }, [])

    function nextPage() {
        newPage < length && setNewPage(newPage + 1);
    }

    function prevPage() {
        newPage > 1 && setNewPage(newPage - 1);
    }

    async function getComicInfo() {
        try {
            let res = await axios.get(comicURL);
            setComicInfo(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getCharacterInfo() {
        try {
            let res = await axios.get(characterURL);
            setCharacterInfo(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    imageShow(params.id, newPage).then(function (url) {
        setImageURL(url)
    })

    listPages(params.id).then(function (res) {
        setLength(res.items.length)
    })

    return (
        <>
            <Row>
                <Col md="12">
                    <div>
                        {comicInfo.map((el, index) => (
                            <ComicTitle info={el} key={index} />
                        ))}
                    </div>
                </Col>
                <Col md="12">
                    <Container>
                        <Image src={imageURL} alt="image here" width="100%" />
                        <Button variant="outline-warning" onClick={prevPage} className="float-left my-3">Prev</Button>
                        <Button variant="outline-warning" onClick={nextPage} className="float-right my-3">Next</Button>
                    </Container>
                </Col>
            </Row>
            <Container>
                <Table striped bordered hover variant="dark" className="text-warning">
                    <h4 >Characters</h4>
                    {characterInfo.map((el, index) => (
                        <CharacterInfo character={el} key={index} />
                    ))}
                </Table>
            </Container>
        </>
    )
}

export default Read
