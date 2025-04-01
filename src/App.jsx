import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Telemedicine from "./pages/Telemedicine";
import Resources from "./pages/Resources";
import Emergency from "./pages/Emergency";
import BookAppointment from "./pages/BookAppointment";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/telemedicine" element={<Telemedicine />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
