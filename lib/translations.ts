export const translations = {
  es: {
    // Hero Section
    greeting: "Hola, soy",
    name: "Vivian Arias Verdin",
    title: "Ingeniera en Sistemas Computacionales y desarrolladora full-stack especializada en web y aplicaciones empresariales",
    valueProposition: "Desarrollo soluciones web que combinan diseño, rendimiento y funcionalidad empresarial.",
    viewProjects: "Ver Proyectos",
    downloadCV: "Descargar CV",

    // About Section
    aboutTitle: "Sobre mí",
    aboutDescription: "Soy una ingeniera en sistemas con pasión por crear soluciones web innovadoras. Mi experiencia abarca desde el desarrollo de landing pages corporativas hasta la implementación de plataformas de e-commerce y sistemas CRM complejos. Me especializo en transformar ideas en productos digitales funcionales y atractivos utilizando tecnologías modernas.",
    aboutPassion: "Me apasiona desarrollar interfaces limpias y sistemas inteligentes que mejoren la productividad de los negocios.",
    currentlyWorkingTitle: "Actualmente trabajando en",
    currentlyWorkingDescription: "Actualmente explorando integración de IA y minería de datos para crear soluciones más inteligentes y automatizadas.",
    techTitle: "Tecnologías & Herramientas",

    // Projects Section
    projectsTitle: "Proyectos Destacados",
    projectsDescription: "Algunos de los proyectos en los que he trabajado",
    viewProject: "Ver Proyecto",

    // Education Section
    educationTitle: "Educación",
    educationYear: "2025",
    educationDegree: "Ingeniería en Sistemas Computacionales",
    educationInstitution: "Universidad",

    // Contact Section
    contactTitle: "Contacto",
    contactDescription: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y colaborar contigo.",
    sendEmail: "Enviar Email",
    linkedin: "LinkedIn",

    // Footer
    footerRights: "Todos los derechos reservados",

    // Projects
    projects: {
      "800dent-cloud": {
        title: "800dent Cloud",
        description: "Plataforma de servicios de hosting especializada en soluciones web para el sector dental y de salud.",
      },
      "800dent": {
        title: "800dent",
        description: "Sitio principal de servicios dentales con información completa y sistema de contacto.",
      },
      "800dent-blog": {
        title: "800dent Blog",
        description: "Blog especializado en contenido dental y de salud bucal con artículos informativos.",
      },
      "cocina-teatencion": {
        title: "Cocina TEAtencion",
        description: "Aplicación de juego de cocina educativa diseñada específicamente para niños con autismo y déficit de atención, promoviendo el aprendizaje a través del juego interactivo.",
      },
      "pignustech": {
        title: "PignusTech",
        description: "Landing page corporativa moderna con diseño responsivo y optimizada para conversión de clientes.",
      },
      "spotservices": {
        title: "SpotServices",
        description: "Landing page profesional para servicios especializados con diseño moderno y responsivo.",
      },
      "crm-dashboard": {
        title: "CRM Dashboard",
        description: "Sistema CRM completo con gestión de clientes, pipeline de ventas y análisis de métricas empresariales.",
      },
      "ecommerce-platform": {
        title: "Plataforma E-commerce",
        description: "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y gestión de inventario.",
      },
      "task-manager": {
        title: "Gestor de Tareas",
        description: "Aplicación web para gestión de proyectos y tareas con colaboración en equipo y seguimiento de progreso.",
      },
      "weather-app": {
        title: "App del Clima",
        description: "Aplicación meteorológica con pronósticos en tiempo real y visualización de datos interactiva.",
      },
    },
  },
  en: {
    // Hero Section
    greeting: "Hi, I'm",
    name: "Vivian Arias Verdin",
    title: "Computer Systems Engineer and full-stack developer specialized in web and enterprise applications",
    valueProposition: "I develop web solutions that combine design, performance, and business functionality.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",

    // About Section
    aboutTitle: "About Me",
    aboutDescription: "I am a systems engineer with a passion for creating innovative web solutions. My experience ranges from developing corporate landing pages to implementing e-commerce platforms and complex CRM systems. I specialize in transforming ideas into functional and attractive digital products using modern technologies.",
    aboutPassion: "I'm passionate about developing clean interfaces and intelligent systems that improve business productivity.",
    currentlyWorkingTitle: "Currently working on",
    currentlyWorkingDescription: "Currently exploring AI integration and data mining to create smarter and more automated solutions.",
    techTitle: "Technologies & Tools",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsDescription: "Some of the projects I've worked on",
    viewProject: "View Project",

    // Education Section
    educationTitle: "Education",
    educationYear: "2025",
    educationDegree: "Computer Systems Engineering",
    educationInstitution: "University",

    // Contact Section
    contactTitle: "Contact",
    contactDescription: "Have a project in mind? I'd love to hear about it and collaborate with you.",
    sendEmail: "Send Email",
    linkedin: "LinkedIn",

    // Footer
    footerRights: "All rights reserved",

    // Projects
    projects: {
      "800dent-cloud": {
        title: "800dent Cloud",
        description: "Hosting services platform specialized in web solutions for the dental and healthcare sector.",
      },
      "800dent": {
        title: "800dent",
        description: "Main dental services website with comprehensive information and contact system.",
      },
      "800dent-blog": {
        title: "800dent Blog",
        description: "Blog specialized in dental content and oral health with informative articles.",
      },
      "cocina-teatencion": {
        title: "Cocina TEAtencion",
        description: "Educational cooking game application designed specifically for children with autism and attention deficit, promoting learning through interactive gameplay.",
      },
      "pignustech": {
        title: "PignusTech",
        description: "Modern corporate landing page with responsive design optimized for customer conversion.",
      },
      "spotservices": {
        title: "SpotServices",
        description: "Professional landing page for specialized services with modern and responsive design.",
      },
      "crm-dashboard": {
        title: "CRM Dashboard",
        description: "Complete CRM system with customer management, sales pipeline and business metrics analysis.",
      },
      "ecommerce-platform": {
        title: "E-commerce Platform",
        description: "E-commerce platform with shopping cart, payment gateway and inventory management.",
      },
      "task-manager": {
        title: "Task Manager",
        description: "Web application for project and task management with team collaboration and progress tracking.",
      },
      "weather-app": {
        title: "Weather App",
        description: "Weather application with real-time forecasts and interactive data visualization.",
      },
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.es
