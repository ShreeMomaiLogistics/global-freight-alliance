import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Ship } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Our logistics team will contact you within 24 hours.",
    });
  };

  return (
    <div className="pt-8 pb-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            Contact Us
          </h1>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Get in touch with Shree Momai Logistics or our Serene Sea Shipping division for customized quotes and logistics support.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-heading">Global Headquarters</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Address</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Office No – 113, 1st.Floor, Plot No. 12, Golden Height,B/h. B.M Petrol Pump, Sector 8,<br/>Gandhidham, Gujarat 370201</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone</p>
                    <p className="text-slate-600 text-sm">+91 8980888809</p>
                    <p className="text-slate-600 text-sm"></p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Email</p>
                    <p className="text-primary font-medium text-[12px]">info@shreemomailogistics.com</p>
                    <p className="text-primary font-medium text-[12px]">info@serenesea.in</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Operating Hours</p>
                    <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 text-sm"></p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Ship className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold font-heading">Serene Sea Enquiries</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">For dedicated ocean freight inquiries, please specify "Ocean Freight" in your message to be routed directly to the Serene Sea Shipping team.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Request a Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required className="bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required className="bg-slate-50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required className="bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-slate-50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select required>
                    <SelectTrigger className="bg-slate-50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Logistics Inquiry</SelectItem>
                      <SelectItem value="air">Air Freight</SelectItem>
                      <SelectItem value="ocean">Ocean Freight (Serene Sea)</SelectItem>
                      <SelectItem value="road">Road Transport</SelectItem>
                      <SelectItem value="customs">Customs Clearance</SelectItem>
                      <SelectItem value="warehouse">Warehousing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cargo Details / Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide origin, destination, and cargo specifications..." 
                    className="min-h-[150px] bg-slate-50" 
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-8 font-semibold text-base">
                  Send Request
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
