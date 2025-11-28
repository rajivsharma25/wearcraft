import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductGrid from '../components/ProductGrid';
import { ProductCardSkeleton } from '../components/ProductCard';
import Filters from '../components/Filters';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Always fetch all products to allow client-side filtering
  const { products, loading, error } = useFetchProducts(null);

  const [filters, setFilters] = useState({
    category: categoryParam || 'all',
    minPrice: '',
    maxPrice: '',
    sort: 'default',
  });

  useEffect(() => {
    if (categoryParam) {
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSortChange = (value) => {
    setFilters((prev) => ({ ...prev, sort: value }));
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Category filtering
    if (filters.category && filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Search filtering
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Price filtering
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= parseFloat(filters.maxPrice));
    }

    // Sorting
    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => {
          const rateA = a.rating?.rate || 0;
          const rateB = b.rating?.rate || 0;
          return rateB - rateA;
        });
        break;
      default:
        break;
    }

    return result;
  }, [products, filters, searchParams]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-destructive">Error loading products: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {categoryParam && categoryParam !== 'all'
          ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
          : 'All Products'}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <Filters
            filters={filters}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <>
              <div className="mb-4 text-muted-foreground">
                Showing {filteredAndSortedProducts.length} products
              </div>
              <ProductGrid products={filteredAndSortedProducts} />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
