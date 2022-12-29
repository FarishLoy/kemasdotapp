import Head from 'next/head'
import Image from 'next/image'
import { CalendarClearOutline, FolderOpenOutline, AlarmOutline, PeopleCircleOutline, BookOutline } from 'react-ionicons'

import styles from '../styles/Home.module.css'
import iphoneImage from '../assets/iphone.png'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
  
  const onEmailSubmit = () => {
    console.log('hello')
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsValidEmail(/(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value))
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
        <form className={styles.emailForm} action="https://kemas.app/api/submitEmail" method="GET">
          <div style={{display: 'flex', flexDirection: 'column'}} className={styles.emailInputContainer}>
            <input onChange={onEmailChange} alt="email address input" name='email' id='email-input' placeholder='Email address' type="email" className={styles.emailInput} />
          </div>
          <button disabled={!isValidEmail} type='submit' onClick={onEmailSubmit} className={styles.emailButton}>JOIN WAITLIST</button>
        </form>
        <div className={styles.imageContainer}>
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <CalendarClearOutline height='32px' width='32px' color='#2F5061' />
              <p>Set reading goals</p>
            </div>
            <div className={styles.feature}>
              <FolderOpenOutline height='32px' width='32px' color='#2F5061' />
              <p>Track and record progress</p>
            </div>
            <div className={styles.feature}>
              <AlarmOutline height='32px' width='32px' color='#2F5061' />
              <p>Smart reminders</p>
            </div>
            <div className={styles.feature}>
              <PeopleCircleOutline height='32px' width='32px' color='#2F5061' />
              <p>Set goals with friends</p>
            </div>
            <div className={styles.feature}>
              <BookOutline height='32px' width='32px' color='#2F5061' />
              <p>Tailored book recommendations</p>
            </div>
          </div>
          <Image src={iphoneImage} alt="an iphone" width={300} height={600} />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Built and developed by<a href="https://twitter.com/farish_15"> Farish Noorhisham</a></p>
      </footer>
    </div>
  )
}
