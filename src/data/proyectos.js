import nolimitsImg from '../assets/img/nolimits.webp';
import flightlab from '../assets/img/flightlab.webp';

const proyectos = [
  {
    id: 1,
    name: 'NoLimits',
    categoria: 'Full Stack / Aplicación Web',

    resumen:
      'Plataforma de entretenimiento que integra APIs de películas, series, videojuegos, libros y música, además de autenticación, favoritos, reseñas y un chatbot con IA.',

    description:
      'Aplicación Full Stack desarrollada con React y Spring Boot que integra servicios externos como TMDB, IGDB, RAWG, Google Books y Jikan para consultar contenido de entretenimiento. Incluye autenticación, favoritos, reseñas, búsqueda de contenido y un chatbot con inteligencia artificial mediante OpenAI API.',

    links: [
    {
        nombre: 'Frontend',
        url: 'https://github.com/SimonKaiak/NoLimits-Front',
    },
    {
        nombre: 'Backend',
        url: 'https://github.com/SimonKaiak/NoLimits-SpringBoot.git',
    },
    ],

    tecnologias:
      'React | Spring Boot | PostgreSQL | TMDB | RAWG | OpenAI API',

    image: nolimitsImg,
  },
  {
    id: 2,
    name: 'FlightLab',
    categoria: 'Desarrollo Móvil / Aviación',

    resumen:
      'Aplicación móvil para calcular energía de frenado aeronáutica mediante interpolación de datos y parámetros operacionales.',

    description:
      'Aplicación móvil desarrollada con React Native y Expo. Permite calcular Brake Energy utilizando velocidad, peso, temperatura, altitud de presión y viento, mediante interpolación de tablas.',

    link: 'https://github.com/JamesAVT/FlightLab',

    tecnologias:
      'React Native | Expo | JavaScript | Context API',

    image: flightlab,
  },
];

export default proyectos;