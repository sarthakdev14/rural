import {
  FaStethoscope,
  FaSyringe,
  FaNotesMedical,
  FaHeartbeat,
  FaBaby,
  FaTooth,
  FaEye,
  FaBrain,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const { currentLang, languages } = useLanguage();

  const medicalServices = [
    {
      icon: (
        <FaStethoscope className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].generalMedicine,
      description: languages[currentLang].generalMedicineDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaSyringe className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].vaccination,
      description: languages[currentLang].vaccinationDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: (
        <FaNotesMedical className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].healthScreening,
      description: languages[currentLang].healthScreeningDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: (
        <FaHeartbeat className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].cardiology,
      description: languages[currentLang].cardiologyDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaBaby className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].pediatrics,
      description: languages[currentLang].pediatricsDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaTooth className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].dentalCare,
      description: languages[currentLang].dentalCareDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaEye className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].eyeCare,
      description: languages[currentLang].eyeCareDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaBrain className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].mentalHealth,
      description: languages[currentLang].mentalHealthDesc,
      availability: languages[currentLang].availability,
      timing: languages[currentLang].timing,
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600 dark:bg-blue-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {languages[currentLang].servicesPageTitle}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {languages[currentLang].servicesPageDescription}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {medicalServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full z-20 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                {/* Availability Info */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                    {service.availability}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                    {service.timing}
                  </p>
                </div>

                {/* Action Button */}
                <Link
                  to="/book-appointment"
                  className="w-full block text-center bg-blue-600 text-white py-3 rounded-lg transition hover:bg-blue-700"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {languages[currentLang].emergencyTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {languages[currentLang].emergencySubtitle}
          </p>
          <a
            href="/emergency"
            className="inline-block bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            {languages[currentLang].callEmergency}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
