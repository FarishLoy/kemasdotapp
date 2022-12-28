import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const onEmailSubmit = () => {
    console.log('hello')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Get Kemas App</title>
        <meta name="description" content="Achieve your reading goals with Kemas iOS app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
          <div className={styles.logo}>
          </div>
          <p className={styles.logoName}>Kemas</p>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Achieve your reading goals with <span>Kemas</span>
        </h1>
        <p className={styles.subTitle}>
          Set goals, keep track, and achieve your 2023 reading goals.
        </p>
        <form className={styles.emailForm}>
          <input placeholder='Email address' type="email" className={styles.emailInput} />
          <button type='submit' onClick={onEmailSubmit} className={styles.emailButton}>JOIN WAITLIST</button>
        </form>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
