import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (category = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const url = category
          ? `${baseUrl}/products/category/${category}`
          : `${baseUrl}/products`;

        const response = await axios.get(url);
        const data = response.data;

        // Augment products with sizes and colors since API doesn't provide them
        const augmentedProducts = data.map((product) => ({
          ...product,
          sizes: ["XS", "S", "M", "L", "XL"],
          colors: ["Black", "White", "Gray", "Navy"],
          inStock: true,
          rating: product.rating || { rate: 4.5, count: 100 },
        }));

        setProducts(augmentedProducts);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};

export default useFetchProducts;
