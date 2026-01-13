## RA2 Tecnologies i einas per al disseny i desenvolupament web
### P2_ex1: Tecnologies i einas per al disseny i desenvolupament web
Instal·lar les tecnologies necessaries per el disseny i desevolupament web:
- Node.js
- Visual studio code
- Crear un projecte amb React, Vite i Tailwind css

**Entrega** 
Imagen de prueba que se han creado el proyecto correctamente

### P2_ex2_ Tecnologies i einas per al disseny i desenvolupament web
Implementació d'una plantilla web amb una estructura basíca d'un lloc web amb Tailwind CSS

**Temática de mi web: web de películas y series**
- Header
- nav
- Main
- Footer

**Entrega** 
Enlace del repositorio de github

## RA3 Gestio i optimització de contigut multimédia

### P3_ex1 Gestió i optimització de contigut multimédia
Crear un menú de navegación funcional

- Instal·lar React Router DOM
- Configurar les rutes principals
- Utilitzar els components:
-   BrowserRouter
    - Routes
    - Route
    - Link
 - Aplicar un CSS diferent si estic visitant la pàgina corresponent

**Entrega**
Enlace del repositorio de github

### P3_ex2 Gestió i optimització de contigut multimédia
Integració i optimització de contingut multimèdia en React
Implementació d'un nou apartat: Multimedia
- Imatges:
  
    - optimitzadas amb Webp, compressió adequada i redimensió segons la mida de la pantalla.
    - Afegir l'atribut atl per accessibilitat i, si cal, srcset per a different densitats de pixel
    - Utilitzar lazy loading
- Àudio
    - Crear un compoenet audioplayer amb almeys un fitxer d'audio (MP3 i OGG per compabilitat)
    - Afegir controls i fallback per a navegadors que no suportin l'àudio
 
- Vídeo
    - Crear un component VideoPlayer amb un video optimitzat
    - Incluir mínim dos formats (MP4+ WebM) per compabilitat entre navegadors
    - Afegir controls
    - Utilitzar lazy loading si el vídeo no és a la primera pantalla.
      
- Organització en component
    - Cada tipus de contigut multimèdia ha de ser un component independet (Gallery per les imatges, AudioPlayer, VideoPlayer)
    - Importar i exportar correctament els components dins la App principal.
 
## RA4

### Part d'investigación:

- UseRef
- UseState
- ARIA
- Media queries

### Part pràctica:

**Tarea 1- Uso de useref**
Hacer un botón que cuando se haga clic haga que el focus se situe en un formulario o elemento especifico de la página.

En el formulario de login es donde he implementado esta función.

**Tarea 2 - Integración de ARIA**

He utilizado aria-live="assertive" en un div que muestra un mensaje de exito o error para que avise del cambio en el formulario de log in.

aria-invalid - Indica que un dato en un form es erróneo. Lo he utilizado en el form de log in para el camp de email.

role="button"- Para definir el tipo de objeto. Lo he utilizado en el homepage para las imagenes que al hacer click llevan a otra página (De momento solo regarga la página inicial)

**Tarea 3- Web Responsive**
Home page

Convertir el menú lateral en un menú amburguesa cuando la pantalla sea pequeña.
