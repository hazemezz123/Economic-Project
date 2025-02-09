import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FormSelect from "../components/FormSelect";
import FormInput from "../components/FormInput";

function Booking({ user }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    pickupStation: "",
    dropoffStation: "",
    rentalType: "hourly",
    duration: 1,
    date: "",
    time: "",
  });
  const [idCardImage, setIdCardImage] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const stations = [
    {
      id: 1,
      name: "محطة السلام",
      address: "شارع السلام، حي السلام",
    },
    {
      id: 2,
      name: "محطة بورتوفيق",
      address: "شارع 23 يوليو، بورتوفيق",
    },
    {
      id: 3,
      name: "محطة حديقة فرنسا",
      address: "شارع الجيش، الأربعين",
    },
  ];

  const stationOptions = stations.map((station) => ({
    value: station.id,
    label: station.name,
  }));

  const rentalTypeOptions = [
    { value: "hourly", label: "بالساعة" },
    { value: "kilometer", label: "بالكيلومتر" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdCardImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const calculatePrice = () => {
    const basePrice = formData.rentalType === "hourly" ? 20 : 2;
    return basePrice * formData.duration;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (!idCardImage) {
      alert("يرجى تحميل صورة البطاقة الشخصية");
      return;
    }

    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      id: Date.now(),
      userId: user.id,
      ...formData,
      idCardImage,
      price: calculatePrice(),
      status: "pending",
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
              احجز سكوتر كهربائي
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-800 shadow rounded-lg p-6"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormSelect
                  label="محطة الاستلام"
                  name="pickupStation"
                  value={formData.pickupStation}
                  onChange={handleInputChange}
                  required
                  options={stationOptions}
                  placeholder="اختر محطة"
                />

                <FormSelect
                  label="محطة التسليم"
                  name="dropoffStation"
                  value={formData.dropoffStation}
                  onChange={handleInputChange}
                  required
                  options={stationOptions}
                  placeholder="اختر محطة"
                />

                <FormSelect
                  label="نوع الإيجار"
                  name="rentalType"
                  value={formData.rentalType}
                  onChange={handleInputChange}
                  required
                  options={rentalTypeOptions}
                />

                <FormInput
                  label={
                    formData.rentalType === "hourly"
                      ? "عدد الساعات"
                      : "عدد الكيلومترات"
                  }
                  name="duration"
                  type="number"
                  min="1"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                />

                <FormInput
                  label="التاريخ"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />

                <FormInput
                  label="الوقت"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* ID Card Upload Section */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  صورة البطاقة الشخصية
                </label>
                <div className="mt-1 flex flex-col items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCameraClick}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f99026]"
                  >
                    <svg
                      className="mr-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    التقط صورة للبطاقة الشخصية
                  </motion.button>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    يرجى التقاط صورة واضحة للبطاقة الشخصية
                  </p>
                </div>

                {/* Image Preview */}
                {idCardImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4"
                  >
                    <div className="relative rounded-lg overflow-hidden border-2 border-[#f99026] dark:border-[#f99026]">
                      <img
                        src={idCardImage}
                        alt="معاينة البطاقة الشخصية"
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setIdCardImage(null)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Price Calculation */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  السعر المتوقع: {calculatePrice()} جنيه مصري
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {formData.rentalType === "hourly"
                    ? "السعر 20 جنيه مصري للساعة"
                    : "السعر 2 جنيه مصري للكيلومتر"}
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f99026] hover:bg-[#e07d15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f99026] transition-colors duration-200"
                >
                  تأكيد الحجز
                </motion.button>
              </div>
            </form>
            {/* Contact Support Section */}
            <div className="mt-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowSupport(!showSupport)}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  تحتاج مساعدة؟
                </h2>
                <svg
                  className={`h-6 w-6 transform transition-transform dark:text-white ${
                    showSupport ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: showSupport ? "auto" : 0,
                  opacity: showSupport ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-[#f99026]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="mr-2 text-gray-700 dark:text-gray-200">
                      اتصل بنا: +20 123 456 7890
                    </span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-[#f99026]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mr-2 text-gray-700 dark:text-gray-200">
                      البريد الإلكتروني: support@scooter-rental.eg
                    </span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-[#f99026]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    <span className="mr-2 text-gray-700 dark:text-gray-200">
                      الدعم الفوري متاح 24/7
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

Booking.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
};

export default Booking;
