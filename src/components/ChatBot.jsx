import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hello! I am your healthcare assistant. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const demoResponses = {
    // Basic prompts
    hello: "Hi there! How can I assist you with healthcare services today?",
    services:
      "We offer various healthcare services including:\n- Telemedicine consultations\n- Emergency care information\n- Health tips and guidance\n- Appointment scheduling",
    emergency:
      "For emergencies, please call our 24/7 helpline at 1800-HEALTH-CARE immediately.",
    appointment:
      "To schedule an appointment, please provide your preferred date and time, and I'll guide you through the process.",
    location:
      "We have multiple healthcare centers across rural areas. Would you like to know the nearest center to your location?",
    insurance:
      "We accept various insurance plans. Please provide your insurance details for verification.",

    // New healthcare-specific prompts
    symptoms:
      "I can help you understand common symptoms. Please describe what you're experiencing, and I'll provide general information. Remember, this is not a diagnosis - always consult a healthcare provider for medical advice.",

    "covid-19":
      "For COVID-19 information:\n- Common symptoms: fever, cough, fatigue, loss of taste/smell\n- If you suspect infection, please isolate and contact healthcare providers\n- We offer COVID-19 testing and vaccination services\n- For the latest guidelines, visit our COVID-19 resource page",

    diabetes:
      "Diabetes management information:\n- Regular blood sugar monitoring is essential\n- Maintain a balanced diet low in refined sugars\n- Exercise regularly as recommended by your doctor\n- Keep all medical appointments for check-ups\n- We offer diabetes education programs and support groups",

    hypertension:
      "Hypertension (high blood pressure) information:\n- Monitor your blood pressure regularly\n- Reduce salt intake and follow a heart-healthy diet\n- Exercise regularly and manage stress\n- Take prescribed medications as directed\n- We offer hypertension screening and management programs",

    "mental health":
      "Mental health support:\n- We offer counseling services for anxiety, depression, and stress\n- Our mental health professionals are available for telemedicine consultations\n- We have support groups for various mental health conditions\n- In crisis? Call our 24/7 mental health helpline: 1800-MENTAL-HEALTH",

    pregnancy:
      "Pregnancy care information:\n- We offer prenatal care services\n- Schedule regular check-ups with our obstetricians\n- We provide pregnancy nutrition guidance\n- Our facilities include ultrasound and other diagnostic services\n- We offer childbirth classes and lactation consulting",

    vaccination:
      "Vaccination services:\n- We provide routine childhood vaccinations\n- COVID-19, flu, and other adult vaccines are available\n- Our vaccination schedule follows CDC guidelines\n- Bring your vaccination record to appointments\n- We offer vaccination reminders via text or email",

    nutrition:
      "Nutrition guidance:\n- We offer dietary counseling for various health conditions\n- Our nutritionists can help with meal planning\n- We provide guidance for special diets (diabetic, heart-healthy, etc.)\n- We offer nutrition workshops and cooking demonstrations",

    "elderly care":
      "Elderly care services:\n- We offer specialized geriatric care\n- Home health services are available for seniors\n- We provide medication management assistance\n- Our facilities are accessible for elderly patients\n- We offer transportation services for medical appointments",

    pediatric:
      "Pediatric care information:\n- We have specialized pediatricians on staff\n- Well-child visits and vaccinations are available\n- We offer developmental screening services\n- Our facilities are child-friendly with play areas\n- We provide parenting resources and support",

    dental:
      "Dental care services:\n- We offer basic dental care and cleanings\n- Emergency dental services are available\n- We provide dental education and preventive care\n- Our dental team visits rural areas monthly\n- We accept various insurance plans for dental care",

    pharmacy:
      "Pharmacy services:\n- We have an on-site pharmacy for prescriptions\n- Medication delivery is available for rural areas\n- Our pharmacists provide medication counseling\n- We offer medication reminder services\n- We can coordinate with your insurance for medication coverage",

    telemedicine:
      "Telemedicine services:\n- We offer virtual consultations with our doctors\n- You can schedule appointments through our website or app\n- Our telemedicine platform is secure and HIPAA-compliant\n- We provide follow-up care via telemedicine\n- Technical support is available for telemedicine sessions",

    cost: "Healthcare costs and payment options:\n- We offer sliding scale fees based on income\n- Payment plans are available for medical expenses\n- We accept various insurance plans\n- Government programs and subsidies may be available\n- Our financial counselors can help you understand costs and options",

    transportation:
      "Medical transportation services:\n- We offer transportation to and from medical appointments\n- Our service covers rural areas within a 50-mile radius\n- Transportation can be scheduled in advance\n- We accommodate wheelchairs and medical equipment\n- This service is free for eligible patients",

    // Symptom-based prompts
    "chest pain":
      "IMPORTANT: Chest pain can be a sign of a serious condition like a heart attack. Please seek immediate medical attention by calling emergency services (911) or our emergency helpline at 1800-HEALTH-CARE. Do not delay. If you're experiencing chest pain along with shortness of breath, sweating, or pain radiating to your arm or jaw, these are signs that require immediate emergency care.",

    "heart attack":
      "If you think you're having a heart attack, call emergency services (911) or our emergency helpline at 1800-HEALTH-CARE IMMEDIATELY. Common symptoms include chest pain or discomfort, shortness of breath, pain in one or both arms, back, neck, jaw, or stomach, breaking out in a cold sweat, nausea, or lightheadedness. Do not drive yourself to the hospital.",

    fever:
      "Fever information:\n- A fever is generally a temperature of 100.4°F (38°C) or higher\n- Rest, stay hydrated, and monitor your temperature\n- Over-the-counter medications like acetaminophen can help\n- Seek medical attention if:\n  * Fever is 103°F (39.4°C) or higher\n  * Fever lasts more than 3 days\n  * You have other concerning symptoms\n- We offer telemedicine consultations for fever assessment",

    headache:
      "Headache information:\n- Rest in a quiet, dark room\n- Stay hydrated and avoid caffeine\n- Over-the-counter pain relievers may help\n- Seek immediate medical attention if:\n  * Headache is severe and sudden\n  * Accompanied by confusion, difficulty speaking, or vision changes\n  * Follows a head injury\n  * Is the worst headache you've ever experienced\n- Our providers can help diagnose and treat chronic headaches",

    cough:
      "Cough information:\n- Stay hydrated with water and warm liquids\n- Honey may help soothe cough (not for children under 1 year)\n- Use a humidifier to moisten the air\n- Seek medical attention if:\n  * Coughing up blood\n  * Difficulty breathing\n  * Cough lasts more than 3 weeks\n  * Accompanied by fever or weight loss\n- We offer telemedicine consultations for cough assessment",

    "stomach pain":
      "Stomach pain information:\n- Rest and avoid solid foods for a few hours\n- Sip clear liquids like water or broth\n- Avoid dairy, caffeine, alcohol, and spicy foods\n- Seek immediate medical attention if:\n  * Pain is severe and sudden\n  * Accompanied by bloody stools\n  * You can't keep down liquids\n  * Pain is in the lower right abdomen (possible appendicitis)\n- Our providers can help diagnose and treat digestive issues",

    "back pain":
      "Back pain information:\n- Rest for 1-2 days, but avoid prolonged bed rest\n- Apply ice for the first 48 hours, then heat\n- Over-the-counter pain relievers may help\n- Seek immediate medical attention if:\n  * Pain is severe and sudden\n  * Accompanied by numbness, tingling, or weakness\n  * Follows an injury or fall\n  * Includes loss of bowel or bladder control\n- We offer physical therapy and pain management services",

    allergies:
      "Allergy information:\n- Identify and avoid triggers when possible\n- Over-the-counter antihistamines may help\n- Use saline nasal spray for congestion\n- Seek medical attention if:\n  * Difficulty breathing or wheezing\n  * Swelling of face, lips, or tongue\n  * Severe reactions to insect stings or foods\n- We offer allergy testing and treatment services",

    rash: "Rash information:\n- Keep the area clean and dry\n- Avoid scratching to prevent infection\n- Use mild, fragrance-free moisturizers\n- Seek medical attention if:\n  * Rash is painful or severe\n  * Accompanied by fever\n  * Spreads rapidly\n  * Appears after starting a new medication\n- Our providers can help diagnose and treat various skin conditions",

    anxiety:
      "Anxiety information:\n- Practice deep breathing exercises\n- Try grounding techniques (5-4-3-2-1 method)\n- Limit caffeine and alcohol\n- Seek immediate help if having thoughts of self-harm\n- We offer mental health counseling and support groups\n- Our mental health professionals are available for telemedicine consultations\n- In crisis? Call our 24/7 mental health helpline: 1800-MENTAL-HEALTH",

    default:
      "I apologize, but I didn't understand that. Could you please rephrase or try one of these topics:\n- Services\n- Emergency\n- Appointment\n- Location\n- Insurance\n- Symptoms\n- COVID-19\n- Diabetes\n- Hypertension\n- Mental Health\n- Pregnancy\n- Vaccination\n- Nutrition\n- Elderly Care\n- Pediatric\n- Dental\n- Pharmacy\n- Telemedicine\n- Cost\n- Transportation\n\nOr describe your symptoms (e.g., 'chest pain', 'fever', 'headache', etc.)",
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: "user", content: inputMessage }];
    setMessages(newMessages);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const response =
        demoResponses[inputMessage.toLowerCase()] || demoResponses.default;
      setMessages([...newMessages, { type: "bot", content: response }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-xl" />
                <h3 className="font-semibold">Healthcare Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200"
              >
                <FaTimes />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
