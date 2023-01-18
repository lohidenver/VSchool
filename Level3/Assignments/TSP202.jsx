//TSP 202
const [color, setColor] = useState("pink");

setColor("blue");

console.log(color);

const [color1, setColor1] = useState("pink");

setColor(color1 === "pink" ? "blue" : "pink");

console.log(color1);

//3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.

const [people, setPeople] = useState([
  {
    firstName: "John",
    lastName: "Smith",
  },
]);

setPeople((prevPeople) => prevPeople({ firstName: "Jane", lastName: "Smith" }));

console.log(people);

// 4. Change the following state-setting functions to use an implicit return

const [colors3, setColors3] = setState(["pink", "blue"]);

setColors3((prevColors) => [...prevColors, "green"]);

console.log(colors3);

const [countObject, setCountObject] = setState({ count: 0 });

setCountObject((prevState) => prevState.count + 1);

// 5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith",
});

setPerson((prevPerson) => ({ ...prevPerson, age: 30 }));

console.log(person);

//6. What’s wrong with the following state update?

const [colors4, setColors4] = React.useState(["pink", "blue"]);

setColors4("green");

//Changing from array to string
