import Image from 'next/image'
import LinkTo from '../components/LinkTo'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404 - Page not found</h1>
        <p>Oh no! Seems like Snorlax ate the page you were looking for...</p>
        <Image
          className={styles.pikachu}
          src='/images/404.png'
          alt="Surprised Pikachu"
          width={250}
          height={250} 
        />
        <LinkTo href='/' btnText='Go back home' />
      </div>
    </div>
  )
}

export default NotFound