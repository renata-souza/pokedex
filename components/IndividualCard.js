import Image from 'next/image'
import React from 'react'
import styles from '../styles/IndividualCard.module.css'

const IndividualCard = ({ pokemon }) => {

  const myLoader= () =>{
    return `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`;
  }

  const url = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`

  return (
    <div className={styles.card}>
      <Image loader={myLoader} src={url} width={100} height={100} alt={pokemon.name} unoptimized={true} />
      <p># {pokemon.id}</p>
      <h2>Name: {pokemon.name}</h2>
      <h3>Weight: {pokemon.weight / 10}kg</h3>
      <h3>Height: {pokemon.height * 10}cm</h3>
      <h3>Type: {pokemon.types.map((item, index) => (
        <span key={index} className={styles['type_' + item.type.name]}>{item.type.name}</span>
      ))}</h3>
    </div>
  )
}

export default IndividualCard