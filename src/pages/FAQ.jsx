import { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const faqs = [
    {
      question: "كيف يمكنني استئجار سكوتر كهربائي؟",
      answer:
        "يمكنك استئجار سكوتر كهربائي من خلال تسجيل حساب على موقعنا، ثم اختيار المحطة المناسبة وحجز السكوتر المتاح. بعد ذلك، يمكنك استلام السكوتر من المحطة المختارة بعد تقديم بطاقة الهوية وتوقيع عقد الإيجار.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نقبل الدفع نقداً في المحطات، وكذلك البطاقات الائتمانية (فيزا وماستركارد). قريباً سنضيف خيارات الدفع الإلكتروني مثل المحافظ الإلكترونية.",
    },
    {
      question: "هل أحتاج إلى رخصة قيادة؟",
      answer:
        "نعم، يجب أن تكون لديك رخصة قيادة سارية المفعول لاستئجار السكوتر الكهربائي. كما يجب أن يكون عمرك 18 عاماً أو أكثر.",
    },
    {
      question: "ما هو نظام التأمين المتبع؟",
      answer:
        "نوفر تأميناً شاملاً يغطي الحوادث والسرقة. يتم دفع مبلغ تأمين مسترد عند استلام السكوتر، ويتم استرداده عند إعادة السكوتر بحالة جيدة.",
    },
    {
      question: "ماذا لو تعطل السكوتر أثناء الاستخدام؟",
      answer:
        "نوفر خدمة المساعدة على الطريق على مدار الساعة. يمكنك الاتصال برقم الطوارئ المتوفر في السكوتر، وسيصل فريق الصيانة في أقرب وقت ممكن.",
    },
    {
      question: "هل يمكنني تمديد فترة الإيجار؟",
      answer:
        "نعم، يمكنك تمديد فترة الإيجار من خلال تطبيقنا أو الاتصال بخدمة العملاء، شريطة توفر السكوتر وعدم وجود حجوزات مسبقة عليه.",
    },
    {
      question: "ما هي سياسة الإلغاء؟",
      answer:
        "يمكنك إلغاء الحجز قبل 24 ساعة من موعد الاستلام مجاناً. الإلغاء قبل 12 ساعة يخضع لرسوم 25% من قيمة الحجز. الإلغاء في نفس يوم الحجز يخضع لرسوم 50%.",
    },
    {
      question: "كيف يمكنني الإبلاغ عن مشكلة؟",
      answer:
        "يمكنك الإبلاغ عن أي مشكلة من خلال الاتصال بخدمة العملاء على مدار الساعة، أو إرسال بريد إلكتروني إلى support@scooter-rental.eg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-orange-500 dark:text-orange-400">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            إجابات على الأسئلة الأكثر شيوعاً حول خدمة تأجير السكوتر الكهربائي
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.svg
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-orange-500 dark:text-orange-400"
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
                </motion.svg>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowSupport(!showSupport)}
          className="mb-4 px-4 py-2 text-orange-500 dark:text-orange-400"
        >
          {showSupport ? "إخفاء الدعم" : "عرض الدعم"}
        </button>

        <motion.div
          initial={false}
          animate={{
            height: showSupport ? "auto" : 0,
            opacity: showSupport ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-12"
        >
          <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-orange-500 dark:text-white">
              لم تجد إجابة لسؤالك؟
            </h3>

            <p className="mt-2 text-orange-500 dark:text-orange-400">
              يمكنك التواصل مع فريق خدمة العملاء على مدار الساعة
            </p>

            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="tel:+201234567890"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600"
              >
                اتصل بنا
              </a>
              <a
                href="mailto:support@scooter-rental.eg"
                className="inline-flex items-center px-4 py-2 border border-orange-500 text-sm font-medium rounded-md text-orange-500 dark:text-orange-400 bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-gray-700 dark:border-orange-500"
              >
                راسلنا
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
