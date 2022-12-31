import "../assets/css/pokemones.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        <section className="container">
            <h1 className="h1-poke">Pokemones</h1>
            {/* aca queda pendiente hacer una map del listado de pokemones, y al seleccionar uno cargarlo a setPokemonSeleccionado */}
            <Form.Select aria-label="Default select example" value={pokemonSeleccionado}   onChange={ handleChange } >
                <option>Selecciona un pokemon</option>{
                    listadoPokemones.map((pokemon, index) => (
                        <option key={index} value={pokemon.name} >{pokemon.name}</option>
                    ))
                }
            </Form.Select>
            {/* Con el button se debe hacer el cambio de vista cuando la persona presione el boton de acuerto al personaje seleccionado */}
            <Button variant="dark" className="mt-5" onClick={verDetallePokemon}>Ver detalle</Button>
        </section>
    );
}
