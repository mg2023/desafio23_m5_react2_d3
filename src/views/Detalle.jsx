import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Detalle() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'
    const { nombre } = useParams();

    const [InfoPokemon, setInfoPokemon] = useState([])

    console.log(" funcion Detalle")
    const getInfoPokemon = async () => {
        const response = await fetch(endpoint + nombre)
        const { sprites, stats } = await response.json()
        setInfoPokemon({ sprites, stats })
        console.log("api")

        // crear una arrglo con el stat y la img
    }


    // en stats estan HTMLParagraphElement, attack, defese, etc.
    useEffect(() => {
        getInfoPokemon()
    }, [])

    console.log(InfoPokemon)

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    {
                        (InfoPokemon.length != 0)?
                        <img src={InfoPokemon.sprites.other.dream_world.front_default} alt="imagen de picachu" />:""                    
                    }
                </Col>
                <Col>
                    {
                        (!nombre) ?
                            <p>No hay valor</p> :

                            <div><h1>{nombre}</h1>
                                {/* <img  src={pokemones} alt="imagen de picachu" /> */}
                            </div>
                    }
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

// {
//     (!nombre) ?
//         <p>No hay valor</p> :

//         <div><h1>{nombre}</h1>
//             {/* <img  src={pokemones} alt="imagen de picachu" /> */}
//         </