import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import CharacterDisplay from './CharacterDisplay';
import axios from 'axios';

function CharacterPage() {

    const [characterInfo, setCharacterInfo] = useState([]);

    const params = useParams();

    const characterURL = `https://gateway.marvel.com/v1/public/characters/${params.id}?ts=${process.env.REACT_APP_MARVEL_APP_TS}&apikey=${process.env.REACT_APP_MARVEL_APP_API_KEY}&hash=${process.env.REACT_APP_MARVEL_APP_HASH}`;

    async function getCharacterInfo() {
        try {
            let res = await axios.get(characterURL);
            setCharacterInfo(res.data.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCharacterInfo();
    }, [])

    return (
       <Container>
           {characterInfo.map((el, index) => (
               <CharacterDisplay info={el} key={index}/>
           ))}
       </Container>
    )
}

export default CharacterPage
