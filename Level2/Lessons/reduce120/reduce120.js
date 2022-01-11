console.log("connected");

// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const resultNums = nums.reduce(function(final, currentNum) {
    final += currentNum;
    return final;
}, 0)

console.log(resultNums)


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

const usersResult = users.reduce(function(final, user) {
    final.push(user.fName + " " + user.lName);
    return final;
}, [])

console.log(usersResult);

// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const voteCount = voters.reduce(function(final, voter) {
    if (voter.voted) {
        final++
    }
    return final;
}, 0)

console.log(voteCount)

// Return an object that has a count of both who voted and who didnt
// { didVote: 3, didntVote: 1 }

const voteTotal = voters.reduce(function(final, voter) {
    if (voter.voted) {
        final.didVote++;

    } else {
        final.didNotVote++;
    }
    return final;
}, { didVote: 0, didNotVote: 0 })

console.log(voteTotal)