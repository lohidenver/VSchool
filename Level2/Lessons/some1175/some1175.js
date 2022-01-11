console.log("connected");

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

////////////////////////////////some

const someResultES6 = names.some(name => name[0] === "S");
console.log(someResultES6);





////////////////////////////////every

const everyResultES6 = names.every(name => name[0] === "S");
console.log(everyResultES6);