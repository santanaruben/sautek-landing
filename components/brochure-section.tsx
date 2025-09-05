import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BrochureSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Solutions Catalog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of clean, safe, and renewable energy solutions designed for industrial
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative">
            <Image
              src="/images/hero-banner.jpg"
              alt="Sautek Energy - Clean, Safe, Renewable Solutions"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">Complete Solutions Brochure</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore our full range of electrical, hydraulic, and automotive equipment for Oil & Gas, Mining,
                      and Energy sectors.
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90">
                      <Link
                        href="https://drive.google.com/file/d/1uDehaQx2pMsS-aWENWqKQ0DY9Tfh0GH6/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Brochure
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-accent">6+</div>
                <div className="text-sm text-muted-foreground">Industry Sectors</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Equipment Types</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
