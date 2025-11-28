import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Truck, Shield, Star } from 'lucide-react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard, { ProductCardSkeleton } from '../components/ProductCard';

import hero_img_1 from '../assets/images/hero-img1.jpg';
import hero_img_2 from '../assets/images/hero-img2.jpg';
import hero_img_3 from '../assets/images/hero-img3.jpg';
import category_men from '../assets/images/category-men.jpg';
import category_women from '../assets/images/category_women.png';
import category_accessories from '../assets/images/category_accessories.png';
import avatar_1 from '../assets/images/avatar_1.png';
import avatar_2 from '../assets/images/avatar_2.png';
import avatar_3 from '../assets/images/avatar_3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Home = () => {
  const { products, loading } = useFetchProducts();
  const featuredProducts = products.slice(0, 4);

  const slides = [
    {
      id: 1,
      image: hero_img_1,
      title: "Discover Your Style",
      description: "Explore the latest trends and timeless classics. Elevate your wardrobe with our curated collection.",
      primaryLink: "/products",
      primaryText: "View All",
      secondaryLink: "/products?category=women's clothing",
      secondaryText: "Women's Collection"
    },
    {
      id: 2,
      image: hero_img_2,
      title: "Urban Elegance",
      description: "Find the perfect look for the city streets. Modern designs for the contemporary lifestyle.",
      primaryLink: "/products?category=men's clothing",
      primaryText: "Men's Collection",
      secondaryLink: "/products",
      secondaryText: "View All"
    },
    {
      id: 3,
      image: hero_img_3,
      title: "Minimalist Chic",
      description: "Simplicity is the ultimate sophistication. Discover our range of minimalist essentials.",
      primaryLink: "/products?category=jewelery",
      primaryText: "Shop Accessories",
      secondaryLink: "/products",
      secondaryText: "View All"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div
                  className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat min-h-[500] flex items-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>
                  <div className="container relative mx-auto px-4">
                    <div className="max-w-3xl">
                      <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-background drop-shadow-md">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-background/90 mb-8 drop-shadow-sm font-medium">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          to={slide.primaryLink}
                          className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
                        >
                          {slide.primaryText}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                          to={slide.secondaryLink}
                          className="inline-flex items-center px-8 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-full font-medium hover:bg-background transition-colors shadow-lg"
                        >
                          {slide.secondaryText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 hidden md:flex" />
          <CarouselNext className="right-4 hidden md:flex" />
        </Carousel>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Carefully curated items</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Latest Trends</h3>
              <p className="text-sm text-muted-foreground">Always in fashion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/products?category=men's clothing"
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted bg-cover bg-center"
              style={{ backgroundImage: `url(${category_men})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Men&apos;s Collection</h3>
                <span className="inline-flex items-center text-white/90">
                  <span className="group-hover:underline">Shop Now</span> <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/products?category=women's clothing"
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted bg-cover bg-center"
              style={{ backgroundImage: `url(${category_women})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Women&apos;s Collection</h3>
                <span className="inline-flex items-center text-white/90 group-hover:underline">
                  <span className="group-hover:underline">Shop Now</span> <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/products?category=jewelery"
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted bg-cover bg-center"
              style={{ backgroundImage: `url(${category_accessories})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                <span className="inline-flex items-center text-white/90 group-hover:underline">
                  <span className="group-hover:underline">Shop Now</span> <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="flex items-center text-primary hover:underline">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Fashion Blogger",
                quote: "The quality of the clothes is amazing! I've never felt more confident in my outfits.",
                avatar: avatar_1
              },
              {
                name: "Rahul Singh",
                role: "Designer",
                quote: "Minimalist designs that truly speak to my style. Highly recommend for anyone looking for staples.",
                avatar: avatar_2
              },
              {
                name: "Ananya Patel",
                role: "Marketing Executive",
                quote: "Fast shipping and excellent customer service. The clothes fit perfectly right out of the box.",
                avatar: avatar_3
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-muted/50 border-none shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
