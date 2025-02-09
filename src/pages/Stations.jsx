import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Stations() {
  const stations = [
    {
      id: 1,
      name: "محطة السلام",
      address: "شارع السلام، حي السلام",
      image: "/stations/El_salam.jpg",
      availableScooters: 8,
      workingHours: "24/7",
    },
    {
      id: 2,
      name: "محطة بورتوفيق",
      address: "شارع 23 يوليو، بورتوفيق",
      image: "/stations/PortTawifq.png",
      availableScooters: 5,
      workingHours: "24/7",
    },
    {
      id: 3,
      name: "محطة حديقة فرنسا",
      address: "شارع الجيش، الأربعين",
      image: "/stations/FranceGraden.png",
      availableScooters: 12,
      workingHours: "24/7",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            محطاتنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            اعثر على أقرب محطة إليك
          </motion.p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stations.map((station, index) => (
            <motion.div
              key={station.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f99026] text-white">
                    {station.availableScooters} سكوتر متاح
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {station.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {station.address}
                </p>
                <div className="mt-4 flex items-center text-[#f99026]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="mr-2 text-sm font-medium">
                    ساعات العمل: {station.workingHours}
                  </span>
                </div>
                <Link
                  to="/booking"
                  className="mt-6 block w-full bg-[#f99026] text-white py-2 px-4 rounded-md hover:bg-[#e07d15] transition-colors duration-200 text-center"
                >
                  احجز من هذه المحطة
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm px-6 py-8"
        >
          <h3 className="text-2xl  text-gray-900 mb-6 dark:text-white font-bold">
            معلومات مهمة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
                قواعد استلام السكوتر
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• إحضار بطاقة الهوية الشخصية</li>
                <li>• توقيع عقد الإيجار</li>
                <li>• دفع التأمين المسترد</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
                قواعد تسليم السكوتر
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• فحص حالة السكوتر</li>
                <li>• التأكد من شحن البطارية</li>
                <li>• وضع الاسكوتر في مكان الشحن المخصص له </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stations;
