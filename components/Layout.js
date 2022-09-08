import React from 'react'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout