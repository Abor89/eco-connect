import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    avatar: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <div className="mb-4 text-yellow-500">★★★★★</div>
        <p className="text-gray-700 italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  )
}

