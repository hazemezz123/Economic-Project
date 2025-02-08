import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            إجابات على الأسئلة الأكثر شيوعاً حول خدمة تأجير السكوتر الكهربائي
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
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
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-blue-50 rounded-lg p-6 text-center"
        >
          <h3 className="text-lg font-medium text-blue-900">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="mt-2 text-blue-700">
            يمكنك التواصل مع فريق خدمة العملاء على مدار الساعة
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="tel:+201234567890"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              اتصل بنا
            </a>
            <a
              href="mailto:support@scooter-rental.eg"
              className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              راسلنا
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
