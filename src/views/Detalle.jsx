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
        const { sprites, stats, types } = await response.json()
        setInfoPokemon({ sprites, stats, types})
        console.log("api")

        // crear una arrglo con el stat y la img
    }


    // en stats estan HTMLParagraphElement, attack, defese, etc.
    useEffect(() => {
        getInfoPokemon()
    }, [])

    console.log(InfoPokemon)

    if (InfoPokemon.length !== 0){
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <img src={InfoPokemon.sprites.other.dream_world.front_default} alt="imagen de picachu" />                
                    </Col>
                    <Col> 
                            <>
                            <h2>{nombre}</h2>
                            <ul>
                                <li>hp:{InfoPokemon.stats[0].effort}</li>
                                <li>attack:{InfoPokemon.stats[1].effort}</li>
                                <li>defense:{InfoPokemon.stats[2].effort}</li>
                                <li>special-attack:{InfoPokemon.stats[3].effort}</li>
                                <li>special-defense:{InfoPokemon.stats[4].effort}</li>
                                <li>speed:{InfoPokemon.stats[5].effort}</li>    
                            </ul>
                            {/* <h3>{InfoPokemon.types[0].type.name}</h3> */}
                            {
                            InfoPokemon.types.map((types,i) => (
                                <h2 key={i}>{types.type.name}</h2>
                                )
                            )
                            }
                            </>
                        
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <div></div>
        )
    }


}

// {
//     (!nombre) ?
//         <p>No hay valor</p> :

//         <div><h1>{nombre}</h1>
//             {/* <img  src={pokemones} alt="imagen de picachu" /> */}
//         </