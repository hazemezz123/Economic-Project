import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Pricing() {
  const plans = [
    {
      name: "الباقة الأساسية",
      description: "مناسبة للرحلات القصيرة",
      price: "50",
      unit: "ساعة",
      features: ["سكوتر كهربائي حديث", "تأمين أساسي", "خوذة واقية", "دعم فني"],
    },
    {
      name: "باقة المسافات",
      description: "مناسبة للرحلات الطويلة",
      price: "25",
      unit: "كم",
      features: [
        "سكوتر كهربائي حديث",
        "تأمين شامل",
        "خوذة واقية",
        "دعم فني على مدار الساعة",
        "خدمة المساعدة على الطريق",
      ],
      featured: true,
    },
    {
      name: "الباقة الشهرية",
      description: "مناسبة للاستخدام المنتظم",
      price: "1000",
      unit: "شهر",
      features: [
        "سكوتر كهربائي حديث",
        "تأمين شامل",
        "خوذة واقية",
        "دعم فني على مدار الساعة",
        "خدمة المساعدة على الطريق",
        "صيانة مجانية",
        "استبدال البطارية مجاناً",
      ],
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
            خطط الأسعار المرنة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            اختر الخطة التي تناسب احتياجاتك
          </motion.p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Hourly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  بالساعة
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-[#f99026]">
                    50
                  </span>
                  <span className="mr-2 text-xl font-medium text-gray-500 dark:text-gray-300 self-end">
                    جنيه / ساعة
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#f99026]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="mr-3 text-gray-600 dark:text-gray-300">
                      مرونة في الوقت
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#f99026]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="mr-3 text-gray-600 dark:text-gray-300">
                      تأمين شامل
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/booking"
                    className="block w-full bg-[#f99026] text-white text-center px-4 py-2 rounded-md hover:bg-[#e07d15] transition-colors duration-200"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Per Kilometer Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-[#f99026]"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  بالكيلومتر
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-[#f99026]">
                    25
                  </span>
                  <span className="mr-2 text-xl font-medium text-gray-500 dark:text-gray-300 self-end">
                    جنيه / كم
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#f99026]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="mr-3 text-gray-600 dark:text-gray-300">
                      ادفع حسب المسافة
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#f99026]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="mr-3 text-gray-600 dark:text-gray-300">
                      تأمين شامل
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/booking"
                    className="block w-full bg-[#f99026] text-white text-center px-4 py-2 rounded-md hover:bg-[#e07d15] transition-colors duration-200"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  اشتراك شهري
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-[#f99026]">
                    1000
                  </span>
                  <span className="mr-2 text-xl font-medium text-gray-500 dark:text-gray-300 self-end">
                    جنيه / شهر
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#f99026]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="mr-3 text-gray-600 dark:text-gray-300">
                      استخدام غير محدود
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#f99026]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="mr-3 text-gray-600 dark:text-gray-300">
                      تأمين شامل
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/booking"
                    className="block w-full bg-[#f99026] text-white text-center px-4 py-2 rounded-md hover:bg-[#e07d15] transition-colors duration-200"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
