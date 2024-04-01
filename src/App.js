const Pet = (properties) => {
  return React.createElement("div", {}, [
      React.createElement("h1", {}, properties.name),
      React.createElement("h2", {}, properties.animal),
      React.createElement("h2", {}, properties.breed),
  ])
};

const App = () => {
  return React.createElement(
    "div",                                            // parent
    {},                                               // attributes
    [                                                 // children / components in array - data from app to pet
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Tommy",
        breed: "Unknown breed"}),
      React.createElement(Pet, {
        animal: "Guinea pig",
        name: "Sara",
        breed: "Shorthair"}),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Bobby",
        breed: "Dachshund"}),
    ]
  )
};
const container = document.getElementById("root");    // get div
const root = ReactDOM.createRoot(container);          // create root for div
root.render(React.createElement(App));                // render app component in div
