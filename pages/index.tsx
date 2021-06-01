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
  const { colorMode } = useColorMode();
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
          <Avatar name="Sajan Gurung" src="avatar.jpg" size="xl" />
          <h1 className={styles.title}>
          👋 I'm Sajan
          </h1>

          <p className={styles.description}>
            I'm a software developer based in Melbourne, Australia.
          </p>
          <small>But, the picture was taken on a hike to Cradle Mountain, Tasmania.</small>


          <div className={`${styles.grid}`}>
            <div className={styles.card}>
              <h3>Findex</h3>
              <p>I'm currently working as a software developer at Findex. I write code to make our internal customers workflow efficient.</p>
            </div>

            <div className={styles.card}>
              <h3>Propagate Digital</h3>
              <p>During my 3 and half years as a full stack developer, I helped to design and deliver solutions across roster management, several e-commerce apps and custom solutions, taking full ownership from design to deployment.</p>
            </div>

            <div className={styles.card}>
            <h3>Skills</h3>
              <p>Typescript, Node.js, Angular, Laravel, AWS, Jest</p>
            </div>
          </div>

          <div className={styles.grid}>
            <a href="https://github.com/sajangurung" className={styles.col}><img src="icons8-github.svg" alt=""/></a>
            <a href="https://www.linkedin.com/in/sajangurung/" className={styles.col}><img src="icons8-linkedin.svg" alt=""/></a>
            <a href="https://sajangurungk.medium.com" className={styles.col}><img src="icons8-medium.svg" alt=""/></a>
          </div>
        </main>
      </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
