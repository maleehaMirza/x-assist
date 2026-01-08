import { MessageSquare, Mic, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Start a Conversation",
    description:
      "Open X Assist and share what's on your mind — whether it's a savings goal, investment question, or financial worry.",
  },
  {
    icon: Mic,
    step: "02",
    title: "Speak Naturally",
    description:
      "Use voice notes to express yourself freely. Our AI understands context, emotion, and nuance in your financial concerns.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Get Personalized Guidance",
    description:
      "Receive empathetic, actionable advice tailored to your unique situation and emotional state.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="text-gradient" style={{ display: "inline" }}>
              X Assist
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is simple. In just three steps, you'll have a
            financial companion that truly understands you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:items-stretch">
          {steps.map((item, index) => (
            <div key={item.step} className="relative h-full">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal to-primary" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-teal/50 transition-colors h-full flex flex-col">
                {/* Step number */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-white text-primary-foreground text-sm font-bold rounded-full">
                  {item.step}
                </div>

                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 mt-2">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
