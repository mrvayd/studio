import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row max-w-screen-2xl">
        <div className="flex items-center gap-2">
          <Cpu size={24} className="text-primary" />
          <p className="text-sm text-muted-foreground font-headline">
            Allied Electronics
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Allied Electronics. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {/* Add social media links or other footer links here if needed */}
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
