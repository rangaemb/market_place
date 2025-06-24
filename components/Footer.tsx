import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Yasangi</h3>
                <p className="text-sm text-green-400">Natural Fertilizers</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of organic and natural fertilizers, helping gardeners 
              grow healthier plants sustainably for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Organic Fertilizers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liquid Fertilizers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lawn Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vegetable Garden</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tree & Shrub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Specialty Blends</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">123 Garden Lane, Green Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">info@Yasangi.com</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-sm text-gray-400">Monday - Friday: 8AM - 6PM</p>
              <p className="text-sm text-gray-400">Saturday: 9AM - 5PM</p>
              <p className="text-sm text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Yasangi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;