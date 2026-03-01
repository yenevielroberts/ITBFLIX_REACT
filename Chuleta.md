# Apuntes (chuleta) RA 5 y RA 6

## Diseño responsive

**Importantacia:**

- Hábitos de consumo: Más del 60% del tráfico web mundial proviene de dispositivos móviles. Si tu web no funciona al móvil, estás ignorando la mayoría de tus usuarios.

- SEO (Posicionamiento en Google): Google utiliza el Mobile-*First Indexing. Esto quiere decir que Google mira primero la versión móvil de tu web para decidir en qué posición sales a los resultados. Si no es responsiva, Google te penaliza.

- Experiencia de Usuario (UX): Un usuario que tiene que hacer "zoom" con los dedos para leer un texto o moverse horizontalmente para ver una imagen se frustra y marcha.

- Eficiencia: Antiguamente se hacían dos webs (una para PC y una "m.web.com" para móvil). Con el diseño responsiu, solo mantienes un único código que sirve para todo, ahorrando tiempo y dinero.

### Responsive vs adaptative
- Diseño Responsiu (Responsive Web Design - RWD) 

**Concepto:** El diseño es fluido, como el agua. Se adapta en el espacio disponible milímetro a milímetro.

**Cómo funciona:** Utiliza parrillas flexibles (%), imágenes fluidas y CSS Media Queries. Si estiras la ventana del navegador, el contenido se reajusta continuamente.

**Ventaja:** Cubre cualquier medida de pantalla, incluso las que todavía no existen. Es el estándar actual (gracias a frameworks como Bootstrap o Tailwind).

- Diseño Adaptativo (Adaptive Web Design - AWD)

**Concepto:** El diseño hace saltos (snaps). Tiene diseños "fijos" predefinidos para medidas concretas de dispositivos.

**Cómo funciona:** Detecta el dispositivo (o la anchura) y carga la plantilla estática diseñada específicamente para aquella medida (ex: una versión para 320px, otra para 768px, otra para 1024px).

## Estrategias de diseño

### Mobile first

Estrategia: Empiezas diseñando la versión de pequeña pantalla (móvil) con los estilos baso. Después, añades código para pantallas más grandes (min-*width).

Por qué es mejor: Te obliga a priorizar el contenido esencial (a la pequeña pantalla no cabe todo). El código suele ser más ligero y rápido. Es la tendencia recomendada hoy en día.

### Desktop first

Estrategia: Empiezas diseñando la web completa para ordenador. Después, intentas meterlo todo en pantallas pequeñas usando max-*width para esconder o reducir cosas.

Problema: A menudo acaba con webs móviles lentas que cargan recursos innecesarios.

## Media queries

Las media queries son la tecnología base que hace posible el diseño responsiu. Son "condicionales" dentro de tu CSS (como un if en programación).

Breakpoints: Son los píxeles donde el diseño cambia. Los más habituales son:

576px (Móviles apaisados)

768px (Tabletas)

992px (Portátiles)

1200px (Escritorios grandes)




Temás para los apuntes

Importancacía del diseño responsive
responsive vs adaptive
Extrategias de diseño
media queries
procesadores