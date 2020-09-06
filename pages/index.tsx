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
            Namaste I'm Sajan Gurung
          </h1>

          <p className={styles.description}>
            I'm a software developer from Melbourne Australia.
          </p>

          <div className={`${styles.grid} ${styles.gridColumn}`}>
            <div className={styles.card}>
              <p>Currently working as a Software Developer at Findex</p>
            </div>

            <div className={styles.card}>
              <p>Typescript, Node.js, Angular, Laravel, AWS, Jest</p>
            </div>
          </div>

          <div className={styles.grid}>
            <a href="https://github.com/sajangurung" className={styles.col}><img src="icons8-github.svg" alt=""/></a>
            <a href="https://www.linkedin.com/in/sajangurung/" className={styles.col}><img src="icons8-linkedin.svg" alt=""/></a>
          </div>
        </main>
      </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
