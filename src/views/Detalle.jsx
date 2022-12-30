import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detalle() {
    // const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/'

    // Aca no entendi por que nombre va entre corchetes
    const { nombre } = useParams();
    const [pokemones, setPokemones] = useState([])


    const getPokemones = async () => {
        const response = await fetch(endpoint + nombre)
        let { sprites } = await response.json()
        
        sprites = sprites.other.dream_world.front_default
          
        
        setPokemones(sprites)
        console.log(sprites)
      }

      useEffect(() => {
        getPokemones()
      }, [])
    


    return(
        <div>
            {
                (!nombre)?
                <p>No hay valor</p>: 

                <div><h1>{nombre}</h1>
                <img  src={pokemones} alt="imagen de picachu" />
                </div>
                

            }


        </div>
    )
}