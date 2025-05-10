import Image from "next/image"
import { Phone, Wrench, Code, Palette, Shield, Clock, DollarSign, Award, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Ssulyadaini Logo" width={180} height={50} className="h-auto" />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button asChild className="bg-[#c22126] hover:bg-[#a01c20] hidden sm:flex">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#2a3990]">
                  Welcome to Ssulyadaini
                </h1>
                <p className="text-xl text-gray-700 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your One-Stop Shop for Phone Accessories & Repairs
                </p>
              </div>
              <p className="text-gray-600 md:text-xl">
                At Ssulyadaini, we specialize in providing top-quality phone accessories and professional repair services
                for all types of mobile electronic devices. Whether you need a stylish new case, a screen replacement,
                or a software fix, we're here to help.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-[#c22126] hover:bg-[#a01c20]">
                  <a href="#services">Our Services</a>
                </Button>
                <Button asChild variant="outline" className="border-[#2a3990] text-[#2a3990]">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Phone Repair Service"
                width={400}
                height={400}
                className="rounded-lg object-cover border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2a3990]">
                What We Offer
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Comprehensive mobile device solutions to keep your technology running smoothly
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-[#c22126]/10">
                <Phone className="h-10 w-10 text-[#c22126]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3990]">Premium Phone Accessories</h3>
              <p className="text-center text-gray-500">
                Find the perfect accessories for your device – from protective cases and screen guards to chargers,
                power banks, Bluetooth devices, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-[#c22126]/10">
                <Wrench className="h-10 w-10 text-[#c22126]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3990]">Mobile Repair Services</h3>
              <p className="text-center text-gray-500">
                Cracked screen? Battery draining fast? Water damage? Our skilled technicians handle all types of phone
                repairs quickly and professionally.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-[#c22126]/10">
                <Code className="h-10 w-10 text-[#c22126]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3990]">Software Fixes & Support</h3>
              <p className="text-center text-gray-500">
                We solve software-related problems such as app crashes, system errors, phone unlocking, and firmware
                updates – keeping your phone running smoothly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-[#c22126]/10">
                <Palette className="h-10 w-10 text-[#c22126]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a3990]">Phone Wrapping & Customization</h3>
              <p className="text-center text-gray-500">
                Stand out with custom wraps and skins! Our wrapping service adds a unique look and extra protection to
                your phone.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block p-6 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-bold text-[#2a3990] mb-4">All-in-One Mobile Device Support</h3>
              <p className="text-gray-600">
                From diagnostics and data recovery to hardware and firmware upgrades, we offer full mobile care under
                one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2a3990]">
                Why Choose Ssulyadaini
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We're committed to providing exceptional service and value to every customer
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-white shadow-sm">
              <Shield className="h-10 w-10 text-[#c22126]" />
              <h3 className="text-lg font-bold text-[#2a3990]">Trusted by Hundreds</h3>
              <p className="text-center text-gray-500">
                Our satisfied customers trust us with their devices time and again
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-white shadow-sm">
              <Clock className="h-10 w-10 text-[#c22126]" />
              <h3 className="text-lg font-bold text-[#2a3990]">Fast & Reliable Service</h3>
              <p className="text-center text-gray-500">Quick turnaround times without compromising on quality</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-white shadow-sm">
              <DollarSign className="h-10 w-10 text-[#c22126]" />
              <h3 className="text-lg font-bold text-[#2a3990]">Affordable Pricing</h3>
              <p className="text-center text-gray-500">Quality service that doesn't break the bank</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 border rounded-lg bg-white shadow-sm">
              <Award className="h-10 w-10 text-[#c22126]" />
              <h3 className="text-lg font-bold text-[#2a3990]">Genuine Parts</h3>
              <p className="text-center text-gray-500">We only use authentic accessories and parts for all repairs</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-[#2a3990]">
              Visit Ssulyadaini today – where quality meets convenience.
            </p>
            <p className="text-gray-600 mt-2">Let us give your phone the attention it deserves!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#2a3990]">Contact Us</h2>
                <p className="text-gray-500 md:text-xl">
                  Have a question, need support, or ready to book a repair? We're here to help!
                </p>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#c22126]/10">
                    <MessageSquare className="h-5 w-5 text-[#c22126]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-500">sszulyadaini@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#c22126]/10">
                    <Phone className="h-5 w-5 text-[#c22126]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone/WhatsApp</p>
                    <p className="text-gray-500">0803 286 1931</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#c22126]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#c22126]"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-500">Bauchi State, Nigeria</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Our team at Ssulyadaini is available to assist you with phone accessories, device repairs, software
                fixes, and more. Reach out today and experience fast, friendly, and reliable mobile service!
              </p>
            </div>
            <div className="space-y-4 bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-[#2a3990]">Send Us a Message</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button className="bg-[#c22126] hover:bg-[#a01c20]">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#2a3990] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Ssulyadaini Logo"
                width={150}
                height={40}
                className="h-auto bg-white p-1 rounded"
              />
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Ssulyadaini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
