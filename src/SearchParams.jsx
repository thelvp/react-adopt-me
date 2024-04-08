import { useState } from 'react';

const SearchParams = () => {
  const [ location, setLocation ] = useState("");

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input onChange={event => setLocation(event.target.value)} type="text" id="location" value={location} placeholder="Location"/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;

// - The useState is a Hook.
// - All hooks start with "use".
// - SYNTAX: const [{variable}, set {variable} ] = useState("default");
// - 1. [ location ] sets the current value of the state
// - 2. [ setLocation ] sets the function to update the state
// - 3. = useState("") sets the default value of the state
// - 4. onChange calls the method setLocation with as input, the value of the form input field (e.g. "Amsterdam")
