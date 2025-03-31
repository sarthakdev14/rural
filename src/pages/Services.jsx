import { FaStethoscope, FaSyringe, FaNotesMedical, FaHeartbeat, FaBaby, FaTooth, FaEye, FaBrain } from 'react-icons/fa';

function Services() {
  const medicalServices = [
    {
      icon: <FaStethoscope className="text-5xl text-blue-600" />,
      title: "General Medicine",
      description: "Regular check-ups and primary healthcare services",
      availability: "Monday - Saturday",
      timing: "9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaSyringe className="text-5xl text-blue-600" />,
      title: "Vaccination",
      description: "Essential immunizations for children and adults",
      availability: "Monday - Friday",
      timing: "10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaNotesMedical className="text-5xl text-blue-600" />,
      title: "Health Screening",
      description: "Preventive health check-ups and early detection",
      availability: "Tuesday & Thursday",
      timing: "9:00 AM - 3:00 PM",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaHeartbeat className="text-5xl text-blue-600" />,
      title: "Cardiology",
      description: "Basic heart health check-ups and ECG services",
      availability: "Wednesday & Saturday",
      timing: "10:00 AM - 2:00 PM",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaBaby className="text-5xl text-blue-600" />,
      title: "Pediatrics",
      description: "Child healthcare and development monitoring",
      availability: "Monday - Friday",
      timing: "9:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaTooth className="text-5xl text-blue-600" />,
      title: "Dental Care",
      description: "Basic dental procedures and oral hygiene",
      availability: "Monday & Thursday",
      timing: "10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaEye className="text-5xl text-blue-600" />,
      title: "Eye Care",
      description: "Vision testing and basic eye care services",
      availability: "Tuesday & Friday",
      timing: "9:00 AM - 3:00 PM",
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaBrain className="text-5xl text-blue-600" />,
      title: "Mental Health",
      description: "Counseling and mental health support",
      availability: "Wednesday & Saturday",
      timing: "10:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Medical Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing comprehensive healthcare solutions to ensure the well-being of rural communities
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {medicalServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full z-20 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Availability Info */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                    {service.availability}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                    {service.timing}
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Immediate Medical Attention?</h2>
          <p className="text-xl text-blue-100 mb-8">Our emergency response team is available 24/7</p>
          <a 
            href="/emergency"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            Contact Emergency Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;