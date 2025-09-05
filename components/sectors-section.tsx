import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Mountain, Zap, Factory, Building, Sun } from "lucide-react"
import Image from "next/image"

export function SectorsSection() {
  const sectors = [
    {
      icon: Fuel,
      title: "Oil & Gas",
      description:
        "Disruptive solutions for monitoring artificial lift systems in wells. We develop technologies focused on optimizing mature field production and monitoring critical assets.",
      features: ["Artificial lift monitoring", "Critical asset management", "Production optimization"],
      image: "/images/oil-pump-jack.jpg",
      imageAlt: "Oil pump jack in operation",
    },
    {
      icon: Mountain,
      title: "Mining",
      description:
        "Focused on developing solutions that optimize mineral extraction processes with advanced monitoring and control systems.",
      features: ["Extraction optimization", "Process monitoring", "Equipment reliability"],
      image: "/images/industrial-plant.jpg",
      imageAlt: "Industrial mining facility",
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description:
        "We handle the analysis, design, and development of solar system solutions for sustainable energy generation.",
      features: ["Solar system design", "Energy analysis", "Sustainable solutions"],
      image: "/images/solar-panels-house.jpg",
      imageAlt: "Solar panels installation on residential roof",
    },
    {
      icon: Factory,
      title: "Steel Industry",
      description:
        "We focus on creating solutions for the exploitation, transportation, and transformation of raw materials in steel production.",
      features: ["Raw material handling", "Transportation systems", "Process transformation"],
      image: "/images/global-logistics.jpg",
      imageAlt: "Industrial warehouse and logistics",
    },
    {
      icon: Building,
      title: "Infrastructure",
      description:
        "We focus on generating solutions adapted to the construction sector, aligned with new market trends and technologies.",
      features: ["Construction solutions", "Market trends", "Infrastructure development"],
      image: "/images/solar-installation.jpg",
      imageAlt: "Infrastructure development with renewable energy",
    },
    {
      icon: Zap,
      title: "Electrical",
      description:
        "Focused on repairing, replacing, or adapting electrical equipment that is fundamental for the reactivation of Venezuelan industry. We supply electrical wiring of all types: low, medium, and high voltage.",
      features: ["Equipment repair & replacement", "All voltage levels", "Industry reactivation"],
      image: "/images/power-transmission.jpg",
      imageAlt: "High voltage power transmission towers",
    },
  ]

  return (
    <section id="sectors" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Where We Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Currently focused on the sectors that provide the greatest contribution to the country's reactivation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64 md:h-56 lg:h-64 w-full">
                <Image src={sector.image || "/placeholder.svg"} alt={sector.imageAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <sector.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{sector.description}</p>
                <ul className="space-y-2">
                  {sector.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
