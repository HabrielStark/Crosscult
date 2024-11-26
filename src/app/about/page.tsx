import { motion } from "framer-motion"
import { TeamMember } from "@/components/team-member"
import { PartnerLogo } from "@/components/partner-logo"
import { PageLayout } from "@/components/page-layout"

export default function About() {
  return (
    <PageLayout 
      title="Innovation, Technologies, Creativity"
      subtitle="Crosscult is your reliable partner on the road to success. Our main goal is your success."
    >
      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                {...member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient">Our Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We value honesty and openness the most. Working with us, you will receive high-quality service, 
                because our team is made up of real professionals who are focused on results. Through our multicultural 
                approach to work, you will always get the best result.
              </p>
              <p>
                We are always focused on long-term relationships with our clients, where we do not just fulfill tasks, 
                but also take care of our client. Even after the end of cooperation, we always stay in touch. It is 
                important for us to provide the services you really need, not just sell our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Partners
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={partner.name}
                {...partner}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const teamMembers = [
  {
    name: "Luiza Shapiro",
    role: "CEO",
    image: "/team/luiza.jpg"
  },
  {
    name: "Yaroslava Preparamos",
    role: "CMO",
    image: "/team/yaroslava.jpg"
  },
  {
    name: "Maryna Balatska",
    role: "CTO",
    image: "/team/maryna.jpg"
  },
  {
    name: "Iryna Shaitan",
    role: "Project Manager",
    image: "/team/iryna.jpg"
  },
  {
    name: "Helena Anokhina",
    role: "CGO",
    image: "/team/helena.jpg"
  },
  {
    name: "Vadim Vladimirov",
    role: "Head of SEO",
    image: "/team/vadim.jpg"
  },
  {
    name: "Polina Khlebnikova",
    role: "HR Manager",
    image: "/team/polina.jpg"
  },
  {
    name: "Anna Koretska",
    role: "Account Manager",
    image: "/team/anna.jpg"
  }
];

const partners = [
  {
    name: "Google Marketing Platform",
    logo: "/partners/google-marketing.svg"
  },
  {
    name: "Meta Business",
    logo: "/partners/meta.svg"
  },
  {
    name: "Google Partner",
    logo: "/partners/google-partner.svg"
  },
  {
    name: "Ethereum",
    logo: "/partners/ethereum.svg"
  },
  {
    name: "Solana",
    logo: "/partners/solana.svg"
  },
  {
    name: "Near",
    logo: "/partners/near.svg"
  },
  {
    name: "Polygon",
    logo: "/partners/polygon.svg"
  }
];