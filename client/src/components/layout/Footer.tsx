import { Link } from "wouter";
import { Ship, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-none">SHREE MOMAI LOGISTICS</h2>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold leading-none mt-1">Logistics Group</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Complete logistics solutions provider operating globally. From air and sea freight to road transport and specialized customs clearance.
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Globe className="w-5 h-5" />
              <span>Worldwide Agent Network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/"><span className="hover:text-primary cursor-pointer transition-colors">Home</span></Link></li>
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About the Group</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">All Services</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Air Freight</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Ocean Freight</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Road Transport</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Customs Clearance</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer transition-colors">Warehousing</span></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Office No – 113, 1st.Floor, Plot No. 12, Golden Height,B/h. B.M Petrol Pump, Sector 8,<br />Gandhidham, Gujarat 370201</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 8980888809</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@shreemomailogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Shree Momai Logistics. All rights reserved.</p>
          <p>Serene Sea Shipping is a specialized division of Shree Momai Logistics.</p>
        </div>
      </div>
    </footer>
  );
}
