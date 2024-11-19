import { JobPosition } from "@/components/job-position"
import { Button } from "@/components/ui/button"

export default function Career() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Join Our Team of Innovators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of digital marketing and technology
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join CrossCult?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-background p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <JobPosition key={position.title} {...position} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
          <Button size="lg">
            View All Positions
          </Button>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  {
    title: "Innovation & Growth",
    description: "Work with cutting-edge technologies and continuously expand your expertise in a rapidly evolving industry.",
  },
  {
    title: "Global Impact",
    description: "Join projects that shape the future of businesses worldwide and make a real difference in the digital landscape.",
  },
  {
    title: "Work-Life Balance",
    description: "Enjoy flexible working hours, remote work options, and a culture that values personal well-being.",
  },
];

const positions = [
  {
    title: "Senior Marketing Manager",
    department: "Marketing",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Lead strategic marketing initiatives and drive growth for our clients in the Web3 and crypto space.",
  },
  {
    title: "Web3 Developer",
    department: "Technology",
    location: "Tel Aviv / Remote",
    type: "Full-time",
    description: "Build innovative blockchain solutions and contribute to cutting-edge Web3 projects.",
  },
  {
    title: "Content Strategist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content strategies and manage content production for global brands.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Design beautiful and intuitive interfaces for Web3 and blockchain applications.",
  },
];

const process = [
  "Submit your application",
  "Initial screening call",
  "Technical/Skills assessment",
  "Team interview & offer",
];