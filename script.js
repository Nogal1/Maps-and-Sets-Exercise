// Quick question #1
// What does the following code return?

 new Set([1, 1, 2, 2, 3, 4]) // 1,2,3,4

// Quick question #2
// What does the follow code return?

const referee = [...new Set("referee")].join("") // ref

// Quick question #3
// What does the Map m look like after runnning the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0: {Array(3) => true}
// 0: {Array(3) => false}


// hasDuplicate
// Write a function called hasDuplicate which acceepts an array and returns true or false if that array conntains a duplicate.

const hasDuplicate = arr => new Set(arr).size !== arr.length;


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values
// are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {

    const isVowel = (char) => 'aeiou'.includes(char);
    const vowelMap = new Map();
    
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}