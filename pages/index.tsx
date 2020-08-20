import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  useTheme,
  useColorMode,
  Button,
  ThemeProvider,
  CSSReset,
  Icon,
  ColorModeProvider,
} from '@chakra-ui/core';
import { Avatar, AvatarBadge } from "@chakra-ui/core";


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <ThemeProvider>
      <ColorModeProvider value={colorMode}>
      <CSSReset />
      <div className={styles.container}>
        <Head>
          <title>Sajan Gurung</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Avatar name="Sajan Gurung" src="avatar.jpg" size="2xl" />
          <h1 className={styles.title}>
            Hi I'm Sajan Gurung
          </h1>

          <p className={styles.description}>
            I'm a developer living in Melbourne, Australia.
            {/* <code className={styles.code}>pages/index.js</code> */}
          </p>

          <div className={styles.grid}>
            <a href="https://github.com/sajangurung"><img src="icons8-github.svg" alt=""/></a>
          </div>

          {/* <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Work Experience</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Skills</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div> */}
        </main>
      </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
