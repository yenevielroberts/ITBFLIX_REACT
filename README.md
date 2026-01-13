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
- **Imatges:**
  
    - optimitzadas amb Webp, compressió adequada i redimensió segons la mida de la pantalla.
    - Afegir l'atribut atl per accessibilitat i, si cal, srcset per a different densitats de pixel
    - Utilitzar lazy loading
- **Àudio**
    - Crear un compoenet audioplayer amb almeys un fitxer d'audio (MP3 i OGG per compabilitat)
    - Afegir controls i fallback per a navegadors que no suportin l'àudio
 
- **Vídeo**
    - Crear un component VideoPlayer amb un video optimitzat
    - Incluir mínim dos formats (MP4+ WebM) per compabilitat entre navegadors
    - Afegir controls
    - Utilitzar lazy loading si el vídeo no és a la primera pantalla.
      
- **Organització en component**
    - Cada tipus de contigut multimèdia ha de ser un component independet (Gallery per les imatges, AudioPlayer, VideoPlayer)
    - Importar i exportar correctament els components dins la App principal.
 
## RA4 Elements d'interactivitat i accessibilitat en webs

### Part d'investigación:
https://docs.google.com/document/d/16B3LltrIDMVB6hQCZbS_zYzup27PqkeWcJLIHh52jzA/edit?usp=drive_link 
- **UseRef i UseState**

    - Quina utilitat té el hook useRef?
    - En quis casos farem servir useRef?
    - Fes una taula comparativa entre el hook useState i el hook i useRef. Indica les seves diferències, quan faries servir cadascuna d'ells i un exemple de la seva utilització.
        
- **Accessibilitat web - ARIA WCAG**
    - Que volen dir les sigles ARIA
    - Quina utilitat té
    - Posa un exemple del seu funcionament
    - Que volen dir les sigles WCAG
    - Quina utlitat té
    - Posa un exemple del seu funcionament
    - Cerca eines obertes que millorin l'acesibilitat del nostre lloc web 
- **Web responsive - Media queries**
    - Què vol dir que una pàgina sigui responsive
    - Cerca per internet la deficnició de media queries
    - Posa un exemple sobre com fer media queries i la seva aplicació dins d'una pàgina web.
      
### Part pràctica:

#### Tarea 1- Ús de useref
Crea una funcionalitat a la pàgina web wue utilitzi el hook useRef per controlar un element DOM directament

**Què he fet**

- He fet un botó que quan se faci clic fa que el focus es posi en un input del formulari de login

#### Tarea 2 - Integración de ARIA
Incluir atributs ARIa en algun dels components o formularis de la pàgina per millorar l'accessibilitat.

Aplicacio de les WCAG:
- Explicar com les WCAG poden millorar la vostra pàgina i com aplicar les directivas en el vostre cas.
- Revisa el constrast de colores de la vostra pàgina i assegureu-vos que compleixi amb els requisits WCAG.
- Provue d'aplicar altres millores relacionadas amb les WCAG, com la navegabilitat del teclat (per exemple, afegir tabindex en elemets interactius).

**Què he fet**
- He utilizado aria-live="assertive" en un div que muestra un mensaje de exito o error para que avise del cambio en el formulario de log in.

- aria-invalid - Indica que un dato en un form es erróneo. Lo he utilizado en el form de log in para el camp de email.

- role="button"- Para definir el tipo de objeto. Lo he utilizado en el homepage para las imagenes que al hacer click llevan a otra página (De momento solo regarga la página inicial)

#### Tarea 3- Web Responsive

- Tria una part de la pàgina web i fer la responsive mitjançcant media queries.
- Si la pàgina tè una barra lateral, fe que desaparegui en pantalles petites i surti un menú hamburguesa.
- Canviar l'estructura de la pàgina web en funció de la  mida de la pantalla.
- Test de responsivitat

**Què he fet**
- Convertir el menú lateral en un menú amburguesa cuando la pantalla sea pequeña.
- Canvia les mides de les imatges en pantanllas petites i les lletres
- Las imatges es mostran en forma de columna en cop de fila
  

**Entrega** 
Enlace del repositorio de github
