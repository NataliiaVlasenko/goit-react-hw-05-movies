import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useState } from 'react';


export const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

   const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
    //console.log("searchQuery",searchQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
        return toast.error('your search is empty, try again', {
            theme: 'colored',
          });
    }

    onSearch(searchQuery);
    setSearchQuery('');

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleQuerySearch}
          
        />
        <button
          type="submit"
                 
        >
          Search
        </button>
      </form>
    </>
  );
};
