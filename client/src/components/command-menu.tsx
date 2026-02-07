import * as React from "react";
import {
  Search,
  Command,
  Moon,
  Sun,
  Mail,
  Linkedin,
  Twitter,
  FileText,
  Briefcase
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "cmdk";

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
      
      <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-background/80 backdrop-blur-md border rounded-full text-xs text-muted-foreground items-center gap-2 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <span>Press</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
        <span>to search</span>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 sm:rounded-xl">
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <CommandInput 
                placeholder="Type a command or search..." 
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
              <CommandEmpty className="py-6 text-center text-sm">No results found.</CommandEmpty>
              
              <CommandGroup heading="Navigation">
                <CommandItem
                  onSelect={() => runCommand(() => {
                    document.querySelector('[data-value="experience"]')?.scrollIntoView({ behavior: 'smooth' });
                    // Trigger accordion open if possible (requires ref, skipping for simplicity now)
                  })}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>Experience</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => {
                    document.querySelector('[data-value="writing"]')?.scrollIntoView({ behavior: 'smooth' });
                  })}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Writing</span>
                </CommandItem>
              </CommandGroup>
              
              <CommandSeparator className="-mx-1 h-px bg-border" />
              
              <CommandGroup heading="Social">
                <CommandItem
                  onSelect={() => runCommand(() => window.open("https://x.com/shaudub", "_blank"))}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter (@shaudub)</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/shaurya-dubey/", "_blank"))}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </CommandItem>
                <CommandItem
                  onSelect={() => runCommand(() => window.location.href = "mailto:dubeyshaurya@gmail.com")}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email Me</span>
                </CommandItem>
              </CommandGroup>
              
              <CommandSeparator className="-mx-1 h-px bg-border" />
              
              <CommandGroup heading="Actions">
                <CommandItem
                  onSelect={() => runCommand(() => {
                     // Toggle theme logic would go here if exposed via context
                     // For now just triggering the button click if present
                     const themeBtn = document.querySelector('button[aria-label="Toggle theme"]') as HTMLButtonElement;
                     themeBtn?.click();
                  })}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-6">Toggle Theme</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </CommandDialog>
    </>
  );
}
