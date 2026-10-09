/**
 * data.js
 * ------------------------------------------------------------------
 * Toda la información de proyectos y tecnologías vive aquí.
 * Para agregar un proyecto nuevo, copia un objeto del array PROJECTS
 * y cambia sus valores. No es necesario tocar ningún otro archivo.
 *
 * Estructura de un proyecto:
 * {
 *   id:            string único, se usa en la URL (proyecto.html?id=...)
 *   title:         nombre del proyecto
 *   description:   descripción corta (para la tarjeta)
 *   category:      "university" | "personal"
 *   featured:      true | false  -> los destacados aparecen primero
 *   technologies:  array de strings, deben existir en TECHNOLOGIES más abajo
 *   image:         ruta a una imagen/thumbnail (usa un placeholder si no tienes una)
 *   video:         (opcional) ruta a un video para la vista de detalle
 *   github:        link al repositorio
 *   demo:          (opcional) link a una demo en vivo
 *   problem:       qué problema buscaba resolver
 *   solution:      cómo lo resolviste
 *   features:      array de strings con las características principales
 *   role:          tu participación en el proyecto
 *   learned:       qué aprendiste
 * }
 * ------------------------------------------------------------------
 * NOTA: Los proyectos de abajo son EJEMPLOS/PLACEHOLDER. Reemplaza el
 * contenido, las imágenes y los links por tus proyectos reales.
 * ------------------------------------------------------------------
 */

const PROJECTS = [
  {
    id: "gestor-academico",
    title: "Sistema de Gestión Académica",
    description: "Plataforma para administrar matrículas, notas y horarios de una facultad universitaria.",
    category: "university",
    featured: true,
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    image: "placeholder-1",
    video: "",
    github: "https://github.com/tu-usuario/gestor-academico",
    demo: "",
    problem: "[Placeholder] El proceso de matrícula y registro de notas se llevaba en hojas de cálculo, generando errores y demoras entre estudiantes, docentes y la secretaría académica.",
    solution: "[Placeholder] Se desarrolló un sistema web con roles diferenciados (estudiante, docente, administrador) que centraliza matrículas, calificaciones y horarios en una sola base de datos.",
    features: [
      "Autenticación por roles (estudiante, docente, administrador)",
      "Registro y consulta de notas en tiempo real",
      "Generación automática de horarios sin cruces",
      "Panel de reportes exportables en PDF"
    ],
    role: "[Placeholder] Desarrollo backend completo con Laravel, diseño de la base de datos relacional y parte de la lógica de generación de horarios.",
    learned: "[Placeholder] A estructurar relaciones complejas en bases de datos y a trabajar con arquitectura MVC en un proyecto de tamaño real, en equipo."
  },
  {
    id: "app-finanzas-personales",
    title: "Finly — Finanzas Personales",
    description: "Aplicación web para registrar gastos, ingresos y visualizar hábitos financieros con gráficos.",
    category: "personal",
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "placeholder-2",
    video: "",
    github: "https://github.com/tu-usuario/finly",
    demo: "https://finly-demo.example.com",
    problem: "[Placeholder] Quería entender en qué se me iba el dinero cada mes, pero las apps que probé eran demasiado complejas o de pago.",
    solution: "[Placeholder] Construí una app minimalista donde registro movimientos rápidamente y veo gráficos de tendencias por categoría, todo en una sola pantalla.",
    features: [
      "Registro rápido de ingresos y gastos por categoría",
      "Gráficos de tendencia mensual",
      "Metas de ahorro con progreso visual",
      "Exportación de datos a CSV"
    ],
    role: "[Placeholder] Proyecto individual: diseño de la interfaz, API REST con Node.js/Express y modelado de la base de datos en PostgreSQL.",
    learned: "[Placeholder] A diseñar una API REST desde cero y a tomar decisiones de UX cuando no hay un cliente dictando los requisitos."
  },
  {
    id: "api-inventario",
    title: "API de Inventario para PyMEs",
    description: "API RESTful para el control de stock, proveedores y ventas de pequeños negocios.",
    category: "university",
    featured: false,
    technologies: ["Python", "PostgreSQL", "Docker"],
    image: "placeholder-3",
    video: "",
    github: "https://github.com/tu-usuario/api-inventario",
    demo: "",
    problem: "[Placeholder] Como proyecto de curso, se pidió resolver un problema real de un negocio local: no tenían forma digital de controlar su inventario.",
    solution: "[Placeholder] Se diseñó una API documentada que permite gestionar productos, proveedores y ventas, pensada para conectarse luego a cualquier frontend.",
    features: [
      "CRUD completo de productos y proveedores",
      "Control de stock con alertas de bajo inventario",
      "Autenticación con tokens JWT",
      "Contenedorizada con Docker para fácil despliegue"
    ],
    role: "[Placeholder] Diseño de la arquitectura de la API y de la base de datos, además de la documentación técnica para el equipo.",
    learned: "[Placeholder] Buenas prácticas de diseño de APIs REST, versionado y cómo empaquetar un proyecto con Docker para que cualquiera lo levante igual."
  },
  {
    id: "portfolio-anterior",
    title: "Portafolio v1",
    description: "Primera versión de mi portafolio personal, construida solo con HTML, CSS y JavaScript puro.",
    category: "personal",
    featured: false,
    technologies: ["JavaScript"],
    image: "placeholder-4",
    video: "",
    github: "https://github.com/tu-usuario/portfolio-v1",
    demo: "",
    problem: "[Placeholder] Necesitaba un lugar propio para mostrar lo que iba aprendiendo, sin depender de plantillas.",
    solution: "[Placeholder] Un sitio simple, sin frameworks, para practicar fundamentos de HTML, CSS y JS antes de dar el salto a librerías más grandes.",
    features: [
      "Diseño 100% responsive sin frameworks",
      "Animaciones con CSS puro",
      "Formulario de contacto conectado a un servicio externo"
    ],
    role: "[Placeholder] Proyecto individual, de principio a fin.",
    learned: "[Placeholder] Los fundamentos que después me facilitaron aprender React y otros frameworks más rápido."
  },
  {
    id: "chat-tiempo-real",
    title: "ChatRoom en Tiempo Real",
    description: "Aplicación de chat grupal con salas temáticas usando WebSockets.",
    category: "personal",
    featured: false,
    technologies: ["Node.js", "JavaScript", "MySQL"],
    image: "placeholder-5",
    video: "",
    github: "https://github.com/tu-usuario/chatroom-realtime",
    demo: "",
    problem: "[Placeholder] Quería entender cómo funciona la comunicación en tiempo real más allá de peticiones HTTP tradicionales.",
    solution: "[Placeholder] Implementé un servidor con WebSockets que permite crear salas de chat y enviar mensajes instantáneos entre varios usuarios conectados.",
    features: [
      "Salas de chat creadas dinámicamente",
      "Mensajes en tiempo real sin recargar la página",
      "Historial de mensajes persistente",
      "Indicador de usuarios conectados"
    ],
    role: "[Placeholder] Proyecto individual: backend con Node.js y Socket.io, frontend con JavaScript puro.",
    learned: "[Placeholder] Cómo funcionan los WebSockets a bajo nivel y a manejar el estado de múltiples conexiones simultáneas."
  },
  {
    id: "gestor-tareas-universitario",
    title: "Gestor de Tareas Colaborativo",
    description: "Herramienta tipo Kanban para organizar entregas y proyectos en equipo durante la universidad.",
    category: "university",
    featured: false,
    technologies: ["React", "Node.js", "MongoDB"],
    image: "placeholder-6",
    video: "",
    github: "https://github.com/tu-usuario/gestor-tareas",
    demo: "",
    problem: "[Placeholder] En proyectos grupales de la universidad perdíamos tiempo coordinando quién hacía qué por chat.",
    solution: "[Placeholder] Un tablero Kanban simple donde el equipo mueve tareas entre 'Por hacer', 'En progreso' y 'Terminado', con notificaciones básicas.",
    features: [
      "Tableros Kanban con arrastrar y soltar",
      "Asignación de tareas por integrante",
      "Fechas límite con recordatorios",
      "Vista de progreso por proyecto"
    ],
    role: "[Placeholder] Desarrollo del frontend en React y de la lógica de arrastrar/soltar de tareas.",
    learned: "[Placeholder] Manejo de estado complejo en React y a trabajar con Git en equipo sin pisarnos el trabajo unos a otros."
  }
];

/**
 * Catálogo de tecnologías conocidas, agrupadas por categoría.
 * Para agregar o quitar una tecnología, solo edita este objeto.
 * "icon" es un ícono de Lucide (https://lucide.dev/icons) por nombre.
 */
const TECHNOLOGIES = {
  Frontend: [
    { name: "HTML", icon: "file-code-2" },
    { name: "CSS", icon: "palette" },
    { name: "JavaScript", icon: "file-json-2" },
    { name: "React", icon: "atom" }
  ],
  Backend: [
    { name: "PHP", icon: "server" },
    { name: "Laravel", icon: "flame" },
    { name: "Node.js", icon: "hexagon" },
    { name: "Python", icon: "terminal-square" }
  ],
  "Bases de datos": [
    { name: "MySQL", icon: "database" },
    { name: "PostgreSQL", icon: "database-zap" },
    { name: "SQL Server", icon: "server-cog" },
    { name: "MongoDB", icon: "leaf" }
  ],
  Herramientas: [
    { name: "Git", icon: "git-branch" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "container" },
    { name: "Linux", icon: "terminal" }
  ]
};

/**
 * Línea de tiempo de educación / experiencia.
 * Opcional y fácil de editar: agrega, quita o reordena entradas.
 * "type": "education" | "experience" | "certification"
 */
const TIMELINE = [
  {
    type: "education",
    title: "Ingeniería en Ciencias de la Computación",
    place: "[Nombre de tu universidad]",
    period: "[2023 — presente]",
    description: "[Placeholder] Enfoque en desarrollo de software, estructuras de datos y bases de datos."
  },
  {
    type: "certification",
    title: "[Nombre del curso o certificación]",
    place: "[Plataforma o institución]",
    period: "[Año]",
    description: "[Placeholder] Breve descripción de lo que cubrió el curso o certificación."
  },
  {
    type: "experience",
    title: "[Puesto o rol]",
    place: "[Empresa u organización]",
    period: "[Periodo]",
    description: "[Placeholder] Breve descripción de tus responsabilidades y logros en esta experiencia."
  }
];

/** Información de contacto — reemplaza con tus datos reales. */
const CONTACT = {
  name: "José Miguel Rea",
  role: "Computer Science Engineering Student & Software Developer",
  email: "tu-correo@example.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario"
};
