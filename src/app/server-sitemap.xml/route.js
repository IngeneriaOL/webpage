// src/app/server-sitemap.xml/route.js
import { getServerSideSitemap } from 'next-sitemap';

export async function GET(request) {
  try {
    // Importar productos dinámicamente
    const fs = await import('fs/promises');
    const path = await import('path');
    
    // Leer productos desde JSON
    const productsPath = path.join(process.cwd(), 'src/data/products.json');
    const productsData = await fs.readFile(productsPath, 'utf8');
    const products = JSON.parse(productsData);
    
    // Generar URLs para productos dinámicamente
    const productUrls = products.map((product) => ({
      loc: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aingenieriaol.com'}/products/${product.id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.6
    }));

    // También puedes agregar otras URLs dinámicas
    const additionalUrls = [
      {
        loc: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aingenieriaol.com'}/products/search`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.5
      }
    ];

    const allUrls = [...productUrls, ...additionalUrls];

    return getServerSideSitemap(allUrls);
  } catch (error) {
    console.error('Error generando server-sitemap:', error);
    
    // Retornar sitemap vacío si hay error
    return getServerSideSitemap([]);
  }
}