import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Ship, Anchor, ArrowRight, Waves, Globe, Compass } from "lucide-react";
import sereneSeaImg from "@/assets/images/serene-sea.jpg";

export default function SereneSea() {
  return (
    <div className="bg-white">
      {/* Dedicated Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={sereneSeaImg} 
            alt="Serene Sea Shipping" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <Ship className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-blue-200 font-semibold tracking-widest uppercase text-sm">
                A Division of Shree Momai Logistics
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
              Serene Sea <span className="text-blue-400">Shipping</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 font-light leading-relaxed max-w-2xl">
              Dedicated ocean freight excellence. Navigating global waters to deliver your sea cargo safely, efficiently, and cost-effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Anchor className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-heading">Masters of the Ocean Freight</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
              While <strong>Shree Momai Logistics</strong> handles complex, multi-modal supply chains, <strong>Serene Sea Shipping</strong> was established to provide highly focused, specialized expertise in maritime transport. By separating our ocean operations into a dedicated division, we ensure deeper relationships with shipping lines, better rates, and unparalleled maritime knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Waves, title: "FCL & LCL Services", desc: "Flexible container solutions tailored to your cargo volume, ensuring cost efficiency." },
              { icon: Globe, title: "Global Port Network", desc: "Direct connections to major ports across Asia, Europe, latin America, and Africa." },
              { icon: Compass, title: "Route Optimization", desc: "Strategic planning to balance transit times and freight costs for your business." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Seamless Integration</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                When you ship with Serene Sea, you gain access to the full power of the Shree Momai Logistics group. 
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Your sea freight arrives at port under Serene Sea's watch, and instantly transitions to Shree Momai's expert customs clearance teams and road transport fleet for final delivery. One point of contact, complete visibility.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">1</div>
                  <span className="font-medium text-slate-200">Ocean transit by Serene Sea Shipping</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">2</div>
                  <span className="font-medium text-slate-200">Customs clearance by Shree Momai</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">3</div>
                  <span className="font-medium text-slate-200">Inland delivery by Shree Momai trucks</span>
                </li>
              </ul>
              
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-semibold">
                  Get Ocean Freight Quote
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-30"></div>
              <img 
                src={sereneSeaImg} 
                alt="Cargo Ship" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square border border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
