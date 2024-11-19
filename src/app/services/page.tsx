import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Ready to Realize Your Wildest Ideas and Goals
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We use only <span className="text-primary">Innovative Technologies</span> and a{" "}
            <span className="text-primary">Customized Approach</span> for each client.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              title={service.title}
              description={service.description}
              features={service.items}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Strategy",
    description: "Comprehensive strategic planning and execution for your business growth",
    items: [
      "Go-to-market",
      "Token launch",
      "Scaling PMF",
      "Roadmap development",
      "Communication strategy",
    ],
  },
  {
    title: "Growth",
    description: "Accelerate your business growth with our proven marketing strategies",
    items: [
      "Social media management",
      "Content writing",
      "AMA session providing",
      "Podcast content & promotion",
      "Campaigns",
      "Crypto ads network",
      "Email marketing",
      "Crowd marketing (shilling)",
    ],
  },
  {
    title: "Traffic Sources",
    description: "Drive quality traffic and engagement to your platforms",
    items: [
      "SEO & SAO",
      "PPC",
      "KOLs (worldwide)",
      "Influence marketing",
      "Ambassador program building",
      "Web3 influencers collaborations",
    ],
  },
  {
    title: "Design",
    description: "Create stunning visuals and immersive experiences",
    items: [
      "Branding",
      "Rebranding",
      "Animations & 3D motion",
      "Metaverse & Avatars",
      "X-reality",
      "CGI production",
    ],
  },
];

const reasons = [
  "Custom approach to work",
  "Focus on the result",
  "Multifunctional and innovative approach",
  "Expertise from leading specialists",
  "Creative approach to problem-solving",
  "Wide range of services",
  "Confidence and peace of mind for all marketing activities in your business",
];