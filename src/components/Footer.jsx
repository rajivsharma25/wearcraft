import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <p className="text-gray-400 text-sm">
              Your destination for the latest trends and timeless classics.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-200 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:rajivsharma93056@gmail.com" className="text-gray-200 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products?category=men's clothing" className="hover:text-primary transition-colors">Men&apos;s Clothing</Link></li>
              <li><Link to="/products?category=women's clothing" className="hover:text-primary transition-colors">Women&apos;s Clothing</Link></li>
              <li><Link to="/products?category=jewelery" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns-policy" className="hover:text-primary transition-colors">Returns Policy</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-sm text-white"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 WearCraft. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Developed by <Link to="/developer" className="text-gray-300 hover:text-primary transition-colors cursor-pointer">Rajiv Sharma</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
