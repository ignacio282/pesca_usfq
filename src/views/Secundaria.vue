<template>
  <div class="pr-0 content bodySecu">
    <NavBar></NavBar>
    <div class="snapSection pr-0">
      <div class="pt-5">
        <div class="child">
          <div class="container" id="video">
            <br />
            <img
              v-if="educacion"
              src="../assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png"
              width="90%"
            />
            <img v-if="redes" src="../assets/img/ConcepstCharacter.jpg" width="90%" />
            <img v-if="plastico" src="../assets/img/ConcepstBarco.jpg" width="90%" />
            <img v-if="reciclaje" src="../assets/img/ConcepstCharacter.jpg" width="90%" />
            <img v-if="pesca" src="../assets/img/ConcepstBarco.jpg" width="90%" />
          </div>
        </div>

        <div v-if="educacion">
          <div v-if="educacionTexts.length">
            <div v-for="educacionText in educacionTexts" :key="educacionText.id">
              <div class="container-fluid child" :id="educacionText.id">
                <h2 class="text-center pt-5 pb-4"></h2>
                <div v-scrollanimation>
                  <div class="fondoTarjeta">
                    <h1 class="pb-3">{{educacionText.pregunta}}</h1>
                    <div class="overflow-auto pr-3" style="height:300px">
                      <p class="description">{{educacionText.respuesta}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="plastico" class="container-fluid child" id="pregunta1">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">Introducción al problema</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  En el 2018 la ONU declaró la contaminación por plásticos como uno de los problemas ambientales más graves que enfrentamos en la actualidad.
                  El Ecuador no está obsoleto de los efectos de contaminación por plásticos, y todas las ciudades del país se han visto afectadas por la excesiva producción de basura y la ineficiente gestión de residuos, con tan solo el 30% de familias separando residuos en la base, dentro del país tenemos una crisis sanitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="reciclaje" class="container-fluid child" id="pregunta1">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">Antecedentes</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  El proyecto de vinculación “Restauración de Ecosistemas” es uno de los proyectos emblemáticos de la Universidad San Francisco de Quito. El proyecto se enfoca en aportar a la conservación del ecosistema marino en la provincia de Esmeraldas.
                  El eje de educación ambiental del proyecto tiene como objetivo crear consciencia ambiental en la sociedad Esmeraldeña, para evitar la degradación de ecosistemas al largo plazo. En el 2019 el proyecto realizo una campaña ambiental in-situ la cual abarcaba charlas y talleres en colegios y escuelas de Tonsupa y Atacames.
                  Este año el proyecto busca ampliar su alcance en la provincia a partir de una campaña educativa por medios digitales, tomando en cuenta las condiciones actuales de la emergencia sanitaria.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pesca" class="container-fluid child" id="pregunta1">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">¿Por qué estudiar la pesca artesanal en la provincia de Esmeraldas?</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  A pesar de la importancia económica del sector pesquero en la costa continental de Ecuador y de varios esfuerzos institucionales realizados en las últimas décadas, no existe un programa de seguimiento sistemático y de amplia cobertura de las capturas pesqueras, por lo que las estadísticas oficiales de pesca suelen considerarse sub-estimaciones (Jacquet et al., 2008). En un estudio de reconstrucción de las capturas realizado por Alava et al. (2015) para el período 1950-2010, se estimó que la captura real de las pesquerías marinas en el Ecuador continental era casi el doble (1,9) de la que se comunicaba oficialmente a la FAO (Organización de las Naciones Unidas para la Alimentación y la Agricultura). La contribución específica del sector de la pesca artesanal fue en promedio del 19% de 1950 a 2010 (Álava et al., 2015) y se estimó que sería del 26% en 2014 (Pauly et al., 2020).
                  En la actualidad, el Instituto Nacional de Pesca (INP) cuenta con un programa de monitoreo de los desembarcos de la pesca artesanal enfocado en las especies demersales (www.institutopesca.gob.ec/pesca-artesanal). Específicamente en la provincia de Esmeraldas, en el año 2019 se realizaron muestreos en cuatro ocasiones (marzo, abril, mayo y agosto) en algunos de los sitios de desembarque (tres a cinco) de la provincia. Según los boletines técnicos publicados (INP, 2019a; INP 2019b; INP 2019c; INP 2019d), doce grupos taxonómicos contribuyeron al 80% del total de desembarcos estimados en esos cuatro meses y Lutjanus guttatus (Pargo lunarejo), Epinephelus labriformis (Murico) y Brotula clarkae (Corvina de roca) fueron las tres especies más importantes en la captura, contribuyendo a casi el 40% de los desembarques totales (Figura 1).
                  Teniendo en cuenta las limitaciones en la cantidad y calidad de los datos oficiales existentes, consideramos necesario realizar una evaluación detallada de la dinámica de la pesca artesanal en Esmeraldas, en colaboración con aliados estratégicos que están trabajando en la zona actualmente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="plastico" class="container-fluid child" id="pregunta2">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">¿De dónde viene y que es el plástico?</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  Existe un escaso entendimiento del proceso de producción y los tipos de plásticos que existen, datos que son necesarios para comprender que no todos los plásticos se pueden reciclar y la necesidad de cambiar nuestros estilos de vida.
                  El plástico se empezó a usar en productos desechables a partir de la era industrial, reemplazando materiales como el cobre y el metal. Según la ONU Ambiente (2018) existen 6 polímeros principales utilizados en la producción de plásticos de un solo uso, comúnmente conocidos como plásticos desechables, de los cuales solo uno se recicla con frecuencia, poniendo al resto de plásticos susceptibles a contaminar áreas naturales y urbanas.
                  Como se menciona en el documental “The Story of Plastic”, el material plástico es contaminante desde el inicio de su cadena productiva, ya que al ser un derivado del petróleo es cómplice de los impactos socioambientales que genera la extracción de combustibles fósiles.
                  En un país como Ecuador, el cual alberga biodiversidad y ecosistemas únicos en el mundo, comprender la conexión de la contaminación por plásticos con los efectos del cambio climático es fundamental para buscar soluciones a esta problemática.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="reciclaje" class="container-fluid child" id="pregunta2">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">Objetivos</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  El área de educación ambiental del proyecto tiene como objetivo desarrollar los siguientes materiales educativos para la campaña por medios digitales:
                  · Videos Educativos: se crearán videos educativos de 1min 30sec máximo de duración, los cuales podrán difundirse en las escuelas vía Whatsapp o en la plataforma que cada instituto disponga.
                  · Documentos de trabajo: Se realizará documentos de trabajo formato PDF con actividades para que los niños y adolescentes puedan plasmar su aprendizaje y fomentar su interés con respecto a cada temática. Esto también sirve como una forma de evaluación de cada video que podrá ser monitoreado por cada profesor y el equipo de educación ambiental del proyecto.
                  · Infografías: se crearán infografías que ilustren la información de cada temática educativa, para que todos los estudiantes puedan tenerlo y compartirlo con sus familiares.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pesca" class="container-fluid child" id="pregunta2">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">Objetivos</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  Con el fin de evaluar la dinámica y las capturas de la pesca artesanal, con énfasis en la pesca costera, se implementará un programa de monitoreo en principales sitios de desembarco pesquero del cantón de Atacames, área de estudio del proyecto. Dos estudiantes, vinculados a la Universidad Católica de Ecuador – sede Esmeraldas, serán contratados por el proyecto y entrenados para registrar información de en sitios de desembarque seleccionados del cantón de Atacames. La información a registrar consiste en: biomasa desembarcada por grupo taxonómico por faena de pesca, tallas de captura de las principales especies objeto de captura, esfuerzo pesquero según los diferentes artes de pesca, costos de faena y precios de venta de la captura.
                  Adicionalmente, se realizarán entrevistas semi-estructuradas con pescadores para incorporar el conocimiento ecológico tradicional sobre su percepción de la sostenibilidad de la pesca en la costa de Esmeraldas, y sobre la problemática asociada a las redes fantasma.
                  El análisis de los datos colectados, nos permitirá elaborar un diagnóstico preliminar de la sostenibilidad de la pesca artesanal en la zona de estudio, el cual será un insumo importante para la construcción participativa de medidas de manejo pesquero con los pescadores y con otros actores relevantes del sector pesquero en la provincia, como lo son: el Instituo Nacional de Pesca (INP), el Ministerio de Acuacultura y Pesca – MAP y
                  el Ministerio de Ambiente a través de la Subsecretaría de Gestión Marina y Costera (SGMC) y del Sistema Nacional de Áreas Protegidas (SNAP).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="plastico" class="container-fluid child" id="pregunta3">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">¿Cuál es el impacto del plástico en el ambiente?</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  El consumo excesivo de plásticos de un solo uso, de la mano con sistemas de reciclaje ineficientes y una cultura de desecho inadecuada, a resultado en escenarios desastrosos
                  A nivel mundial se han identificado 5 islas de basura flotando en nuestros mares y estudios han descubierto que el 90% de aves marinas han ingerido residuos plásticos, además se ha determinado que el 94% de agua embotellada que tomamos está contaminada con partículas de micro plásticos. Los efectos de esta problemática
                  han sido devastadores para el medio ambiente y preocupantes para la vida humana.
                  El informe 2019 de la organización Ecuatoriana Mingas Por El Mar, muestra que de los 9568 kg de basura que recolectaron de playas y ríos ese año, solo el 25% pertenecían a residuos reciclables. Además, da a conocer que los productos de plásticos que más se encuentran contaminando la zona costera ecuatoriana son: tapas de botellas, vasos, cubiertos, sorbetes, envoltorios y fundas plásticas. Esta información empata con las estadísticas recolectadas por la Fundación PlastiCo. Project sobre los tipos de plásticos que se encuentran contaminando ciudades en la sierra y oriente ecuatoriano.
                  El impacto negativo de la contaminación por plásticos trasciende el ámbito ambiental al social. La contaminación por basura afecta a los sectores más vulnerables según el estudio de Soliz (AÑO), refiriéndose a los recicladores de base los cuales son los principales gestores de nuestros residuos en el país.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="reciclaje" class="container-fluid child" id="pregunta3">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">
                Reciclaje Inclusivo
                <br />Introducción al problema
              </h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  El reciclaje conocido comúnmente por sus 3 erres (Reduce, Reúsa y Recicla) ha surgido como una solución al problema global de la basura. Sin embargo, para poder entender bien la palabra reciclaje primero debemos entender el proceso de gestión de residuos tanto solidos como orgánicos, en el cual actúan los gobiernos, la sociedad y actores importantes como los recicladores de base. Aquí nos daremos cuenta que el reciclaje es mucho más que separar los residuos en nuestro hogar.
                  Los recicladores de base por muchos años han trabajado de manera informal, sin sueldos, con falta de equipamiento y han tenido que estar expuestos a enfermedades, segregación social y ambiente de trabajo riesgosos para poder rescatar los materiales reciclables de la basura que botamos desde nuestras casas y así poder darle una segunda vida a muchos de los productos que usamos.
                  Actualmente el reciclaje no es suficiente para afrontar todos los impactos que tiene la contaminación por basura en nuestro entorno. Es importante resaltar que la verdadera solución se basa en un cambio de paradigma de consumo, producción y gestión de residuos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pesca" class="container-fluid child" id="pregunta3">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">Aliados estratégicos</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  Entre las universidades que actualmente realizan actividades de investigación relacionadas con la pesca artesanal en la costa de Esmeraldas, se destaca la Pontificia Universidad Católica del Ecuador – Sede Esmeraldas (PUCESE). A través de su Escuela de Gestión Ambiental y, en particular, del curso Gestión de los Recursos Pesqueros, los estudiantes de la Universidad han venido recopilando desde mayo de 2015 información relacionada con los volúmenes de captura, la composición de la captura de la pesca artesanal oceánica y sobre variables socioeconómicas de los pescadores y las comunidades pesqueras cercanas al puerto de Esmeraldas (Rebolledo, 2017a y 2017b). En la actualidad disponen de una base de datos derivada de registros de viajes de pesca individuales, en su mayoría de pescadores que utilizan el espinel, como arte de pesca. Recientemente, los directores del proyecto firmaron una Carta de Consentimiento con el profesor Eduardo Rebolledo, quien es el profesor que coordina el programa de monitoreo pesquero en PUCESE, con el fin de sumar esfuerzos para el análisis de los datos ya colectados y para colectar nuevos datos pesqueros en la zona de interés.
                  Adicionalmente, estamos en comunicación con investigadores del Instituto de Investigaciones Marinas de Nazca (Nazca), una organización no gubernamental privada, sin fines de lucro, la cual ha trabajado durante muchos años en los pueblos costeros del cantón Muisne, en la provincia de Esmeraldas, primero recopilando datos para apoyar el establecimiento de la Reserva Marina GSF y más tarde ayudando a desarrollar planes de gestión y supervisión de la biodiversidad marina dentro de la Reserva (e.g. Murillo, 2013; Terán, 2017).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="plastico" class="container-fluid child" id="pregunta4">
          <h2 class="text-center pt-5 pb-4"></h2>
          <div v-scrollanimation>
            <div class="fondoTarjeta">
              <h1 class="pb-3">Llamado de atención</h1>
              <div class="overflow-auto pr-3" style="height:300px">
                <p class="description">
                  La problemática de contaminación por plásticos es el resultado de un modelo de producción lineal, en la cual los productos al completar su vida útil se convierten en desechos que comúnmente terminan contaminando el ambiente.
                  En esta problemática se podría concluir que cada sector cuenta con un poco de responsabilidad. Por una parte, los gobiernos que deben implementar políticas públicas que fomenten sistemas de gestión de residuos en el país. Por otro lado, las empresas que deben buscar alternativas a los empaques de sus productos e impulsar modelos de mercado que generen un menor porcentaje de desechos. Y, por último, la sociedad civil que tiene el poder como consumidor de decidir qué alternativa adquiere e impulsa en cada una de sus compras.
                  Es importante saber que cada persona puede iniciar un cambio de paradigma de consumo y desecho desde sus casas y su día a día. A través de actividades simples como la separación de residuos, las limpiezas de playas y la socialización de esta problemática con sus círculos cercanos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="reciclaje" class="container-fluid child" id="pregunta4">
        <h2 class="text-center pt-5 pb-4"></h2>
        <div v-scrollanimation>
          <div class="fondoTarjeta">
            <h1 class="pb-3">¿Qué es la gestión de residuos?</h1>
            <div class="overflow-auto pr-3" style="height:300px">
              <p class="description">
                La gestión de residuos es el proceso por el que pasan nuestros residuos desde su generación en nuestros hogares hasta su disposición final en un botadero, relleno sanitario o planta de tratamiento.
                Este proceso incluye la separación de residuos en la fuente donde los principales actores somos los ciudadanos. En Ecuador tan solo el 32% de familias separan sus residuos en casa (INEC,2014), la mayoría de familias ecuatorianas no logra diferencias entre residuos y basura factor que limita su compromiso con la gestión de residuos.
                Más adelante en el proceso de gestión de residuos nos encontramos con la recolección, en Ecuador no existe la recolección diferenciada debido a la carencia de sistemas de gestión de residuos a nivel nacional, por lo cual la única recolección diferenciada que se practica en el país es la realizada por los recicladores de base que minan en nuestra basura para rescatar material reciclable como plásticos PET, cartón, latas, etc (Soliz, 2019).
                Una vez recolectados los residuos en su gran mayoría son transportados a botaderos o rellenos sanitarios, ya que solo el 9% de residuos se reciclan a nivel nacional. El reciclaje es un proceso industrial que inicia en nuestras casas al separa los residuos antes de ser recolectados y trasladados a las plantas de reciclaje. En las plantas de reciclaje son sometidos a varios procesos antes de convertirse en nuevos productos por lo general de menor valor que el producto inicial.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="reciclaje" class="container-fluid child" id="pregunta5">
        <h2 class="text-center pt-5 pb-4"></h2>
        <div v-scrollanimation>
          <div class="fondoTarjeta">
            <h1 class="pb-3">¿Quiénes son los recicladores de base?</h1>
            <div class="overflow-auto pr-3" style="height:300px">
              <p class="description">
                En el proceso de reciclaje que se realiza en Ecuador y sobre todo en el reciclaje de residuos domiciliarios el eslabón más importante son los recicladores de base, son las personas que rescatan los residuos reciclables para venderlos a empresas o plantas de reciclaje y de esta manera alargan la vida de los productos que nosotros desechamos evitando que terminen contaminando sitios naturales o en rellenos sanitarios.
                Para facilitar el proceso de recolección para los recicladores de base es necesario que las familias aprendan y practiquen la separación de residuos en la fuente, al igual es importante que sepan diferenciar los residuos reciclables y los desechos que generan, para lo cual existen varias guías que se adaptan a la realidad del país (ReciVeci, 2019).
                Por generaciones los recicladores de base han trabajado en condiciones precarias, han sufrido de desigualdad social y recriminación por parte de la sociedad que depende de su trabajo para poder gestionar sus residuos. Por lo cual el reciclaje inclusivo el cual busca integrar a los recicladores en la cadena de valor del reciclaje es importante y una de las soluciones más eficientes a la problemática de residuos a nivel nacional (IRR,2014).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="reciclaje" class="container-fluid child" id="pregunta6">
        <h2 class="text-center pt-5 pb-4"></h2>
        <div v-scrollanimation>
          <div class="fondoTarjeta">
            <h1 class="pb-3">Llamado a la acción</h1>
            <div class="overflow-auto pr-3" style="height:300px">
              <p
                class="description"
              >El reciclaje en términos técnicos es un proceso industrial que no resuelve en su totalidad la crisis sanitaria por exceso de basura que vivimos en la actualidad. Sin embargo, a nivel nacional todavía queda un gran camino por recorrer en cuanto a gestión de residuos y a la implementación de sistemas de reciclaje. El reciclaje inclusivo es una iniciativa recomendada para ser aplicada a nivel regional debido a la cantidad de personas que dependen de los residuos para su sustente, los recicladores de base. Es importante que la ciudadanía se eduque en cuanto a la separación de residuos domiciliaria y cree una relación con su reciclador de barrio para de dignificar su trabajo y aportar al desarrollo sustentable del país.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax child">
        <b-container style="padding-top:110px">
          <b-jumbotron
            class="jumbo"
            header="Material Educativo"
            lead="Videos educativos, Infografías, Hojas de trabajo (PDF)"
            style="text-transform: uppercase"
          >
            <p>Haz Click Aquí Para Descargar</p>
            <router-link to="/recursos" class="colorWhite">
              <b-button variant="primary">
                <b-icon-download></b-icon-download>
              </b-button>
            </router-link>
          </b-jumbotron>
        </b-container>
      </div>

      <div class="pt-3" id="grad2">
        <div id="myModal" class="modal child">
          <div class="modalContent">
            <div class="mySlides activeSlide" style="display: block;">
              <div class="numbertext">1 / 6</div>
              <img src="@/assets//img/ConcepstBarco.jpg" alt="Barco" style="width:100%" />
            </div>

            <div class="mySlides">
              <div class="numbertext">2 / 6</div>
              <img src="@/assets//img/ConcepstBG1.jpg" alt="BG" style="width:100%" />
            </div>

            <div class="mySlides">
              <div class="numbertext">3 / 6</div>
              <img src="@/assets//img/ConcepstCharacter.jpg" alt="Character" style="width:100%" />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 6</div>
              <img src="@/assets//img/Concepts_Diver.jpg" alt="Diver" style="width:100%" />
            </div>

            <div class="mySlides">
              <div class="numbertext">5 / 6</div>
              <img src="@/assets//img/Concepts_Diver.jpg" alt="Diver" style="width:100%" />
            </div>

            <div class="mySlides">
              <div class="numbertext">6 / 6</div>
              <img src="@/assets//img/ConcepstBarco.jpg" alt="Barco" style="width:100%" />
            </div>

            <!-- Next/previous controls -->
            <a class="prev" @click="plusSlides(-1);">&#10094;</a>
            <a class="next" @click="plusSlides(1);">&#10095;</a>

            <b-icon-arrow-bar-up id="flecha" @click="showInfo" />
            <b-icon-arrow-bar-down id="cerrarInfo" @click="closeInfo" />

            <div class="animate-wrap is-hidden">
              <!-- Caption text -->
              <div class="caption-container animate-item FadeInBottom">
                <h3 id="caption"></h3>
                <p id="description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {educacionTexts} from "../firebase";
export default {
  name: "Secundaria",
  watch: {
    $route(to, from) {
      if (this.$route.params.nombre === "educacion") {
        this.educacion = true;
        this.redes = false;
        this.plastico = false;
        this.reciclaje = false;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "redes") {
        this.educacion = false;
        this.redes = true;
        this.plastico = false;
        this.reciclaje = false;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "plastico") {
        this.educacion = false;
        this.redes = false;
        this.plastico = true;
        this.reciclaje = false;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "reciclaje") {
        this.educacion = false;
        this.redes = false;
        this.plastico = false;
        this.reciclaje = true;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "pesca") {
        this.educacion = false;
        this.redes = false;
        this.plastico = false;
        this.reciclaje = false;
        this.pesca = true;
      }
    }
  },
  created: function() {
    if (this.$route.params.nombre === "educacion") {
      this.educacion = true;
      this.redes = false;
      this.plastico = false;
      this.reciclaje = false;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "redes") {
      this.educacion = false;
      this.redes = true;
      this.plastico = false;
      this.reciclaje = false;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "plastico") {
      this.educacion = false;
      this.redes = false;
      this.plastico = true;
      this.reciclaje = false;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "reciclaje") {
      this.educacion = false;
      this.redes = false;
      this.plastico = false;
      this.reciclaje = true;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "pesca") {
      this.educacion = false;
      this.redes = false;
      this.plastico = false;
      this.reciclaje = false;
      this.pesca = true;
    }
  },
  mounted: function() {
    document
      .getElementsByClassName("snapSection")[0]
      .addEventListener("scroll", this.onScroll);
    educacionTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        this.educacionTexts.push(text);
      })
    });
  },
  beforeDestroy: function() {
    document
      .getElementsByClassName("snapSection")[0]
      .removeEventListener("scroll", this.onScroll);
  },
  data: function() {
    return {
      slideIndex: 1,
      descripciones: [
        "Descripción barco",
        "Descripción BG",
        "Descripción Character",
        "Descripción Diver",
        "Descripción barco",
        "Descripción Diver"
      ],
      educacion: false,
      redes: false,
      plastico: false,
      reciclaje: false,
      pesca: false,
      educacionTexts: []
    };
  },
  methods: {
    ClickedMe: function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    },
    showSlides: function(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let captionText = document.getElementById("caption");
      let descriptionText = document.getElementById("description");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove(
          "activeSlide",
          "FadeInUp",
          "FadeOutBottom",
          "FadeOutUp",
          "FadeInBottom"
        );
      }
      slides[this.slideIndex - 1].style.display = "block";
      slides[this.slideIndex - 1].classList.add("activeSlide");
      captionText.innerHTML = slides[this.slideIndex - 1].getElementsByTagName(
        "img"
      )[0].alt;
      descriptionText.innerHTML = this.descripciones[this.slideIndex - 1];
    },
    currentSlide: function(n) {
      this.slideIndex = n;
      this.showSlides(this.slideIndex);
    },
    plusSlides: function(n) {
      this.showSlides((this.slideIndex += n));
    },
    showInfo: function() {
      this.showSlides(1);
      document
        .getElementsByClassName("activeSlide")[0]
        .classList.remove("FadeInUp");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.remove("FadeOutBottom");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.add("FadeInBottom");
      document.getElementsByClassName("animate-wrap")[0].style.display = "flex";
      document.getElementsByClassName("activeSlide")[0].style.display = "none";
      document.getElementById("cerrarInfo").style.display = "inline-block";
      document.getElementById("flecha").style.display = "none";
      document.getElementsByClassName("prev")[0].style.display = "none";
      document.getElementsByClassName("next")[0].style.display = "none";
    },
    closeInfo: function() {
      document
        .getElementsByClassName("activeSlide")[0]
        .classList.remove("FadeOutUp");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.remove("FadeInBottom");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.add("FadeOutBottom");
      document.getElementsByClassName("animate-wrap")[0].style.display = "none";
      document
        .getElementsByClassName("activeSlide")[0]
        .classList.add("FadeInUp");
      document.getElementsByClassName("activeSlide")[0].style.display = "block";
      document.getElementById("flecha").style.display = "inline-block";
      document.getElementById("cerrarInfo").style.display = "none";
      document.getElementsByClassName("prev")[0].style.display = "block";
      document.getElementsByClassName("next")[0].style.display = "block";
    },
    isElementinViewport: function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top <= 754 && rect.left > 0) {
        return true;
      }
    },
    onScroll: function() {
      let visible = this.isElementinViewport(
        document.getElementById("myModal")
      );
      if (visible) {
        document.getElementById("myNav").style.display = "none";
      } else {
        document.getElementById("myNav").style.display = "flex";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.before-enter {
  width: 900px;
  height: 440px;
  margin-left: 60%;
  margin-top: 40%;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
  background-color: rgba(0, 0, 0, 0.774);
  border-radius: 10px 10px 10px 10px;
  box-shadow: 10px 10px 16px -4px rgba(0, 0, 0, 0.56);
  color: white;
  text-align: left;
  text-transform: uppercase;
}
.enter {
  -webkit-animation: enter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: enter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes enter {
  0% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
  100% {
    -webkit-transform: translateY(-5px) translateX(-5px);
    transform: translateY(-5px) translateX(-5px);
  }
}
@keyframes enter {
  0% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
  100% {
    -webkit-transform: translateY(-400px) translateX(-400px);
    transform: translateY(-480px) translateX(-400px);
  }
}
.snapSection {
  flex-basis: 50%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  &.proximity {
    scroll-snap-type: y proximity;
  }
}
.child {
  scroll-snap-align: start;
  height: 100vh;
}
#grad1 {
  background-image: linear-gradient(white, #062d40);
}
#grad2 {
  background-color: black;
}
#grad3 {
  background: linear-gradient(white, #062d40);
}
#boton {
  background-color: rgba(255, 255, 255, 0);
}
#titulo {
  padding-top: 80px;
  color: #03141d;
}
#video {
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;
}
.content {
  color: white;
}
.snapSection::-webkit-scrollbar {
  display: none;
}
.description {
  column-count: 2;
  column-gap: 40px;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  font-weight: 300;
  text-transform: none;
}
#logos {
  padding-top: 45px;
  padding-bottom: 40px;
  color: white;
  font-size: 25px;
  background-color: #03141d;
}
.stripe {
  height: 3px;
  background: rgb(180, 58, 58);
  background: linear-gradient(
    90deg,
    rgba(180, 58, 58, 1) 0%,
    rgba(145, 44, 192, 1) 25%,
    rgba(81, 70, 169, 1) 40%,
    rgba(29, 252, 253, 1) 57%,
    rgba(49, 253, 144, 1) 75%,
    rgba(184, 253, 49, 1) 89%
  );
}
.parallax {
  /* The image used */
  background-image: url("https://imgur.com/nLylsqL.jpg");
  /* Set a specific height */
  height: 750px;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pregunta1 {
  /* The image used */
  background-image: url("../assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png");
  color: Black;
  /* Set a specific height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pregunta2 {
  /* The image used */
  background-image: url("../assets/img/ConcepstCharacter.jpg");
  color: Black;
  /* Set a specific height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pregunta3 {
  /* The image used */
  background-image: url("../assets/img/ConcepstBarco.jpg");
  color: Black;
  /* Set a specific height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pregunta4 {
  /* The image used */
  background-image: url("../assets/img/ConcepstBG1.jpg");
  color: Black;
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pregunta5 {
  /* The image used */
  background-image: url("../assets/img/Concepts_Diver.jpg");
  color: Black;
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pregunta6 {
  /* The image used */
  background-image: url("../assets/img/ConcepstBarco.jpg");
  color: Black;
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.jumbo {
  background-color: rgba(0, 0, 0, 0.37);
  padding-top: 120px;
}
.bodySecu {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.modal {
  display: block;
  position: relative;
  z-index: 1;
  padding-top: 3%;
  left: 0;
  top: 0;
  width: 100%;
  height: 900px;
  overflow: auto;
  background-color: black;
}
.modal::-webkit-scrollbar {
  display: none;
}
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}
.mySlides {
  display: none;
  padding: 15%;
  padding-top: 0;
  padding-bottom: 0;
}
/* Next & previous buttons */
.next {
  cursor: pointer;
  position: absolute;
  top: 35%;
  right: 7%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}
.prev {
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  left: 7%;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 75%;
  left: 7%;
}
/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
  font-size: 20px;
}
.hover-shadow {
  transition: 0.3s;
}
.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#flecha {
  width: 2%;
  height: 2%;
  margin-top: 2%;
}
#cerrarInfo {
  width: 2%;
  height: 2%;
  margin-top: 1%;
  display: none;
}
.FadeInBottom {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeInBottom;
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 1;
  }
}
.FadeInUp {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeInUp;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 1;
  }
}
.animate-wrap {
  position: relative;
  top: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  perspective: 1500px;
  display: block;
  height: 30%;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
}
.animate-item {
  background: #222;
  padding: 1em 2em;
  color: #eee;
  width: 800px;
  height: 300px;
}
.is-hidden {
  display: none;
}
.FadeOutUp {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeOutUp;
}
@keyframes fadeOutUp {
  0% {
    opacity: 1;
    transform: translateY(100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 0;
  }
}
.FadeOutBottom {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeOutBottom;
}
@keyframes fadeOutBottom {
  0% {
    opacity: 1;
    transform: translateY(-100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 0;
  }
}
@media only screen and (max-width: 600px) {
  #video {
    padding-left: 0px;
    padding-right: 0px;
  }
  .child {
    scroll-snap-align: start;
    height: 600px;
  }
  .before-enter {
    width: 500px;
    height: 500px;
    margin-left: 60%;
    margin-top: 37%;
    background-color: rgba(255, 255, 255, 0.678);
    border-radius: 10px 10px 10px 10px;
    box-shadow: 10px 10px 16px -4px rgba(0, 0, 0, 0.56);
  }
}
</style>
