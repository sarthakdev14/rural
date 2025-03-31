import { useState } from 'react';
import { FaVideo, FaCalendar, FaClock, FaUserMd, FaStethoscope, FaComments } from 'react-icons/fa';

function Telemedicine() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const doctors = [
    { 
      id: 1, 
      name: "Dr. Sarah Johnson", 
      specialization: "General Medicine", 
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    { 
      id: 2, 
      name: "Dr. Michael Chen", 
      specialization: "Pediatrics", 
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    { 
      id: 3, 
      name: "Dr. Priya Patel", 
      specialization: "Cardiology", 
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    { 
      id: 4, 
      name: "Dr. James Wilson", 
      specialization: "Mental Health", 
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedDoctor, selectedDate, selectedTime });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Virtual Healthcare</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with qualified healthcare professionals from the comfort of your home
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUserMd className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Choose Specialist</h3>
            <p className="text-gray-600">Select from our experienced medical professionals</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCalendar className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Book Time Slot</h3>
            <p className="text-gray-600">Select your preferred date and time</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaVideo className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Video Consultation</h3>
            <p className="text-gray-600">Connect with your doctor via video call</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Doctor List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Available Doctors</h2>
            {doctors.map(doctor => (
              <div 
                key={doctor.id}
                className={`bg-white p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                  selectedDoctor === doctor.id.toString() ? 'ring-2 ring-blue-600' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedDoctor(doctor.id.toString())}
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                    <p className="text-sm text-gray-500">{doctor.experience} experience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Schedule Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Select Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Select Time</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    <option value="">Choose a time slot</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-semibold text-lg"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telemedicine;