import Head from 'next/head'

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Lee nuestros artículos y novedades del blog" />
        <meta property="og:title" content="Blog | Mi Proyecto SEO" />
        <meta property="og:description" content="Artículos recientes sobre tecnología, SEO y desarrollo web." />
      </Head>
      <main>
        <h1>Blog</h1>
      </main>
    </>
  )
}
