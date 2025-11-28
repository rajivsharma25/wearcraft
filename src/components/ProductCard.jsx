import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '../utils/formatPrice';
import { useCart } from '../context/CartContext';
import { useToast } from './ui/use-toast';
import { Skeleton } from './ui/skeleton';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />

        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-foreground mb-2 line-clamp-2 flex-1">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${i < Math.floor(product.rating.rate)
                    ? 'text-yellow-500'
                    : 'text-muted'
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              ({product.rating.count})
            </span>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 p-2 pl-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-xs"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted p-4">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="p-4 flex-1 flex flex-col space-y-3">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-2/3" />
        <div className="flex items-center space-x-1">
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-4" />
          <Skeleton className="h-3 w-8 ml-2" />
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
