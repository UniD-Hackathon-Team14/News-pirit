import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
            <div className={styles[`home-title`]}>
                감정의 셀프<br/>
                기자회견
            </div>
            <div className={styles[`home-image`]}>설명하는 그림</div>
            <div className={styles.authentication}>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </div>
      </main>
    </div>
  )
}
