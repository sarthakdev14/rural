import {
  FaAmbulance,
  FaPhone,
  FaHospital,
  FaDirections,
  FaMapMarkedAlt,
  FaHeartbeat,
  FaFirstAid,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Emergency() {
  const { currentLang, languages } = useLanguage();

  const emergencyContacts = [
    {
      name: "Ambulance",
      number: "108",
      icon: <FaAmbulance className="text-red-600" />,
    },
    {
      name: "Police",
      number: "100",
      icon: <FaPhone className="text-blue-600" />,
    },
    {
      name: "Fire",
      number: "101",
      icon: <FaPhone className="text-orange-600" />,
    },
    {
      name: "National Emergency",
      number: "112",
      icon: <FaPhone className="text-green-600" />,
    },
  ];

  const nearbyHospitals = [
    {
      name: "City General Hospital",
      distance: "5 km",
      address: "123 Healthcare Ave, City",
      phone: "1234567890",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Rural Medical Center",
      distance: "8 km",
      address: "456 Medical Road, Village",
      phone: "0987654321",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      name: "Community Health Center",
      distance: "12 km",
      address: "789 Health Street, Town",
      phone: "1122334455",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Emergency Banner */}
      <div className="relative bg-red-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-pulse mb-6">
            <FaHeartbeat className="text-6xl text-white mx-auto" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            {languages[currentLang].emergencyServices}
          </h1>
          <p className="text-2xl text-red-100 mb-8">
            {languages[currentLang].emergencyServicesSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:108"
              className="bg-white text-red-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-red-50 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <FaPhone className="text-2xl" />
              <span>{languages[currentLang].callEmergency}</span>
            </a>
            <a
              href="#nearby-hospitals"
              className="bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-800 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <FaMapMarkedAlt className="text-2xl" />
              <span>{languages[currentLang].nearestHospital}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Emergency Contact Numbers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {languages[currentLang].emergencyContacts}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                <a
                  href={`tel:${contact.number}`}
                  className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* First Aid Tips */}
        <div className="mb-16 bg-blue-50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <FaFirstAid className="text-4xl text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold">
              {languages[currentLang].firstAid}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Bleeding</h3>
              <p className="text-gray-600">
                {languages[currentLang].firstAidDesc}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Burns</h3>
              <p className="text-gray-600">
                {languages[currentLang].firstAidDesc}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Choking</h3>
              <p className="text-gray-600">
                {languages[currentLang].firstAidDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div id="nearby-hospitals">
          <h2 className="text-3xl font-bold mb-8">
            {languages[currentLang].nearestHospital}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nearbyHospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{hospital.name}</h3>
                    <p className="text-sm">{hospital.distance} away</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-2">
                    <FaMapMarkedAlt className="inline mr-2 text-blue-600" />
                    {hospital.address}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <FaPhone className="inline mr-2 text-blue-600" />
                    {hospital.phone}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`tel:${hospital.phone}`}
                      className="bg-blue-600 text-white py-2 px-4 rounded-xl text-center hover:bg-blue-700 transition-colors"
                    >
                      Call Now
                    </a>
                    <button className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
