import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected with Nature
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Get expert gardening tips, seasonal advice, and exclusive offers delivered 
            straight to your inbox. Join our community of passionate gardeners!
          </p>

          {subscribed ? (
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg inline-flex items-center gap-2">
              <span>✓ Thank you for subscribing!</span>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-green-100 text-sm">
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Weekly gardening tips</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Seasonal guides</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Exclusive discounts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;