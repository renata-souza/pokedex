import Image from 'next/image'
import React from 'react'
import styles from '../styles/Card.module.css'
import LinkTo from './LinkTo';

const Card = ({ pokemon }) => {

  const myLoader= () =>{
    return `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`;
  }

  const url = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`

  return (
    <LinkTo href={`/pokemons/${pokemon.id}`}>
      <li className={styles.card}>
        <Image loader={myLoader} src={url} width={100} height={100} alt={pokemon.name} unoptimized={true} />
        <p># {pokemon.id}</p>
        <h2>{pokemon.name}</h2>
        <LinkTo href={`/pokemons/${pokemon.id}`}>Detalhes</LinkTo>
      </li>
    </LinkTo>
  )
}

export default Card