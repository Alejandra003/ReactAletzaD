import React from 'react';

function Footer() {

  return (
    <section id="footer">
      <nav class="top-menu" id="menuf1">
        <a href="#sobre_mi">SOBRE MI</a>
        <a href="#educacion">EDUCACIÓN</a>
        <a href="#experiencia">EXPERIENCIA</a>
        <a href="#proyectosD">PROYECTOS</a>
      </nav>

      <div id="menuf" class="footer">
        <text class="footer_datos">CONTÁCTO </text>
        <a class="cuerpof" href="https://api.whatsapp.com/send?phone=5540809945&text=hola%20Ale,%20%20vi%20tu%20pagina%20y%20%C2%A1me%20interesa%20contactarte%20para%20hablar%20de%20un%20proyecto!"> Telefono: 55 40 80 99 45 </a>
        <text class="cuerpof">E-mail: aletzadesigns@gmail.com </text>
        <div class="imagen2">
          <a href="#header"> <img src="src/assets/img/la.png" id="imagen2" alt="" /> </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;