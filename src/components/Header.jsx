import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import logo from '../assets/logo.png';
import useSearch from '../hooks/useSearch';
import SearchBar from './SearchBar';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";


const Header = () => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    showSearch,
    setShowSearch,
    searchQuery,
    setSearchQuery,
    handleSearch,
    clearSearch
  } = useSearch();


  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Our Collections
            </Link>
            <Link to="/products?category=men's clothing" className="text-foreground hover:text-primary transition-colors">
              Men
            </Link>
            <Link to="/products?category=women's clothing" className="text-foreground hover:text-primary transition-colors">
              Women
            </Link>
            <Link to="/products?category=jewelery" className="text-foreground hover:text-primary transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className={`hidden sm:flex items-center relative transition-all duration-300 ${showSearch ? 'w-48 sm:w-64 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
                clearSearch={clearSearch}
              />
            </div>
            <button
              onClick={() => {
                if (showSearch && searchQuery) {
                  handleSearch();
                } else {
                  setShowSearch(!showSearch);
                }
              }}
              className="text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link to="/profile" className="hidden md:block text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </Link>

            <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
                  {cartCount}
                </Badge>
              )}
            </Link>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden text-foreground">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/products"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Collections
                  </Link>
                  <Link
                    to="/products?category=men's clothing"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Men
                  </Link>
                  <Link
                    to="/products?category=women's clothing"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Women
                  </Link>
                  <Link
                    to="/products?category=jewelery"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/profile"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="sm:hidden pb-4">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              clearSearch={clearSearch}
              autoFocus={true}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
