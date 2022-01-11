console.log("connected");

try {
    if (2 !== 3) {
        throw "\nI am an error"
    }
    console.log("Peanut")
} catch (err) {
    console.log(err)
} finally {
    console.log("Butter")
}
////////////////////////////////
console.log("")
    ////////////////////////////////
try {
    if (2 !== 3) {
        "I am an error"
    }
    console.log("Peanut")
} catch (err) {
    console.log(err)
} finally {
    console.log("Butter")
}
////////////////////////////////
console.log("")
    ////////////////////////////////
try {
    if (2 !== 3) {
        throw new Error("I am an error")
    }
    console.log("Peanut")
} catch (err) {
    console.log(err)
} finally {
    console.log("Butter")
}