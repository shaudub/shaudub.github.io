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
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="shrink-0"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-sm border-4 border-foreground/5">
                <img 
                  src={profileImage} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Alex Morgan
              </h1>
              <p className="text-lg text-foreground/90 leading-relaxed max-w-lg mx-auto">
                Working on commercial finance for Circle ($USDC) and writing about crypto current events at Underwriting Crypto.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid gap-12 md:gap-16">
            <section className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                My work at Circle focuses on commercial incentives, specifically tracking how partnership revenue sharing influences USDC circulation growth and net interest margin. I have also led ad-hoc projects; some favorites include analyses for new product launches, marketing spend planning, and helping take $CRCL public. The best parts of my work are interdisciplinary, and I am lucky to work with teams in data science, marketing, product, investor relations, and more.
              </p>
            </section>

            <section className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  I write in a crypto current events blog called Underwriting Crypto. We post 5 notable events from the industry every 2 weeks and offer an objective overview of what happened, with a not-as-objective take on what happened on each topic.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground font-light">
                  Selected excerpts of my writing are below - for the rest, visit our substack.
                </p>
              </div>

              <div className="space-y-6 pl-4 border-l border-border/50">
                <a href="#" className="block group">
                  <span className="text-sm text-muted-foreground mb-1 block">Oct 2024</span>
                  <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">Stablecoin Market Dynamics</h3>
                </a>
                <a href="#" className="block group">
                  <span className="text-sm text-muted-foreground mb-1 block">Aug 2024</span>
                  <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">DeFi Regulation Overview</h3>
                </a>
                <a href="#" className="block group">
                  <span className="text-sm text-muted-foreground mb-1 block">May 2024</span>
                  <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">The State of Layer 2s</h3>
                </a>
              </div>
            </section>
            
            <section className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                My twitter handle is @shaudub and my email is dubeyshaurya@gmail.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
