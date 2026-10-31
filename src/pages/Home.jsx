
import { useRef, useState } from 'react';
import foto from '../assets/img/logoPortafolio.webp';
import proyectos from '../data/proyectos';
import '../styles/pages/Home.css';

const tecnologias = [
  {
    categoria: 'Frontend',
    herramientas: ['React', 'Vite', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'],
  },
  {
    categoria: 'Backend',
    herramientas: ['Java', 'Spring Boot', 'Python', 'REST APIs', 'OpenAI API', 'Supabase Auth / Google OAuth', 'Cron Jobs'],
  },
  {
    categoria: 'Bases de datos',
    herramientas: ['PostgreSQL', 'MySQL', 'Oracle SQL'],
  },
  {
    categoria: 'Desarrollo móvil',
    herramientas: ['React Native', 'Expo', 'Kotlin', 'Android Studio'],
  },
  {
    categoria: 'Herramientas',
    herramientas: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel',
    'Render'],
  },
];

const secciones = [
  { id: 'inicio', nombre: 'Inicio' },
  { id: 'sobre-mi', nombre: 'Sobre mí' },
  { id: 'proyectos', nombre: 'Proyectos' },
  { id: 'tecnologias', nombre: 'Tecnologías' },
  { id: 'contacto', nombre: 'Contacto' },
];

function Home() {
  const scrollRef = useRef(null);
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // Scroll únicamente dentro del contenedor de vidrio
  const scrollToSection = (id) => {
    const container = scrollRef.current;
    const section = document.getElementById(id);

    if (!container || !section) return;

    const containerTop = container.getBoundingClientRect().top;
    const sectionTop = section.getBoundingClientRect().top;

    container.scrollTo({
      top: container.scrollTop + sectionTop - containerTop,
      behavior: 'smooth',
    });

    setSeccionActiva(id);
  };

  // Detecta la sección visible durante el scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const referencia = containerTop + container.clientHeight * 0.3;

    let actual = 'inicio';

    secciones.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section && section.getBoundingClientRect().top <= referencia) {
        actual = id;
      }
    });

    setSeccionActiva(actual);
  };

  return (
    <main
      className="
        flex h-dvh items-center justify-center
        overflow-hidden p-4 sm:p-6 lg:p-8
      "
    >
      {/* CONTENEDOR PRINCIPAL GLASSMORPHISM */}
      <div className="portfolio-shell relative mx-auto w-full max-w-[1500px]">

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            portfolio-glass relative
            h-[85dvh] w-full
            sm:h-[80dvh]
            lg:h-[75dvh]
            overflow-y-auto overscroll-contain
            rounded-3xl
            border border-white/20
            bg-white/5
            shadow-2xl
            backdrop-blur-lg
            scroll-smooth
          "
        >

          
        {/* ========================= */}
        {/* PRESENTACIÓN              */}
        {/* ========================= */}
        <section
          id="inicio"
          className="
            relative flex min-h-full flex-col
            items-center
            gap-10 px-6 py-10 text-center
            sm:gap-0 sm:justify-center
            sm:px-10 sm:py-16
          "
        >
          {/* CONTENIDO PRINCIPAL */}
          <div
            className="
              flex w-full flex-1 flex-col
              items-center justify-center
            "
          >
            <img
              src={foto}
              alt="Imagen de perfil de James Videla"
              className="
                portfolio-avatar
                mb-5 h-36 w-36
                rounded-full object-cover
                ring-4 ring-white/40
                shadow-2xl
                sm:h-44 sm:w-44
              "
            />

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              James Videla
            </h1>

            <p
              className="
                mt-3 max-w-[280px]
                text-base leading-relaxed text-white/90
                sm:max-w-none sm:text-xl
              "
            >
              Analista Programador | Desarrollador de Software
            </p>

            <p
              className="
                mt-3 max-w-lg
                text-sm leading-relaxed text-white/75
                sm:text-base
              "
            >
              Apasionado por la tecnología, el desarrollo
              de aplicaciones y la creación de soluciones
              digitales.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection('proyectos')}
              className="
                portfolio-button
                mt-6 cursor-pointer rounded-xl
                border border-white/30
                bg-white/20 px-8 py-3
                font-semibold text-white
                hover:bg-white/30
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-white
              "
            >
              Ver mis proyectos ↓
            </button>
          </div>

          {/* INDICADOR DE SCROLL */}
          <button
            type="button"
            onClick={() => scrollToSection('sobre-mi')}
            className="
              flex shrink-0 cursor-pointer flex-col
              items-center gap-2
              border-0 bg-transparent
              pb-2 text-white/80
              transition hover:text-white
              sm:absolute sm:bottom-5
              sm:left-1/2 sm:pb-0
              sm:-translate-x-1/2
            "
          >
            <span className="whitespace-nowrap text-sm">
              Desliza para conocerme
            </span>

            <span className="animate-bounce text-xl">
              ↓
            </span>
          </button>
        </section>


          {/* ========================= */}
          {/* SOBRE MÍ                  */}
          {/* ========================= */}
          <section
            id="sobre-mi"
            className="
              flex flex-col items-center
              px-6 pt-8 pb-5
              text-center sm:px-12
            "
          >
            <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
              Sobre mí
            </h2>

            <div
              className="
                portfolio-inner-glass
                w-full max-w-2xl
                rounded-2xl
                border border-white/20
                bg-white/10
                p-6 shadow-lg
                sm:p-8
              "
            >
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                ¡Hola! Soy James Videla, Analista Programador
                con un enfoque en el desarrollo de software.
                Me apasiona la programación, aprender nuevas tecnologías
                y crear aplicaciones que combinen funcionalidad, eficiencia
                y una buena experiencia de usuario.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                He trabajado con tecnologías como React, Java,
                Spring Boot, SQL y React Native, desarrollando
                proyectos tanto web como móviles.
              </p>
            </div>
          </section>

          {/* ========================= */}
          {/* MIS PROYECTOS             */}
          {/* ========================= */}
          <section
            id="proyectos"
            className="
              flex flex-col items-center
              px-6 pt-5 pb-10
              sm:px-12
            "
          >
            <div className="flex w-full flex-col gap-10">

              <h2 className="m-0 text-center text-3xl font-bold text-white sm:text-4xl">
                Mis proyectos
              </h2>

              <div
                className="
                  mx-auto grid w-full max-w-4xl
                  grid-cols-1 gap-6
                  md:grid-cols-2
                "
              >
                {proyectos.map((proyecto) => (
                  <article
                    key={proyecto.id}
                    className="
                      portfolio-project-card
                      group flex h-full flex-col
                      overflow-hidden rounded-2xl
                      border border-white/20
                      bg-white/10
                      shadow-lg backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-white/40
                      hover:bg-white/15
                      hover:shadow-2xl
                    "
                  >
                    
                    {/* IMAGEN */}
                    <div className="relative flex h-44 items-center justify-center overflow-hidden bg-black sm:h-48">

                      <img
                        src={proyecto.image}
                        alt={proyecto.name}
                        className={`
                          h-full w-full
                          ${
                            proyecto.name === 'FlightLab'
                              ? 'object-contain'
                              : 'object-cover object-center transition-transform duration-500 group-hover:scale-105'
                          }
                        `}
                      />

                      <div
                        className="
                          pointer-events-none absolute
                          inset-0 bg-gradient-to-t
                          from-black/25 to-transparent
                        "
                      />
                    </div>

                    {/* CONTENIDO */}
                    <div className="flex flex-1 flex-col p-6">

                      <span
                        className="
                          mb-3 text-xs font-semibold
                          uppercase tracking-wider
                          text-sky-200
                        "
                      >
                        {proyecto.categoria}
                      </span>

                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-white">
                          {proyecto.name}
                        </h3>

                        {proyecto.name === 'FlightLab' && (
                          <span
                            className="
                              rounded-full
                              border border-amber-300/40
                              bg-amber-500/20
                              px-3 py-1
                              text-xs font-semibold
                              text-amber-100
                              whitespace-nowrap
                            "
                          >
                            En desarrollo
                          </span>
                        )}
                      </div>

                      <p className="mb-6 text-sm leading-relaxed text-white/75">
                        {proyecto.resumen}
                      </p>

                      {/* TECNOLOGÍAS */}
                      <div className="mt-auto mb-6 flex flex-wrap gap-2">
                        {proyecto.tecnologias
                          .split('|')
                          .map((tecnologia) => (
                            <span
                              key={tecnologia.trim()}
                              className="
                                rounded-full
                                border border-white/20
                                bg-white/10
                                px-3 py-1
                                text-xs text-white/90
                                transition-colors
                                group-hover:border-white/30
                              "
                            >
                              {tecnologia.trim()}
                            </span>
                          ))}
                      </div>

                      {/* ENLACES A REPOSITORIOS */}
                      <div className="mt-auto flex flex-wrap items-center justify-center gap-3">
                        {(proyecto.links ?? [
                          {
                            nombre: 'Ver en GitHub',
                            url: proyecto.link,
                          },
                        ]).map((enlace) => (
                          <a
                            key={enlace.nombre}
                            href={enlace.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              portfolio-button
                              inline-flex items-center justify-center
                              gap-2 rounded-xl
                              border border-white/25
                              bg-transparent
                              px-5 py-2.5
                              text-sm font-medium text-white
                              no-underline
                              hover:border-white/50
                              hover:bg-white/10
                              hover:text-white
                            "
                          >
                            {enlace.nombre}
                            <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ========================= */}
          {/* TECNOLOGÍAS              */}
          {/* ========================= */}
          <section
            id="tecnologias"
            className="
              flex flex-col items-center
              px-6 pt-8 pb-10
              sm:px-12
            "
          >
            <h2 className="mb-5 text-center text-3xl font-bold text-white sm:text-4xl">
              Tecnologías
            </h2>

            <p className="mb-8 max-w-xl text-center text-sm leading-relaxed text-white/75 sm:text-base">
              Herramientas y tecnologías con las que he trabajado
              durante mi formación y el desarrollo de proyectos.
            </p>

            <div
              className="
                grid w-full max-w-4xl
                grid-cols-1 gap-5
                sm:grid-cols-2
              "
            >
              
              {tecnologias.map((grupo) => (
                <div
                  key={grupo.categoria}
                  className={`
                    portfolio-inner-glass
                    rounded-2xl border border-white/20
                    bg-white/10 p-6
                    shadow-lg
                    ${
                      grupo.categoria === 'Herramientas'
                        ? 'sm:col-span-2 sm:w-[calc(50%-0.625rem)] sm:justify-self-center'
                        : ''
                    }
                  `}
                >

                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {grupo.categoria}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {grupo.herramientas.map((herramienta) => (
                      <span
                        key={herramienta}
                        className="
                          rounded-lg border border-white/20
                          bg-white/10 px-3 py-2
                          text-sm text-white/90
                        "
                      >
                        {herramienta}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================= */}
          {/* CONTACTO                 */}
          {/* ========================= */}
          <section
            id="contacto"
            className="
              flex flex-col items-center
              px-6 pt-8 pb-8
              text-center sm:px-12
            "
          >
            <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
              Contacto
            </h2>

            <div
              className="
                portfolio-inner-glass
                w-full max-w-2xl
                rounded-2xl border border-white/20
                bg-white/10 p-6
                shadow-lg sm:p-8
              "
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                Conectemos
              </h3>

              <p className="mb-6 text-base leading-relaxed text-white/80">
                Estoy abierto a nuevas oportunidades profesionales,
                tanto para formar parte de equipos de desarrollo como
                para colaborar en proyectos tecnológicos. Busco aportar
                mis conocimientos, seguir aprendiendo y
                crecer como desarrollador de software.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                
              <a
                href="https://github.com/JamesAVT"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  portfolio-button
                  mx-auto inline-flex items-center justify-center
                  gap-2 rounded-xl
                  border border-white/25
                  bg-transparent
                  px-5 py-2.5
                  text-sm font-medium text-white
                  no-underline
                  hover:border-white/50
                  hover:bg-white/10
                  hover:text-white
                "
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>

                {/* Agrega aquí tu LinkedIn y correo
                    cuando tengas sus enlaces definitivos. */}

              </div>
            </div>

            <p className="mt-6 text-sm text-white/50">
              © {new Date().getFullYear()} James Videla
            </p>
          </section>

        </div>

        {/* NAVEGACIÓN DISCRETA */}
        <nav
          className="portfolio-navigation"
          aria-label="Navegación por secciones"
        >
          {secciones.map((seccion) => (
            <button
              key={seccion.id}
              type="button"
              onClick={() => scrollToSection(seccion.id)}
              aria-label={`Ir a ${seccion.nombre}`}
              aria-current={
                seccionActiva === seccion.id ? 'location' : undefined
              }
              title={seccion.nombre}
              className={
                `portfolio-nav-dot ${
                  seccionActiva === seccion.id ? 'active' : ''
                }`
              }
            />
          ))}
        </nav>

      </div>
    </main>
  );
}

export default Home;