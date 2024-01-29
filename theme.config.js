const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{YEAR}</time> © Victoria McNorrill.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </small>
      <p style={{ display: 'block', marginTop: '8rem' }}>
      <a href="https://github.com/victoriamcn">GitHub</a>
      <a href="https://medium.com/@vmcnorrill">Medium</a>
      <a href="https://www.linkedin.com/in/victoria-mcnorrill/">LinkedIn</a>
      <a href="https://open.spotify.com/user/torilizabeth95">Spotify</a>
    </p>
  </footer>
  )
}
