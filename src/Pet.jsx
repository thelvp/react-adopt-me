const Pet = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.animal} </h2>
      <h2> {props.breed} </h2>
    </div>
  )
}

export default Pet;

// Use of props to use properties of instances
// In app you would specify in <div> <AppName prop="" />:
// - <Pet name="Tommy" animal="Cat" breed="Tuxedo cat" />
// - <Pet name="Bobby" animal="Dog" breed="Dachshund" />
// - <Pet name="Sara" animal="Guinea pig" breed="Shorthair" />