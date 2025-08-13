# 🏭 Ingeniería OL - Sitio Web Corporativo

> Sitio web moderno y responsive para empresa de automatización industrial, desarrollado con Next.js 15 y diseño optimizado para SEO.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.0-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)

## 📋 Descripción

**Ingeniería OL** es una empresa líder en automatización industrial ubicada en Bogotá, Colombia. Este proyecto es su sitio web corporativo que incluye:

- **Catálogo de productos** industriales con búsqueda en tiempo real
- **Proyectos realizados** con galería interactiva
- **Información de servicios** especializados (termocuplas, material eléctrico)
- **Marcas aliadas** y testimonios de clientes
- **Asistente virtual** para atención al cliente
- **Integración con WhatsApp** para cotizaciones
- **SEO optimizado** para mejor posicionamiento

### 🎯 Características Principales

- ✅ **Responsive Design** - Adaptable a todos los dispositivos
- ✅ **Búsqueda Inteligente** - Modal con filtros en tiempo real
- ✅ **Carruseles Interactivos** - Para productos, marcas y testimonios
- ✅ **Formularios Funcionales** - Integración con correo electrónico
- ✅ **Performance** - Imágenes optimizadas y lazy loading
- ✅ **Accesibilidad** - Navegación por teclado y ARIA labels

## 🗂️ Estructura del Proyecto

```
ingenieriaol-webpage/
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 📁 backgrounds/      # Imágenes de fondo
│   │   ├── 📁 brands/          # Logos de marcas
│   │   ├── 📁 products/        # Catálogo de productos
│   │   ├── 📁 projects/        # Galería de proyectos
│   │   ├── 📁 socialmedia/     # Iconos redes sociales
│   │   └── 📁 thermocouples/   # Productos especializados
│   ├── 📁 videos/              # Videos corporativos
│   └── 📄 favicon.ico
│
├── 📁 src/
│   ├── 📁 app/                 # App Router (Next.js 15)
│   │   ├── 📁 about/           # Página "Quiénes Somos"
│   │   ├── 📁 products/        # Catálogo de productos
│   │   │   └── 📁 [id]/        # Páginas dinámicas de productos
│   │   ├── 📁 projects/        # Galería de proyectos
│   │   ├── 📁 thermocouples/   # Página de termocuplas
│   │   ├── 📁 trademarks/      # Página de marcas
│   │   ├── 📄 globals.css      # Estilos globales
│   │   ├── 📄 layout.jsx       # Layout principal
│   │   └── 📄 page.jsx         # Página de inicio
│   │
│   ├── 📁 components/          # Componentes reutilizables
│   │   ├── 📄 header.jsx       # Navegación principal
│   │   ├── 📄 footer.jsx       # Pie de página
│   │   ├── 📄 searchModal.jsx  # Modal de búsqueda
│   │   ├── 📄 virtualAssistant.jsx # Asistente virtual
│   │   ├── 📄 button.jsx       # Botones personalizados
│   │   └── 📁 carousels/       # Componentes de carrusel
│   │       ├── 📄 brandCarousel.jsx
│   │       ├── 📄 clientCarousel.jsx
│   │       ├── 📄 productCarousel.jsx
│   │       └── 📄 workCarousel.jsx
│   │
│   ├── 📁 data/               # Datos estáticos
│   │   ├── 📄 products.js     # Catálogo de productos
│   │   ├── 📄 projects.js     # Información de proyectos
│   │   ├── 📄 brands.js       # Marcas aliadas
│   │   └── 📄 testimonials.js # Testimonios de clientes
│   │
│   └── 📁 styles/             # Estilos personalizados
│       └── 📄 globals.css     # CSS global y variables
│
├── 📄 package.json           # Dependencias del proyecto
├── 📄 tailwind.config.js     # Configuración de Tailwind
├── 📄 next.config.js         # Configuración de Next.js
└── 📄 README.md             # Documentación
```

## 🛠️ Tecnologías y Librerías

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - Framework React con App Router
- **[React 18](https://reactjs.org/)** - Librería de interfaz de usuario
- **[JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Lenguaje de programación

### Styling & UI
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[Google Fonts](https://fonts.google.com/)** - Tipografías web (Saira, Aldrich, Jost, Agdasima)
- **[Lucide React](https://lucide.dev/)** - Iconos SVG modernos

### Funcionalidades
- **[Swiper Carousel](https://www.swiperjs.com/)** - Carruseles responsivos

### Optimización
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Optimización automática de imágenes
- **[Next/Font](https://nextjs.org/docs/basic-features/font-optimization)** - Optimización de fuentes
- **Lazy Loading** - Carga diferida de contenido

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18.x o superior
- **npm**, **yarn** o **pnpm**
- **Git**

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/ingenieriaol-webpage.git
cd ingenieriaol-webpage
```

### 2. Instalar dependencias
```bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📱 Páginas y Funcionalidades

### Páginas Principales
- **`/`** - Página de inicio con hero, servicios y call-to-actions
- **`/about`** - Información corporativa y equipo
- **`/products`** - Catálogo completo de productos
- **`/products/[id]`** - Páginas individuales de productos
- **`/projects`** - Galería de proyectos realizados
- **`/thermocouples`** - Página especializada en termocuplas
- **`/trademarks`** - Marcas aliadas y certificaciones

### Componentes Interactivos
- **Header** - Navegación responsiva con búsqueda
- **SearchModal** - Búsqueda en tiempo real de productos
- **VirtualAssistant** - Asistente de chat flotante
- **Carousels** - Múltiples carruseles para diferentes contenidos
- **Footer** - Enlaces importantes y información de contacto

## 🎨 Personalización

### Colores Corporativos
```css
/* globals.css */
:root {
  --color-red: #dc2626;     /* Rojo corporativo */
  --color-gray: #6b7280;    /* Gris texto */
  --color-bg: #f3f4f6;      /* Fondo gris claro */
}
```

### Tipografías
- **Saira** - Texto principal y navegación
- **Aldrich** - Títulos y headers destacados
- **Jost** - Texto secundario y descripciones
- **Agdasima** - Elementos decorativos

### Responsive Breakpoints
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Móvil grande
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Desktop grande
      '2xl': '1536px', // Ultra wide
    }
  }
}
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run export       # Exportar sitio estático

# Calidad de código
npm run lint         # Linting con ESLint
npm run lint:fix     # Corregir errores automáticamente

# Optimización
npm run analyze      # Analizar bundle size
npm run type-check   # Verificar tipos (si usas TypeScript)
```

## 📈 SEO y Performance

### Optimizaciones implementadas
- **Meta tags** dinámicos por página
- **Open Graph** para redes sociales
- **Structured Data** para buscadores
- **Sitemap** automático
- **Robots.txt** configurado
- **Lazy loading** en imágenes
- **Compresión** de imágenes WebP
- **Critical CSS** inline

### Lighthouse Score Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🤝 Contribución

1. **Fork** el proyecto
2. **Crear** rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abrir** Pull Request

### Convenciones de código
- **ESLint** para linting
- **Prettier** para formateo
- **Conventional Commits** para mensajes
- **Component naming** en PascalCase
- **File naming** en camelCase

## 📞 Contacto y Soporte

- **Empresa**: Ingeniería OL SAS
- **Email**: info@ingenieriaol.com
- **Teléfono**: +57 316 822 5865 | +57 317 573 1246
- **Dirección**: Bogotá, Colombia
- **Website**: [ingenieriaol.com](https://ingenieriaol.com)

**Desarrollado con ❤️ para Ingeniería OL SAS**