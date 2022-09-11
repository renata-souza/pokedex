import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"
import LinkTo from "../../components/LinkTo"

export const getStaticPaths = async () => {
  const maxPokemons = 151
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
  const pokemons = await response.json()

  const paths = pokemons.results.map((pokemon, index) => {
    return {
      params: { pokeId: (index + 1).toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokeId

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemon = await response.json()

  return {
    props: { pokemon: pokemon }
  }
}

const pokemons = ({ pokemon }) => {

  const title = `Pokemon - ${pokemon.name}`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <IndividualCard pokemon={pokemon} key={pokemon.id} />
        <div className='back_to_pokedex'>
          <LinkTo href='/pokemons'>BACK TO POKEDEX</LinkTo>
        </div>
      </Layout>
    </>
  )
}

export default pokemons