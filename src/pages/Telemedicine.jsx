import { useState } from "react";
import {
  FaVideo,
  FaCalendar,
  FaClock,
  FaUserMd,
  FaStethoscope,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Telemedicine() {
  const { currentLang, languages } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "General Medicine",
      experience: 8,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Pediatrics",
      experience: 12,
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialization: "Cardiology",
      experience: 15,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDoctor || !selectedDate || !selectedTime || !email) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    console.log({ email, selectedDoctor, selectedDate, selectedTime });

    const appointmentData = {
    email,
    doctorId: selectedDoctor.id,
    doctorName: selectedDoctor.name,
    specialization: selectedDoctor.specialization,
    date: selectedDate,
    time: selectedTime,
  };

    try {
      const response = await fetch(
        "http://localhost:8000/schedule-appointment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(appointmentData),
        }
      );
      const data = await response.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600 dark:bg-blue-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaVideo className="text-4xl text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            {languages[currentLang].virtualHealthcare}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {languages[currentLang].virtualHealthcareSubtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaUserMd className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {languages[currentLang].chooseSpecialist}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {languages[currentLang].chooseSpecialistDesc}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCalendar className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {languages[currentLang].bookTimeSlot}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {languages[currentLang].bookTimeSlotDesc}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaVideo className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {languages[currentLang].videoConsultation}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {languages[currentLang].videoConsultationDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Doctor List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {languages[currentLang].availableDoctors}
              </h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`bg-gray-50 dark:bg-gray-700 rounded-xl p-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedDoctor?.id === doctor.id
                        ? "ring-2 ring-blue-500 dark:ring-blue-400"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {doctor.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {doctor.specialization}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {doctor.experience}{" "}
                          {languages[currentLang].experience}
                        </p>
                      </div>
                      {selectedDoctor?.id === doctor.id && (
                        <FaCheckCircle className="text-blue-500 dark:text-blue-400 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {languages[currentLang].scheduleAppointment}
              </h2>
              {selectedDoctor ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {selectedDoctor.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {selectedDoctor.specialization}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      Enter Email
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      {languages[currentLang].selectDate}
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      {languages[currentLang].selectTime}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedTime(time);
                          }}
                          className={`px-4 py-3 rounded-xl border transition-all duration-300 ${
                            selectedTime === time
                              ? "bg-blue-600 text-white border-blue-600"
                              : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors transform hover:scale-[1.02] active:scale-[0.98] font-semibold text-lg"
                  >
                    {languages[currentLang].scheduleConsultation}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <FaUserMd className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {languages[currentLang].chooseSpecialist}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telemedicine;
