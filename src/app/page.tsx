'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin,  Download, ArrowLeft } from 'lucide-react'
import { VerticalMenu } from '@/components/VerticalMenu'
import styles from './styles.module.css'

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const cardHoverVariants = {
    initial: {
      y: 0,
      boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.3)"
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px -15px rgba(139, 92, 246, 0.5)",
      transition: {
        duration: 0.3
      }
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/updated CV.pdf'
    link.setAttribute('download', 'Williams CV')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900 relative overflow-hidden">
        <div className={styles['star-layer-1']}></div>
        <div className={styles['star-layer-2']}></div>
        <div className={styles['star-layer-3']}></div>
        <div className={styles['star-layer-4']}></div>
        <VerticalMenu />
        
        {/* Floating Download CV Button */}
        <motion.div
          className={`fixed z-10 ${
            isMobile 
              ? 'bottom-4 right-4' 
              : 'right-8 top-1/2 -translate-y-1/2'
          }`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.button
            onClick={handleDownloadCV}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white border-2 border-purple-300/20 shadow-lg shadow-purple-900/30"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute w-full h-full rounded-full border-2 border-purple-300/20"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <Download size={20} className="md:w-6 md:h-6" />
          </motion.button>
        </motion.div>

        <div className="pl-[60px] min-h-screen p-4 md:p-8 lg:p-12">
          <motion.div 
            className="max-w-5xl mx-auto space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 items-center md:items-start" id="home">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-purple-300/20 overflow-hidden flex-shrink-0 bg-black/40 backdrop-blur-sm shadow-lg shadow-purple-900/30">
                <img
                  src="/21.jpg"
                  alt="Profile"
                  width={192}
                  height={192}
                  className="rounded-full border-4 border-gray-500 overflow-hidden flex-shrink-0"
                />
              </div>
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                className="flex-1 w-full md:w-auto"
              >
                <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                  <CardContent className="pt-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">Williams Folorunso</h1>
                    <h4 className="text-lg md:text-xl font-bold mb-2 text-pink-200">software-Engineer</h4>
                    <p className="text-pink-100">Fullstack Developer <br/></p>
                    <p className="text-blue-300 text-sm md:text-base mt-2">
                      Solving complex challenges into elegant, user-friendly digital solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/willzs01"
                        className="text-purple-300/70 hover:text-purple-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/williams-folorunso"
                          className="text-purple-300/70 hover:text-purple-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin size={24} />
                        </a>
                      </motion.div>
                      <div className="flex items-center gap-2">
                        <ArrowLeft size={20} className="text-purple-300/70" />
                        <span className="text-purple-300/70 text-sm">Professional Handles</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Skills Section - Moved up for better flow */}
            <motion.div variants={itemVariants} id="skills">
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
              >
                <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-purple-200 text-xl md:text-2xl">Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git',
  'Docker',
  'AWS',
  'Python',
  'Django',
  'PostgreSQL',
  'GraphQL',
  'Redux',
  'Jest',
  'Cypress'
].map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 shadow-sm shadow-purple-900/30 text-xs md:text-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={itemVariants} id="projects">
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
              >
                <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-purple-200 text-xl md:text-2xl">Sample Projects
                      <p className="text-sm text-white/70">[access source code on my github]</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.a
                        href="https://matchjobs.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20 group cursor-pointer"
                      >
                        <h3 className="font-semibold mb-2 text-purple-200 group-hover:text-pink-200 transition-colors">MatchJobs</h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                        A streamlined job application platform connecting applicants with tailored opportunities through a responsive UI.
                        </p>
                        <span className="text-xs text-pink-300 group-hover:text-pink-200 mt-2 inline-block">
                          View Project →
                        </span>
                      </motion.a>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20"
                      >
                        <h3 className="font-semibold mb-2 text-purple-200">Portfolio Website</h3>
                        <p className="text-sm text-white/70">
                        A modern, responsive portfolio site showcasing personal projects and skills with source code hosted on GitHub.
                        </p>
                      </motion.div>
                      <motion.a
                        href="https://lily-ai.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20 group cursor-pointer"
                      >
                        <h3 className="font-semibold mb-2 text-purple-200 group-hover:text-pink-200 transition-colors">Pidgin AI Chat Bot</h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                          Your Pidgin AI Companion
                          An AI-driven chatbot designed to communicate in Pidgin, providing a conversational experience in a native dialect.
                        </p>
                        <span className="text-xs text-pink-300 group-hover:text-pink-200 mt-2 inline-block">
                          View Project →
                        </span>
                      </motion.a>
                      <motion.a
                        href="https://ai-voice-seven.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20 group cursor-pointer"
                      >
                        <h3 className="font-semibold mb-2 text-purple-200 group-hover:text-pink-200 transition-colors">Voice painter</h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                        An AI voice model project that speaks in your native accent, enhancing localized voice interactions.
                        </p>
                        <span className="text-xs text-pink-300 group-hover:text-pink-200 mt-2 inline-block">
                          View Project →
                        </span>
                      </motion.a>
                      <motion.a
                        href="https://reactmovieapp-lemon.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20 group cursor-pointer"
                      >
                        <h3 className="font-semibold mb-2 text-purple-200 group-hover:text-pink-200 transition-colors"> Movie app</h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                        A simple movie app demo displaying popular films using dynamic APIs and sleek UI components.
                        </p>
                        <span className="text-xs text-pink-300 group-hover:text-pink-200 mt-2 inline-block">
                          View Project →
                        </span>
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* About Section */}
            <motion.div variants={itemVariants} id="about">
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
              >
                <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-purple-200 text-xl md:text-2xl">About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base leading-relaxed">
                      I&lsquo;m a passionate Web developer with a keen eye for design and a love for creating 
                      seamless user experiences. With a strong foundation in modern web technologies, 
                      I strive to build responsive and accessible web applications that make a difference.
                    </p><br/>
                    Team member, frontend role <a href='https://x.com/BuildsaasPro'><span className='text-blue-300'>@BuildSaas</span></a>, a startup that provides service to businesses
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} id="contact" className="mb-8">
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
              >
                <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-purple-200 text-xl md:text-2xl">Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base">
                      I&lsquo;m always open to new opportunities and collaborations. 
                      Feel free to reach out to me at{' '}
                      <a 
                        href="mailto:williamsfolorunso07@gmail.com" 
                        className="text-pink-300 hover:text-pink-200 transition-colors underline decoration-pink-300/30 hover:decoration-pink-200"
                      >
                        williamsfolorunso07@gmail.com
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
