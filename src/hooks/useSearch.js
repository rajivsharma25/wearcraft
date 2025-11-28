import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/products")) {
      const params = new URLSearchParams(location.search);
      const search = params.get("search");
      if (search) {
        setSearchQuery(search);
        setShowSearch(true);
      } else {
        setSearchQuery("");
        // Don't auto-hide here to avoid jarring UX if user just cleared it manually
      }
    } else {
      setShowSearch(false);
      setSearchQuery("");
    }
  }, [location]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    navigate("/products");
    // Keep search bar open
  };

  return {
    showSearch,
    setShowSearch,
    searchQuery,
    setSearchQuery,
    handleSearch,
    clearSearch,
  };
};

export default useSearch;
