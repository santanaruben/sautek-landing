import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Shield, Wifi } from "lucide-react"
import Image from "next/image"

export function PowerSolutionsSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Power UPS Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We cover a wide range of equipment and all these critical power solutions are compatible with various
              communication protocols used in asset management systems.
            </p>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Battery className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Critical Power Systems</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive UPS solutions for mission-critical applications</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Wifi className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Communication Protocols</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Compatible with various protocols for seamless integration</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Asset Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Advanced monitoring and management capabilities</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/equipment-parts.png"
              alt="Sautek Energy Equipment and Parts - Solar inverters, batteries, control systems"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
