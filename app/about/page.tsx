import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Lightbulb, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Emma Rodriguez",
      role: "Founder & CEO",
      bio: "With over 15 years in sustainable energy, Emma founded EcoConnect to bridge the gap between eco-solutions and consumers.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      bio: "David brings his expertise in tech to create a seamless platform connecting users with sustainable services.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Partnerships",
      bio: "Sarah works with eco-friendly businesses to ensure only the highest quality providers are featured on our platform.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Okonkwo",
      role: "Sustainability Director",
      bio: "Michael ensures all services and products on EcoConnect meet rigorous environmental standards.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const partners = [
    "Green Energy Alliance",
    "Sustainable Business Network",
    "Global Recycling Initiative",
    "Clean Tech Innovators",
    "Eco-Friendly Products Association",
    "Renewable Energy Foundation",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoConnect</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to make sustainable living accessible to everyone by connecting people with
              eco-friendly solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To accelerate the transition to a sustainable future by making eco-friendly solutions accessible,
                      affordable, and convenient for everyone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-full">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      A world where sustainable choices are the default, not the exception, and where every individual
                      and business has easy access to the resources they need to minimize their environmental impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-full">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
                    <p className="text-gray-600">
                      Since our founding, we've helped connect over 50,000 users with sustainable solutions, resulting
                      in an estimated reduction of 75,000 tons of CO2 emissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Sustainable living"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How EcoConnect Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes it simple to find, compare, and connect with verified eco-friendly service providers
              and products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Search & Discover</h3>
                <p className="text-gray-600">
                  Browse our extensive database of eco-friendly services, products, and providers filtered by location,
                  category, and ratings.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Compare & Choose</h3>
                <p className="text-gray-600">
                  Compare options based on reviews, pricing, and sustainability metrics to find the perfect match for
                  your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Implement</h3>
                <p className="text-gray-600">
                  Connect directly with providers through our platform and track your sustainability journey with our
                  tools.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our passionate team of sustainability experts, technologists, and business professionals is dedicated to
              making eco-friendly living accessible to all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations committed to sustainability and environmental stewardship.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="border-green-100">
                <CardContent className="p-6 flex items-center justify-center h-32">
                  <p className="text-lg font-medium text-gray-800">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Whether you're looking for sustainable solutions or you're a provider of eco-friendly services, join
            EcoConnect today and be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Sign Up as a User
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              Register as a Provider
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
