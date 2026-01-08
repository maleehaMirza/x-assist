import { Shield, Lock, Eye, Award } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Bank-Level Encryption",
    description: "256-bit AES encryption protects all your data",
  },
  {
    icon: Lock,
    title: "FDIC Insured",
    description: "Your deposits are insured up to $250,000",
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
    <section id="security" className="py-20 px-4 bg-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-lg opacity-80">
            X Assist is built on enterprise-grade security infrastructure. Your financial 
            data and conversations are protected by industry-leading standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div 
              key={badge.title}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-teal/20 flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm opacity-70">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
