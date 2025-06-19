import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Página principal optimizada para motores de búsqueda" />
        <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
        <meta property="og:description" content="Descubre nuestros servicios desde la página de inicio." />
        <meta name="google-site-verification" content="QSNfl9AXd_-kmDr-KSTmXljLyIFc5SmDtrGwo5NDx-g" />
      </Head>
      <main>
        <h1>Bienvenido al Home</h1>
      </main>
    </>
  )
}
