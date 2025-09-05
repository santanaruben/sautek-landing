import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, high-quality electrical, hydraulic, and automotive solutions that drive industrial
                excellence. We are committed to supporting the reactivation and growth of critical sectors through
                innovative equipment, expert installation services, and comprehensive spare parts supply, while
                maintaining the highest standards of safety and efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-accent" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of industrial solutions in Latin America, recognized for our technical
                expertise, reliability, and commitment to sustainable development. We envision a future where our
                innovative solutions contribute to the transformation of key industries, supporting economic growth
                while promoting environmental responsibility.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
