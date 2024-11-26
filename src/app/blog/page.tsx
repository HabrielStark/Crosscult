import { PageLayout } from "@/components/page-layout"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Heart, Share2, Bookmark, Search } from "lucide-react"
import { useState, useRef, Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei'
import { BlogParticles } from "@/components/three/BlogParticles"
import { FloatingText } from "@/components/three/FloatingText"
import { Input } from "@/components/ui/input"

// Add interface for blog post
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string; // Make image optional
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  likes: number;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <PageLayout
      title="Blog & Insights"
      subtitle="Stay updated with the latest trends and insights in technology and digital transformation"
    >
      {/* Hero Section with Enhanced 3D Background */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            
            <Suspense fallback={null}>
              <BlogParticles 
                count={700}
                size={0.02}
                spread={20}
                color="#8B5CF6"
                opacity={0.6}
              />
              <Float 
                speed={2} 
                rotationIntensity={0.8} 
                floatIntensity={1.5}
              >
                <FloatingText 
                  text={selectedCategory}
                  scale={0.7}
                  color="#8B5CF6"
                  emissiveIntensity={0.4}
                />
              </Float>
            </Suspense>
          </Canvas>
        </div>

        {/* Search and Featured Post */}
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-12 py-6 bg-background/80 backdrop-blur-lg border-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Featured Post Card */}
          <div className="max-w-4xl mx-auto glass-card p-8 backdrop-blur-xl">
            <span className="text-sm text-primary mb-4 block">Featured Post</span>
            <h2 className="text-4xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
              The Future of Web3 Development
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Exploring the latest trends and technologies shaping the future of decentralized applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="/author-avatar.jpg" 
                  alt="Author" 
                  className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">March 15, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Categories */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-background hover:bg-primary/10'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
          {blogPosts
            .filter(post => selectedCategory === "All" || post.category === selectedCategory)
            .map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  <img 
                    src={post.image || '/blog-placeholder.jpg'} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <span className="text-sm text-primary">{post.category}</span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="hover:text-primary transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </PageLayout>
  )
}

const categories = ["All", "Web3", "Marketing", "Technology", "Blockchain", "Design"];

// Update the blogPosts array type
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web3 Development",
    excerpt: "Exploring the latest trends and technologies in Web3 development...",
    category: "Web3",
    date: "2024-03-15",
    image: "/blog/web3-future.jpg",
    author: {
      name: "John Doe",
      avatar: "/author-avatar.jpg"
    },
    readTime: "5 min",
    likes: 100
  },
  // Add more posts...
];