import { BlogPost } from "@/components/blog-post"

export default function Blog() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Explore Our Vision on Various Topics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, trends, and expert opinions on marketing, technology, and business growth
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}

const blogPosts = [
  {
    title: "What is a Memecoin? Memecoins are considered risky!",
    excerpt: "Memecoins are cryptocurrencies often inspired by internet memes or trends.",
    category: "Gaming",
    date: "12.03.24",
    readingTime: "3 min",
  },
  {
    title: "The Future of Web3 Marketing",
    excerpt: "Explore how Web3 is revolutionizing digital marketing strategies.",
    category: "Marketing",
    date: "10.03.24",
    readingTime: "5 min",
  },
  {
    title: "Building Successful NFT Communities",
    excerpt: "Learn the key elements of creating and nurturing NFT communities.",
    category: "Community",
    date: "08.03.24",
    readingTime: "4 min",
  },
];