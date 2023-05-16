import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

  // State variable 'open' and its setter function
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to handle closing the search bar.
    const handleClose = () => setOpen(false);

    // Adding an event listener to the document for handling clicks and closing the search bar.
    document.addEventListener('click', handleClose);

    // Removing the event listener when the component unmounts.
    return () => document.removeEventListener('click', handleClose);
  }, []);

  // Function to handle the click event on the search button.
  const handleSearchClick = (e) => {

    // Stopping the click event from propagating further.
    e.stopPropagation();

    // Toggling the 'open' state to show or hide the search form.
    setOpen(!open);
  };


  const handleFormClick = (e) => {
    // Stopping the click event from propagating further.
    e.stopPropagation();
  };

  return (
    <div>
      {/* Search button */}
      <button
        className="absolute inset-y-0 flex items-center focus:outline-none "
        onClick={handleSearchClick}
      >
        {/* Search icon */}
        <FaSearch
          className="w-5 h-5 text-main-600 hover:text-main-900 dark:text-main-300 dark:hover:text-main-600" />
      </button>

      {open
        && (
          // Search form
          <form
            className="absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10"
            onClick={handleFormClick}>
            {/* Search input */}
            <div className="relative">
              <input
                type="text"
                name="search"
                className="block p-4 mt-6 w-full rounded-md border-gray-300 shadow-sm pl-10
                 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ARA"
              />

              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Search icon within input */}
                <FaSearch
                  className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </form>
        )}
    </div>
  );
};

export default SearchBar;
