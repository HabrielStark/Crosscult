"use client"

import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              CrossCult
            </Link>
            <p className="text-muted-foreground">
              Formula for your success - Together we move forward
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Cases", "Blog", "Career", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              {[
                "Strategy",
                "Creative",
                "Traffic Sources",
                "Design",
                "Content Writing",
                "Social Media",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Kyiv:</strong>
                <br />
                Yaroslavska St, 58, Kyiv, 04071
              </p>
              <p>
                <strong className="text-foreground">Tel Aviv:</strong>
                <br />
                Dizengoff Square 1, Tel Aviv-Yafo
              </p>
              <p>
                <strong className="text-foreground">Email:</strong>
                <br />
                crosscult@crosscult.agency
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} CrossCult Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 