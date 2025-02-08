import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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
    { id: 1, name: "محطة  السلام", address: "" },
    { id: 2, name: "محطة بورتوفيق", address: "" },
    {
      id: 3,
      name: "محطة السويس",
      address: "",
    },
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
    const basePrice = formData.rentalType === "hourly" ? 50 : 25;
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
                {/* Pickup Station */}
                <div>
                  <label
                    htmlFor="pickupStation"
                    className="block text-sm font-bold dark:text-gray-200 text-gray-700 "
                  >
                    محطة الاستلام
                  </label>

                  <select
                    id="pickupStation"
                    name="pickupStation"
                    value={formData.pickupStation}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">اختر محطة</option>
                    {stations.map((station) => (
                      <option key={station.id} value={station.id}>
                        {station.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dropoff Station */}
                <div>
                  <label
                    htmlFor="dropoffStation"
                    className="block text-sm font-bold dark:text-gray-200 text-gray-700 "
                  >
                    محطة التسليم
                  </label>
                  <select
                    id="dropoffStation"
                    name="dropoffStation"
                    value={formData.dropoffStation}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">اختر محطة</option>
                    {stations.map((station) => (
                      <option key={station.id} value={station.id}>
                        {station.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rental Type */}
                <div>
                  <label
                    htmlFor="rentalType"
                    className="block text-sm  text-gray-700 font-bold dark:text-gray-200"
                  >
                    نوع التأجير
                  </label>
                  <select
                    id="rentalType"
                    name="rentalType"
                    value={formData.rentalType}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="hourly">بالساعة</option>
                    <option value="kilometer">بالكيلومتر</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label
                    htmlFor="duration"
                    className="block text-sm font-bold dark:text-gray-200 text-gray-700 "
                  >
                    {formData.rentalType === "hourly"
                      ? "عدد الساعات"
                      : "عدد الكيلومترات"}
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    min="1"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold dark:text-gray-200 text-gray-700 "
                  >
                    التاريخ
                  </label>

                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Time */}
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-bold dark:text-gray-200 text-gray-700 "
                  >
                    الوقت
                  </label>

                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
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
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                    <div className="relative rounded-lg overflow-hidden border-2 border-blue-500 dark:border-blue-400">
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
                    ? "السعر 50 جنيه مصري للساعة"
                    : "السعر 25 جنيه مصري للكيلومتر"}
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                  className={`h-6 w-6 transform transition-transform ${
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
                      className="h-6 w-6 text-blue-500"
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
                      className="h-6 w-6 text-blue-500"
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
                      className="h-6 w-6 text-blue-500"
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
