const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <p style={{ display: 'block', marginTop: '8rem' }}>
        <a href="https://github.com/victoriamcn" className="footerLinks">
          GitHub
        </a>
        <a href="https://medium.com/@vmcnorrill" className="footerLinks">
          Medium
        </a>
        <a href="https://www.linkedin.com/in/victoria-mcnorrill/" className="footerLinks">
          LinkedIn
        </a>
        <a href="https://open.spotify.com/user/torilizabeth95" className="footerLinks">
          Spotify
        </a>
      </p>
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
    </footer>
  )
}
