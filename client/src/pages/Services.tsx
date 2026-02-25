import { Plane, Ship, Truck, ShieldCheck, Package, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import airImg from "@/assets/images/service-air.jpg";
import oceanImg from "@/assets/images/service-ocean.jpg";
import roadImg from "@/assets/images/service-road.jpg";
import customsImg from "@/assets/images/service-customs.jpg";
import warehouseImg from "@/assets/images/service-warehouse.jpg";

export default function Services() {
  const services = [
    {
      id: "air-freight",
      title: "Air Freight",
      icon: Plane,
      image: airImg,
      desc: "When time is of the essence, our global air freight services provide the speed and reliability you need. We partner with major airlines to secure priority routing.",
      features: ["Express door-to-door delivery", "Charter services for oversized cargo", "Consolidation services", "Hazardous materials handling"]
    },
    {
      id: "ocean-freight",
      title: "Ocean Freight",
      subtitle: "Provided by Serene Sea Shipping",
      icon: Ship,
      image: oceanImg,
      desc: "Managed exclusively by our dedicated division, Serene Sea Shipping. We offer highly competitive rates and flexible schedules for global maritime routes.",
      features: ["FCL (Full Container Load)", "LCL (Less than Container Load)", "Break bulk & RORO", "Port-to-port and Door-to-door"],
      isSpecialized: true
    },
    {
      id: "road-transport",
      title: "Road Transport",
      icon: Truck,
      image: roadImg,
      desc: "Robust inland transportation networks connecting ports, airports, and your facilities. Our diverse fleet handles all types of domestic freight.",
      features: ["FTL and LTL trucking", "Cross-border transport", "Temperature-controlled vehicles", "Last-mile delivery"]
    },
    {
      id: "customs-clearance",
      title: "Customs Clearance",
      icon: ShieldCheck,
      image: customsImg,
      desc: "Navigating international trade regulations can be complex. Our in-house brokers ensure rapid, compliant clearance to prevent costly delays.",
      features: ["Import/Export documentation", "Tariff classification", "Duty and tax calculation", "Regulatory compliance consulting"]
    },
    {
      id: "warehousing",
      title: "Warehousing & Distribution",
      icon: Package,
      image: warehouseImg,
      desc: "Secure, strategically located facilities to optimize your inventory. We offer more than just storage, providing complete distribution solutions.",
      features: ["Short & long-term storage", "Pick, pack, and label", "Inventory management", "Cross-docking operations"]
    }
  ];

  return (
    <div className="pt-8 pb-24 bg-slate-50">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            Our Services
          </h1>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Comprehensive logistics solutions tailored to your specific supply chain requirements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 space-y-24">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="absolute inset-0 bg-slate-200 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3] md:aspect-[16/10] border border-slate-100"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              {service.isSpecialized && (
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
                  Specialized Division
                </div>
              )}
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
              {service.subtitle && (
                <p className="text-primary font-semibold mb-4">{service.subtitle}</p>
              )}
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {service.isSpecialized ? (
                <Link href="/serene-sea-shipping">
                  <Button variant="outline" className="h-12 px-6">
                    Visit Serene Sea Shipping <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <Link href="/contact">
                  <Button className="h-12 px-6">Request Quote</Button>
                </Link>
              )}
            </div>
            
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 md:px-8 mt-24">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Need a custom logistics solution?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to analyze your supply chain and provide optimized, cost-effective transport strategies.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg font-semibold bg-white text-primary hover:bg-slate-100">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
