import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Stations() {
  const stations = [
    {
      id: 1,
      name: "محطة وسط البلد",
      address: "ميدان التحرير، القاهرة",
      workingHours: "24 ساعة",
      availableScooters: 15,
      features: ["موقف سيارات", "صيانة", "شحن بطاريات", "كاميرات مراقبة"],
      image: "/stations/downtown.jpg",
    },
    {
      id: 2,
      name: "محطة المعادي",
      address: "شارع 9، المعادي، القاهرة",
      workingHours: "8 صباحاً - 11 مساءً",
      availableScooters: 10,
      features: ["موقف سيارات", "صيانة", "شحن بطاريات", "استراحة"],
      image: "/stations/maadi.jpg",
    },
    {
      id: 3,
      name: "محطة مدينة نصر",
      address: "شارع عباس العقاد، مدينة نصر، القاهرة",
      workingHours: "8 صباحاً - 12 مساءً",
      availableScooters: 12,
      features: ["موقف سيارات", "صيانة", "شحن بطاريات", "كافيتريا"],
      image: "/stations/nasr-city.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            محطاتنا
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            اعثر على أقرب محطة إليك واحجز سكوتر كهربائي
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stations.map((station, index) => (
            <motion.div
              key={station.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={station.image}
                  alt={station.name}
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {station.availableScooters} سكوتر متاح
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {station.name}
                </h3>
                <p className="mt-2 text-gray-600">{station.address}</p>

                <div className="mt-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="mr-2">{station.workingHours}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    المميزات المتوفرة:
                  </h4>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {station.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="h-4 w-4 text-blue-500 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link
                    to="/booking"
                    className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    احجز من هذه المحطة
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white rounded-lg shadow-sm px-6 py-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            معلومات مهمة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                قواعد استلام السكوتر
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>• إحضار بطاقة الهوية الشخصية</li>
                <li>• توقيع عقد الإيجار</li>
                <li>• دفع التأمين المسترد</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                قواعد تسليم السكوتر
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>• فحص حالة السكوتر</li>
                <li>• التأكد من شحن البطارية</li>
                <li>• استرداد مبلغ التأمين</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stations;
