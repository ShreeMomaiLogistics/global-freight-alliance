import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Ship, Truck, Package, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/images/hero-logistics.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Logistics container ship" 
            className="w-full h-full object-cover scale-105 transform transition-transform duration-10000 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                <span className="text-white font-semibold tracking-wide text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Worldwide Network
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
                Global Logistics <br/><span className="text-blue-400">Solutions</span> You Can Trust
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed">
                Comprehensive freight forwarding, warehousing, and customs clearance services designed to streamline your global supply chain.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold text-white border-white hover:bg-white hover:text-slate-900 backdrop-blur-sm bg-white/5">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Complete Logistics Solutions</h3>
            <p className="text-slate-600 text-lg">
              We provide end-to-end logistics operations, ensuring your cargo reaches its destination safely, securely, and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Plane, title: "Air Freight", desc: "Fast and reliable global air cargo solutions for time-sensitive shipments." },
              { icon: Ship, title: "Ocean Freight", desc: "Cost-effective sea freight forwarding through our specialized division." },
              { icon: Truck, title: "Road Transport", desc: "Extensive inland transportation network for seamless door-to-door delivery." },
              { icon: ShieldCheck, title: "Customs Clearance", desc: "Expert handling of regulatory compliance and customs documentation." }
            ].map((srv, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <srv.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-3">{srv.desc}</p>
                <Link href="/services">
                  <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Company Highlight Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-white"><path d="M0,100 L100,0 L100,100 Z" /></svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/20 border border-blue-500/30">
                <span className="text-blue-300 font-semibold tracking-wide text-sm uppercase">Specialized Division</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Serene Sea Shipping
              </h2>
              <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
                Operated as a specialized division under Shree Momai Logistics, Serene Sea Shipping focuses exclusively on delivering premium ocean freight and sea cargo solutions globally.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["FCL (Full Container Load) & LCL (Less than Container Load)", "Bulk and Break-Bulk Cargo", "Global port-to-port connections"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/serene-sea-shipping">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-slate-900 hover:bg-slate-100">
                  Discover Serene Sea <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="/src/assets/images/serene-sea.jpg" 
                alt="Serene Sea Shipping Containers" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-slate-800"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                  <Ship className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Specialized in</p>
                  <p className="text-xl font-bold text-slate-900">Ocean Freight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Elements */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "150+", label: "Global Agents" },
              { num: "10k+", label: "Shipments Annually" },
              { num: "24/7", label: "Customer Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <h4 className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">{stat.num}</h4>
                <p className="text-slate-600 font-semibold uppercase tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
