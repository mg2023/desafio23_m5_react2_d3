import "../assets/css/pokemones.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Pokemones() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'
    const [listadoPokemones, setListadoPokemones] = useState([])
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState('')
    const navigate = useNavigate();

    const getListadoPokemones = async () => {
        const response = await fetch(endpoint)
        let { results } = await response.json()
        results = results.map((pokemon) => ({ name: pokemon.name }))
        setListadoPokemones(results)
    }

    useEffect(() => {
        getListadoPokemones()
    }, [])

    const verDetallePokemon = () => {
        navigate(`/pokemones/${pokemonSeleccionado}`)

    }

    const handleChange = event => {
        setPokemonSeleccionado(event.target.value);
    };

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <h1 className="h1-poke">Selecciona un pokemon</h1>
                    {/* Aca se hace el listado de pokemones que se pueden elejir */}
                    <Form.Select aria-label="Default select example" value={pokemonSeleccionado} onChange={handleChange} >
                        <option>Pokemones</option>{
                            listadoPokemones.map((pokemon, index) => (
                                <option key={index} value={pokemon.name} >{pokemon.name}</option>
                            ))
                        }
                    </Form.Select>
                    {/* Aca se hace el cabmio de vista de acuerdo al pokemon selecionado    */}
                    <Button variant="dark" className="mt-5 button " onClick={verDetallePokemon}>Ver detalle</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
