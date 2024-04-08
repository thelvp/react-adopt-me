import { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location"> Location </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={event => { setLocation(event.target.value) }}
          placeholder=""
        />
        <label htmlFor="animal"> Animal </label>
        <select
          id="animal"
          value={animal}
          onChange={event => { setAnimal(event.target.value) }} >
          <option />
          {ANIMALS.map(animal => (
            <option key={animal}> {animal} </option>
          ))}
        </select>
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
