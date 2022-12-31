import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detalle() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'
    const { nombre } = useParams();

    const [InfoPokemon, setInfoPokemon] = useState([])


    const getInfoPokemon = async () => {
        const response = await fetch(endpoint + nombre)
        let data = await response.json()
        setInfoPokemon(data)

        // crear una arrglo con el stat y la img
    }


    // en stats estan HTMLParagraphElement, attack, defese, etc.
    useEffect(() => {
        getInfoPokemon()
    }, [])
    
    return(
        <div>
            {
                (!nombre)?
                <p>No hay valor</p>: 

                <div><h1>{nombre}</h1>
                {/* <img  src={pokemones} alt="imagen de picachu" /> */}
                </div>
                

            }


        </div>
    )
}