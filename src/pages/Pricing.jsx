import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Pricing() {
  const plans = [
    {
      name: "الباقة بالساعة",
      description: "مناسبة للرحلات القصيرة",
      price: "20",
      unit: "ساعة",
      features: ["مرونة في الوقت", "تأمين شامل", "خوذة واقية"],
    },
    {
      name: "الباقة بالكيلومتر",
      description: "ادفع حسب المسافة",
      price: "2",
      unit: "كم",
      features: ["ادفع حسب المسافة", "تأمين شامل", "خوذة واقية"],
      featured: true,
    },
    {
      name: "الباقة اليومية",
      description: "مناسبة للاستخدام المنتظم",
      price: "75",
      unit: "يومي",
      features: ["استخدام غير محدود", "تأمين شامل", "خوذة واقية"],
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
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                  plan.featured ? "border-2 border-[#f99026]" : ""
                }`}
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-[#f99026]">
                      {plan.price}
                    </span>
                    <span className="mr-2 text-xl font-medium text-gray-500 dark:text-gray-300 self-end">
                      جنيه / {plan.unit}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
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
                          {feature}
                        </span>
                      </li>
                    ))}
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
            ))}
          </div>
        </div>

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            معلومات إضافية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                التأمين والضمان
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#f99026] ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  تأمين ضد الحوادث والسرقة
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#f99026] ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  ضمان على البطارية والأعطال الفنية
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                شروط الاستخدام
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#f99026] ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  يجب أن يكون العمر 16 عاماً أو أكثر
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-[#f99026] ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  بطاقة هوية سارية
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
