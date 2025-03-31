import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const languages = {
  en: {
    // Navigation
    services: "Services",
    telemedicine: "Telemedicine",
    resources: "Resources",
    emergency: "Emergency",

    // Home Page
    welcomeTitle: "Healthcare Services for Rural Communities",
    welcomeSubtitle:
      "Quality healthcare within your reach, no matter where you are",
    getStarted: "Explore Services",
    learnMore: "Learn More",

    // Services Page
    servicesTitle: "Our Medical Services",
    servicesDescription:
      "Providing comprehensive healthcare solutions to ensure the well-being of rural communities",
    generalMedicine: "General Medicine",
    generalMedicineDesc: "Regular check-ups and primary healthcare services",
    vaccination: "Vaccination",
    vaccinationDesc: "Essential immunizations for children and adults",
    healthScreening: "Health Screening",
    healthScreeningDesc: "Preventive health check-ups and early detection",
    cardiology: "Cardiology",
    cardiologyDesc: "Basic heart health check-ups and ECG services",
    pediatrics: "Pediatrics",
    pediatricsDesc: "Child healthcare and development monitoring",
    dentalCare: "Dental Care",
    dentalCareDesc: "Basic dental procedures and oral hygiene",
    eyeCare: "Eye Care",
    eyeCareDesc: "Vision testing and basic eye care services",
    mentalHealth: "Mental Health",
    mentalHealthDesc: "Counseling and mental health support",
    availability: "Monday - Saturday",
    timing: "9:00 AM - 5:00 PM",
    bookAppointment: "Book Appointment",

    // Services Page
    servicesPageTitle: "Our Services",
    servicesPageDescription:
      "We provide comprehensive healthcare solutions designed specifically for rural communities",
    emergencyCare: "24/7 Emergency Care",
    emergencyCareDesc:
      "Immediate medical attention available round the clock for critical situations",
    telemedicineDesc:
      "Connect with qualified doctors remotely via video calls from your home",
    mobileClinics: "Mobile Clinics",
    mobileClinicsDesc:
      "Regular healthcare services that come directly to your village",
    hospitalDirectory: "Hospital Directory",
    hospitalDirectoryDesc:
      "Comprehensive list of nearest hospitals and healthcare centers",

    // Emergency Page
    emergencyTitle: "Need Immediate Help?",
    emergencySubtitle: "Our emergency response team is available 24/7",
    callEmergency: "Call 108",

    // Common
    contactUs: "Contact Us",
    aboutUs: "About Us",
    location: "Location",
    phone: "Phone",
    email: "Email",
    address: "Address",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    search: "Search",
    menu: "Menu",
    close: "Close",

    // Telemedicine Page
    virtualHealthcare: "Virtual Healthcare",
    virtualHealthcareSubtitle:
      "Connect with qualified healthcare professionals from the comfort of your home",
    chooseSpecialist: "Choose Specialist",
    chooseSpecialistDesc: "Select from our experienced medical professionals",
    bookTimeSlot: "Book Time Slot",
    bookTimeSlotDesc: "Select your preferred date and time",
    videoConsultation: "Video Consultation",
    videoConsultationDesc: "Connect with your doctor via video call",
    availableDoctors: "Available Doctors",
    scheduleAppointment: "Schedule Appointment",
    selectDate: "Select Date",
    selectTime: "Select Time",
    chooseTimeSlot: "Choose a time slot",
    scheduleConsultation: "Schedule Consultation",
    experience: "experience",

    // Resources Page
    healthResources: "Health Resources",
    healthResourcesSubtitle:
      "Access valuable healthcare information and guides",
    healthTips: "Health Tips",
    healthTipsDesc: "Daily tips for maintaining good health",
    preventiveCare: "Preventive Care",
    preventiveCareDesc: "Learn about preventive healthcare measures",
    nutritionGuide: "Nutrition Guide",
    nutritionGuideDesc: "Healthy eating habits and dietary recommendations",
    exerciseTips: "Exercise Tips",
    exerciseTipsDesc: "Stay active with these exercise guidelines",

    // Emergency Page
    emergencyServices: "Emergency Services",
    emergencyServicesSubtitle:
      "24/7 emergency medical assistance at your service",
    ambulanceService: "Ambulance Service",
    ambulanceServiceDesc: "Quick response emergency medical transport",
    firstAid: "First Aid",
    firstAidDesc: "Essential first aid information and procedures",
    emergencyContacts: "Emergency Contacts",
    emergencyContactsDesc: "Important emergency contact numbers",
    nearestHospital: "Nearest Hospital",
    nearestHospitalDesc: "Find the closest hospital to your location",
  },
  es: {
    // Navigation
    services: "Servicios",
    telemedicine: "Telemedicina",
    resources: "Recursos",
    emergency: "Emergencia",

    // Home Page
    welcomeTitle: "Servicios de Salud para Comunidades Rurales",
    welcomeSubtitle:
      "Atención médica de calidad al alcance de todos, sin importar dónde estés",
    getStarted: "Explorar Servicios",
    learnMore: "Más Información",

    // Services Page
    servicesTitle: "Nuestros Servicios Médicos",
    servicesDescription:
      "Proporcionando soluciones integrales de salud para asegurar el bienestar de las comunidades rurales",
    generalMedicine: "Medicina General",
    generalMedicineDesc: "Chequeos regulares y servicios de atención primaria",
    vaccination: "Vacunación",
    vaccinationDesc: "Inmunizaciones esenciales para niños y adultos",
    healthScreening: "Examen de Salud",
    healthScreeningDesc: "Chequeos preventivos y detección temprana",
    cardiology: "Cardiología",
    cardiologyDesc: "Chequeos básicos de salud cardíaca y servicios de ECG",
    pediatrics: "Pediatría",
    pediatricsDesc: "Atención médica infantil y seguimiento del desarrollo",
    dentalCare: "Cuidado Dental",
    dentalCareDesc: "Procedimientos dentales básicos e higiene oral",
    eyeCare: "Cuidado Ocular",
    eyeCareDesc: "Pruebas de visión y servicios básicos de cuidado ocular",
    mentalHealth: "Salud Mental",
    mentalHealthDesc: "Asesoramiento y apoyo de salud mental",
    availability: "Lunes - Sábado",
    timing: "9:00 AM - 5:00 PM",
    bookAppointment: "Reservar Cita",

    // Services Page
    servicesPageTitle: "Nuestros Servicios",
    servicesPageDescription:
      "Proporcionamos soluciones integrales de salud diseñadas específicamente para comunidades rurales",
    emergencyCare: "Atención de Emergencia 24/7",
    emergencyCareDesc:
      "Atención médica inmediata disponible las 24 horas para situaciones críticas",
    telemedicineDesc:
      "Conéctese con médicos calificados a través de videollamadas desde su hogar",
    mobileClinics: "Clínicas Móviles",
    mobileClinicsDesc:
      "Servicios de salud regulares que llegan directamente a su aldea",
    hospitalDirectory: "Directorio de Hospitales",
    hospitalDirectoryDesc:
      "Lista completa de hospitales y centros de salud más cercanos",

    // Emergency Page
    emergencyTitle: "¿Necesita Ayuda Inmediata?",
    emergencySubtitle:
      "Nuestro equipo de respuesta de emergencia está disponible 24/7",
    callEmergency: "Llamar al 108",

    // Common
    contactUs: "Contáctanos",
    aboutUs: "Sobre Nosotros",
    location: "Ubicación",
    phone: "Teléfono",
    email: "Correo",
    address: "Dirección",
    submit: "Enviar",
    cancel: "Cancelar",
    save: "Guardar",
    delete: "Eliminar",
    edit: "Editar",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    search: "Buscar",
    menu: "Menú",
    close: "Cerrar",

    // Telemedicine Page
    virtualHealthcare: "Atención Médica Virtual",
    virtualHealthcareSubtitle:
      "Conéctese con profesionales de la salud calificados desde la comodidad de su hogar",
    chooseSpecialist: "Elegir Especialista",
    chooseSpecialistDesc:
      "Seleccione entre nuestros profesionales médicos experimentados",
    bookTimeSlot: "Reservar Horario",
    bookTimeSlotDesc: "Seleccione su fecha y hora preferida",
    videoConsultation: "Consulta por Video",
    videoConsultationDesc: "Conéctese con su médico a través de videollamada",
    availableDoctors: "Médicos Disponibles",
    scheduleAppointment: "Programar Cita",
    selectDate: "Seleccionar Fecha",
    selectTime: "Seleccionar Hora",
    chooseTimeSlot: "Elegir horario",
    scheduleConsultation: "Programar Consulta",
    experience: "años de experiencia",

    // Resources Page
    healthResources: "Recursos de Salud",
    healthResourcesSubtitle:
      "Acceda a información y guías valiosas sobre salud",
    healthTips: "Consejos de Salud",
    healthTipsDesc: "Consejos diarios para mantener una buena salud",
    preventiveCare: "Cuidado Preventivo",
    preventiveCareDesc: "Aprenda sobre medidas preventivas de salud",
    nutritionGuide: "Guía de Nutrición",
    nutritionGuideDesc:
      "Hábitos alimenticios saludables y recomendaciones dietéticas",
    exerciseTips: "Consejos de Ejercicio",
    exerciseTipsDesc: "Manténgase activo con estas pautas de ejercicio",

    // Emergency Page
    emergencyServices: "Servicios de Emergencia",
    emergencyServicesSubtitle:
      "Asistencia médica de emergencia 24/7 a su servicio",
    ambulanceService: "Servicio de Ambulancia",
    ambulanceServiceDesc: "Transporte médico de emergencia de respuesta rápida",
    firstAid: "Primeros Auxilios",
    firstAidDesc:
      "Información y procedimientos esenciales de primeros auxilios",
    emergencyContacts: "Contactos de Emergencia",
    emergencyContactsDesc: "Números de contacto de emergencia importantes",
    nearestHospital: "Hospital más Cercano",
    nearestHospitalDesc: "Encuentre el hospital más cercano a su ubicación",
  },
  hi: {
    // Navigation
    services: "सेवाएं",
    telemedicine: "टेलीमेडिसिन",
    resources: "संसाधन",
    emergency: "आपातकालीन",

    // Home Page
    welcomeTitle: "ग्रामीण समुदायों के लिए स्वास्थ्य सेवाएं",
    welcomeSubtitle:
      "गुणवत्तापूर्ण स्वास्थ्य सेवाएं आपकी पहुंच में, चाहे आप कहीं भी हों",
    getStarted: "सेवाएं देखें",
    learnMore: "और जानें",

    // Services Page
    servicesTitle: "हमारी चिकित्सा सेवाएं",
    servicesDescription:
      "ग्रामीण समुदायों के कल्याण को सुनिश्चित करने के लिए व्यापक स्वास्थ्य समाधान प्रदान करना",
    generalMedicine: "सामान्य चिकित्सा",
    generalMedicineDesc: "नियमित जांच और प्राथमिक स्वास्थ्य सेवाएं",
    vaccination: "टीकाकरण",
    vaccinationDesc: "बच्चों और वयस्कों के लिए आवश्यक टीके",
    healthScreening: "स्वास्थ्य जांच",
    healthScreeningDesc: "निवारक स्वास्थ्य जांच और शीघ्र पहचान",
    cardiology: "हृदय रोग विज्ञान",
    cardiologyDesc: "बुनियादी हृदय स्वास्थ्य जांच और ईसीजी सेवाएं",
    pediatrics: "बाल रोग",
    pediatricsDesc: "बाल स्वास्थ्य देखभाल और विकास निगरानी",
    dentalCare: "दंत चिकित्सा",
    dentalCareDesc: "बुनियादी दंत प्रक्रियाएं और मौखिक स्वच्छता",
    eyeCare: "नेत्र देखभाल",
    eyeCareDesc: "दृष्टि परीक्षण और बुनियादी नेत्र देखभाल सेवाएं",
    mentalHealth: "मानसिक स्वास्थ्य",
    mentalHealthDesc: "परामर्श और मानसिक स्वास्थ्य सहायता",
    availability: "सोमवार - शनिवार",
    timing: "सुबह 9:00 - शाम 5:00",
    bookAppointment: "अपॉइंटमेंट बुक करें",

    // Services Page
    servicesPageTitle: "हमारी सेवाएं",
    servicesPageDescription:
      "हम ग्रामीण समुदायों के लिए विशेष रूप से डिज़ाइन किए गए व्यापक स्वास्थ्य समाधान प्रदान करते हैं",
    emergencyCare: "24/7 Emergency Care",
    emergencyCareDesc:
      "Immediate medical attention available round the clock for critical situations",
    telemedicineDesc:
      "Connect with qualified doctors remotely via video calls from your home",
    mobileClinics: "Mobile Clinics",
    mobileClinicsDesc:
      "Regular healthcare services that come directly to your village",
    hospitalDirectory: "अस्पताल निर्देशिका",
    hospitalDirectoryDesc:
      "निकटतम अस्पतालों और स्वास्थ्य केंद्रों की व्यापक सूची",

    // Emergency Page
    emergencyTitle: "तत्काल सहायता चाहिए?",
    emergencySubtitle: "हमारी आपातकालीन प्रतिक्रिया टीम 24/7 उपलब्ध है",
    callEmergency: "108 पर कॉल करें",

    // Common
    contactUs: "संपर्क करें",
    aboutUs: "हमारे बारे में",
    location: "स्थान",
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    submit: "जमा करें",
    cancel: "रद्द करें",
    save: "सहेजें",
    delete: "हटाएं",
    edit: "संपादित करें",
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    success: "सफल",
    search: "खोजें",
    menu: "मेनू",
    close: "बंद करें",

    // Telemedicine Page
    virtualHealthcare: "वर्चुअल स्वास्थ्य सेवा",
    virtualHealthcareSubtitle:
      "अपने घर की सुविधा से योग्य स्वास्थ्य पेशेवरों से जुड़ें",
    chooseSpecialist: "विशेषज्ञ चुनें",
    chooseSpecialistDesc: "हमारे अनुभवी चिकित्सा पेशेवरों में से चुनें",
    bookTimeSlot: "समय स्लॉट बुक करें",
    bookTimeSlotDesc: "अपनी पसंदीदा तारीख और समय चुनें",
    videoConsultation: "वीडियो परामर्श",
    videoConsultationDesc: "वीडियो कॉल के माध्यम से अपने डॉक्टर से जुड़ें",
    availableDoctors: "उपलब्ध डॉक्टर",
    scheduleAppointment: "अपॉइंटमेंट शेड्यूल करें",
    selectDate: "तारीख चुनें",
    selectTime: "समय चुनें",
    chooseTimeSlot: "समय स्लॉट चुनें",
    scheduleConsultation: "परामर्श शेड्यूल करें",
    experience: "वर्षों का अनुभव",

    // Resources Page
    healthResources: "स्वास्थ्य संसाधन",
    healthResourcesSubtitle:
      "मूल्यवान स्वास्थ्य जानकारी और मार्गदर्शिकाओं तक पहुंच",
    healthTips: "स्वास्थ्य सुझाव",
    healthTipsDesc: "अच्छा स्वास्थ्य बनाए रखने के लिए दैनिक सुझाव",
    preventiveCare: "निवारक देखभाल",
    preventiveCareDesc: "निवारक स्वास्थ्य उपायों के बारे में जानें",
    nutritionGuide: "पोषण मार्गदर्शिका",
    nutritionGuideDesc: "स्वस्थ खान-पान की आदतें और आहार संबंधी सुझाव",
    exerciseTips: "व्यायाम सुझाव",
    exerciseTipsDesc: "इन व्यायाम दिशानिर्देशों के साथ सक्रिय रहें",

    // Emergency Page
    emergencyServices: "आपातकालीन सेवाएं",
    emergencyServicesSubtitle: "24/7 आपातकालीन चिकित्सा सहायता आपकी सेवा में",
    ambulanceService: "एम्बुलेंस सेवा",
    ambulanceServiceDesc: "त्वरित प्रतिक्रिया आपातकालीन चिकित्सा परिवहन",
    firstAid: "प्राथमिक चिकित्सा",
    firstAidDesc: "आवश्यक प्राथमिक चिकित्सा जानकारी और प्रक्रियाएं",
    emergencyContacts: "आपातकालीन संपर्क",
    emergencyContactsDesc: "महत्वपूर्ण आपातकालीन संपर्क नंबर",
    nearestHospital: "निकटतम अस्पताल",
    nearestHospitalDesc: "अपने स्थान के निकटतम अस्पताल का पता लगाएं",
  },
};

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("en");

  const toggleLanguage = () => {
    const languages = ["en", "es", "hi"];
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentLang(languages[nextIndex]);
  };

  return (
    <LanguageContext.Provider
      value={{ currentLang, toggleLanguage, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
