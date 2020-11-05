import React, { useState, useEffect } from 'react';
import { Button, Image, Table, ListGroup, Container, Alert } from 'react-bootstrap';
import { imageShow, listPages } from '../../utilz/functions';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ComicTitle from './ComicTitle';
import CharacterInfo from './CharacterInfo';

function Read() {

        const [imageURL, setImageURL] = useState([]);
        const [newPage, setNewPage] = useState(1);
        const [length, setLength] = useState();
        const [comicInfo, setComicInfo] = useState([]);
        const [characterInfo, setCharacterInfo] = useState([]);

        const params = useParams();

        const comicURL = `https://gateway.marvel.com/v1/public/comics/${params.id}?ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;
        const characterURL = `https://gateway.marvel.com/v1/public/comics/${params.id}/characters?ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;

        let nextIssue = Number(params.id) + 1;
        let prevIssue = Number(params.id) - 1;

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
            setImageURL(url);
        })

        listPages(params.id).then(function (res) {
            setLength(res.items.length)
        })

        return (
            <>
                < Table variant="dark" >
                    <thead>
                        <tr>
                            <th>
                                {comicInfo.map((el, index) => (
                                    <ComicTitle info={el} key={index} />
                                ))}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <TransformWrapper
                                    defaultScale={1}
                                    wheel={false}
                                >
                                    {({ resetTransform, ...rest }) => (
                                        <React.Fragment>
                                            <div className="tools fixed-top mt-5 ml-5">
                                                <Button variant="outline-warning" onClick={resetTransform}>x</Button>
                                            </div>
                                            <TransformComponent>
                                                <Image src={imageURL} alt="comic not uploaded" className="mx-auto d-block" width="40%" />
                                            </TransformComponent>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </td>
                        </tr>
                    </tbody>
                </Table >
                <Container>
                    <div className="fixed-bottom mb-5 nav-buttons">
                        <Button variant="outline-warning" className="float-left ml-5" onClick={prevPage} >Prev</Button>
                        <a href={`/read/${prevIssue}`} className="btn btn-warning mx-2 float-left" >Previous Issue</a>
                        <Button variant="outline-warning" className="float-right mr-5" onClick={nextPage} >Next</Button>
                        <a href={`/read/${nextIssue}`} className="btn btn-warning mx-2 float-right" >Next Issue</a>
                    </div>
                    <ListGroup variant="dark" className="text-warning">
                        Characters
                        {characterInfo.map((el, index) => (
                        <CharacterInfo character={el} key={index} />
                    ))}
                    </ListGroup>
                </Container>
            </>
        )
    }

export default Read

