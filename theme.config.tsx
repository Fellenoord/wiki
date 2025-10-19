export default {
    logo: <span style={{ fontWeight: 800 }}>WebcieWiki</span>,
    project: {
        link: 'https://github.com/fellenoord',
    },
    darkMode: true,
    footer: {
        text: <span>
            © {new Date().getFullYear()} Webcie Fellenoord
        </span>,
    },
    docsRepositoryBase: 'https://github.com/Fellenoord/wiki',
    faviconGlyph: '👨🏽‍💻',
    head: (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="WebcieWiki" />
          <meta property="og:description" content="The WebcieWiki." />
      </>
    ),
    banner: {
        key: 'join-webcie',
        text: <a href="https://fellenoord.nl" target="_blank">
            😉 Don't like the website? Join the Webcie →
        </a>,
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s'
        }
    }
}
