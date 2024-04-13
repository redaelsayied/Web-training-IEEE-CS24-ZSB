console.group("Group 1");
console.log("Message One");
console.log("Message Two");


console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd(); // end grand child

console.groupEnd(); // end child


console.groupEnd(); // end group 1

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); //  end group 2
