console.log("connected");

function sayHello() {
    console.log("Hello!");
}

function stopHello() {
    clearInterval(intervalId);
}

let intervalId = setInterval(sayHello, 100);

setTimeout(stopHello, 2000);