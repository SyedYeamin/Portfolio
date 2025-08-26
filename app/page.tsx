"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PortfolioCard } from '@/components/PortfolioCard';
import { PortfolioLandscape } from '@/components/PortfolioLandscape';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const portfolioItems = [
    {
      id: 1,
      title: "Social Media Content",
      category: "Advertisement",
      image: "/Absolutecoffee.mockup.jpg",
      description: "",
    },
    {
      id: 2,
      title: "Jersey and other designs",
      category: "Clothing",
      images: ["/MyBoisJerseyConcept2.0.png","/Oasis Hoodie design mockup.png"],
      description: "",
    },
    {
      id: 3,
      title: "Print Design Collection",
      category: "Print",
      image: "/placeholder-ad1ye.png",
      description: "Various print materials including brochures, business cards, and posters.",
    },
    {
      id: 4,
      title: "Mobile App Interface",
      category: "App Design",
      image: "/mobile-app-interface.png",
      description: "Intuitive mobile application interface with modern design principles.",
    },
    {
      id: 5,
      title: "Packaging Design",
      category: "Packaging",
      image: "/premium-packaging.png",
      description: "Premium product packaging design with sustainable materials focus.",
    },
    {
      id: 6,
      title: "Social Media Graphics",
      category: "Digital",
      image: "/social-media-template.png",
      description: "Engaging social media graphics and templates for various platforms.",
    },
  ]

    const portfoliolandscape = [
    {
      id: 1,
      title: "Product Mockups",
      category: "Branding",
      images: ["/Product_Mockups/Orange Soda Banner1.png","/Product_Mockups/Orange Banner2.png","/Product_Mockups/Lemon Soda Banner 1.png","/Product_Mockups/2 soda can with logo.png","/Product_Mockups/Both flavour Grey BG.png"],
      description: "",
    },
    {
      id: 2,
      title: "Holi Sale",
      category: "Advertisement",
      image: "/Holi Festival Sale Website banner.png",
      description: "web content for a festival mockup",
    },
    {
      id: 3,
      title: "Print Design Collection",
      category: "Print",
      image: "/placeholder-ad1ye.png",
      description: "Various print materials including brochures, business cards, and posters.",
    },
    {
      id: 4,
      title: "Mobile App Interface",
      category: "App Design",
      image: "/mobile-app-interface.png",
      description: "Intuitive mobile application interface with modern design principles.",
    },
    {
      id: 5,
      title: "Packaging Design",
      category: "Packaging",
      image: "/premium-packaging.png",
      description: "Premium product packaging design with sustainable materials focus.",
    },
    {
      id: 6,
      title: "Social Media Graphics",
      category: "Digital",
      image: "/social-media-template.png",
      description: "Engaging social media graphics and templates for various platforms.",
    },
  ]

  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Express",
    "Canva",
    "Microsoft Excel",
    "Power BI",
    "Graphics Design",
    "Data Visualization", 
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#86eaff]/20 via-secondary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-tr from-[#86ffb9]/25 via-muted/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tl from-[#86eaff]/30 via-[#86ffb9]/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#86eaff]/40 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-br from-[#86ffb9]/30 to-[#86eaff]/20 rotate-12 rounded-lg"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
        <div className="absolute top-1/5 left-1/3 w-2 h-2 bg-[#86eaff]/60 rounded-full"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#86ffb9]/70 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#86eaff]/50 rounded-full"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#86eaff] to-[#86ffb9] bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#home" className="text-foreground hover:text-[#86eaff] transition-colors duration-300">
                Home
              </a>
              <a href="#portfolio" className="text-foreground hover:text-[#86ffb9] transition-colors duration-300">
                Portfolio
              </a>
              <a href="#about" className="text-foreground hover:text-[#86eaff] transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-[#86ffb9] transition-colors duration-300">
                Contact
              </a>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border-[#86eaff]/50 text-[#86eaff] hover:bg-[#86eaff]/10"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </nav>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="#home"
                  className="text-foreground hover:text-[#86eaff] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#portfolio"
                  className="text-foreground hover:text-[#86ffb9] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-[#86eaff] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-[#86ffb9] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#86eaff]/20 to-[#86ffb9]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tl from-[#86ffb9]/25 to-[#86eaff]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6">
            
            <span className="bg-gradient-to-r from-[#86eaff] to-[#86ffb9] bg-clip-text text-transparent block">
               Syed Yeamin
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting visual experiences that tell stories, build brands, and connect with audiences through thoughtful
            design and creative innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#86eaff] to-[#86ffb9] hover:from-[#86eaff]/90 hover:to-[#86ffb9]/90 text-black font-semibold hover-lift"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#86eaff] text-[#86eaff] hover:bg-[#86eaff]/10 bg-transparent hover-glow"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

{/* Portfolio Section */}

<section id="portfolio" className="pt-12 sm:pt-20 pb-3 sm:pb-4 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A collection of my recent projects that demonstrate diverse design disciplines and creative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>

          {/* Portfolio Section */}

<section id="portfolio" className="pb-12 sm:pb-20 pt-3 sm:pt-4 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
    

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfoliolandscape.map((item) => (
            <PortfolioLandscape key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-[#86eaff]/25 to-[#86ffb9]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[#86ffb9]/20 to-[#86eaff]/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#86eaff]/30 rotate-45 rounded-2xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hi there! I'm a creative designer that enjoys transforming ideas into visual storytelling.
                With over 2 years of expertise, I understand that great design is more than just aesthetics;
                it also involves solving real-world problems and connecting people.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When not designing, I enjoy experimenting with new creative approaches,
                sketching ideas, and finding inspiration in ordinary events. I see every project as
                an opportunity to push limits while remaining relevant and functional.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`text-sm hover-glow transition-all duration-300 ${
                        index % 2 === 0
                          ? "border-[#86eaff]/50 text-[#86eaff] hover:bg-[#86eaff]/10"
                          : "border-[#86ffb9]/50 text-[#86ffb9] hover:bg-[#86ffb9]/10"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Yeamin profile (1).png"
                alt="Designer portrait"
                className="w-full rounded-lg shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

                  
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-card/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-60 h-60 bg-gradient-to-br from-[#86ffb9]/25 to-[#86eaff]/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-tl from-[#86eaff]/30 to-[#86ffb9]/25 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-[#86eaff]/40 to-[#86ffb9]/30 rotate-12 rounded-lg"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create
              something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 hover-lift">
                  <Mail className="w-5 h-5 text-[#86eaff]" />
                  <span className="text-muted-foreground">sayeamin75@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 hover-lift">
                  <Phone className="w-5 h-5 text-[#86ffb9]" />
                  <span className="text-muted-foreground">+8801648914385</span>
                </div>
                <div className="flex items-center gap-4 hover-lift">
                  <MapPin className="w-5 h-5 text-[#86eaff]" />
                  <span className="text-muted-foreground">Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#86eaff]/50 text-[#86eaff] hover:bg-[#86eaff]/10 bg-transparent hover-glow"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#86ffb9]/50 text-[#86ffb9] hover:bg-[#86ffb9]/10 bg-transparent hover-glow"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#86eaff]/50 text-[#86eaff] hover:bg-[#86eaff]/10 bg-transparent hover-glow"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-4 sm:p-6 bg-background/80 backdrop-blur-sm hover-lift">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#86eaff]/50 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#86ffb9]/50 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#86eaff]/50 resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#86eaff] to-[#86ffb9] hover:from-[#86eaff]/90 hover:to-[#86ffb9]/90 text-black font-semibold hover-lift"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">© 2025 sayeamin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
