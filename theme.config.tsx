export default {
    logo: <span style={{ fontWeight: 800 }}>WebCieWiki</span>,
    project: {
        link: 'https://github.com/fellenoord',
    },
    darkMode: true,
    footer: {
        text: <span>
            WebCie {new Date().getFullYear()}
        </span>,
    },
    docsRepositoryBase: 'https://github.com/Fellenoord/wiki',
    faviconGlyph: '👨🏽‍💻',
    head: (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="WebCieWiki" />
          <meta property="og:description" content="The WebCieWiki." />
      </>
    ),
    banner: {
        key: 'join-webcie',
        text: <a href="https://fellenoord.nl" target="_blank">
            😉 Don't like the website? Join the WebCie →
        </a>,
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s'
        }
    }
}
