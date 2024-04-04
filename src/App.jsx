import { createRoot } from "react-dom/client";
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Tommy" animal="Cat" breed="Tuxedo cat" />
      <Pet name="Bobby" animal="Dog" breed="Dachshund" />
      <Pet name="Sara" animal="Guinea pig" breed="Shorthair" />
    </div>
  )
};

const container = document.getElementById("root"); // get div
const root = createRoot(container); // create root for div
root.render(< App />); // render app component in div

// run the app @ terminal with npm run dev