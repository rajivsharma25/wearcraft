import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}`}
              className="bg-card border border-border rounded-lg p-4 flex gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain bg-muted rounded"
              />
              <div className="flex-1">
                <Link
                  to={`/product/${item.id}`}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Size: {item.selectedSize}
                </p>
                <p className="font-semibold mt-2">{formatPrice(item.price)}</p>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 border border-border rounded-md">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.selectedSize, item.quantity - 1)
                      }
                      className="p-2 hover:bg-muted"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.selectedSize, item.quantity + 1)
                      }
                      className="p-2 hover:bg-muted"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-destructive hover:text-destructive/90 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(getCartTotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {getCartTotal() > 100 ? 'Free' : formatPrice(10)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">{formatPrice(getCartTotal() * 0.1)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>
                  {formatPrice(
                    getCartTotal() +
                      (getCartTotal() > 100 ? 0 : 10) +
                      getCartTotal() * 0.1
                  )}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-md font-medium hover:bg-primary/90 transition-colors mb-4"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="block w-full text-center py-3 border border-border rounded-md font-medium hover:bg-muted transition-colors"
            >
              Continue Shopping
            </Link>

            {getCartTotal() < 100 && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                Add {formatPrice(100 - getCartTotal())} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
