import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { Check, Search, Users, MessageSquare, Star, Shield, Leaf } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description: "Sign up for free to access our full database of eco-friendly services and providers.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Quick registration process",
        "Personalized profile creation",
        "Set your sustainability preferences",
        "Specify your location for relevant results",
      ],
    },
    {
      number: 2,
      title: "Search & Discover",
      description: "Browse our extensive database of eco-friendly services, products, and providers.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Filter by service category",
        "Sort by location, ratings, or price",
        "View detailed provider profiles",
        "Read verified customer reviews",
      ],
    },
    {
      number: 3,
      title: "Compare Options",
      description: "Compare different providers based on reviews, pricing, and sustainability metrics.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Side-by-side comparison tool",
        "Sustainability impact metrics",
        "Price and value assessment",
        "Service feature breakdown",
      ],
    },
    {
      number: 4,
      title: "Connect & Implement",
      description: "Reach out to providers directly through our platform and start your sustainability journey.",
      image: "/placeholder.svg?height=300&width=500",
      features: [
        "Secure messaging system",
        "Request quotes and consultations",
        "Schedule appointments",
        "Track your project progress",
      ],
    },
    {
      number: 5,
      title: "Rate & Review",
      description: "Share your experience to help others and improve the quality of our platform.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Detailed review system", "Photo and video sharing", "Impact tracking", "Community engagement"],
    },
  ]

  const faqs = [
    {
      question: "Is EcoConnect free to use?",
      answer:
        "Yes, EcoConnect is free for individuals to create accounts, search for services, and connect with providers. We offer premium features for businesses and service providers who want enhanced visibility and tools.",
    },
    {
      question: "How do you verify eco-friendly providers?",
      answer:
        "We have a rigorous verification process that includes checking certifications, reviewing business practices, and collecting user feedback. Providers must meet our sustainability standards to be listed on our platform.",
    },
    {
      question: "Can I list my eco-friendly business on EcoConnect?",
      answer:
        "We welcome eco-friendly businesses to join our platform. You can register as a provider and create a profile showcasing your sustainable services or products.",
    },
    {
      question: "What areas do you currently serve?",
      answer:
        "EcoConnect is available nationwide, with the highest concentration of providers in major metropolitan areas. We're constantly expanding our network to include more rural and underserved areas.",
    },
    {
      question: "How do I know if a service is truly sustainable?",
      answer:
        "All providers on our platform are evaluated based on their environmental impact, business practices, and certifications. We also provide sustainability metrics and user reviews to help you make informed decisions.",
    },
    {
      question: "Can I track my environmental impact through EcoConnect?",
      answer:
        "Yes, our platform includes tools to help you track the environmental impact of your sustainable choices, such as carbon emissions saved, waste diverted from landfills, and more.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How EcoConnect Works</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our platform makes it simple to find, compare, and connect with verified eco-friendly service providers
              and products.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`mb-20 ${index % 2 === 0 ? "" : "md:flex-row-reverse"} flex flex-col md:flex-row gap-8 md:gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Use EcoConnect?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform offers unique benefits to help you make sustainable choices with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Database</h3>
                <p className="text-gray-600">
                  Access thousands of verified eco-friendly services and products all in one place, saving you time and
                  research.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
                <p className="text-gray-600">
                  All providers undergo a thorough verification process to ensure they meet our sustainability
                  standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Reviews</h3>
                <p className="text-gray-600">
                  Read authentic reviews from other users to make informed decisions about which providers to choose.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
                <p className="text-gray-600">
                  Connect directly with providers through our secure messaging system to discuss your specific needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Join a community of like-minded individuals committed to sustainable living and environmental
                  stewardship.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
                <p className="text-gray-600">
                  Monitor the environmental impact of your sustainable choices with our tracking tools and metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Find answers to common questions about using EcoConnect.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Don't see your question here? Contact our support team for assistance.</p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of individuals and businesses who are already making sustainable choices with EcoConnect.
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
