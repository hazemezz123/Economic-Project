import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import ThemeToggle from "./ThemeToggle";

function Navbar({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    setIsMenuOpen(false);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex transition-colors duration-300">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-20"
                src="/Scooter/NativeLogo.svg"
                alt="Scooter Rental"
              />
            </Link>
            <div className="hidden sm:mr-6 sm:flex sm:space-x-8 sm:items-center">
              {/* Desktop Navigation Links */}
              {[
                { to: "/", text: "الرئيسية" },
                { to: "/booking", text: "الحجز" },
                { to: "/pricing", text: "الأسعار" },
                { to: "/stations", text: "المحطات" },
                { to: "/faq", text: "الأسئلة الشائعة" },
                { to: "/about", text: "من نحن ؟" },
              ].map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-900 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex sm:items-center sm:mr-6 space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-4">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/dashboard"
                    className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    لوحة التحكم
                  </Link>
                </motion.div>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-200"
                >
                  تسجيل الخروج
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    تسجيل الدخول
                  </Link>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/register"
                    className="px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors duration-200"
                  >
                    إنشاء حساب
                  </Link>
                </motion.div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-400 hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            <span className="sr-only">القائمة</span>
            <motion.svg
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="sm:hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { to: "/", text: "الرئيسية" },
                { to: "/booking", text: "الحجز" },
                { to: "/pricing", text: "الأسعار" },
                { to: "/stations", text: "المحطات" },
                { to: "/faq", text: "الأسئلة الشائعة" },
                { to: "/about", text: "من نحن ؟" },
              ].map((link) => (
                <motion.div
                  key={link.to}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="px-3 py-2">
                <ThemeToggle />
              </motion.div>

              {user ? (
                <>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      لوحة التحكم
                    </Link>
                  </motion.div>
                  <motion.button
                    variants={itemVariants}
                    onClick={handleLogout}
                    className="w-full text-right px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    تسجيل الخروج
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      تسجيل الدخول
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      إنشاء حساب
                    </Link>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Navbar;
