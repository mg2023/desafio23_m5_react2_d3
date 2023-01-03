import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../assets/css/detalle.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

export default function Detalle() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'

    // Requerimiento n3: Obtener parámetros de la URL usando el hook useParams (3 Puntos)
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [InfoPokemon, setInfoPokemon] = useState([])

    console.log(" funcion Detalle")
    const getInfoPokemon = async () => {
        const response = await fetch(endpoint + nombre)
        const { sprites, stats, types } = await response.json()
        setInfoPokemon({ sprites, stats, types })
        console.log("api")

        // crear una arrglo con el stat y la img
    }


    // en stats estan HTMLParagraphElement, attack, defese, etc.
    useEffect(() => {
        getInfoPokemon()
    }, [])


    // Requerimiento n2: Redireccionar programáticamente al usuario usando el hook useNavigate (4 Puntos)
    const volverABuscar = () => {
        navigate(`/pokemones/`)

    }

    console.log(InfoPokemon)

    if (InfoPokemon.length !== 0) {
        return (
            <Container className="poke-card">
                {/* <Card style={{ width: '24rem' }}> */}
                <Card>
                    <Row>
                        <Col className="poke-img" >
                            <Card.Img style={{ width: 300, height: 400 }} src={InfoPokemon.sprites.other.dream_world.front_default} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{nombre}</Card.Title>
                                <ul>
                                    <li>hp:{InfoPokemon.stats[0].effort}</li>
                                    <li>attack:{InfoPokemon.stats[1].effort}</li>
                                    <li>defense:{InfoPokemon.stats[2].effort}</li>
                                    <li>special-attack:{InfoPokemon.stats[3].effort}</li>
                                    <li>special-defense:{InfoPokemon.stats[4].effort}</li>
                                    <li>speed:{InfoPokemon.stats[5].effort}</li>
                                </ul>
                                {
                                    InfoPokemon.types.map((types, i) => (
                                        <h4 key={i}>{types.type.name}</h4>
                                    )
                                    )
                                }
                                <Button variant="dark" className="mt-5 button " onClick={volverABuscar}>Volver</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

