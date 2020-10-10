import React from 'react';

function Content() {

  return (
    <section>
      <section class="sections" id="presentacion">
        <div class="contenedor0"></div>
      </section>

      <section class="sections" id="sobre_mi">
        <div class="contenedor1">
          <div class="contenido">
            <h1 class="title">Sobre mi</h1>
            <text class="cuerpo">Más que hablar de mí, como creativa prefiero que mi trabajo sea el que hable por si mismo.  Dejare que el usuario sea el que  de su opinion y hable de sus necesidades e ideas, juntos podremos llegar a hacer realidad todo lo  que tiene en mente.
           </text>
          </div>npm
        </div>
      </section>

      <section class="sections" id="educacion">
        <div class="contenedor2">
          <div class="contenido2">
            <h1 class="title2">Educación</h1>
            <h2 class="h2e">Licenciatura</h2>
            <text class="cuerpo2">Diseño  y comunicación visual (Facultad de Artes y Diseño (FAD) UNAM.  2014 -2018).
              </text>
            <h2 class="h2e">Diplomado:</h2>
            <text class="cuerpo2">Cine, Video Digital y Audio; Efectos Especiales ( Antigua Academia de San Carlos 2018).</text>
            <h2 class="h2e">Cursos y Talleres con certificados:</h2>
            <text class="cuerpo2">
              <li>"Cómo vender diseño gráfico" FAD (2015).</li>
              <li>"Body paint. De lo análogo a lo digital." FAD (2015).</li>
              <li>Taller de Cortometraje, Revista S22. (2017).</li>
              <li>ntroducción a la producción musical, SAE Institute
                  (2018).</li>
              <li>Curso front-end, BEDU (2020).</li>
            </text>
            <h2 class="h2e">Otros:</h2>
            <text class="cuerpo2">
              <li>Participación en DISAUND (2014).</li>
              <li>Concierto videográfico FAD: Creación de material
                 audiovisual para bandas invitadas (2018).</li>
            </text>
          </div>
        </div>
      </section>

      <section class="sections" id="experiencia">
        <div class="contenedor3">
          <div class="contenido">
            <h1 id="e0" class="title">Experiencia</h1>
            <text id="e1" class="cuerpo">Desde el año 2015 comencé a realizar trabajos
            por encargo entre ellos:  toma de fotografías,
            diseño de papelería, grabado sobre tazas y
            tarros, trabajos varios en serigrafía asi cómo
            restauracion fotográfica y edición de video.
                </text>
            <h3 class="e3">Fotógrafa para Proyecto Momo (2017-2018)</h3>
            <h3 class="e3">Editora de videos y animadora en el Estudio Coyotools (2018)</h3>
            <h3 class="e3">Diseñadora Audiovisual en la Camara Mexicana de la Industria de la Construcción (CMIC) (2019)</h3>
            <h3 class="e3">Diseñadora audiovisual Diseño y desarrollo digital De3 (2019-2020) </h3>
          </div>
        </div>
      </section>

      <section class="sections">
        <div class="contenedor5">
          <img src="src/assets/img/imagen1.png" alt="" id="imagenc" />
          <div class="atras botones">
            &#60
           </div>
          <div class="adelante botones">
            &#62
           </div>
        </div>
      </section>

      <section class="sections" id="proyectosD">
        <div class="contenedor4">
          <div class="contenido-titulo">
            <h1 id="centrado" class="title">Proyectos</h1>
          </div>
          <div class="contenidop">
            <video id="show" controls poster="src/assets/img/show.png" alt="">
              <source type="video/mp4" src="src/assets/ShowCompleto.mp4" alt="" />
            </video>
            <img src="src/assets/img/ale.png" class="caja" id="ale" alt="" />
            <img src="src/assets/img/_MG_0134.png" class="caja" id="deporte" alt="" />
            <img src="src/assets/img/IMG_0397.png" class="caja" id="ninos" alt="" />
            <img src="src/assets/img/E1.png" class="caja" id="escenario" alt="" />
            <img src="src/assets/img/perro.png" class="caja" id="dog" alt="" />
            <img src="src/assets/img/aplicacion.png" class="caja" id="lentes" alt="" />
            <img src="src/assets/img/_MG_0154.png" class="caja" id="cmic" alt="" />
            <img src="src/assets/img/IMG_0109.png" class="caja" id="recetas" alt="" />
            <img src="src/assets/img/libro.png" class="caja" id="libro" alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Content;