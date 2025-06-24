'use client'; // This component needs to be a client component for animations

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';

// Define the type for our product prop
type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string; // We'll add some placeholder images
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ProductCard = ({ product, index }: { product: Product, index: number }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="w-full h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-green-500 transition-colors duration-300">
        <div className="relative aspect-square w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="font-semibold text-lg leading-tight truncate">{product.name}</h3>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <p className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
          <Button size="icon" aria-label="Add to cart">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};