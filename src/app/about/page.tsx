import { TeamMember } from "@/components/team-member"
import { PartnerLogo } from "@/components/partner-logo"

export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Innovation, Technologies, Creativity
          </h1>
          <p className="text-xl text-muted-foreground">
            Crosscult is a place where your boldest ideas come true.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            CrossCult is your reliable partner on the road to success. Our main goal is your success.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-muted/50 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              We value honesty and openness the most. Working with us, you will receive high-quality service, because our team is made up of real professionals who are focused on results. Through our multicultural approach to work, you will always get the best result.
            </p>
            <p>
              We are always focused on long-term relationships with our clients, where we do not just fulfill tasks, but also take care of our client. Even after the end of cooperation, we always stay in touch. It is important for us to provide the services you really need, not just sell our services.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <PartnerLogo key={partner} name={partner} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const team = [
  { name: "Luiza Shapiro", role: "CEO" },
  { name: "Yaroslava Preparamos", role: "CMO" },
  { name: "Maryna Balatska", role: "CTO" },
  { name: "Iryna Shaitan", role: "Project Manager" },
  { name: "Helena Anokhina", role: "CGO" },
  { name: "Vadim Vladimirov", role: "Head of SEO" },
  { name: "Polina Khlebnikova", role: "HR Manager" },
  { name: "Anna Koretska", role: "Account Manager" },
]

const partners = [
  "Google Marketing Platform",
  "Meta Business",
  "Google Partner",
  "Ethereum",
  "Solana",
  "Near",
  "Polygon",
];