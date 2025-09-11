import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Get Started Today</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Ready to take your investments to the next level? Contact us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-200">info@kirafx.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-200">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-sm text-gray-200">
                      123 Financial District<br />
                      New York, NY 10004
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Business Hours</p>
                    <p className="text-sm text-gray-200">
                      Mon-Fri: 8:00 AM - 6:00 PM EST<br />
                      Sat: 9:00 AM - 2:00 PM EST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">Response Time</span>
                  <span className="text-sm font-medium text-white">&lt; 1 hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">Free Consultation</span>
                  <span className="text-sm font-medium text-white">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">Minimum Investment</span>
                  <span className="text-sm font-medium text-white">$10,000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle>Schedule Your Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stock-recommendation">Stock Recommendation</SelectItem>
                          <SelectItem value="portfolio-management">Portfolio Management</SelectItem>
                          <SelectItem value="account-handling">Account Handling</SelectItem>
                          <SelectItem value="forex">Forex Trading</SelectItem>
                          <SelectItem value="consultation">One-on-One Calls</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investment">Investment Amount</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m+">$1M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your investment goals and any specific questions you have..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1">
                      Schedule Free Consultation
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      Request Information Package
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service. 
                    We'll contact you within 1 business hour to schedule your consultation.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}