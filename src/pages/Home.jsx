import { FaHospital, FaAmbulance, FaUserMd, FaClinicMedical, FaArrowRight } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

function Home() {
  const services = [
    {
      title: "24/7 Emergency Care",
      description: "Immediate medical attention available round the clock for critical situations",
      icon: <FaAmbulance />
    },
    {
      title: "Telemedicine",
      description: "Connect with qualified doctors remotely via video calls from your home",
      icon: <FaUserMd />
    },
    {
      title: "Mobile Clinics",
      description: "Regular healthcare services that come directly to your village",
      icon: <FaClinicMedical />
    },
    {
      title: "Hospital Directory",
      description: "Comprehensive list of nearest hospitals and healthcare centers",
      icon: <FaHospital />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-32 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Healthcare Services for Rural Communities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Quality healthcare within your reach, no matter where you are
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#services" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                Explore Services <FaArrowRight className="ml-2" />
              </a>
              <a href="tel:108" className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center">
                Emergency: Call 108
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide comprehensive healthcare solutions designed specifically for rural communities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Immediate Help?</h2>
          <p className="text-xl text-blue-100 mb-8">Our emergency response team is available 24/7</p>
          <a href="tel:108" className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center">
            <FaAmbulance className="mr-2" /> Call 108
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;