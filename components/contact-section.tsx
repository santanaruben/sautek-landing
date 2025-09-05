"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, Globe, Send, Loader2, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { useState } from "react"

// Esquema de validación con Zod
const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Verificar si EmailJS está configurado
  const isEmailJSConfigured = !!(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  )
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<ContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Validación manual
    clearErrors()
    let hasErrors = false
    
    if (!data.fullName || data.fullName.trim().length < 2) {
      setError("fullName", { 
        type: "manual", 
        message: data.fullName ? "Name must be at least 2 characters" : "Full name is required" 
      })
      hasErrors = true
    }
    
    if (!data.email || data.email.trim().length === 0) {
      setError("email", { type: "manual", message: "Email is required" })
      hasErrors = true
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("email", { type: "manual", message: "Please enter a valid email" })
      hasErrors = true
    }
    
    if (!data.subject || data.subject.trim().length < 5) {
      setError("subject", { 
        type: "manual", 
        message: data.subject ? "Subject must be at least 5 characters" : "Subject is required" 
      })
      hasErrors = true
    }
    
    if (!data.message || data.message.trim().length < 10) {
      setError("message", { 
        type: "manual", 
        message: data.message ? "Message must be at least 10 characters" : "Message is required" 
      })
      hasErrors = true
    }
    
    if (hasErrors) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Configuración de EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please set up your EmailJS credentials in the .env.local file.")
      }

      // Parámetros del template
      const templateParams = {
        subject: data.subject,
        name: data.fullName,
        email: data.email,
        message: data.message,
      }

      // Enviar email
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      toast.success("Message sent successfully!", {
        description: "We will get back to you soon.",
      })
      
      reset() // Limpiar el formulario
      
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Error sending message", {
        description: "Please try again or contact us directly by phone.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const onError = (errors: any) => {
    // Handle form validation errors if needed
  }
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ready to discuss your industrial solution needs? Contact our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-8">
              <Image
                src="/images/contact-banner.jpg"
                alt="Contact Sautek Energy"
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">ventas@sautek.net</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Phone & Whatsapp</h4>
                      <p className="text-muted-foreground">+58 (412) 509 8998</p>
                      <p className="text-muted-foreground">+1 (754) 284 9944</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {!isEmailJSConfigured && (
                <Alert className="mb-6 border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-800">
                    <strong>Email service not configured.</strong> To enable the contact form, please set up your EmailJS credentials in the .env.local file. 
                    For now, you can contact us directly via email or phone.
                  </AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input 
                    id="fullName" 
                    placeholder="John Doe" 
                    {...register("fullName", { required: true })}
                    className={errors.fullName ? "border-red-500" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email", { required: true })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project inquiry, equipment request, etc." 
                    {...register("subject", { required: true })}
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..." 
                    rows={4} 
                    {...register("message", { required: true })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90" 
                  disabled={isSubmitting || !isEmailJSConfigured}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
