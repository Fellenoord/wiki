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
    useNextSeoProps() {
        return {
            titleTemplate: '%s'
        }
    }
}
