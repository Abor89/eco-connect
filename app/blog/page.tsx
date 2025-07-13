import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "10 Simple Ways to Reduce Your Carbon Footprint at Home",
    excerpt:
      "Discover practical and affordable ways to make your home more eco-friendly and reduce your environmental impact.",
    image: "/placeholder.svg?height=400&width=800",
    date: "March 15, 2025",
    author: "Emma Rodriguez",
    readTime: "8 min read",
    category: "Sustainable Living",
  }

  const posts = [
    {
      id: 2,
      title: "The Rise of Community Solar Projects: What You Need to Know",
      excerpt: "Community solar is making renewable energy accessible to more people. Learn how you can get involved.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 10, 2025",
      author: "David Chen",
      readTime: "6 min read",
      category: "Green Energy",
    },
    {
      id: 3,
      title: "Zero Waste Shopping: A Beginner's Guide",
      excerpt: "Tips and tricks for reducing packaging waste and making more sustainable shopping choices.",
      image: "/placeholder.svg?height=300&width=500",
      date: "March 5, 2025",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Zero Waste",
    },
    {
      id: 4,
      title: "The Environmental Impact of Fast Fashion (And What to Do About It)",
      excerpt: "How the clothing industry affects our planet and how you can build a more sustainable wardrobe.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 28, 2025",
      author: "Michael Okonkwo",
      readTime: "7 min read",
      category: "Sustainable Fashion",
    },
    {
      id: 5,
      title: "Electric Vehicles: Is Now the Time to Make the Switch?",
      excerpt: "A comprehensive look at the current state of electric vehicles and whether they're right for you.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 20, 2025",
      author: "Emma Rodriguez",
      readTime: "9 min read",
      category: "Transportation",
    },
    {
      id: 6,
      title: "How to Start a Successful Home Composting System",
      excerpt: "Turn your kitchen scraps into garden gold with these simple composting techniques.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 15, 2025",
      author: "David Chen",
      readTime: "6 min read",
      category: "Waste Management",
    },
    {
      id: 7,
      title: "The Business Case for Sustainability: Why Going Green Pays Off",
      excerpt: "How businesses are finding that environmental responsibility can also be good for the bottom line.",
      image: "/placeholder.svg?height=300&width=500",
      date: "February 10, 2025",
      author: "Sarah Johnson",
      readTime: "8 min read",
      category: "Business",
    },
  ]

  const categories = [
    "Sustainable Living",
    "Green Energy",
    "Zero Waste",
    "Sustainable Fashion",
    "Transportation",
    "Waste Management",
    "Business",
    "Climate Change",
    "Eco-Friendly Products",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">EcoConnect Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay informed with the latest sustainability news, tips, and success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col justify-between">
                <div>
                  <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-200">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option>All Categories</option>
                {categories.map((category, index) => (
                  <option key={index}>{category}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-200">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-green-600 border-green-600 hover:bg-green-50"
                  >
                    <Link href={`/blog/${post.id}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8">
            Get the latest sustainability tips, news, and exclusive content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm mt-4 text-green-200">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
