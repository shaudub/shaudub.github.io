import * as React from "react";
import {
  Search,
  Moon,
  Sun,
  Mail,
  Linkedin,
  Twitter,
  FileText,
  Briefcase
} from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-primary-foreground h-12 w-12 rounded-full shadow-lg flex items-center justify-center"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
      
      <div 
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-background/80 backdrop-blur-md border rounded-full text-xs text-muted-foreground items-center gap-2 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 cursor-pointer hover:bg-accent/50 transition-colors"
      >
        <span>Press</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
        <span>to search</span>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden>
          <DialogTitle>Command Menu</DialogTitle>
        </VisuallyHidden>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => runCommand(() => {
                document.querySelector('[data-value="experience"]')?.scrollIntoView({ behavior: 'smooth' });
              })}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => {
                document.querySelector('[data-value="writing"]')?.scrollIntoView({ behavior: 'smooth' });
              })}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Writing</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() => runCommand(() => window.open("https://x.com/shaudub", "_blank"))}
            >
              <Twitter className="mr-2 h-4 w-4" />
              <span>Twitter (@shaudub)</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/shaurya-dubey/", "_blank"))}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => window.location.href = "mailto:dubeyshaurya@gmail.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Email Me</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => runCommand(() => {
                 const themeBtn = document.querySelector('button[aria-label="Toggle theme"]') as HTMLButtonElement;
                 themeBtn?.click();
              })}
            >
              <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="ml-6">Toggle Theme</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
