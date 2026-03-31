import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-zinc-800 text-zinc-300 border-zinc-700">Get In Touch</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's connect and make it happen.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border-zinc-700/30 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:alex.morgan@example.com" className="text-zinc-400 hover:text-zinc-300 transition-colors">
                    alex.morgan@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-zinc-400 hover:text-zinc-300 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-zinc-400">San Francisco, CA</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-zinc-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { href: "https://github.com", icon: Github },
                    { href: "https://linkedin.com", icon: Linkedin },
                    { href: "https://twitter.com", icon: Twitter },
                  ].map(({ href, icon: Icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                      <Icon className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-2xl shadow-black/50">
                  <Mail className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to start?</h3>
                  <p className="text-zinc-400 mb-6">Let's discuss your project and bring your vision to life.</p>
                  <a href="mailto:alex.morgan@example.com">
                    <Button size="lg" className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 shadow-lg shadow-black/50">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}