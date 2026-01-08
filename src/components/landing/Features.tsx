import { Heart, Mic, Brain, Clock, PiggyBank, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Emotionally Intelligent",
    description: "X Assist understands financial stress and anxiety, offering empathetic guidance tailored to your emotional state.",
  },
  {
    icon: Mic,
    title: "Voice-Enabled Conversations",
    description: "Record voice notes to share your thoughts naturally. X Assist listens and responds with personalized advice.",
  },
  {
    icon: Brain,
    title: "Smart Financial Insights",
    description: "AI-powered analysis of your spending patterns, savings goals, and investment opportunities.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get financial guidance anytime, anywhere. X Assist is always ready to help you navigate your finances.",
  },
  {
    icon: PiggyBank,
    title: "High-Yield Savings",
    description: "Earn up to 4.5% APY on your savings with automatic round-ups and smart savings suggestions.",
  },
  {
    icon: TrendingUp,
    title: "Automated Investing",
    description: "Let our robo-advisor grow your wealth with personalized, low-cost investment portfolios.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for <span className="text-gradient">Financial Wellness</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            X Assist combines emotional intelligence with powerful financial tools to help you 
            achieve your goals with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
