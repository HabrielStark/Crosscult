import { ContactForm } from "@/components/contact-form"

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Start Your Journey with Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help your business grow
          </p>
        </div>
      </section>

      {/* Contact Form and Steps */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          
          {/* Steps */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">How We Work</h2>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-foreground">{step}</p>
                </div>
              </div>
            ))}

            {/* Contact Info */}
            <div className="mt-12 pt-12 border-t">
              <h3 className="text-xl font-bold mb-4">Our Locations</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Kyiv:</strong> Yaroslavska St, 58, Kyiv, 04071, 7th Floor
                </p>
                <p className="text-muted-foreground">
                  <strong>Tel Aviv:</strong> Dizengoff Square 1, Tel Aviv-Yafo, Israel
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> crosscult@crosscult.agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const steps = [
  "Our account manager will get in touch with you within 1 day.",
  "We sign an NDA with all clients before diving into any project details. Your privacy is our high priority.",
  "After we get all the information we need, we make a proposal according to your requirements.",
  "Within 7 days, you will receive a comprehensive proposal with clear timelines and a team setup.",
];