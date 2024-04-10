import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from './AdoptedPetContext';
import useBreedList from './useBreedList';
import Results from './Results';
import fetchSearch from './fetchSearch';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const object = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(object);
        }}
      >
        {
          adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
          ) : null
        }
        <label htmlFor="location"> Location </label>
        <input
          name="location"
          type="text"
          id="location"
        />

        <label htmlFor="animal"> Animal </label>
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={event => {
            setAnimal(event.target.value)
          }}
        >
          <option />
          {ANIMALS.map(animal => (
            <option key={animal}> {animal} </option>
          ))}
        </select>

        <label htmlFor="breed"> Breed </label>
        <select
          name="breed"
          id="breed"
          disabled={breeds.length === 0}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>

        <button>Submit</button>

      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;
