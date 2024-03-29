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
import { Avatar, AvatarBadge } from '@chakra-ui/core';
import Script from 'next/script'

export default function Home() {
  const { colorMode } = useColorMode();
  const experiences = [
    {
      title: 'Bunnings',
      descripton:
        "I'm currently at Bunnings working in a team to make search and filtering experience better.",
    },
    {
      title: 'Findex',
      descripton:
        "At Findex, I designed and implemented various microservices to make our internal customers workflow efficient",
    },
    {
      title: 'Propagate Digital',
      descripton:
        'During my 3 and half years as a full stack developer, I helped to design and deliver solutions across roster management, several e-commerce apps and custom solutions, taking full ownership from design to deployment.',
    },
  ];
  return (
    <ThemeProvider>
      <ColorModeProvider value={colorMode}>
        <CSSReset />
        <div className={styles.container}>
          <Head>
            <title>Sajan Gurung</title>
            <link rel="icon" href="/favicon.ico" />
            <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W82WV8P');
            `}
          </Script>
          </Head>

          <main className={styles.main}>
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W82WV8P"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

            <Avatar name="Sajan Gurung" src="avatar.jpg" size="xl" />
            <h1 className={styles.title}>👋 I'm Sajan</h1>

            <p className={styles.description}>
              I'm a software developer based in Melbourne, Australia.
            </p>

            <div className={`${styles.grid}`}>
              {experiences.map((e, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <h3>{e.title}</h3>
                    <p>{e.descripton}</p>
                  </div>
                );
              })}
              <div className={styles.card}>
                <h3>Skills</h3>
                <p>Typescript, Node.js, Angular, Laravel, AWS, Azure, Jest</p>
              </div>

              <div className={styles.card}>
                <h3>Uses</h3>
                <h4>Computer/Office</h4>
                <ul>
                  <li>16" Macbook Pro (2021)</li>
                  <li>27" Dell 4k S2722QC</li>
                  <li>Keychron K2</li>
                  <li>Omnidesk Desk</li>
                  <li>Herman Miller Aeron</li>
                </ul>

                <h4>Coding</h4>
                <ul>
                  <li>Editor: VSCode</li>
                  <li>Terminal: iTerm2</li>
                </ul>

                <h4>Software</h4>
                <ul>
                  <li>LastPass</li>
                  <li>Spotify</li>
                  <li>Grammarly</li>
                  <li>Postman</li>
                  <li>Loom</li>
                </ul>

                <h4>Other Tech</h4>
                <ul>
                  <li>Blue Yeti Mic</li>
                  <li>Bose QC Series 1 (2017)</li>
                  <li>Pixel 3</li>
                  <li>Jabra Elite Active 75t</li>
                </ul>
              </div>
            </div>

            <div className={styles.grid}>
              <a href="https://github.com/sajangurung" className={styles.col}>
                <img src="icons8-github.svg" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/sajangurung/"
                className={styles.col}
              >
                <img src="icons8-linkedin.svg" alt="" />
              </a>
              <a href="https://sajangurungk.medium.com" className={styles.col}>
                <img src="icons8-medium.svg" alt="" />
              </a>
            </div>
          </main>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
