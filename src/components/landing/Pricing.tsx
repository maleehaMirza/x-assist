import { Check, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Basic",
        price: "Free",
        description: "Get started with essential financial guidance",
        features: [
            "Basic AI financial conversations",
            "Text-based chat support",
            "Monthly spending insights",
            "Goal tracking",
            "Educational resources"
        ],
        buttonText: "Get Started",
        popular: false,
    },
    {
        name: "Premium",
        price: "$9.99",
        period: "/month",
        description: "Full emotional intelligence and advanced features",
        features: [
            "Advanced emotional AI conversations",
            "Voice-enabled interactions",
            "Real-time financial analysis",
            "Personalized investment advice",
            "24/7 priority support",
            "Custom savings strategies",
            "Advanced goal planning"
        ],
        buttonText: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For businesses and financial advisors",
        features: [
            "Multi-client management",
            "Team collaboration tools",
            "White-label solutions",
            "Advanced analytics dashboard",
            "API access",
            "Dedicated account manager",
            "Custom integrations"
        ],
        buttonText: "Contact Sales",
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 px-4 bg-background text-foreground">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Choose Your <span className="text-gradient">Plan</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground opacity-80 leading-relaxed">
                        Start free and upgrade as your financial wellness journey grows
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card ${plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''
                                }`}
                        >


                            <CardContent className="p-10">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center mb-4">
                                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                        {plan.period && (
                                            <span className="text-muted-foreground ml-1">{plan.period}</span>
                                        )}
                                    </div>
                                    <p className="text-lg opacity-70 leading-relaxed">{plan.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-primary-foreground" />
                                            </div>
                                            <span className="text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full py-6 text-lg font-semibold ${plan.popular
                                        ? 'gradient-gold text-primary-foreground hover:opacity-90'
                                        : 'bg-card border-2 border-yellow-500/20 text-foreground hover:border-yellow-500/40 hover:bg-yellow-500/10'
                                        }`}
                                    variant={plan.popular ? 'default' : 'outline'}
                                >
                                    {plan.buttonText}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg opacity-70">
                        All plans include bank-level security and data protection.{" "}
                        <span className="text-yellow-500 hover:underline cursor-pointer">
                            Compare all features →
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;