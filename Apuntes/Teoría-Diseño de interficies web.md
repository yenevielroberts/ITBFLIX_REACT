# UseRef

## **UseRef** 

[https://react.dev/reference/react/useRef](https://react.dev/reference/react/useRef)   
es un Hook que se usa para dos cosas principales: 

1. Acceder y manipular directamente elementos del DOM. Por ejemplo un input  
2. Crear variables mutables que persisten entre renderizados sin causar una nueva renderización. Siendo útil para guardar valores que no afectan la UI directamente.

### **Ejemplos:**

* **Referenciar elementos del DOM:Focusing a text input**

import { useRef } from 'react';

export default function Form() {  
  const inputRef \= useRef(null);

  function handleClick() {  
    inputRef.current.focus();  
  }

  return (  
    \<\>  
      \<input ref={inputRef} /\>  
      \<button onClick={handleClick}\>  
        Focus the input  
      \</button\>  
    \</\>  
  );  
}

* **Referenciar un valor con ref:click counter**

This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler.

If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.

import { useRef } from 'react';

export default function Counter() {  
  let ref \= useRef(0);

  function handleClick() {  
    ref.current \= ref.current \+ 1;  
    alert('You clicked ' \+ ref.current \+ ' times\!');  
  }

  return (  
    \<button onClick={handleClick}\>  
      Click me\!  
    \</button\>  
  );  
}

* Evitar recrear los contenidos de ref

React saves the initial ref value once and ignores it on the next renders.

function Video() {  
 const playerRef \= useRef(new VideoPlayer());  
 // …

Although the result of new VideoPlayer() is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating expensive objects.

To solve it, you may initialize the ref like this instead:

function Video() {  
 const playerRef \= useRef(null);  
 if (playerRef.current \=== null) {  
   playerRef.current \= new VideoPlayer();  
 }  
 // …

Normally, writing or reading ref.current during render is not allowed. However, it’s fine in this case because the result is always the same, and the condition only executes during initialization so it’s fully predictable.

# Accesibilidad

## **ARIA**

Accessible Rich Internet Applications (ARIA) es una colección de atributos que definen cómo realizar contenido y aplicaciones web (especialmente las desarrolladas con Javascript) más accesibles para las personas con discapacidades.

## **WCAG**

 Web Content Acceptability Guidelines(Pautas de Accesibilidad para el Contenido Web).Explican cómo hacer el contenido web más accesible para las personas con discapacidad.

### **4 principios fundamentales**

 Si falla uno, la experiencia se rompe.

1. perceptible: que el usuario pueda recibir la información(no solo verla, también oírla)  
2. Operable: Que el usuario pueda navegar (Usar el ratón, el teclado o la voz).  
3. Comprensible: Que el contenido y la interfaz sean claros  
4. Robusto: Que funcione bien en diferentes navegadores y tecnologías asistivas.

### **Los 3 niveles de cumplimiento**

| Nivel | Significado | Ejemplo |
| :---- | :---- | :---- |
| **A** | **Esencial.** Si no lo cumples, es imposible navegar para muchos. | Todo video debe tener subtítulos grabados. |
| **AA** | **Estándar legal.** Es el nivel que exigen la mayoría de los gobiernos y empresas. | El contraste de color es adecuado y el foco del teclado es visible. |
| **AAA** | **Excelencia.** El nivel más alto de accesibilidad. | Se incluye lenguaje de señas en los videos y no hay límites de tiempo en sesiones. |

Para mejorar la accesibilidad web con código abierto, puedes usar herramientas como [WAVE](https://www.google.com/search?q=WAVE&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIARAC&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on) (extensión y web), [Lighthouse](https://www.google.com/search?q=Lighthouse&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIARAD&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on) (integrado en Chrome DevTools), [aXe](https://www.google.com/search?q=aXe&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIARAE&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on) (librería y extensión), [Pa11y](https://www.google.com/search?q=Pa11y&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIARAF&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on) (suite de herramientas CLI y escritorio) y lectores de pantalla como [NVDA](https://www.google.com/search?q=NVDA&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIARAG&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on), que analizan, identifican problemas (contraste, falta de textos alternativos, navegación por teclado) y ofrecen soluciones para cumplir estándares como WCAG, ayudando a crear sitios más inclusivos. 

Herramientas de análisis visual y extensiones

* WAVE (Web Accessibility Evaluation Tool): Analiza páginas web, resaltando errores, advertencias y características de accesibilidad directamente en el contenido con una interfaz visual clara.  
* Lighthouse (Google): Integrado en Chrome DevTools, evalúa accesibilidad, rendimiento y SEO, dando una puntuación y sugerencias para mejorar.  
* [aXe](https://www.google.com/search?q=aXe&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIAxAD&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on) (Accessibility Engine): Una librería de código abierto potente que se integra en navegadores (extensión) y entornos de desarrollo, utilizando reglas del W3C para detectar problemas.  
* [Tota11y](https://www.google.com/search?q=Tota11y&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIAxAF&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on): Una extensión de navegador de código abierto que ayuda a identificar problemas de accesibilidad comunes visualmente. 

Herramientas de línea de comandos y escritorio

* [Pa11y](https://www.google.com/search?q=Pa11y&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIBRAB&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on&mstk=AUtExfCr9Uo254Z3GLuAI8fD2d40JvlfHB3D4hqMLTNHck8EbGuh8EqQAvNyFzICwB8cm7Xrg0hwv9Er4S8C5e26sdS_hlFiG2cowbGsKpQRYSVRMwZIgMLlCT-FUstlXM0G3HY&csui=3) (y Koa11y): Una suite de herramientas de línea de comandos (CLI) para pruebas automatizadas que puede programarse para ejecutarse diariamente y una aplicación de escritorio (Koa11y) para detectar problemas.  
* [miChecker](https://www.google.com/search?q=miChecker&sca_esv=908d569159eb1a2e&ei=l0xAabGFCYWTkdUP9pyKgQc&ved=2ahUKEwj2gLeNlsCRAxUdKvsDHVqlH3YQgK4QegQIBRAD&uact=5&oq=herramientas++de+codigo+abierto+para+mejorar+la+accesibilidad+web&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWhlcnJhbWllbnRhcyAgZGUgY29kaWdvIGFiaWVydG8gcGFyYSBtZWpvcmFyIGxhIGFjY2VzaWJpbGlkYWQgd2ViMgQQIRgKSMlxUL0KWItvcAJ4AZABAJgBmwGgAfoXqgEEOC4yMLgBA8gBAPgBAZgCG6AC-RXCAgoQABiwAxjWBBhHwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICBhAAGAgYHsICCBAAGIAEGKIEwgIHEAAYgAQYDcICCBAAGAcYCBgewgIGEAAYDRgewgIFEAAY7wXCAggQABgIGA0YHsICChAhGKABGMMEGAqYAwCIBgGQBgiSBwQ0LjIzoAf2ZrIHBDIuMjO4B_QVwgcHMi4xMS4xNMgHUIAIAA&sclient=gws-wiz-serp&safe=active&ssui=on&mstk=AUtExfCr9Uo254Z3GLuAI8fD2d40JvlfHB3D4hqMLTNHck8EbGuh8EqQAvNyFzICwB8cm7Xrg0hwv9Er4S8C5e26sdS_hlFiG2cowbGsKpQRYSVRMwZIgMLlCT-FUstlXM0G3HY&csui=3) (Versión 3.0): Herramienta gratuita para evaluar la accesibilidad y ayudar a cumplir estándares. 

Lectores de pantalla (Tecnologías de asistencia)

* NVDA (NonVisual Desktop Access): Un lector de pantalla gratuito y de código abierto para Windows, fundamental para entender cómo personas con discapacidad visual interactúan con tu web.  
* JAWS (Job Access With Speech): Aunque es de pago, es un estándar en el mercado y un referente para probar la experiencia con lectores de pantalla. 

Consejos clave

* Combinación de pruebas: Las herramientas automáticas son excelentes, pero no perfectas; siempre se necesita una revisión manual para capturar la experiencia de usuario completa.  
* Estándares WCAG: Todas estas herramientas se basan en las Web Content Accessibility Guidelines (WCAG) para identificar incumplimientos.  
* Foco en el usuario: Además de las herramientas, considera el diseño inclusivo y la calidad del contenido para una experiencia verdaderamente accesible. 

[Una breve introducción a ARIA](https://www.paradigmadigital.com/dev/introduccion-aria/) 

## 

## **¿Cuándo usar ARIA y cuándo usar HTML nativo?**

Primero me hago tres preguntas

1. **¿Existe un elemento HTML nativo para esto(Ej: \<button\>,\<nav\>, \<details\>)?**  
     
   Si la respuesta es **SÍ** úsalo. No uses ARIA.  
     
2. **¿El diseño me obliga a usar un elemento no semántico (como un div)?**

	Si la respuesta es **SÍ**  porque necesito un estilo visual imposible de lograr con el elemento nativo, entonces debo usar ARIA para “explicar” qué es ese \<div\>

3. ¿**Es un componente complejo que no existe en HTML**?(Ej: un sistema de pestañas/tabs, un árbol de archivos o un carrusel)   
   Aquí es donde ARIA es obligatorio.  
   

## **Casos en los que usar ARIA:**

* **Elementos que no existe en HTML**  
* **Estados que cambian dinámicamente:** HTML es estático. Si un botón hace que aparezca un menú, necesitas ARIA para avisar del cambio de estado  
* **Regiones que se actualizan solas:** Si hay un chat o un marcador deportivo que se actualiza sin recargar la página, ARIA permite que el lector de pantalla lea el nuevo texto automáticamente.

## **Atributos ARIA**

### **Atributos por identidad (Roles)**

El rol define qué es el elemento. Se usa cuando el HTML no tiene una etiqueta específica para lo que estás construyendo.

* role=”dialog”: Para ventanas modales  
* role=”alert”: Para mensajes de error o éxito importantes


**Ejemplo de una alerta personalizada**  
\<div role="alert" class="error-banner"\>  
  ¡Cuidado\! Tu sesión está a punto de caducar.  
\</div\>

### **Atributos de estado (States)**

Indican la condición actual de un elemento. Estos suelen cambiar dinámicamente con JavaScript. 

* aria-expanded: (true/false) indica si un menú o acordeón está abierto.  
* aria-hidden: (true/false) Indica si un elemento debe ser ignorado por el lector de pantalla (útil para iconos decorativos o cosas ocultas visualmente).   
* aria-checked:(true/false) para checkboxes ou interruptores personalizados.  
  


**Ejemplo de un menú desplegable**

\<button aria-expanded=”false” onclick=”toggleMenu()” \>Menu \</button\>  
\<ul id=”menu” hidden\>  
\<li\>inicio\</li\>  
\</ul\>

### **Atributos de Etiquetado (Labels)**

Sirven para darle un nombre o descripción a elementos que no tienen texto visible.

* **aria-label:** Proporciona un texto invisible que el lector leerá. Muy usado en botones que solo tienen un icono.  
* **aria-labelledby:** Conecta un elemento con el id de otro elemento que sirve como su etiqueta.  
* **aria-describedby:** Conecta un elemento con una descripción más larga (como un texto de ayuda debajo de un input).


**Ejemplo de un botón con icono**

\<button aria-label=”cerrar ventana”\>  
	\<span class=”icon-x”\>\</span\>  
\</button\>

### **Atributos de Relación y Dinamismo**

Explican cómo se conectan las piezas o cómo reaccionan a los cambios

* **aria-controls:** Indica qué elemento es controlado por el botón actual.  
* **aria-live:** (polite/assertive) Avisa cambios de contenido sin que el usuario mueva el foco.  
* **aria-current:** Si estás en la página de "Inicio", tu enlace debería indicarlo a los lectores de pantalla: \<a href="/" className="active-link" aria-current="page"\>Inicio\</a\>

##  Cuidado con `target="_blank"`

Si tus enlaces abren una pestaña nueva, debes avisar al usuario, ya que esto puede desorientar a personas con discapacidades cognitivas o visuales:

\<a href="https://google.com" target="\_blank" rel="noopener noreferrer" aria-label="Google (abre en una nueva pestaña)"\>  
  Ir a Google  
\</a\>

## **Pautas WCAG**

1. **Perceptibilidad (Que todo puedan verlo/oírlo)**  
     
* **Contraste de texto:** El texto debe resaltar sobre el fondo. Si se usa blanco sobre colores claros, falla.  
* **Texto alternativo en imágenes:** todas las etiquetas \<img\> deben tener un atributo alt.  
* **No usar solo el color para informar:** No confiar solo en el color. Añadir un icono o un texto explicativo.


2. **Operatividad (Que todos puedan navegarla)**  
     
* **Accesible por teclado:** Todo lo que sea clickeable debe poder activarse usando la tecla tab y enter.  
* **En React:** siempre usar etiquetas \<button\> para el menú hamburguesa, no un \<div\> con un onClick, porque los botones ya incluyen soporte de teclado por defecto.

* Indicador de foco visible: Nunca quitar el contorno azul que aparece cuando navegas con el teclado (outline: none es mala práctica a menos que lo reemplaces por otro estilo visual claro).


3. **Comprensibilidad (Que sea fácil de entender)**  
     
* Etiquetas en formularios: Tienen etiquetas \<label\>. Asegúrate de que estén vinculadas a sus inputs mediante el atributo htmlFor en React:


\<label htmlFor="email"\>Correo:\</label\>  
\<input id="email" type="email" /\>

Si y tengo un label bien vinculado a un input no hace falta usar aria-label. Al hacer clic sobre el texto del \<label\> se pone el focus sobre el input correspondiente.

* Identificación de errores: Si el usuario se equivoca al llenar el formulario, el mensaje de error debe ser claro y decirle exactamente qué corregir.

4. **Robustez (Que funcione en cualquier navegador/asistente)**

* **Uso de HTML Semántico:** Usa \<header\>, \<nav\>, \<main\>, \<footer\> y \<section\>. Esto ayuda a los lectores de pantalla a entender la estructura de tu página sin necesidad de CSS.

###  **¿Enlace o Botón? (La regla de oro de WCAG)**

Uno de los errores más comunes en accesibilidad es usar un enlace cuando en realidad necesitas un botón.

* **Usa `<a>`**: Si la acción **cambia la URL** o te lleva a otra sección (Navegación).  
* **Usa `<button>`**: Si la acción **ejecuta una función** en la misma página (abrir un modal, enviar un formulario, activar el menú hamburguesa).

# Media queries

## **Media queries**

Son un tipo de condicional de diseño, en las que si se cumple la condición se aplicarán unos estilos y en caso que no se aplicarán otros.

Como hacer una media queries:  
Usar la regla @media seguida de una condición (como (max-width: 768px)) y luego escribir los estilos que quiero aplicar solo cuando esa condición se cumple.

Ajuste para pantallas más grandes  
@media screen and (min-width: 768px){  
	img{  
		width:48%;  
		margin:1%;  
}  
}

Ejemplo  
@media (min-width: 600px) {  
  .header {grid-area: 1 / span 6;}  
  .menu {grid-area: 2 / span 1;}  
  .content {grid-area: 2 / span 4;}  
  .facts {grid-area: 2 / span 1;}  
  .footer {grid-area: 3 / span 6;}  
}

5 grupos de diferentes tamaños de pantalla  
/\* Extra small devices (phones, 600px and down) \*/  
@media only screen and (max-width: 600px) {...}

/\* Small devices (portrait tablets and large phones, 600px and up) \*/  
@media only screen and (min-width: 600px) {...}

/\* Medium devices (landscape tablets, 768px and up) \*/  
@media only screen and (min-width: 768px) {...}

/\* Large devices (laptops/desktops, 992px and up) \*/  
@media only screen and (min-width: 992px) {...}

/\* Extra large devices (large laptops and desktops, 1200px and up) \*/  
@media only screen and (min-width: 1200px) {...}