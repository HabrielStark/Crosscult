import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Formula for your success
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            CrossCult - Together we move forward. This is a group of people who are ready to make your wildest dreams come true. We will find the tools that will grow your business.
          </p>
          <Button size="lg" className="text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-background p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Our Main Mission is to Help Companies Reach the Next Level with the Help of Marketing
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
            <p>
              After analyzing the market, we realized that many companies have a problem with marketing. We noticed that in most businesses, the top management is involved in marketing itself.
            </p>
            <p>
              This worsens the results, as the expertise and analysis are of insufficient quality. We wanted to take on this mission and help companies because we are real marketing fanatics.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Strategy",
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
    items: [
      "Social media management",
      "Content writing",
      "AMA session providing",
      "Podcast content & promotion",
      "Campaigns",
    ],
  },
  {
    title: "Traffic Sources",
    items: [
      "SEO & SAO",
      "PPC",
      "KOLs (worldwide)",
      "Influence marketing",
      "Ambassador program",
    ],
  },
  {
    title: "Design",
    items: [
      "Branding",
      "Rebranding",
      "Animations & 3D motion",
      "Metaverse & Avatars",
      "X-reality",
    ],
  },
];