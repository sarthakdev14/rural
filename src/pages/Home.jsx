import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  FaStethoscope,
  FaVideo,
  FaAmbulance,
  FaHospital,
  FaUserMd,
  FaHandHoldingHeart,
} from "react-icons/fa";

function Home() {
  const { currentLang, languages } = useLanguage();

  const services = [
    {
      icon: (
        <FaStethoscope className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].generalMedicine,
      description: languages[currentLang].generalMedicineDesc,
    },
    {
      icon: <FaVideo className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].telemedicine,
      description: languages[currentLang].telemedicineDesc,
    },
    {
      icon: (
        <FaAmbulance className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].emergencyCare,
      description: languages[currentLang].emergencyCareDesc,
    },
    {
      icon: (
        <FaHospital className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].mobileClinics,
      description: languages[currentLang].mobileClinicsDesc,
    },
    {
      icon: <FaUserMd className="text-5xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].specialistCare,
      description: languages[currentLang].specialistCareDesc,
    },
    {
      icon: (
        <FaHandHoldingHeart className="text-5xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].preventiveCare,
      description: languages[currentLang].preventiveCareDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600 dark:bg-blue-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {languages[currentLang].welcomeTitle}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {languages[currentLang].welcomeSubtitle}
          </p>
          <Link
            to="/services"
            className="inline-block mt-8 px-8 py-4 bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-800 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            {languages[currentLang].getStarted}
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {languages[currentLang].servicesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {languages[currentLang].emergencyTitle}
          </h2>
          <p className="text-xl text-red-100 mb-8">
            {languages[currentLang].emergencySubtitle}
          </p>
          <Link
            to="/emergency"
            className="inline-block bg-white text-red-600 dark:bg-gray-100 dark:text-red-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            {languages[currentLang].callEmergency}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
