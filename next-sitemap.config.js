// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://aingenieriaol.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,

    // Configuración del robots.txt
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/private']
            }
        ],
        additionalSitemaps: [
            'https://aingenieriaol.com/sitemap.xml',
            'https://aingenieriaol.com/server-sitemap.xml'
        ]
    },

    // URLs estáticas principales
    additionalPaths: async (config) => {
        const result = [];

        // Páginas principales con prioridades específicas
        const mainPages = [
            { loc: '/', priority: 1.0, changefreq: 'weekly' },
            { loc: '/about', priority: 0.8, changefreq: 'monthly' },
            { loc: '/products', priority: 0.9, changefreq: 'weekly' },
            { loc: '/projects', priority: 0.8, changefreq: 'monthly' },
            { loc: '/thermocouples', priority: 0.7, changefreq: 'monthly' },
            { loc: '/trademarks', priority: 0.6, changefreq: 'monthly' }
        ];

        mainPages.forEach((page) => {
            result.push({
                loc: page.loc,
                priority: page.priority,
                changefreq: page.changefreq,
                lastmod: new Date().toISOString()
            });
        });

        // Generar URLs dinámicas para productos
        const products = await getProducts();
        products.forEach((product) => {
            result.push({
                loc: `/products/${product.id}`,
                priority: 0.6,
                changefreq: 'weekly',
                lastmod: product.updatedAt || new Date().toISOString()
            });
        });

        return result;
    },

    // Excluir ciertas rutas
    exclude: [
        '/admin/*',
        '/api/*',
        '/private/*',
        '/_next/*',
        '/404',
        '/500'
    ],

    // Transformar URLs antes de generar el sitemap
    transform: async (config, path) => {
        // Personalizar metadatos para rutas específicas
        if (path === '/') {
            return {
                loc: `${config.siteUrl}${path}`,
                changefreq: 'weekly',
                priority: 1.0,
                lastmod: new Date().toISOString(),
                alternateRefs: [
                    {
                        href: `${config.siteUrl}`,
                        hreflang: 'es'
                    },
                    {
                        href: `${config.siteUrl}/en`,
                        hreflang: 'en'
                    }
                ]
            };
        }

        // Configuración por defecto
        return {
            loc: `${config.siteUrl}${path}`,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined
        };
    }
};

// Función auxiliar para obtener productos desde JSON
async function getProducts() {
    try {
        const fs = await import('fs/promises');
        const path = await import('path');

        // Ruta al archivo JSON de productos
        const productsPath = path.join(process.cwd(), 'src/data/products.json');

        // Leer el archivo JSON
        const productsData = await fs.readFile(productsPath, 'utf8');
        const products = JSON.parse(productsData);

        return Array.isArray(products) ? products : [];
    } catch (error) {
        console.warn('No se pudieron cargar los productos para el sitemap:', error.message);
        return [];
    }
}