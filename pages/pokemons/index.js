import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
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
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <ul>
          {pokemons?.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default pokemons

