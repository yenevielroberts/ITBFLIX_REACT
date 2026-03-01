Aquí tienes un resumen exhaustivo y estructurado en Markdown de todos los temas cubiertos en los documentos proporcionados:

---

# Resumen General: Desarrollo Web y UX

## 1. Diseño Responsive y Preprocesadores

El diseño responsive es el estándar actual que permite que una web se adapte a cualquier dispositivo desde un único código.

### Conceptos Clave

* **Importancia**: Más del 60% del tráfico es móvil, Google utiliza el *Mobile-First Indexing* y mejora la experiencia de usuario (UX).
* **Responsive vs. Adaptativo**: El diseño responsive es fluido y se adapta milímetro a milímetro. El adaptativo utiliza plantillas fijas para medidas de pantalla específicas.
* **Estrategias**:
* **Mobile First**: Diseñar primero para móvil y añadir estilos para pantallas grandes (`min-width`). Obliga a priorizar contenido esencial.
* **Desktop First**: Diseñar para PC y reducir para móvil (`max-width`), lo que suele generar webs lentas.


* **Media Queries**: Son condicionales de CSS que cambian el diseño según los píxeles del dispositivo (Breakpoints habituales: 576px, 768px, 992px, 1200px).
* **Maquetación**: Se utiliza **Flexbox** para una sola dimensión y **CSS Grid** para estructuras de dos dimensiones (filas y columnas).

### Sass/SCSS

* **Diferencia**: Sass es el motor. SCSS es el lenguaje que usa llaves y puntos y coma (recomendado), mientras que la sintaxis original de Sass usa indentación.
* **Ventajas**:
* **Variables**: Permiten guardar valores como colores para cambiarlos en un solo lugar.
* **Nesting**: Escribir estilos siguiendo la jerarquía del HTML.
* **Mixins**: Bloques de código reutilizables.
* **Lógica**: Soporta condicionales (`@if`), bucles (`@each`) y funciones para cálculos.


* **Compilación**: El navegador solo entiende CSS; los archivos `.scss` deben compilarse a `.css` antes de vincularlos al HTML.

---

## 2. Accesibilidad Web (WCAG)

Consiste en diseñar para que personas con discapacidades puedan utilizar la web en igualdad de condiciones.

### Principios POUR

* **Perceptible**: La información debe ser mostrada de forma que los usuarios puedan percibirla con sus sentidos (ej. texto alternativo en fotos).
* **Operable**: Los componentes deben ser interactuables (ej. navegación por teclado).
* **Comprensible**: La interfaz y la información deben ser claras (ej. mensajes de error inteligibles).
* **Robusto**: El contenido debe ser compatible con diferentes navegadores y tecnologías de apoyo (ej. lectores de pantalla).

### Niveles y Técnicas

* **Nivel AA**: Es el estándar profesional y legal exigido habitualmente.
* **Semántica**: Usar etiquetas nativas (`<nav>`, `<button>`, `<main>`) en lugar de `<div>` mejora el SEO y la accesibilidad.
* **Técnicas**:
* **Texto Alternativo**: Todas las imágenes deben tener un atributo `alt` descriptivo.
* **Formularios**: Usar etiquetas `<label>` vinculadas a los inputs; los placeholders no son sustitutos.
* **ARIA**: Atributos como `aria-label` se usan cuando el HTML nativo no es suficiente para describir un elemento (ej. un botón que solo tiene un icono).
* **Contraste**: El texto normal debe tener una ratio mínima de 4.5:1 respecto al fondo (Nivel AA).



---

## 3. SEO (Search Engine Optimization)

Estrategias para aparecer en las primeras posiciones de los resultados orgánicos de buscadores como Google.

### Funcionamiento de Google

1. **Rastreo (Crawling)**: Los robots (*spiders*) viajan por la red saltando de enlace en enlace.
2. **Indexación**: Google analiza el código y lo guarda en su base de datos.
3. **Ranking**: El algoritmo ordena los resultados según relevancia y autoridad.

### Áreas de Acción

* **On-page (Código y Contenido)**:
* Uso de palabras clave (*keywords*).
* Etiquetas `<title>` y `<meta description>`.
* Velocidad de carga (WPO).
* URLs limpias y legibles.


* **Off-page (Autoridad)**: Se basa principalmente en conseguir *backlinks* (enlaces externos) de calidad hacia tu sitio.
* **Archivos Técnicos**:
* **Robots.txt**: Indica a los bots qué secciones no deben rastrear.
* **Sitemap.xml**: Listado de todas las URLs para ayudar a su descubrimiento.



---

## 4. Usabilidad Web

Grado en que un usuario puede interactuar con una web de forma efectiva, eficiente y satisfactoria.

### UI vs UX

* **UI (User Interface)**: La parte visual con la que se interactúa (colores, botones, disposición).
* **UX (User Experience)**: La sensación global y facilidad de uso; "cómo se siente" al usarla.

### Las 10 Heurísticas de Nielsen (Principios de Oro)

1. **Visibilidad del estado**: Feedback constante al usuario.
2. **Mundo real**: Hablar el mismo idioma y usar símbolos lógicos para el usuario.
3. **Control y libertad**: Capacidad de deshacer o cancelar acciones.
4. **Consistencia**: Mantener estándares (ej. el carrito siempre arriba a la derecha).
5. **Prevención de errores**: Diseñar para evitar que el usuario se equivoque.
6. **Reconocimiento**: No obligar al usuario a memorizar datos.
7. **Flexibilidad**: Atajos para expertos y facilidad para novatos.
8. **Estética**: Diseño minimalista con información relevante.
9. **Ayuda ante errores**: Mensajes claros sobre qué ha fallado.
10. **Ayuda y documentación**: Secciones de FAQ o soporte.

### Herramientas de Verificación

* **Google Lighthouse**: Audita rendimiento, accesibilidad y SEO.
* **Hotjar**: Mapas de calor (clics y scroll) y grabaciones de sesiones reales para detectar frustración.
* **Test A/B**: Técnica científica que divide el tráfico entre dos versiones para ver cuál convierte mejor.


Temás para los apuntes

Importancacía del diseño responsive
responsive vs adaptive
Extrategias de diseño
media queries
