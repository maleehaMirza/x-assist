import { Shield, Eye, Award } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Bank-Level Encryption",
    description: "256-bit AES encryption protects all your data",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "We never sell your data to third parties",
  },
  {
    icon: Award,
    title: "SOC 2 Certified",
    description: "Audited security controls and compliance",
  },
];

const Security = () => {
  return (
    <section
      id="security"
      className="py-20 px-4 bg-background text-foreground"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-gradient">Security</span> is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground opacity-80 leading-relaxed">
            X Assist is built on enterprise-grade security infrastructure. Your
            financial data and conversations are protected by industry-leading
            standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="text-center p-10 rounded-3xl bg-card backdrop-blur-sm hover:bg-card/80 transition-colors"
            >
              <div className="w-20 h-20 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                <badge.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{badge.title}</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
