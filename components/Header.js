import Image from 'next/image'
import styles from '../styles/Header.module.css'
import LinkTo from '../components/LinkTo'

const Header = () => {

  return (
    <header className={styles.header}>
      <LinkTo href='/' >
        <Image src='/images/pokeball.png' alt='pokeball' width={40} height={40} style={{cursor: 'pointer'}}/>
      </LinkTo>
      <ul>
        <li>
          <LinkTo href='/pokemons' >
            Pokemons
          </LinkTo>
        </li>
        <li>
          <LinkTo href='zZzzZZzzzZz' >
            404
          </LinkTo>
        </li>
      </ul>
    </header>
  )
}

export default Header