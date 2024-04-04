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

const container = document.getElementById("root"); // 1. get div
const root = createRoot(container); // 2. create root for div
root.render(< App />); // 3. render app component in div