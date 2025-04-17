// export default function Animal() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];
//   const animalList = animals.map((animal) => {
//     return <li key={animal}>{animal}</li>;
//   });

//   return (
//     <div>
//       <h1>Animals</h1>
//       <ul>{animalList}</ul>
//     </div>
//   );
// }
//

// function ListItem(props) {
//   return <li>{props.animal}</li>;
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />;
//       })}
//     </ul>
//   );
// }

// export default function Animal() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }

// CONDITIONAL rendering

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div> 
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div> 
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

export default function Animal() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
