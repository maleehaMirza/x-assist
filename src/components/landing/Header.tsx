import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onOpenChat: () => void;
}

const Header = ({ onOpenChat }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">X-Assist</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
            Security
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-muted-foreground">
            Sign In
          </Button>
          <Button onClick={onOpenChat} className="gradient-teal text-primary-foreground hover:opacity-90">
            Try X Assist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          <a href="#features" className="block text-muted-foreground hover:text-foreground">
            Features
          </a>
          <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground">
            How It Works
          </a>
          <a href="#security" className="block text-muted-foreground hover:text-foreground">
            Security
          </a>
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              Sign In
            </Button>
            <Button onClick={onOpenChat} className="w-full gradient-teal text-primary-foreground">
              Try X Assist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
