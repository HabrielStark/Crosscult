import { CaseStudy } from "@/components/case-study"

export default function Cases() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses grow
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <CaseStudy key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
      </section>
    </div>
  )
}

const cases = [
  {
    title: "BYBIT",
    description: "A trusted cryptocurrency exchange, ranked among the top 3 CEX by coin market cap. Since 2018, it has served over 10 million users, offering 100+ assets.",
    category: "Cryptocurrency",
  },
  {
    title: "PWRT Teams",
    description: "Leader in building cross-border IT and engineering organizations. With over 300 teams built, they've achieved a remarkable level of expertise.",
    category: "IT Services",
  },
  {
    title: "Mimo",
    description: "Provides coding courses in Python, JavaScript, HTML, SQL, and other languages, with over 25 million learners.",
    category: "Education",
  },
  {
    title: "Crombie",
    description: "Delivers top-performing teams to IT companies, tasked with developing custom systems, software, and applications.",
    category: "IT Services",
  },
  {
    title: "Finch Labs",
    description: "Improves website value, reduces bounce rates, and enhances lead generation.",
    category: "Digital Marketing",
  },
  {
    title: "Rainmaker",
    description: "A Web3 Social Creator Economy platform, combines smart contracts with marketing budgets.",
    category: "Web3",
  },
  {
    title: "CPC (Crypto Players Club)",
    description: "NFT-based sports metaverse, revolutionizing soccer with a decentralized ecosystem, combining P2E games and rewarding fan engagement.",
    category: "Gaming",
  },
  {
    title: "Script.TV",
    description: "Blockchain-based media platform aiming to revolutionize live television.",
    category: "Media",
  },
];