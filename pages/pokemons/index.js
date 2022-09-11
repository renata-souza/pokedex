import Head from 'next/head'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import styles from '../../styles/pokemons.module.css'

export async function getStaticProps() {

  const maxPokemons = 151
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
  const pokemons = await response.json()

  pokemons.results.forEach((item, index) => item.id = index + 1)

  return {
    props: { pokemonsData: pokemons.results }
  }
}

const pokemons = ({pokemonsData}) => {
  const pokemons = pokemonsData

  return (
    <>
      <Head>
        <title>Pokemons</title>
      </Head>
      <Layout>
        <div className='title'>
          <h1>Gotta catch'em all!</h1>
        </div>
        <ul className={styles.pokeList}>
          {pokemons?.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)}
        </ul>
      </Layout>
    </>
  )
}

export default pokemons

