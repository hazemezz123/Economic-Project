import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Pricing from "./pages/Pricing";
import Stations from "./pages/Stations";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Navbar user={user} setUser={setUser} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking user={user} />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/stations" element={<Stations />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route
                path="/register"
                element={<Register setUser={setUser} />}
              />
              <Route path="/dashboard" element={<Dashboard user={user} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
