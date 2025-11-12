"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code2, Database, Globe, Server } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 })
  const [particles, setParticles] = useState<Array<{id: number, initialX: number, initialY: number, animateX: number, animateY: number, duration: number}>>([])

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial dimensions
    handleResize()
    
    // Generate particles only on client side
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      animateX: Math.random() * window.innerWidth,
      animateY: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10
    }))
    setParticles(newParticles)
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const projects = [
    {
      title: "800dent Cloud",
      description: "Plataforma de servicios de hosting especializada en soluciones web para el sector dental y de salud.",
      tech: ["Cloud Hosting", "Web Services", "Domain Management"],
      link: "https://800dent.cloud/",
      image: "/800cloud.png",
    },
    {
      title: "800dent",
      description: "Sitio principal de servicios dentales con información completa y sistema de contacto.",
      tech: ["Astro", "TypeScript", "Responsive Design"],
      link: "https://800dent.com/",
      image: "/800dent.png",
    },
    {
      title: "800dent Blog",
      description: "Blog especializado en contenido dental y de salud bucal con artículos informativos.",
      tech: ["Next.js", "MariaDB", "Content Management"],
      link: "http://800dent.net/",
      image: "/blog.png",
    },
    {
      title: "Cocina TEAtencion",
      description: "Aplicación de juego de cocina educativa diseñada específicamente para niños con autismo y déficit de atención, promoviendo el aprendizaje a través del juego interactivo.",
      tech: ["Unity", "C#", "Game Design", "Educational Technology"],
      link: "#",
      image: "/juego.png",
    },
    {
      title: "PignusTech",
      description: "Landing page corporativa moderna con diseño responsivo y optimizada para conversión de clientes.",
      tech: ["Next.js", "PHPMyAdmin", "SEO"],
      link: "https://pignustech.com/",
      image: "/pignus.png",
    },
    {
      title: "SpotServices",
      description: "Landing page profesional para servicios especializados con diseño moderno y responsivo.",
      tech: ["Astro", "React", "Tailwind CSS"],
      link: "https://spotservices.net/",
      image: "/spot.png",
    },
    {
      title: "Agendopia",
      description: "Sistema de gestión de citas y calendario inteligente para optimizar la productividad.",
      tech: ["Astro", "React", "PostgreSQL"],
      link: "https://agendopia.com/",
      image: "/agendopia.png",
    },
    {
      title: "E-commerce de Crochet",
      description: "Frontend moderno con carrito, filtros, pedidos, y panel de vendedor.",
      tech: ["Next.js", "React", "Supabase"],
      link: "#",
      image: "/crochet.png",
    },
    {
      title: "CallMasterCRM",
      description: "Sistema CRM completo para gestión de llamadas y clientes con análisis avanzado.",
      tech: ["Next.js", "SQL", "TypeScript"],
      link: "https://callmastercrm.com/",
      image: "/callmaster.png",
    },
    {
      title: "Battleship 3D",
      description:
        "Juego clásico de batalla naval reimaginado en 3D con gráficos modernos y mecánicas de juego mejoradas.",
      tech: ["Java", "3D Graphics", "Game Design"],
      link: "#",
      image: "/battle.png",
    },
  ]

  const skills = [
    { name: "Next.js", icon: Globe },
    { name: "Astro", icon: Globe },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Java", icon: Code2 },
    { name: "SQL Server", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "MariaDB", icon: Database },
    { name: "Tailwind CSS", icon: Code2 },
    { name: "AWS", icon: Server },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  const scaleVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-accent/20 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                x: particle.animateX,
                y: particle.animateY,
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            variants={floatingVariants}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-2xl shadow-accent/50"
          >
            VA
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg"
            >
              Hola, soy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Vivian Arias Verdin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Ingeniera en Sistemas y desarrolladora full-stack especializada en web y aplicaciones empresariales
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Desarrollo soluciones web que combinan diseño, rendimiento y funcionalidad empresarial.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 shadow-lg shadow-accent/30">
                Ver Proyectos
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                Descargar CV
                <Download className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/VivianAr2409" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vivian-arias-61279b36a?fromQR=1" },
              { icon: Mail, href: "mailto:vivi09arias@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Sobre mí</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Soy una ingeniera en sistemas con pasión por crear soluciones web innovadoras. Mi experiencia abarca desde
              el desarrollo de landing pages corporativas hasta la implementación de plataformas de e-commerce y
              sistemas CRM complejos. Me especializo en transformar ideas en productos digitales funcionales y
              atractivos utilizando tecnologías modernas.
            </p>
            <p className="text-lg text-accent max-w-3xl leading-relaxed font-medium">
              Me apasiona desarrollar interfaces limpias y sistemas inteligentes que mejoren la productividad de los negocios.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-semibold">Actualmente trabajando en</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Actualmente explorando integración de IA y minería de datos para crear soluciones más inteligentes y automatizadas.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Tecnologías & Herramientas</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card p-6 rounded-lg border border-border flex flex-col items-center gap-3 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all cursor-pointer"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: Math.random() * 5,
                    }}
                  >
                    <skill.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                  <span className="font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos</h2>
            <p className="text-lg text-muted-foreground">Una selección de mis trabajos más recientes y destacados</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden h-full hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group">
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Badge
                            variant="secondary"
                            className="hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <Button variant="ghost" className="w-full gap-2 group/btn" asChild={project.link !== "#"}>
                        {project.link !== "#" ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <span>
                            Ver Proyecto
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="education" className="px-6 py-20 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Educación</h2>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <Card className="p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300">
              <div className="space-y-3">
                <motion.div
                  className="text-sm text-accent font-semibled"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  2025
                </motion.div>
                <motion.h3
                  className="text-2xl font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Ingeniería en Sistemas Computacionales
                </motion.h3>
                <motion.p
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Universidad
                </motion.p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Contacto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y colaborar contigo.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 shadow-lg shadow-accent/30" asChild>
                <a href="mailto:vivi09arias@gmail.com">
                  <Mail className="w-5 h-5" />
                  Enviar Email
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="https://www.linkedin.com/in/vivian-arias-61279b36a?fromQR=1" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Vivian Arias Verdin — Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}
