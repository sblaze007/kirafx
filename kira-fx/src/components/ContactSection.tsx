"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    investment: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // validation
  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First name required";
    if (!formData.lastName) newErrors.lastName = "Last name required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Valid phone required";
    if (!formData.service) newErrors.service = "Select a service";
    if (!formData.investment) newErrors.investment = "Select investment range";
    if (!formData.message) newErrors.message = "Message required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // send via emailjs
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    emailjs
      .send(
        "service_s7wnbao",
        "template_r5z1a0h",
        formData,
        "oiOUiVz7Dsf-74TGi"
      )
      .then(() => {
        setSuccess("✅ Message sent! We'll get back to you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          investment: "",
          message: "",
        });
      })
      .catch(() => setSuccess("Failed to send. Please send via WhatsApp."))
      .finally(() => setLoading(false));
  };

  // WhatsApp link
  const whatsappLink = `https://wa.me/918279944904?text=${encodeURIComponent(
    `Hello, I'm ${formData.firstName} ${formData.lastName}.
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Investment: ${formData.investment}
Message: ${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Ready to take your investments to the next level? Contact us for a
            free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle className="text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-200">
                      satvik.jain.cse@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-200">+91 8279944904</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-sm text-gray-200">
                      123 Financial District
                      <br />
                      New York, NY 10004
                    </p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="font-medium text-white">Business Hours</p>
                    <p className="text-sm text-gray-200">
                      Mon-Fri: 9:00 AM - 5:00 PM IST
                      <br />
                      Sat: 11:00 AM - 2:00 PM IST
                      <br />
                      Sun: Closed
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
                  <span className="text-sm font-medium text-white">
                    &lt; 3 hour
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">
                    Free Consultation
                  </span>
                  <span className="text-sm font-medium text-white">
                    15 minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-200">
                    Minimum Investment
                  </span>
                  <span className="text-sm font-medium text-white">$500</span>
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Service Interest</Label>
                      <Select
                        onValueChange={(val: any) =>
                          setFormData({ ...formData, service: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stock-recommendation">
                            Stock Recommendation
                          </SelectItem>
                          <SelectItem value="portfolio-management">
                            Portfolio Management
                          </SelectItem>
                          <SelectItem value="account-handling">
                            Account Handling
                          </SelectItem>
                          <SelectItem value="long-term">
                            Long Term Investment
                          </SelectItem>
                          <SelectItem value="forex">Forex Trading</SelectItem>
                          <SelectItem value="consultation">
                            One-on-One Calls
                          </SelectItem>
                          <SelectItem value="multiple">
                            Multiple Services
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-red-500 text-xs">{errors.service}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Investment Amount</Label>
                      <Select
                        onValueChange={(val: any) =>
                          setFormData({ ...formData, investment: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-500k">
                            $100K - $500K
                          </SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m+">$1M+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.investment && (
                        <p className="text-red-500 text-xs">
                          {errors.investment}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#5363FF",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      {loading ? "Sending..." : "Send via Email"}
                    </button>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#25D366",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        color: "white",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      Send via WhatsApp
                    </a>
                  </div>

                  {success && (
                    <p className="text-sm text-center mt-2">{success}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
