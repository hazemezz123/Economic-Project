import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with Dark Overlay */}
      <div className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/LandingImg.png"
            alt="Electric Scooter"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center md:text-right w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-tight"
              >
                <span className="block">استأجر سكوتر كهربائي</span>
                <span className="block text-[#f99026]">في أي وقت وأي مكان</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                اكتشف حرية التنقل مع خدمة تأجير السكوتر الكهربائي. وسيلة نقل
                صديقة للبيئة وفعالة من حيث التكلفة.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-end"
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/booking"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f99026] hover:bg-[#e07d15] md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    احجز الآن
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:mr-3">
                  <Link
                    to="/pricing"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-[#f99026] text-base font-medium rounded-md text-white hover:bg-[#f99026] hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    تعرف على الأسعار
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              لماذا تختار خدمتنا؟
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              نقدم لك تجربة تنقل فريدة مع مجموعة من المميزات الحصرية
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <motion.div whileHover={{ scale: 1.05 }} className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 h-full border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#f99026] rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      سرعة وسهولة
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      احجز سكوتر كهربائي في دقائق معدودة واستلمه من أقرب محطة
                      إليك
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div whileHover={{ scale: 1.05 }} className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 h-full border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#f99026] rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      أسعار تنافسية
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      أسعار مناسبة للجميع مع خطط دفع مرنة تناسب احتياجاتك
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div whileHover={{ scale: 1.05 }} className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 h-full border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#f99026] rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
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
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      جودة وأمان
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      سكوترات حديثة وآمنة مع صيانة دورية وتأمين شامل
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              من نحن
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              نحن نقدم حلول تنقل مستدامة وصديقة للبيئة في مصر
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Vision Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">✨</span>
                  <h3 className="text-xl font-bold text-[#f99026]">رؤيتنا</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  نكون الحل الأول والمفضل للتنقل السهل والسريع في المدينة،
                  ونساعد الناس يلاقوا وسيلة مريحة وصديقة للبيئة توصلهم لأي مكان
                  بدون زحمة أو تعب.
                </p>
              </div>

              {/* Goal Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🎯</span>
                  <h3 className="text-xl font-bold text-[#f99026]">هدفنا</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  نوفر تجربة تأجير سكوتر ودراجات سهلة وآمنة من خلال تقنية QR
                  Code، بحيث أي حد يقدر يستخدمها بسرعة ومن غير تعقيد، مع ضمان
                  الأمان والموثوقية في كل رحلة.
                </p>
              </motion.div>

              {/* Values Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🛡</span>
                  <h3 className="text-xl font-bold text-[#f99026]">قيمنا</h3>
                </div>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="font-bold ml-2 text-[#f99026]">
                      السهولة:
                    </span>
                    <span>نخلي كل حاجة بسيطة، من الحجز لركوب السكوتر.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold ml-2 text-[#f99026]">
                      الأمان:
                    </span>
                    <span>
                      نضمن إن كل السكوترات بحالة ممتازة، ونضيف إجراءات تحافظ على
                      سلامة المستخدمين.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold ml-2 text-[#f99026]">
                      الاستدامة:
                    </span>
                    <span>
                      نساعد في تقليل التلوث والزحمة ببدائل تنقل صديقة للبيئة.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold ml-2 text-[#f99026]">
                      الموثوقية:
                    </span>
                    <span>
                      نقدم خدمة محترفة وسريعة، ونكون دايمًا متاحين للدعم.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold ml-2 text-[#f99026]">
                      الابتكار:
                    </span>
                    <span>
                      نستخدم أحدث التقنيات عشان نخلي التجربة أسرع وأسهل
                      للمستخدمين.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Image and Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/about-image.jpg"
                  alt="فريق العمل"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stats */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-[#f99026] text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold mb-2">+1000</div>
                <div className="text-sm">مستخدم نشط شهرياً</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-[#f99026] text-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-sm">محطات في القاهرة</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Additional Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
              <div className="text-[#f99026] text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">
                نسبة رضا العملاء
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
              <div className="text-[#f99026] text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">
                دعم فني متواصل
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026] transition-colors duration-200">
              <div className="text-[#f99026] text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">
                تأمين على الرحلات
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/stations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#f99026] hover:bg-[#e07d15] transition-colors duration-200"
            >
              تعرف على محطاتنا
              <svg
                className="mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
