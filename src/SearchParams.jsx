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
// - This hook with const [location, setLocation] makes us able to change the location variable to whatever is typed int he form
// - SYNTAX: const [{variable}, set {variable} ] = useState("default");
// - ... & then call it in the form input field with onChange={event => set{variable}(event.target.value)}
