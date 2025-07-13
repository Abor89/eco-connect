import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    link: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 mt-auto">
          <Link href={service.link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
