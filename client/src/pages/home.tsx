import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter } from "lucide-react";
import profileImage from "@assets/generated_images/professional_minimalist_profile_portrait.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background relative selection:bg-primary/10">
      {/* Top Right Navigation */}
      <nav className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">X (Twitter)</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="shrink-0"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden shadow-sm">
                <img 
                  src={profileImage} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            <div className="space-y-4 pt-2">
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
                Alex Morgan
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-lg">
                Digital craftsman and frontend engineer based in San Francisco. I build accessible, pixel-perfect interfaces that feel human.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid gap-12 md:gap-16">
            <section className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Introduction</h2>
              <p className="text-lg leading-relaxed text-foreground/90 font-light">
                I've spent the last decade working at the intersection of design and engineering. My philosophy is simple: software should be fast, reliable, and invisible. I believe in tools that empower users without getting in their way. When I'm not coding, you can find me exploring brutalist architecture or brewing the perfect cup of pour-over coffee.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">What I've Worked On</h2>
              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <h3 className="text-xl font-serif font-medium group-hover:underline decoration-1 underline-offset-4">Vercel Analytics</h3>
                  <p className="mt-2 text-muted-foreground font-light">
                    Led the frontend architecture for the real-time analytics dashboard, scaling to support millions of concurrent users.
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <h3 className="text-xl font-serif font-medium group-hover:underline decoration-1 underline-offset-4">Linear Mobile</h3>
                  <p className="mt-2 text-muted-foreground font-light">
                    Contributed to the core interaction patterns and gesture systems for the initial mobile release.
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <h3 className="text-xl font-serif font-medium group-hover:underline decoration-1 underline-offset-4">Raycast Extensions</h3>
                  <p className="mt-2 text-muted-foreground font-light">
                    Built a suite of open-source extensions for developer productivity, downloaded by over 50k users.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Writing</h2>
              <div className="space-y-6">
                <a href="#" className="block group">
                  <span className="text-sm text-muted-foreground mb-1 block">Oct 2024</span>
                  <h3 className="text-xl font-serif font-medium group-hover:underline decoration-1 underline-offset-4">The End of Flat Design</h3>
                </a>
                <a href="#" className="block group">
                  <span className="text-sm text-muted-foreground mb-1 block">Aug 2024</span>
                  <h3 className="text-xl font-serif font-medium group-hover:underline decoration-1 underline-offset-4">Building for Speed</h3>
                </a>
                <a href="#" className="block group">
                  <span className="text-sm text-muted-foreground mb-1 block">May 2024</span>
                  <h3 className="text-xl font-serif font-medium group-hover:underline decoration-1 underline-offset-4">Why I Still Use Vanilla CSS</h3>
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
