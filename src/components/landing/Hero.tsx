import { Button } from "@/components/ui/button";
import { MessageCircle, Mic, TrendingUp, Shield } from "lucide-react";

interface HeroProps {
  onOpenChat: () => void;
}

const Hero = ({ onOpenChat }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-muted border border-teal/20">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm font-medium text-teal">AI-Powered Financial Wellness</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet <span className="text-gradient">X Assist</span> — Your Emotionally Intelligent Financial Companion
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              The first AI that truly understands your financial journey. Combining checking, 
              high-yield savings, and robo-investing with empathetic, voice-enabled conversations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onOpenChat}
                className="gradient-teal text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Try X Assist Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-teal" />
                <span className="text-sm">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-teal" />
                <span className="text-sm">4.5% APY Savings</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              
              {/* Phone mockup */}
              <div className="relative w-72 md:w-80 bg-navy rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-muted flex items-center justify-center">
                    <div className="w-20 h-5 bg-navy/20 rounded-full" />
                  </div>
                  
                  {/* Chat preview */}
                  <div className="p-4 space-y-4 min-h-[400px]">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full gradient-teal flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[200px]">
                        <p className="text-sm text-foreground">
                          Hi! I'm X Assist. I noticed your savings goal is coming up. How are you feeling about it? 💚
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[200px]">
                        <p className="text-sm">
                          I'm a bit stressed about making it...
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full gradient-teal flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[200px]">
                        <p className="text-sm text-foreground">
                          That's completely understandable. Let's look at some small adjustments together. You're closer than you think! ✨
                        </p>
                      </div>
                    </div>

                    {/* Voice input indicator */}
                    <div className="flex items-center gap-3 pt-4">
                      <div className="flex-1 h-12 bg-muted rounded-full flex items-center px-4">
                        <span className="text-muted-foreground text-sm">Type or record a voice note...</span>
                      </div>
                      <div className="w-12 h-12 rounded-full gradient-teal flex items-center justify-center">
                        <Mic className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
