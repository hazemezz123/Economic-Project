import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const statsData = [
    { number: "10+", text: "سنوات من الخبرة" },
    { number: "500+", text: "عميل سعيد" },
    { number: "150+", text: "مشروع مكتمل" },
    { number: "50+", text: "خبير متخصص" },
  ];

  const features = [
    {
      title: "رؤيتنا",
      description: "نسعى لتحقيق التميز في مجال الاقتصاد والأعمال",
      icon: "👁️",
    },
    {
      title: "مهمتنا",
      description: "تقديم حلول مبتكرة تلبي احتياجات عملائنا",
      icon: "🎯",
    },
    {
      title: "قيمنا",
      description: "الشفافية، النزاهة، والتفاني في العمل",
      icon: "⭐",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-25 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            من نحن
          </motion.h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-orange-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            نحن شركة رائدة في مجال الاستشارات الاقتصادية والمالية، نقدم حلولاً
            مبتكرة ونساعد عملائنا على تحقيق أهدافهم بكفاءة وفعالية
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center transform hover:shadow-xl transition-shadow duration-300"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl font-bold text-orange-500 mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-4xl mb-4 block"
              >
                {feature.icon}
              </motion.span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div variants={containerVariants} className="text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-16"
          >
            فريقنا المتميز
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-12"
          >
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl p-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      اسم الخبير
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      المسمى الوظيفي
                    </p>
                    <div className="flex justify-center space-x-4">
                      {/* Social Media Icons */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer"
                      />
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
