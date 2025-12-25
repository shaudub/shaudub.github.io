import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/generated_images/professional_minimalist_profile_portrait.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="flex flex-col items-center text-center pt-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-muted shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
                Alex Morgan
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8 font-light">
                Digital craftsman and frontend engineer passionate about building accessible, human-centered web experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4"
            >
              <Button variant="outline" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-foreground hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
