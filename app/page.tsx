"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Flag,
  Star,
  Users,
  Calendar,
  Heart,
  MapPin,
  Sparkles,
  Crown,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cultureRef = useRef<HTMLDivElement>(null)
  const heroesRef = useRef<HTMLDivElement>(null)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms
  const backgroundY = useTransform(heroScrollProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"])
  const imageY = useTransform(heroScrollProgress, [0, 1], ["0%", "-20%"])
  const starsY = useTransform(heroScrollProgress, [0, 1], ["0%", "100%"])
  const cloudsY = useTransform(heroScrollProgress, [0, 1], ["0%", "80%"])

  // Section animations
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const cultureInView = useInView(cultureRef, { once: true, margin: "-100px" })
  const heroesInView = useInView(heroesRef, { once: true, margin: "-100px" })

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-dvh bg-white overflow-x-hidden"
    >
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between border-b-2 border-red-600 bg-white/90 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link href="/" className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Flag className="h-8 w-8 text-red-600" />
          </motion.div>
          <span className="ml-2 text-xl font-bold text-red-600">
            Indonesia Merdeka
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <Link
            href="#sejarah"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Sejarah
          </Link>
          <Link
            href="#kebudayaan"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Kebudayaan
          </Link>
          <Link
            href="#pahlawan"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Pahlawan
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.span
            className="w-6 h-0.5 bg-red-600 rounded-full"
            animate={
              mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-red-600 rounded-full"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-red-600 rounded-full"
            animate={
              mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Menu Overlay */}
        <motion.div
          className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-[9999]"
          initial={{ opacity: 1, y: -20 }}
          animate={
            mobileMenuOpen ? { opacity: 1, y: 200 } : { opacity: 1, y: -20 }
          }
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: mobileMenuOpen ? "auto" : "none",
          }}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link
                href="#sejarah"
                className="text-2xl font-semibold text-red-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sejarah
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                href="#kebudayaan"
                className="text-2xl font-semibold text-red-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kebudayaan
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link
                href="#pahlawan"
                className="text-2xl font-semibold text-red-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pahlawan
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </motion.header>

      <main className="flex-1 pt-16">
        {/* Hero Section with Advanced Parallax */}
        <section
          ref={heroRef}
          className="relative w-full h-screen overflow-hidden"
        >
          {/* Layered Background with Parallax */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700"
            style={{ y: backgroundY }}
          />

          {/* Animated Pattern Background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{ y: cloudsY }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse" />
          </motion.div>

          {/* Floating Geometric Shapes */}
          <motion.div className="absolute inset-0" style={{ y: starsY }}>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              >
                <div
                  className={`w-${Math.floor(Math.random() * 8) + 4} h-${
                    Math.floor(Math.random() * 8) + 4
                  } bg-white/20 ${
                    Math.random() > 0.5 ? "rounded-full" : "rounded-lg"
                  } backdrop-blur-sm`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Sparkle Effects */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                <Sparkles className="w-4 h-4 text-white/60" />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto relative z-10 px-4 md:px-6 h-full">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] h-full items-center">
              <motion.div
                className="flex flex-col justify-center space-y-6 text-white"
                style={{ y: textY }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Crown className="w-8 h-8 text-yellow-300" />
                    </motion.div>
                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm backdrop-blur-sm border border-white/30">
                      <motion.span
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(255,255,255,0.5)",
                            "0 0 20px rgba(255,255,255,0.8)",
                            "0 0 0px rgba(255,255,255,0.5)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        17 Agustus 1945 - 2025
                      </motion.span>
                    </div>
                  </motion.div>

                  <motion.h1
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl/none"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <motion.div className="flex flex-col">
                      <motion.span
                        className="inline-block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
                        animate={{
                          y: [0, -8, 0],
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          backgroundPosition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                        style={{ backgroundSize: "200% 100%" }}
                      >
                        Dirgahayu
                      </motion.span>
                      <motion.span
                        className="inline-block bg-gradient-to-r from-red-200 via-white to-red-200 bg-clip-text text-transparent"
                        animate={{
                          y: [0, -8, 0],
                          backgroundPosition: [
                            "100% 50%",
                            "0% 50%",
                            "100% 50%",
                          ],
                        }}
                        transition={{
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          },
                          backgroundPosition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.5,
                          },
                        }}
                        style={{ backgroundSize: "200% 100%" }}
                      >
                        Indonesia ke-80
                      </motion.span>
                    </motion.div>
                  </motion.h1>

                  <motion.h2
                    className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <motion.span
                      className="inline-flex items-center gap-2"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0.8)",
                          "0 0 30px rgba(255,255,255,1)",
                          "0 0 0px rgba(255,255,255,0.8)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Award className="w-8 h-8 text-yellow-300" />
                      Kemerdekaan yang Abadi
                    </motion.span>
                  </motion.h2>

                  <motion.p
                    className="max-w-[700px] text-white/90 md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    Merayakan 80 tahun kemerdekaan Indonesia dengan penuh
                    kebanggaan. Dari Sabang sampai Merauke, satu nusa, satu
                    bangsa, satu bahasa - Indonesia yang bersatu dan berdaulat!
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-to-r from-white to-yellow-100 text-red-600 hover:from-yellow-100 hover:to-white font-bold px-10 py-4 text-lg shadow-2xl border-2 border-white/20">
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Pelajari Sejarah
                      </motion.span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-3 border-white text-white hover:bg-white/20 px-10 py-4 text-lg backdrop-blur-sm font-semibold"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Lihat Galeri
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center relative"
                style={{ y: imageY }}
                initial={{ opacity: 0, x: 100, rotateY: -30 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                {/* Multiple Rotating Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-300 to-white/30"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-white/20"
                  animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                <motion.div
                  className="absolute inset-16 rounded-full border border-yellow-300/30"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <Image
                    src="/indonesian-flag-garuda.png"
                    width="600"
                    height="400"
                    alt="Bendera Indonesia berkibar"
                    className="mx-auto aspect-[3/2] overflow-hidden rounded-2xl object-cover shadow-2xl border-4 border-white/30"
                  />

                  {/* Enhanced Glowing Effects */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/30 via-white/20 to-red-300/30"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Enhanced Floating Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 bg-gradient-to-r from-yellow-300 to-white/50 rounded-full backdrop-blur-sm"
                    style={{
                      top: `${20 + Math.sin((i * Math.PI) / 4) * 40}%`,
                      left: `${20 + Math.cos((i * Math.PI) / 4) * 40}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              className="flex flex-col items-center text-white/90"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm mb-3 font-medium">
                Jelajahi Lebih Dalam
              </span>
              <motion.div
                className="w-8 h-12 border-3 border-white/60 rounded-full flex justify-center relative overflow-hidden"
                whileHover={{
                  borderColor: "rgba(255,255,255,0.9)",
                  scale: 1.1,
                }}
              >
                <motion.div
                  className="w-2 h-4 bg-gradient-to-b from-white to-yellow-300 rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Stats Section with Parallax */}
        <motion.section
          ref={statsRef}
          className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-red-50 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl font-bold tracking-tighter sm:text-6xl text-red-700 mb-4"
                animate={
                  statsInView
                    ? {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                    : {}
                }
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  background:
                    "linear-gradient(90deg, #dc2626, #fbbf24, #dc2626)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Indonesia dalam Angka
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pencapaian luar biasa bangsa Indonesia selama 80 tahun
                kemerdekaan
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
              {[
                {
                  icon: Calendar,
                  number: "80",
                  text: "Tahun Merdeka",
                  color: "text-red-600",
                  delay: 0,
                },
                {
                  icon: MapPin,
                  number: "17,508",
                  text: "Pulau",
                  color: "text-blue-600",
                  delay: 0.2,
                },
                {
                  icon: Users,
                  number: "270+",
                  text: "Juta Penduduk",
                  color: "text-green-600",
                  delay: 0.4,
                },
                {
                  icon: Heart,
                  number: "1,340",
                  text: "Suku Bangsa",
                  color: "text-purple-600",
                  delay: 0.6,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateY: -30 }}
                  animate={statsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: stat.delay,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                >
                  <Card className="border-2 border-red-200 hover:border-red-400 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: stat.delay,
                        }}
                      >
                        <stat.icon className={`h-16 w-16 ${stat.color} mb-6`} />
                      </motion.div>
                      <motion.div
                        className={`text-4xl font-bold ${stat.color} mb-2`}
                        animate={
                          statsInView
                            ? {
                                scale: [1, 1.2, 1],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          delay: stat.delay + 0.5,
                          ease: "easeOut",
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-gray-600 font-medium text-lg">
                        {stat.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Culture Section */}
        <motion.section
          ref={cultureRef}
          id="kebudayaan"
          className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-red-600/20 to-transparent" />
          </motion.div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={cultureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <motion.div
                className="inline-block rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm text-white font-semibold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(220,38,38,0.3)",
                }}
              >
                <Sparkles className="inline w-4 h-4 mr-2" />
                Kekayaan Nusantara
              </motion.div>
              <motion.h2
                className="text-4xl font-bold tracking-tighter sm:text-6xl text-red-700"
                animate={
                  cultureInView
                    ? {
                        textShadow: [
                          "0 0 0px rgba(220,38,38,0.5)",
                          "0 0 30px rgba(220,38,38,0.8)",
                          "0 0 0px rgba(220,38,38,0.5)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: Infinity }}
              >
                Kebudayaan Indonesia
              </motion.h2>
              <p className="max-w-4xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Indonesia kaya akan budaya, tradisi, dan kearifan lokal yang
                telah diwariskan turun-temurun. Mari lestarikan warisan nenek
                moyang kita untuk generasi mendatang.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -100, rotateY: -20 }}
                animate={cultureInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative"
              >
                <Image
                  src="/indonesian-dance.png"
                  width="600"
                  height="400"
                  alt="Tarian tradisional Indonesia"
                  className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover shadow-2xl border-4 border-white/50"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-500/20 to-yellow-500/20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: 100 }}
                animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <ul className="grid gap-8">
                  {[
                    {
                      title: "Tarian Tradisional",
                      desc: "Dari Saman Aceh hingga Kecak Bali, setiap daerah memiliki tarian yang mempesona dan sarat makna.",
                      delay: 0,
                    },
                    {
                      title: "Kuliner Nusantara",
                      desc: "Rendang, Gudeg, Pempek, dan ribuan kuliner lainnya yang menggugah selera dan menjadi kebanggaan dunia.",
                      delay: 0.2,
                    },
                    {
                      title: "Batik & Tenun",
                      desc: "Karya seni tekstil yang diakui UNESCO sebagai warisan budaya dunia tak benda.",
                      delay: 0.4,
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: item.delay + 0.5 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="group"
                    >
                      <div className="grid gap-3 p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-red-200 group-hover:border-red-400 transition-all duration-300 group-hover:shadow-lg">
                        <h3 className="text-2xl font-bold text-red-700 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Heroes Section */}
        <motion.section
          ref={heroesRef}
          id="pahlawan"
          className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={heroesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <motion.div
                className="inline-block rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Crown className="inline w-4 h-4 mr-2" />
                Pahlawan Bangsa
              </motion.div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl text-red-700">
                Mengenang Jasa Para Pahlawan
              </h2>
              <p className="max-w-4xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kemerdekaan Indonesia tidak lepas dari perjuangan para pahlawan
                yang rela berkorban jiwa dan raga untuk bangsa dan negara
                tercinta.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-6xl items-start gap-10 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {[
                {
                  src: "/soekarno-portrait.png",
                  name: "Ir. Soekarno",
                  desc: "Proklamator dan Presiden pertama Republik Indonesia",
                  delay: 0,
                },
                {
                  src: "/mohammad-hatta-portrait.png",
                  name: "Drs. Mohammad Hatta",
                  desc: "Proklamator dan Wakil Presiden pertama Republik Indonesia",
                  delay: 0.2,
                },
                {
                  src: "/cut-nyak-dien-portrait.png",
                  name: "Cut Nyak Dien",
                  desc: "Pahlawan wanita dari Aceh yang gigih melawan penjajah",
                  delay: 0.4,
                },
              ].map((hero, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateY: -20 }}
                  animate={heroesInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: hero.delay,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                >
                  <Card className="border-2 border-red-200 hover:border-red-400 transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative mb-6"
                      >
                        <Image
                          src={hero.src || "/placeholder.svg"}
                          width="200"
                          height="200"
                          alt={hero.name}
                          className="mx-auto rounded-full border-4 border-red-200 shadow-lg"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-yellow-500/20"
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: hero.delay,
                          }}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold text-red-700 mb-3">
                        {hero.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {hero.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced CTA Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          </motion.div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-6 text-center text-white"
            >
              <motion.h2
                className="text-4xl font-bold tracking-tighter md:text-6xl/tight"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0.8)",
                    "0 0 40px rgba(255,255,255,1)",
                    "0 0 0px rgba(255,255,255,0.8)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Mari Jaga dan Lestarikan Indonesia
              </motion.h2>
              <p className="mx-auto max-w-3xl text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bergabunglah dengan kami untuk melestarikan budaya dan
                nilai-nilai luhur bangsa Indonesia. Bersama kita wujudkan
                Indonesia yang lebih maju, adil, dan sejahtera.
              </p>
              <motion.div
                className="mx-auto w-full max-w-md space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <form className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="flex-1 bg-white/90 text-gray-900 border-2 border-white/30 focus:border-white"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="bg-white text-red-600 hover:bg-yellow-100 font-bold px-8"
                    >
                      Daftar
                    </Button>
                  </motion.div>
                </form>
                <p className="text-sm text-white/80">
                  Dapatkan informasi terbaru tentang kegiatan kemerdekaan
                  Indonesia.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t-4 border-red-600 bg-gradient-to-r from-white to-red-50">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Indonesia Merdeka. Dibuat dengan ❤️ untuk
          Nusantara.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm hover:text-red-600 transition-colors font-medium"
          >
            Syarat & Ketentuan
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-red-600 transition-colors font-medium"
          >
            Privasi
          </Link>
        </nav>
      </footer>
    </div>
  )
}
