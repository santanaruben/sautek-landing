import Image from "next/image"
import { Mail, Phone, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Image
              src="/images/logo.png"
              alt="Sautek Energy"
              width={120}
              height={40}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Leading provider of electrical, hydraulic, and automotive equipment for critical infrastructure across
              multiple industrial sectors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">ventas@sautek.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+58 (412) 509 8998</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">www.sautek.net</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Equipment Import/Export</li>
              <li>Machinery Installation</li>
              <li>Spare Parts Supply</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sectors</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Oil & Gas</li>
              <li>Mining</li>
              <li>Renewable Energy</li>
              <li>Steel Industry</li>
              <li>Infrastructure</li>
              <li>Electrical</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2025 Sautek Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
