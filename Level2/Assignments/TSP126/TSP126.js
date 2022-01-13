console.log("connected");

/*

1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:*/

function sum(x, y) {
    try {

        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Error")
        }


    } catch (e) {
        console.log(e)
    } finally {
        console.log("")
    }
    return x + y;
}

/*
1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.*/


console.log(sum("1", "2"));
console.log("\nSecond\n")
    /* 
    2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
    */

var user = { username: "sam", password: "123abc" };

function login(username, password) {
    try {
        if (user.username !== username || user.password !== password) {
            throw new Error("Username or Password do not match")
        } else {
            console.log("login successful")
        }
    } catch (err) {
        console.log(err)
    } finally {

    }

}

/*
2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
*/

login("sam", "123abc");
login("mike", "123abc");
login("Sam", "123abc");
login("sam", "123abc");