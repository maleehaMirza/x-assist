import { useState, useRef, useEffect } from "react";
import { X, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatMessage, { Message } from "./ChatMessage";
import ChatInput from "./ChatInput";

interface ChatDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const emotionalResponses: Record<string, string[]> = {
  stress: [
    "I hear you, and it's completely valid to feel stressed about finances. Many people experience this. Let's take a breath together and look at this step by step. What's weighing on you the most right now? 💙",
    "Financial stress is one of the most common concerns, and you're not alone. I'm here to help you work through it without judgment. Would you like to start by looking at your current situation together?",
  ],
  savings: [
    "That's a great goal to work toward! Every small step counts. Based on your spending patterns, I see a few opportunities where you could save an extra $50-100 per month without feeling it too much. Want me to show you? ✨",
    "Saving can feel overwhelming, but you're already ahead by thinking about it! Let's set up a realistic plan that fits your lifestyle. What's your savings goal, and when would you like to reach it?",
  ],
  investing: [
    "Great question! Investing is one of the best ways to build long-term wealth. For beginners, I usually recommend starting with a diversified portfolio that matches your risk comfort level. How do you feel about market ups and downs? 📈",
    "I love that you're thinking about investing! The best time to start was yesterday, but the second best time is today. Would you like me to explain some options that could work for your situation?",
  ],
  balance: [
    `Yes — this is normal for your account. About 65% of your portfolio is in stock-based funds, which is why your balance moves more during market swings. Your cash and savings portion hasn't changed.

  Based on your long-term growth goal, this volatility is expected. To stay on track, you can:

  1. Keep your current allocation and let the strategy play out.
  2. Lower your risk slightly if these swings feel stressful
  3. Pause new investments for now while markets settle

  These options won't affect your existing savings — they just give you more control going forward.`
  ],
  rich: [
    `I get that seeing a $16,000 drop is unsettling. Most of it came from the equity part of your portfolio, which is focused on growth and international funds — it’s just the market moving, not anything wrong with your strategy.

Your portfolio is still diversified, and some of these losses are unrealized, so they could bounce back. You’ve got a check-in scheduled tomorrow, but if you want, I can also put you in the priority queue at position #2 so you can talk to someone sooner.`],

  default: [
    "Thank you for sharing that with me. I want to make sure I understand you correctly so I can help in the best way possible. Could you tell me a bit more about what's on your mind? 💚",
    "I appreciate you opening up. Your financial wellness is a journey, and I'm here to support you every step of the way. What would be most helpful for you to explore right now?",
  ],
};

const getEmotionalResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("stress") || lowerInput.includes("worried") || lowerInput.includes("anxious") || lowerInput.includes("scared")) {
    return emotionalResponses.stress[Math.floor(Math.random() * emotionalResponses.stress.length)];
  }
  if (lowerInput.includes("save") || lowerInput.includes("saving") || lowerInput.includes("budget")) {
    return emotionalResponses.savings[Math.floor(Math.random() * emotionalResponses.savings.length)];
  }
  if (lowerInput.includes("invest") || lowerInput.includes("stock") || lowerInput.includes("portfolio")) {
    return emotionalResponses.investing[Math.floor(Math.random() * emotionalResponses.investing.length)];
  }
  if ((lowerInput.includes("balance") || lowerInput.includes("account")) &&
    (lowerInput.includes("up and down") || lowerInput.includes("fluctuat") || lowerInput.includes("going up") || lowerInput.includes("going down")) &&
    (lowerInput.includes("normal") || lowerInput.includes("lot"))) {
    return emotionalResponses.balance[Math.floor(Math.random() * emotionalResponses.balance.length)];
  }
  if ((lowerInput.includes("lost") || lowerInput.includes("lose")) &&
    (lowerInput.includes("16000") || lowerInput.includes("$16") || lowerInput.includes("16,000")) &&
    (lowerInput.includes("how") || lowerInput.includes("why") || lowerInput.includes("what happened"))) {
    return emotionalResponses.rich[Math.floor(Math.random() * emotionalResponses.rich.length)];
  }
  return emotionalResponses.default[Math.floor(Math.random() * emotionalResponses.default.length)];
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hi there! 👋 I'm X-Assist, your emotionally intelligent financial companion. I'm here to help you navigate your finances with understanding and care.\n\nWhether you're feeling stressed about money, have questions about saving or investing, or just want to chat about your financial goals, I'm here for you.\n\nHow are you feeling about your finances today?",
    timestamp: new Date(),
  },
];

const ChatDemo = ({ isOpen, onClose }: ChatDemoProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string) => {
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getEmotionalResponse(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    simulateResponse(content);
  };

  const handleSendVoiceNote = (audioBlob: Blob, audioUrl: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: "",
      audioUrl,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // For demo purposes, respond to voice notes with a generic supportive message
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `I can hear how scared you are in your voice — this is a lot to take in, and it's completely understandable.

Your portfolio dropped about $3,000, largely because the U.S. equity funds that make up about 65% of your account fell with the market this week. Your cash and savings portion hasn't changed, and nothing in your account is broken or mismanaged.

Whether this is a bad outcome depends on your purchase prices. Some of your holdings are still above what you paid, while others are temporarily below — meaning part of this loss is unrealized and could recover if market conditions improve.

Because this is a significant loss based on your portfolio and you're feeling uncertain, I've moved you to priority position #2 to speak with a human representative who can walk through your options with you in real time.`,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="w-full max-w-md h-[600px] max-h-[90vh] bg-background rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="gradient-navy px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white">X-Assist</h3>
            <p className="text-xs text-white">Your Financial Companion</p>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full gradient-teal flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex items-center gap-1">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">X-Assist is typing...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <ChatInput
          onSendMessage={handleSendMessage}
          onSendVoiceNote={handleSendVoiceNote}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};

export default ChatDemo;
