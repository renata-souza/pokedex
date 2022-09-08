import Image from 'next/image'
import React from 'react'
import styles from '../styles/Header.module.css'
import LinkTo from '../components/LinkTo'

const Header = () => {
  return (
    <header className={styles.header}>
      <LinkTo href='/' btnText=''>
        <Image src='/images/pokeball.png' width={40} height={40} style={{cursor: 'pointer'}}/>
      </LinkTo>
      <ul>
        <li>
          <LinkTo href='/pokemons' btnText=''>
            Pokemons
          </LinkTo>
        </li>
        <li>
          <LinkTo href='/about' btnText=''>
            About
          </LinkTo>
        </li>
        <li>
          <LinkTo href='/contact' btnText=''>
            Contact
          </LinkTo>
        </li>
      </ul>
    </header>
  )
}

export default Header