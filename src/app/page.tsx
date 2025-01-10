'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Download, ArrowLeft } from 'lucide-react'
import { VerticalMenu } from '@/components/VerticalMenu'

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
    link.href = '/updated CV.pdf' // Update path to match actual file name in public folder
    link.setAttribute('download', 'Williams CV')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900">
      <VerticalMenu />
      {/* Floating Download CV Button */}
      <motion.div
        className="fixed md:right-8 md:top-1/2 md:-translate-y-1/2 z-10 right-4 bottom-4 md:bottom-auto"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.button
          onClick={handleDownloadCV}
          className="relative w-16 h-16 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white border-2 border-purple-300/20 shadow-lg shadow-purple-900/30"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(168, 85, 247, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full border-2 border-black"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.2, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute w-full h-full rounded-full border-2 border-green-500"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.4, opacity: 0.3 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.div
            className="absolute w-full h-full rounded-full border-2 border-black"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.6, opacity: 0.3 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <Download size={24} />
        </motion.button>
      </motion.div>
      <div className="pl-[60px] min-h-screen p-6 md:p-12">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="flex gap-6 items-start" id="home">
            <div className="w-48 h-48 rounded-full border-4 border-purple-300/20 overflow-hidden flex-shrink-0 bg-black/40 backdrop-blur-sm shadow-lg shadow-purple-900/30">
              <img
                src="2.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
            >
              <Card className="flex-1 bg-black/40 backdrop-blur-sm border-none text-white">
                <CardContent className="pt-6">
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">Williams Folorunso</h1>
                  <h4 className="text-xl font-bold mb-2 text-pink-200">Web-Developer</h4><p>
                  Frontend Specialist.
                  </p>
                  <p className="text-white/70">
                    Solving complex challenges into elegant, user-friendly digital solutions.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/willzs01"
                      className="text-purple-300/70 hover:text-purple-300"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      className="text-purple-300/70 hover:text-purple-300"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <ArrowLeft size={24} className="text-purple-300/70" />
                    <span className="text-purple-300/70">Professional Handles</span>
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
                <CardHeader>
                  <CardTitle className="text-purple-200">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    I'm a passionate Web developer with a keen eye for design and a love for creating 
                    seamless user experiences. With a strong foundation in modern web technologies, 
                    I strive to build responsive and accessible web applications that make a difference.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} id="skills">
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
            >
              <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle className="text-purple-200">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React.js",
                      "Next.js",
                      "Responsive UI",
                      "Tailwind",
                      "Bootstrap",
                      "Git"
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="bg-purple-900/50 hover:bg-purple-800/60 text-purple-200 shadow-sm shadow-purple-900/30">
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
                <CardHeader>
                  <CardTitle className="text-purple-200">Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20"
                    >
                      <h3 className="font-semibold mb-2 text-purple-200">Ooh Interiors</h3>
                      <a 
                        href="https://oohdecorations.vercel.app/collections"
                        className="text-sm text-pink-300 hover:text-pink-200"
                      >
                        View Project →
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-xl bg-purple-900/30 p-4 shadow-md shadow-purple-900/20"
                    >
                      <h3 className="font-semibold mb-2 text-purple-200">Portfolio Website</h3>
                      <p className="text-sm text-white/70">
                        Personal portfolio showcasing my work
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
            >
              <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle className="text-purple-200">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-pink-200">Inter Digital age Consultant
                        <p>
                          <a href="https://interdigitalage.com" className="text-sm text-pink-300 hover:text-pink-200">visit</a>
                        </p>
                      </h3>
                      <p className="text-sm text-white/70">Front End Development</p>
                      <ul className="list-disc list-inside mt-2 text-sm text-white/70">
                        <li>Developed responsive web applications</li>
                        <li>Collaborated with cross-functional teams</li>
                        <li>Implemented modern web technologies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} id="contact">
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
            >
              <Card className="bg-black/40 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle className="text-purple-200">Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    I'm always open to new opportunities and collaborations. 
                    Feel free to reach out to me at{' '}
                    <a href="mailto:williamsfolorunso07@gmail.com" className="text-pink-300 hover:text-pink-200">
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
  )
}
