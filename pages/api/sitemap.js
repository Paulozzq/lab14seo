export default async function handler(req, res) {
  const baseUrl = 'https://tusitio.com'; // Reemplaza por tu URL real

  // Simulación de base de datos
  const blogPosts = [
    { slug: 'seo-en-2025' },
    { slug: 'mejores-practicas-nextjs' },
    { slug: 'lazy-loading-react' }
  ];

  const staticRoutes = ['/', '/blog', '/contacto'];
  const dynamicRoutes = blogPosts.map(post => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
    </url>`)
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}
