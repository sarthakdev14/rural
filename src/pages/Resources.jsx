import {
  FaFilePdf,
  FaVideo,
  FaBook,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaPlay,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Resources() {
  const { currentLang, languages } = useLanguage();

  const healthGuides = [
    {
      title: languages[currentLang].healthTips,
      type: "PDF",
      icon: <FaFilePdf />,
      link: "#",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      title: languages[currentLang].preventiveCare,
      type: "PDF",
      icon: <FaFilePdf />,
      link: "#",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      title: languages[currentLang].nutritionGuide,
      type: "PDF",
      icon: <FaFilePdf />,
      link: "#",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  const educationalVideos = [
    {
      title: languages[currentLang].exerciseTips,
      duration: "10 mins",
      icon: <FaVideo />,
      link: "#",
      thumbnail:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      title: languages[currentLang].healthTips,
      duration: "5 mins",
      icon: <FaVideo />,
      link: "#",
      thumbnail:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      title: languages[currentLang].preventiveCare,
      duration: "15 mins",
      icon: <FaVideo />,
      link: "#",
      thumbnail:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  const helplineNumbers = [
    {
      name: "Medical Emergency",
      number: "108",
      icon: <FaPhoneAlt className="text-red-600" />,
    },
    {
      name: "COVID-19 Helpline",
      number: "1075",
      icon: <FaPhoneAlt className="text-blue-600" />,
    },
    {
      name: "Mental Health Helpline",
      number: "1800-599-0019",
      icon: <FaPhoneAlt className="text-green-600" />,
    },
    {
      name: "Women's Helpline",
      number: "1091",
      icon: <FaPhoneAlt className="text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {languages[currentLang].healthResources}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {languages[currentLang].healthResourcesSubtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Health Guides Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {languages[currentLang].healthTips}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">PDF Guide</p>
                    <h3 className="text-lg font-bold">{guide.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href={guide.link}
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors group-hover:scale-[1.02] transform transition-transform"
                  >
                    <FaDownload />
                    <span>Download Guide</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Videos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {languages[currentLang].preventiveCare}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaPlay className="text-blue-600 text-xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{video.duration}</p>
                    <h3 className="text-lg font-bold">{video.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Helpline Numbers */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">
            {languages[currentLang].emergencyContacts}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helplineNumbers.map((helpline, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {helpline.icon}
                </div>
                <h3 className="font-semibold mb-2">{helpline.name}</h3>
                <a
                  href={`tel:${helpline.number}`}
                  className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {helpline.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
