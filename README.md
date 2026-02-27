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

**Entrega**
Enlace del repositorio de github
 
## RA4 Elements d'interactivitat i accessibilitat en webs

### Part d'investigación:

[Documentación](/investigacion/Còpia%20de%20P4_%20Elements%20d’interactivitat%20i%20accessibilitat%20en%20webs.md)
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


## RA5 Verificació, usabilitat i optimització

### Part 1 - investigació

[Documentación](/investigacion/P5_Roberts_Yeneviel.md)

#### 1 Anàlisi de les Eines de Validació

- Investiga i explica en 2-3 línies com funciona tècnicament cadascuna d'aquestes eines (què analitzen exactament? analitzen el DOM o el codi font?):
    - WAVE (Extension)
    - Google Lighthouse
    - Chrome CSS Overview
    - Figma (Plugins de contrast o Dev Mode)

#### 2 Automatització SEO

- Busca quines eines, llibreries (npm) o plugins existeixen per generar automàticament un robots.txt i un sitemap.xml en un projecte amb React/Vite.

#### 3 Color

- Investiga sobre la ràtio de contrast 4.5:1 (Nivell AA).
- Per què és exactament 4.5? A quin tipus de text afecta? En quin cas podem baixar a 3:1?

### Part 2  Diagnòstic de la teva Web

#### Pas A: Diagnòstic Inicial

1. Executa el teu projecte localment.
2. Passa Lighthouse, WAVE i CSS Overview.
3. Anota TOTS els errors que apareguin (des de falta d'etiquetes alt 
4. fins a estructures d'encapçalament incorrectes o focus perduts).

#### Pas B: Refactorització Completa

1. Has d'aplicar tots els canvis necessaris al codi React per solucionar els errors detectats.
2. Semàntica HTML: Revisa el teu component principal. Canvia els <div> innecessaris per etiquetes semàntiques (main, article, section, nav, footer).
3. Formularis: Assegura't que tots els input tenen un label associat (o aria-label si el disseny no permet text visible).
4. Botons Icona: Si tens botons que només són icones (xarxes socials, tancar, menú), afegeix l'atribut aria-label perquè els lectors de pantalla sàpiguen què fan.
5. L'objectiu és aconseguir:
- 0 errors a WAVE.
- Semàfor verd (>90) a la categoria d'Accessibilitat de Lighthouse.

### Part 3: Implementació SEO

#### 1 Meta Etiquetes (SEO On-Page)

- Ves al fitxer index.html del teu projecte Vite.
- Afegeix/Edita el <title> perquè sigui descriptiu.
- Afegeix la meta description (< 160 caràcters) explicant de què va la teva web.
- Assegura't que tens el lang="ca" (o l'idioma que toqui) a l'etiqueta <html>

#### 2 Robots.txt

- Crea un fitxer robots.txt a la carpeta public/ del teu projecte Vite (així es copiarà a l'arrel en fer el build).
- Configuració: Permet l'accés a tothom, però bloqueja una ruta fictícia anomenada /admin o /privat.

#### 3 Sitemap.xml

- Crea un fitxer sitemap.xml manualment a la carpeta public/.
- Afegeix les URLs principals de la teva aplicació (Home, Contacte, Llistat, etc.).
- Assigna una priority de 1.0 a la Home i 0.8 a la resta.


### Part 4: Auditoria Externa 

Escull una web real (pot ser la web d'un ajuntament petit, una botiga online local o una web que utilitzis sovint). No valen gegants com Google o Amazon (ho tenen massa optimitzat).

- Passa-li l'eina WAVE o Lighthouse.

**Redacta un informe responent**

- Quina nota treu?
- Quin és l'error d'accessibilitat més greu que has trobat? (Ex: Menús inaccessibles per teclat, imatges sense alt, contrast terrible).
- Com ho arreglaries tècnicament si fossis el desenvolupador d'aquella web?


### Entregable 
- Fitxer PDF amb el nom P5_Cognom_Nom.pdf amb tots els apartats que cal fer informes o explicació.
- Enllaç a GitHub del vostre projecte amb les modificacions detectades.
- Robotx.txt
- Sitemap.xml


## RA6 Disseny responsive i frameworks actuals

[Documentación](/investigacion/P6_Roberts_Yeneviel.md)

### Part 1 - Usabilitat web

#### 1 principis heurístics de Nielsen

- Pàgina web externa que no els compleixi.
    - Fes un informe sobre una pàgina web que no compleixi els principis de Nielsen. Explica perquè no es compleixen i què faries per solucionar-ho.
- El teu projecte
    - Fes el mateix que a l’apartat anterior, però ara amb la teva pàgina web que has estat creant durant el curs. Analitza tots els punts i justifica si es segueixen o no. En cas que no, soluciona les errades que trobeu.

#### 2 Testing 

- El teu projecte
    - Explica com faries en la teva pàgina web un test A/B. Indica 3 ítems que podries testejar d’aquesta manera.
- Investiga sobre la utilització de Hotjar, programari per detectar els clics que fan els usuaris.

### Part 2 - Disseny responsive

Refactoritzar tota la web pot ser massa llarg. Per demostrar que domines Sass i el Mobile First, hauràs d'escollir UNA única secció complexa de la teva web (ex: el Header/Navegació, el Footer, la Graella de Productes o la Hero Section) i aplicar-li tot el que saps.


#### 1 Instal·lació i Configuració Sass

1. Instal·la Sass al teu projecte (npm add -D sass).
2. Canvia l'extensió del fitxer d'estils de la secció triada de .css a .scss.
3. Crea un fitxer global _variables.scss on defineixis els colors corporatius, les mides de font i els espaiats de la teva web.

#### 2 Creació del fitxer css a partir de SCSS/Sass

- Objectiu: Que el codi CSS segueixi l'estructura visual de l'HTML.
- Substitueix qualsevol color "fix" (hexadecimal) per les variables que has creat al pas anterior.
- Ha de contenir un condicional
- Ha de contenir un bucle 
- Has d’aplicar nitiditat

#### 3  Maquetació Mobile First 

Has de refer la responsivitat de la secció escollida seguint l'estratègia Mobile First:

1. Base (Mòbil): El CSS base (fora de les media queries) ha de ser per a mòbils. Assegura't que la teva secció es veu perfecta en una amplada de 375px. Utilitza unitats relatives (rem, %) en lloc de píxels.
2. Tablet (min-width: 768px): Afegeix un breakpoint perquè la secció s'adapti a tauletes (ex: passar d'1 columna a 2, o canviar la mida del text).
3. Desktop (min-width: 1024px): Afegeix un últim breakpoint per a pantalles grans.

- **Nota:** Si has triat el menú de navegació, aquest ha de ser un menú "hamburguesa" (o simplificat) en mòbil i desplegat en escriptori.

#### 4 Verificació

1. Cross-Browser: Obre la teva web en un navegador diferent de l'habitual (si uses Chrome, prova Firefox o Safari). Comprova que la teva secció es veu bé.
2. Can I Use: Busca a caniuse.com una propietat moderna de CSS que hagis fet servir a la secció (ex: gap, flex, grid, backdrop-filter). Fes una captura de pantalla demostrant que saps verificar si és segur utilitzar-la.

### Entregable 
- Fitxer PDF amb el nom P6_Cognom_Nom.pdf amb tots els apartats que cal fer informes o explicació.
- Enllaç a GitHub del vostre projecte amb les modificacions detectades.
