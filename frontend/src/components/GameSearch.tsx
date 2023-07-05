import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const GameSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField 
        label="Search Games" 
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ ml: 1 }}>Search</Button>
    </form>
  );
}

export default GameSearch;
