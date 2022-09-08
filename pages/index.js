import Image from 'next/image'
import LinkTo from '../components/LinkTo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <Image
        className={styles.pokeball}
          src='/images/pokeball.png'
          alt="Pokeball"
          width={150}
          height={150} 
        />
        <LinkTo href='/pokemons'>POKEDEX</LinkTo>
      </main>
    </div>
  )
}
