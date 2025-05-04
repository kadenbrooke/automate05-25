import { useEffect, useState } from 'react';
import { ArrowRight, Bot, PieChart, Users, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Your <span className="text-blue-600">Digital Workforce</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Automate admin, customer service, and sales tasks so you can focus on scaling your business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base md:text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-white rounded-xl shadow-xl p-6 transform transition hover:scale-105 duration-300">
              <Bot className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Admin Automation</h3>
              <p className="text-gray-600">Streamline your repetitive administrative tasks</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 transform transition hover:scale-105 duration-300">
              <Users className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
              <p className="text-gray-600">Deliver 24/7 customer support with AI</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 transform transition hover:scale-105 duration-300">
              <PieChart className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sales Enablement</h3>
              <p className="text-gray-600">Qualify leads and book meetings automatically</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 transform transition hover:scale-105 duration-300">
              <Clock className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
              <p className="text-gray-600">Reclaim hours of productive time each week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;