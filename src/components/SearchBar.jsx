/* eslint-disable react/prop-types */
import { X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, clearSearch, autoFocus = false }) => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full px-3 py-2 pr-8 text-sm border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                autoFocus={autoFocus}
            />
            {searchQuery && (
                <button
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
