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
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            أسعار مناسبة للجميع
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-gray-600"
          >
            اختر الباقة التي تناسب احتياجاتك
          </motion.p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className={`relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col ${
                plan.featured ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-6 -translate-y-1/2 transform rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                  الأكثر شعبية
                </span>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="mr-1 text-xl font-semibold">ج.م</span>
                  <span className="mr-1 text-xl text-gray-500">
                    / {plan.unit}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="mr-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/booking"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.featured
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "text-blue-600 bg-blue-50 hover:bg-blue-100"
                }`}
              >
                احجز الآن
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white rounded-lg shadow-sm px-6 py-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            معلومات إضافية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                التأمين والضمان
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>• تأمين ضد الحوادث والسرقة</li>
                <li>• ضمان على البطارية والأعطال الفنية</li>
                <li>• تغطية المساعدة على الطريق</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                شروط الاستخدام
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>• يجب أن يكون العمر 18 عاماً أو أكثر</li>
                <li>• رخصة قيادة سارية</li>
                <li>• بطاقة هوية سارية</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing;
