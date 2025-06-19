import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Página principal optimizada para motores de búsqueda" />
        <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
        <meta property="og:description" content="Descubre nuestros servicios desde la página de inicio." />
      </Head>
      <main>
        <h1>Bienvenido al Home</h1>
      </main>
    </>
  )
}
