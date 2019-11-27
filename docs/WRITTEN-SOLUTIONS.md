# Written questions

The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

1. Which part is the file extension of the package.json file?

`.json` is the file extension of the package.json file.

2. What does JSON stand for?

JavaScript Object Notation.

3. What is the purpose of JSON?

JSON is a minimal readable format for structuring data. It is primarily used to transmit data between a server and a web app. JSON is language independant, meaning it represents data in such a way as can be interpreted by many programming languages (including languages that aren't object orientated).

4. What does the package.json file do?

The package.jason file holds various metadata relevant to the project. It is mostly used for managing dependencies, and scripts that help run tests, generating builds etc in relation to the project.

5. How do you install dependencies in a project after first cloning it from Github?

`npm install`

6. What does "forking" mean in the context of Github?

'Forking' is copying a repository. Doing so allows developers to experiment with changes without affecting the original project.

7. What data types do you know?

Integers, floats, characters, strings, arrays, booleans, objects.

8. What is the difference between primitive and complex data types, and can you give examples of each?

Primitive data types can hold only one value at a time, whereas composite data types can hold collections of values and more complex entities. A string is an example of a primative data type; an object is a complex data type because it allows you to store collections of data.

9. What would be the best data type for representing whether a user is logged into the system or not?

Boolean.

10. How would you create a variable whose value could not be changed?

`const = `

11. What would be the outcome of running this code?

```javascript
const firstName = "Sandra";

function sayHello(name) {
  console.log("Hello, " + firstName);
}

sayHello("Sally");
```
`Hello, Sandra`

`name` is only a parameter in the sayHello()function, and so it is overrided by the const at `firstName`, hardcoded into the last line of the function.

12. What would be the outcome of running this code?

```javascript

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const result = getFullname("Sally", "Jennings");

console.log(fullName);
```
`ReferenceError: getFullname is not defined`
(`getFullname` is defined locally within the function and therefore not visible to the console.log() outside of it.)

13. If you wanted to see what dependencies were required in this project, where would you to to look for a list?

The package.json file.

14. When you install dependencies, what directory is created?

node_modules

package-lock.json is automatically generated when npm modifies either the node_modules tree, or package.json.

15. How can you write comments in your code?

`//` for single line comments
`/* comment */` for multiple lines
