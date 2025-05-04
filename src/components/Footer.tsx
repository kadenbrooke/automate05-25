import { Bot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Bot className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Auto Mate AI</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Auto Mate AI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+18014583118" className="text-gray-400 hover:text-white transition-colors">
              (801) 458-3118
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:kaden@auto-mate.business" className="text-gray-400 hover:text-white transition-colors">
              kaden@auto-mate.business
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;