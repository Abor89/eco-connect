import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Search, Leaf, Recycle, ShoppingBag, Briefcase } from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Green Energy Solutions",
      description: "Connect with solar, wind, hydro, and other renewable energy providers.",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      link: "/services/green-energy",
    },
    {
      id: 2,
      title: "Waste Management & Recycling",
      description: "Find services for e-waste disposal, recycling, and sustainable packaging.",
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      link: "/services/waste-management",
    },
    {
      id: 3,
      title: "Eco-Friendly Products",
      description: "Shop from our marketplace of certified green products and sustainable goods.",
      icon: <ShoppingBag className="h-8 w-8 text-green-600" />,
      link: "/services/eco-products",
    },
    {
      id: 4,
      title: "Green Jobs & Careers",
      description: "Find employment and freelance opportunities in the sustainability sector.",
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      link: "/services/green-jobs",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "EcoConnect helped me find a reliable solar panel installer. My energy bills have decreased by 60% since installation!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Green Earth Co.",
      role: "Business Partner",
      content:
        "As a sustainable business, partnering with EcoConnect has increased our customer base by 45% in just 6 months.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Environmental Consultant",
      content:
        "The platform's job board connected me with clients who truly value sustainability. It's been a game-changer for my career.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-green-500 hover:bg-green-600">Eco-Friendly Solutions</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Connecting You to a Sustainable Future!</h1>
              <p className="text-lg mb-8">
                Find eco-friendly solutions, green energy providers, waste management services, and sustainable products
                all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-80">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Sustainable living"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for eco-friendly services, products, or providers..."
              className="pl-10 py-6 text-lg rounded-full border-green-300 focus:border-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-green-600 hover:bg-green-700">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with a wide range of eco-friendly services and solutions to help you live more sustainably.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Providers</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover top-rated eco-friendly businesses and service providers in your area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((provider) => (
              <Card key={provider} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Provider ${provider}`}
                    alt={`Provider ${provider}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">Verified Provider</Badge>
                  <h3 className="text-xl font-semibold mb-2">Eco Provider {provider}</h3>
                  <p className="text-gray-600 mb-4">Providing sustainable solutions since 2010</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-2 text-sm text-gray-600">(48 reviews)</span>
                    </div>
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-green-600 hover:bg-green-700">View All Providers</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from individuals and businesses who have found sustainable solutions through EcoConnect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of individuals and businesses who are already making sustainable choices with EcoConnect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

