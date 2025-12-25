import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Twitter, Moon, Sun } from "lucide-react";
import profileImage from "@assets/IMG_1569_1766626569319.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen w-full bg-background relative selection:bg-primary/10 transition-colors duration-300">
      {/* Top Right Navigation */}
      <nav className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full hover:bg-foreground hover:text-background transition-colors mr-2"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
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
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="shrink-0 mb-4"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-sm">
                <img 
                  src={profileImage} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </motion.div>

            <div className="space-y-4 max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Shaurya Dubey
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg leading-relaxed text-foreground/90 font-light max-w-2xl mx-auto px-4"
            >
              Working on commercial finance for Circle ($USDC) and writing about crypto current events at Underwriting Crypto. My twitter handle is @shaudub and my email is dubeyshaurya@gmail.com.
            </motion.p>
          </div>

          {/* Accordion Sections */}
          <div className="max-w-2xl mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="experience" className="border-border/40">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Experience
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <p className="text-lg leading-relaxed text-muted-foreground font-light mb-4">
                    My work at Circle focuses on commercial incentives, specifically understanding how partnership revenue sharing influences USDC circulation growth and net interest margin. Other initiatives I've contributed to include analyses for new product lines, marketing spend planning, and helping <a href="https://www.sec.gov/Archives/edgar/data/1876042/000119312525070481/d737521ds1.htm" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-primary transition-colors">take $CRCL public</a>. The best parts of my work are interdisciplinary, and I am lucky to collaborate with teams in data science, marketing, product, investor relations, and more.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="past-experience" className="border-t border-border/40">
                      <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary transition-colors py-3">
                        Past Experience
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-2">
                        <p className="text-lg leading-relaxed text-muted-foreground font-light">
                          Previous roles and internships where I honed my skills in financial analysis and strategy.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="writing" className="border-border/40">
                <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors">
                  Writing
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      I write in a crypto current events blog called Underwriting Crypto. We post 5 notable events from the industry every 2 weeks and offer an objective overview of what happened, with a not-as-objective take on what happened on each topic.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground font-light">
                      Selected excerpts of my writing are below - for the rest, visit our substack.
                    </p>
                  </div>

                  <div className="space-y-6 pl-4 border-l border-border/50">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-border/40">
                        <AccordionTrigger className="hover:no-underline py-2 group text-left">
                          <div className="flex flex-col items-start gap-1">
                            <span className="text-sm text-muted-foreground font-normal">October 2025</span>
                            <a href="https://underwritingcrypto.substack.com/p/underwriting-crypto-covering-1021" target="_blank" rel="noopener noreferrer" className="text-xl font-medium group-hover:text-primary transition-colors text-left" onClick={(e) => e.stopPropagation()}>Banks build stablecoins into Zelle</a>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4">
                            <p>Early Warning Services, the joint venture behind Zelle, is incorporating a stablecoin into Zelle for cross border payments. Zelle processed $1T in volume in 2024 across 2,200 connected banks. The seven owner banks are BofA, Capital One, JPMorgan Chase, PNC, Truist, U.S. Bank, and Wells Fargo.</p>
                            <p>Separately, banks are pursuing a consortium approach for G7 currency stablecoins including USD, EUR, JPY, GBP, and CAD.</p>
                            <p>Zelle offers immediate distribution but questionable circulation stickiness. If the main purpose is cross border, this will likely be the classic stablecoin sandwich setup on a blockchain based ACH equivalent.</p>
                            <p>Split T-Bill returns seven ways and each bank gets maybe 57 basis points assuming 4% yield and no revenue sharing. Compare that to the Q1 2025 bank net interest margin of 3.25% on traditional deposits. When rehypothecation is limited, banks lose money. This is why consortium bank plays are challenging and why tokenized deposits are the most likely outcome for bank led RWAs. Still, leveraging blockchain infrastructure on $1T of volumes is a net positive. Interop battles and competition from Arc and Tempo incoming.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
