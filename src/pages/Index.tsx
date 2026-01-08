import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Security from "@/components/landing/Security";
import Footer from "@/components/landing/Footer";
import ChatDemo from "@/components/chat/ChatDemo";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenChat={() => setIsChatOpen(true)} />
      <Hero onOpenChat={() => setIsChatOpen(true)} />
      <Features />
      <HowItWorks />
      <Security />
      <Footer onOpenChat={() => setIsChatOpen(true)} />
      
      <ChatDemo isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
