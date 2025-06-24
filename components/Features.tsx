import React from 'react';
import { Shield, Truck, Award, Recycle, Heart, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Certified',
      description: 'All our fertilizers are OMRI listed and certified organic, ensuring safety for your family and pets.'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $50. Fast, reliable shipping to your doorstep.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Carefully sourced ingredients and rigorous quality control for superior results.'
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and environmentally responsible manufacturing processes.'
    },
    {
      icon: Heart,
      title: 'Garden Care',
      description: 'Expert formulations designed to nurture your plants and improve soil health.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our gardening experts are here to help you choose the right fertilizer for your needs.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Yasangi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the highest quality fertilizers and exceptional service 
            to help your garden thrive naturally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;