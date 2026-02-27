`A continuació el que farem és una activitat d’investigació i sobre com incorporar nous elements a la nostra pàgina web.`  
`En primer lloc farem l’anàlisi i l'estudi de diferents concepts, i després farem la seva implantació al nostre lloc web.`

**`Investigació`**

* `La primera part de la investigació tracta sobre el hook useRef de react. Us demano el següent:`  
  * `Quina utilitat té el hook useRef?`  
    `Referenciar un valor que no afecta directamente la UI y no causa una nueva renderización.`  
  * `En quins casos farem servir useRef?`  
    * `Para manipular el DOM con ref`  
    * `Referenciar valores con ref`  
    * `Evitar recrear los contenidos de ref`  
        
  * `Fes una taula comparativa entre el hook useState y el hook useRef. Indica les seves diferències, quan faries servir cadascuna d’ells i un exemple de la seva utilització.`

| `Hooks` | `Diferencias` | `Casos de uso` | `Ejemplos` |
| :---- | :---- | :---- | :---- |
| `UseRef` | `Retorna un objeto con una sola propiedad. Cambiar el valor de una variable ref no causa un renderización`  | `Manipular el DOM Referenciar valores con ref Evitar recrear los contenidos de ref`  | `Manipular el DOM: import { useRef } from 'react'; export default function Form() {   const inputRef = useRef(null);   function handleClick() {     inputRef.current.focus();   }   return (     <>       <input ref={inputRef} />       <button onClick={handleClick}>         Focus the input       </button>     </>   ); }`  |
| `UseState` | `Retorna un array con dos valores Se utiliza para datos que afectan lo que el usuario ve y causa una nueva renderización` | `Agregar un estado a un componente Guardar información de renders anteriores. Actualizar estados basado en su estado previo` | `Agregar un estado a un componente: import { useState } from 'react'; export default function Counter() {   const [count, setCount] = useState(0);   function handleClick() {     setCount(count + 1);   }   return (     <button onClick={handleClick}>       You pressed me {count} times     </button>   ); }`  |

* `El següent punt a treballar és sobre com fer la nostra pàgina web més accessible. Cal investigar sobre els següents punt:`  
  * `Què volen dir les sigles ARIA? ARIA -> Accessible Rich Internet Applications. Es una colección de atributos que define cómo realizar contenido y aplicaciones web más accesibles para las personas con discapacidades.`  
      
    * **`Quina utilitat té?`** `Hacer las aplicaciones web más accesibles para las personas con discapacidades.`  
    * **`Posa un exemple del seu funcionament.`**  
      `<div class="error-message">El correo electrónico no es válido</div>`   
      `Es un mensaje de error donde las letras cambian a rojo y el lector de pantalla no avisa de este nuevo texto.`  
        
      `<div class="error-message" aria-live="assertive"> El correo electrónico no es válido </div>`   
      `Este ejemplo con ARIA avisa al usuario si algo cambia.`  
        
  * **`Què volen dir les sigles WCAG? Web Content Acceptability Guidelines(Pautas de Accesibilidad para el Contenido Web)`**  
    * `Quina utilitat té? Ofrecer un estándar único para hacer el contenido web más accesible para las personas con discapacidad.`   
    * **`Posa un exemple del seu funcionament.`**  
      `Las WCAG dicen que los textos normales deben tener una relación de contraste de al menos 4.5:1 en relación al fondo. Si se pone una letra con con un color gris sobre un fondo blanco puede que las personas con visión baja no las vean.`  
  * **`Cercar eines obertes que millorin l’accesibilitat del nostre lloc web.`**   
    * `WAVE`  
    * `Lighthouse(Google) integrado en Chrome DevTools`  
    * `aXe`  
    * `Tota11y`  
* **`Per últim farem una breu recerca sobre les pàgines web responsive.`**  
  * **`Què vol dir que una pàgina sigui responsive?`**  
    `Quiere decir que el contenido de una web se adapta al tamaño de la pantalla y no se distorsiona.`  
  * **`Cerca per internet la definició de media queries.`**  
    `Son un tipo de condicional de diseño, en las que si se cumple la condición se aplicarán unos estilos y en caso que no se aplicarán otros.`  
  * **`Posa un exemple sobre com fer media queries i la seva aplicació dins d’una pàgina web.`**

	Usar la regla @media seguida de una condición (como (max-width: 768px)) y luego escribir los estilos que quiero aplicar solo cuando esa condición se cumple.

@media screen and (min-width: 768px){  
	img{  
		width:48%;  
		margin:1%;  
}  
}

**`Pràctica`**  
`Ara posarem en pràctica el que hem après en l’anterior apartat en la nostra pàgina web.`  
**`Tasca 1`**

`Ús de useRef: Creeu una funcionalitat a la pàgina web que utilitzi el hook useRef per a controlar un element DOM directament. Per exemple:`

* **`Implementar un botó que, en fer-hi clic, faci que el focus se situï en un formulari o element específic de la pàgina.`**  
* `O, si ja teniu algun formulari, feu que un input tingui focus automàtic quan la pàgina es carrega.`

`Nota: Recordeu que el hook useRef no provoca que el component es torni a renderitzar quan el valor canviï, així que això és útil quan necessiteu interaccionar amb elements del DOM sense afectar l'estat de la interfície d'usuari.`

**`Tasca 2`**

* `Integració d'ARIA:`  
  * `Incloeu atributs ARIA en algun dels components o formularis de la vostra pàgina per millorar l'accessibilitat. Per exemple:`  
    * `Afegir aria-label als inputs per proporcionar descripcions de la funció del camp.`  
    * `Utilitzar role="button" per millorar l'ús d'elements que no són botons però actuïn com a tal.`  
    * `Exemple: Si teniu un menú de navegació, podeu afegir atributs ARIA per indicar que és una barra de navegació: role="navigation".`  
        
* `Aplicació de les WCAG:`  
  * **`Expliqueu com les WCAG poden millorar la vostra pàgina i com apliquen les directrius en el vostre cas.`**  
    `La forma en la que ayuda a mi página es hacerla más accesible para personas incapacitadas, al decirme las pautas que tengo que seguir para cumplir los requisitos.Hace que mi web sea más fácil de navegar y la información más accesible.`  
  * **`Revisa el contrast de colors de la vostra pàgina i assegureu-vos que compleixi amb els requisits WCAG.`**  
    `He usado esta web para comprobar el contraste de los colores: https://webaim.org/resources/contrastchecker/`   
  * **`Proveu d’aplicar altres millores relacionades amb les WCAG, com la navegabilitat del teclat (per exemple, afegir tabindex en elements interactius).`**

**`Tasca 3`**

* `Definició de Pàgina Web Responsiva`  
  * `Feu la tria d’una part de la vostra pàgina web i feu que sigui responsive mitjançant media queries.`  
  * `Creeu diversos punts de ruptura per a la pàgina mitjançant media queries. Per exemple:`  
    * `Si la pàgina té una barra lateral, feu que aquesta desaparegui en pantalles petites i s'acumuli en un menú de tipus hamburguesa.`  
    * `Canvieu l'estructura de la pàgina en funció de la mida de la pantalla (canvi de mides de font, disposició de les imatges, etc.).`  
* `Test de la Responsivitat`  
  * `Comproveu que la pàgina s'adapti correctament a diferents mides de pantalla mitjançant eines de desenvolupament del navegador (inspector de dispositius).`

