import React, { useState } from 'react';
import { Input } from '@Components';

type SearchInputProps = {
  initialValue?: string;
  onChange: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  initialValue,
  onChange,
}: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue || '');

  const searchInput = {
    value: searchTerm,
    placeholder: 'Find customer',
    placeholderTextColor: '#FFF',
    onChangeText: (value) => {
      setSearchTerm(value);
      onChange(value);
    },
  };

  return (
    <>
      <Input {...searchInput} />
    </>
  );
};

export default SearchInput;
