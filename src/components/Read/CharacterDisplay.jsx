import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Table } from 'react-bootstrap'
import ComicsDisplay from './ComicsDisplay'
import axios from 'axios';


function CharacterDisplay({ info }) {

    const [comicInfo, setComicInfo] = useState([]);

    const params = useParams();

    const comicURL = `https://gateway.marvel.com/v1/public/characters/${params.id}/comics?ts=msaif&apikey=82cda42dd19af664e9174418d24abbcf&hash=d6c8a826b2d3e79d9b38eed5958f19c5`;

    async function getComicInfo() {
        try {
            let res = await axios.get(comicURL);
            setComicInfo(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getComicInfo();
    }, [])

    return (
        <Card className="bg-dark text-warning">
            <Card.Title className="text-center mt-2">{info.name}</Card.Title>
            <Card.Img variant="top" src={`${info.thumbnail.path}.${info.thumbnail.extension}`} />
            <Card.Body>
                <Card.Text>
                    {info.description}
                </Card.Text>
                <Table striped bordered hover variant="dark" className="text-warning">
                    <h4>{`${info.comics.available} Appearances`}</h4>
                    {comicInfo.map((el, index) => (
                        <ComicsDisplay comics={el} key={index} />
                    ))}
                </Table>
            </Card.Body>
        </Card>
    )
}

export default CharacterDisplay
