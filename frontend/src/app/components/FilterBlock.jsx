'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export default function FilterBlock({ filters, setFilters }) {
  const handleChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
      
      {/* Location Input */}
      <Input
        type="text"
        placeholder="Search by Location"
        value={filters.location}
        onChange={(e) => handleChange('location', e.target.value)}
        className="w-full md:w-1/3"
      />
      {/* Category Filter */}
      <Select
        onValueChange={(value) => handleChange('category', value)}
        value={filters.category}
      >
        <SelectTrigger className="w-full md:w-1/3">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="Singer">Singer</SelectItem>
          <SelectItem value="Dancer">Dancer</SelectItem>
          <SelectItem value="DJ">DJ</SelectItem>
          <SelectItem value="Speaker">Speaker</SelectItem>
        </SelectContent>
      </Select>


      {/* Price Range Filter */}
      <Select
        onValueChange={(value) => handleChange('priceRange', value)}
        value={filters.priceRange}
      >
        <SelectTrigger className="w-full md:w-1/3">
          <SelectValue placeholder="All Prices" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="₹5k">₹5k</SelectItem>
          <SelectItem value="₹10k">₹10k</SelectItem>
          <SelectItem value="₹20k">₹20k</SelectItem>
          <SelectItem value="₹25k">₹25k</SelectItem>
          <SelectItem value="₹30k">₹30k</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
