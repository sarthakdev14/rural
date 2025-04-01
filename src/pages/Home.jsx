import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  FaStethoscope,
  FaSyringe,
  FaNotesMedical,
  FaHeartbeat,
  FaBaby,
  FaTooth,
  FaEye,
  FaBrain,
  FaArrowRight,
  FaPhoneAlt,
  FaHandHoldingHeart,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const { currentLang, languages } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: (
        <FaStethoscope className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].generalMedicine,
      description: languages[currentLang].generalMedicineDesc,
    },
    {
      icon: <FaSyringe className="text-4xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].vaccination,
      description: languages[currentLang].vaccinationDesc,
    },
    {
      icon: (
        <FaNotesMedical className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].healthScreening,
      description: languages[currentLang].healthScreeningDesc,
    },
    {
      icon: (
        <FaHeartbeat className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].cardiology,
      description: languages[currentLang].cardiologyDesc,
    },
    {
      icon: <FaBaby className="text-4xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].pediatrics,
      description: languages[currentLang].pediatricsDesc,
    },
    {
      icon: <FaTooth className="text-4xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].dentalCare,
      description: languages[currentLang].dentalCareDesc,
    },
    {
      icon: <FaEye className="text-4xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].eyeCare,
      description: languages[currentLang].eyeCareDesc,
    },
    {
      icon: <FaBrain className="text-4xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].mentalHealth,
      description: languages[currentLang].mentalHealthDesc,
    },
  ];

  const features = [
    {
      icon: <FaUserMd className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: languages[currentLang].expertDoctors,
      description: languages[currentLang].expertDoctorsDesc,
    },
    {
      icon: (
        <FaHospital className="text-3xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].modernFacilities,
      description: languages[currentLang].modernFacilitiesDesc,
    },
    {
      icon: (
        <FaHandHoldingHeart className="text-3xl text-blue-600 dark:text-blue-400" />
      ),
      title: languages[currentLang].compassionateCare,
      description: languages[currentLang].compassionateCareDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 dark:from-blue-950/90 dark:to-blue-800/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-7xl font-bold text-white mb-6 leading-tight animate-fade-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {languages[currentLang].welcomeTitle}
            </motion.h1>
            <motion.p
              className="text-2xl text-blue-100 mb-8 animate-fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {languages[currentLang].welcomeSubtitle}
            </motion.p>
            <motion.div
              className="flex gap-4 animate-fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/services"
                className="group bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                {languages[currentLang].getStarted}
                <FaArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                {languages[currentLang].learnMore}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {languages[currentLang].servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {languages[currentLang].servicesDescription}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {languages[currentLang].emergencyTitle}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {languages[currentLang].emergencySubtitle}
            </p>
            <Link
              to="/emergency"
              className="group inline-flex items-center gap-2 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaPhoneAlt className="text-xl transform group-hover:scale-110 transition-transform" />
              {languages[currentLang].callEmergency}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
