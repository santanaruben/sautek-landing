import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            At SAUTEK, we are focused on importing, exporting, and supplying materials and equipment for electrical,
            hydraulic, and automotive applications. We also offer machinery installation and spare parts services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Representatives of national and international companies</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Reliable and quality solutions you can trust</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Focused on sectors that contribute most to the country's reactivation
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Global Reach</h4>
                <p className="text-sm text-muted-foreground">International partnerships</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Expert Team</h4>
                <p className="text-sm text-muted-foreground">Industry specialists</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Quality Focus</h4>
                <p className="text-sm text-muted-foreground">Certified solutions</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Reliability</h4>
                <p className="text-sm text-muted-foreground">Trusted partner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
