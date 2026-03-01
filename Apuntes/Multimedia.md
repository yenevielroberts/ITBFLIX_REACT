# Pestanya 1

## Imagenes

	Formato webP  
**Que se ha de hacer?**

* Compresión  
* Optimización   
* Diferente tamaño según el tamaño de la pantalla  
* Usar el atributo alt  
* usar `srcset`  
* Usar el lazy loading

1. Usar squoosh para compresión y optimización de las imágenes en formato webp.  
   

**Ejemplo:**  
\<img  
 src="/img/foto-1x.jpg" (imatge per defecte que es carrega si el navegador no entén srcset o no troba cap coincidencia)  
srcSet="/img/foto-1x.jpg 1x, /img/foto-2x.jpg 2x" (és una llista d’imatges alternatives amb informació)  
1x, 2x → segons resolució de pantalla, 400w, 800w → segons amplada real de la imatge  
alt="Foto responsive"  
/\>

**Ejemplo lazy loading**  
\<img src="imatge.jpg" alt="Exemple" loading="lazy" /\>

## Audio

Formato mp3 y OGG  
**Que se ha de hacer?**

* **Un fichero de audio con dos formatos**   
* **Agregar controles**  
* **Agregar un fallback**

**App-\>**Audacity: editor d’àudio lliure, tall, mescla, exportació a MP3/WAV/OGG.

**Ejemplo**  
\<audio controls\>  
  \<source src="so.mp3" type="audio/mpeg"\>  
  \<source src="so.ogg" type="audio/ogg"\>  
  El teu navegador no suporta àudio.  
\</audio\>

## 

## Video

Formato `MP4 + WebM`  
**`Que se ha de hacer?`**

* **`Un vídeo optimizado`**  
* **`incluir dos formatos`**  
* **`Activar los controles`**  
* **`Utilizar lazy loading`**

**App-\>**Handbrake: codificador vídeo lliure, optimització i compressió per web.

**Ejemplo**

\<video controls width="640" height="360"\>  
  \<source src="video.mp4" type="video/mp4"\>  
  \<source src="video.webm" type="video/webm"\>  
  \<track src="subtitols.vtt" kind="subtitles" srclang="ca" label="Català"\>  
  El teu navegador no suporta vídeo.  
\</video\>

**Ejemplo lazy loading:**  
\<video src="video.mp4" controls loading="lazy"\>\</video\>

# Pestanya 2

     {/\*\*  
 render() {

   return (  
 \<main\>  
       \<div className='secciones' \>  
           \<SeccionesCotenido  
             titleSection="Multimedia"  
             imagenes={data.seriesWebp}//Paso un array  
           /\>  
       \</div\>  
     \</main\>  
     
   )  
 }\*/}

# Teoria

