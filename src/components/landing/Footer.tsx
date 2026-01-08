import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenChat: () => void;
}

const Footer = ({ onOpenChat }: FooterProps) => {
  return (
    <footer className="py-16 px-4 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 py-12 px-6 bg-card rounded-3xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of personal finance with X Assist. 
            Try our demo and see how emotional intelligence meets financial wisdom.
          </p>
          <Button
            size="lg"
            onClick={onOpenChat}
            className="gradient-teal text-primary-foreground hover:opacity-90 text-lg px-10 py-6"
          >
            Try X Assist Now
          </Button>
        </div>

        {/* Footer links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">X Assist</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your emotionally intelligent financial companion for checking, savings, and investing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Disclosures</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 X Assist. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Banking services provided by partner banks, Member FDIC. Investments are not FDIC insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
