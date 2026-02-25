import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Target, Users, Shield } from "lucide-react";
import aboutImg from "@/assets/images/about-office.jpg";

export default function About() {
  return (
    <div className="pt-8 pb-24 bg-white">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            About Our Group
          </h1>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Shree Momai Logistics is a premier global freight forwarder, dedicated to providing seamless, end-to-end supply chain solutions to businesses worldwide.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={aboutImg} 
              alt="Corporate Office" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] border border-slate-200"
            />
          </div>
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Delivering Excellence Across Borders</h3>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              With decades of experience in the logistics industry, Shree Momai Logistics was founded on the principles of reliability, speed, and absolute customer satisfaction. We manage complex supply chains to ensure your cargo moves smoothly across land, sea, and air.
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              To better serve the specialized needs of global maritime trade, we operate <strong>Serene Sea Shipping</strong> as our dedicated ocean freight division. This structure allows us to offer both comprehensive general logistics and deep, focused expertise in sea cargo.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-primary" /> Global Reach
              </h4>
              <p className="text-slate-600 text-sm">
                Our worldwide network of partners and agents ensures we can handle shipments from and to virtually any port or airport across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Group Structure */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden mb-24">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading">Our Group Structure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-1/2 w-8 h-px bg-slate-700 -translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Parent Company
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2">Shree Momai Logistics</h3>
                <p className="text-slate-400 text-sm leading-relaxed">The complete logistics solutions provider handling Logistics, Air Freight, Road Transport, and Warehousing operations globally.</p>
              </div>

              <div className="bg-blue-900/40 p-8 rounded-2xl border border-blue-500/30 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Dedicated Division
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2 text-blue-100">Serene Sea Shipping</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">
                  Operating exclusively to provide specialized ocean freight, sea cargo handling, and port-to-port maritime logistics solutions.
                </p>
                <div className="mt-6">
                   <Link href="/serene-sea-shipping">
                     <span className="text-blue-300 text-sm font-semibold hover:text-white cursor-pointer transition-colors inline-flex items-center gap-1">
                       Learn more <ArrowRight className="w-4 h-4" />
                     </span>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Reliability", desc: "We deliver on our promises, ensuring your cargo is safe and arrives on schedule." },
            { icon: Target, title: "Precision", desc: "Meticulous attention to detail in customs documentation and supply chain planning." },
            { icon: Users, title: "Client Focus", desc: "Dedicated support teams providing transparent communication and tailored solutions." }
          ].map((val, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                <val.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
              <p className="text-slate-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
