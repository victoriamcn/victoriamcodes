import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Victoria McNorrill | Software Developer',
    description: "Hello there. I'm Victoria, a software engineer passionate about UX Design, Artificial Intelligence (AI), sustainability in tech and community involvement. On my website, you can explore a curated collection of my work, including my coding projects, articles, and experiences in the tech industry here. Let's connect!",
    image: '/Users/Victoria/Desktop/victoriamcodes/public/images/photos of me/professionalportrait square.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
