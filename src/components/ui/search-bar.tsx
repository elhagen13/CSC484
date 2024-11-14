import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  query: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar = ({ query, handleSearch, placeholder = "Search events by name..." }: SearchBarProps) => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <Search style={{
        position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
        color: '#000', height: '16px', width: '16px'
      }} />
      <Input
        value={query}
        onChange={handleSearch}
        placeholder={placeholder}
        style={{
          width: '100%', paddingLeft: '40px', paddingRight: '16px', color: "#000",
          backgroundColor: '#fff', paddingTop: '8px', paddingBottom: '8px', borderRadius: '8px'
        }}
      />
    </div>
  );
};

export default SearchBar;