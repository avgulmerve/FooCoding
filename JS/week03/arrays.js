let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);


favoriteAnimals.splice(1, 0, "meerkat")
console.log(favoriteAnimals);

console.log(`The array has a length of: ${favoriteAnimals.length}`)


const removed=favoriteAnimals.splice(3,1)
console.log(favoriteAnimals)

let findingIndex= favoriteAnimals.indexOf("meerkat")
console.log(findingIndex)
console.log(`The item you are looking for is at index: ${findingIndex}`)
