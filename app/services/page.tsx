import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Recycle, ShoppingBag, Briefcase, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "green-energy",
      label: "Green Energy",
      icon: <Leaf className="h-5 w-5" />,
      description: "Connect with solar, wind, hydro, and other renewable energy providers.",
      services: [
        {
          title: "Solar Panel Installation",
          description: "Professional installation of solar panels for homes and businesses.",
          features: ["Free consultation", "Custom design", "Warranty included", "Financing options"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Wind Energy Solutions",
          description: "Small to medium-scale wind turbines for residential and commercial use.",
          features: ["Site assessment", "Turbine selection", "Installation", "Maintenance plans"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Energy Efficiency Consultation",
          description: "Expert advice on reducing energy consumption and optimizing renewable sources.",
          features: ["Energy audit", "Customized recommendations", "Implementation support", "ROI analysis"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Geothermal Heating & Cooling",
          description: "Harness the earth's natural heat for efficient climate control.",
          features: ["System design", "Installation", "Integration with existing systems", "Maintenance"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "waste-management",
      label: "Waste Management",
      icon: <Recycle className="h-5 w-5" />,
      description: "Find services for e-waste disposal, recycling, and sustainable packaging.",
      services: [
        {
          title: "E-Waste Recycling",
          description: "Responsible disposal and recycling of electronic waste.",
          features: ["Secure data destruction", "Pickup service", "Recycling certificates", "Corporate programs"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Composting Solutions",
          description: "Home and commercial composting systems and services.",
          features: ["Composting bins", "Pickup services", "Training", "Soil return programs"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Zero Waste Consultation",
          description: "Expert guidance on implementing zero waste practices for businesses.",
          features: ["Waste audit", "Strategy development", "Staff training", "Progress tracking"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Sustainable Packaging",
          description: "Eco-friendly packaging solutions for businesses of all sizes.",
          features: ["Biodegradable options", "Custom designs", "Bulk ordering", "Consultation"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "eco-products",
      label: "Eco Products",
      icon: <ShoppingBag className="h-5 w-5" />,
      description: "Shop from our marketplace of certified green products and sustainable goods.",
      services: [
        {
          title: "Sustainable Home Goods",
          description: "Eco-friendly products for every room in your home.",
          features: ["Plastic-free", "Organic materials", "Fair trade", "Carbon-neutral shipping"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Eco-Friendly Office Supplies",
          description: "Sustainable alternatives for your workplace needs.",
          features: ["Recycled materials", "Plastic-free", "Bulk options", "Corporate accounts"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Green Tech Gadgets",
          description: "Technology products designed with sustainability in mind.",
          features: ["Energy efficient", "Recyclable", "Ethical manufacturing", "Extended warranties"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Sustainable Fashion",
          description: "Clothing and accessories made from eco-friendly materials and ethical practices.",
          features: ["Organic fabrics", "Fair labor", "Vegan options", "Circular design"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "green-jobs",
      label: "Green Jobs",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Find employment and freelance opportunities in the sustainability sector.",
      services: [
        {
          title: "Sustainability Careers",
          description: "Full-time positions in the growing green economy.",
          features: ["Remote options", "Career development", "Industry connections", "Resume review"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Green Freelance Marketplace",
          description: "Connect with clients seeking sustainability expertise.",
          features: ["Project-based work", "Flexible hours", "Direct client communication", "Secure payments"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Environmental Education",
          description: "Teaching and training opportunities in sustainability fields.",
          features: ["Schools", "Corporate training", "Community programs", "Curriculum development"],
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Green Business Consulting",
          description: "Help businesses implement sustainable practices and strategies.",
          features: ["ESG reporting", "Carbon footprint reduction", "Certification assistance", "Policy development"],
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover a wide range of eco-friendly solutions to help you live more sustainably and reduce your
              environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="green-energy" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-green-50 p-1 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.label} Solutions</h2>
                  <p className="text-lg text-gray-600 mb-8">{category.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.services.map((service, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                              Learn More
                            </Button>
                            <Button className="bg-green-600 hover:bg-green-700">Find Providers</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How to Get Started</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Finding and connecting with eco-friendly service providers is easy with EcoConnect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                <p className="text-gray-600">
                  Sign up for free to access our full database of eco-friendly services and providers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse & Compare</h3>
                <p className="text-gray-600">Search for services based on your location, needs, and preferences.</p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Implement</h3>
                <p className="text-gray-600">
                  Reach out to providers directly through our platform and start your sustainability journey.
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Start your sustainability journey today by connecting with our network of verified eco-friendly service
            providers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              Browse Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
