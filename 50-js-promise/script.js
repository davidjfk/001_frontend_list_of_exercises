// Exercise 1: 

const number = 10;

const testNum = new Promise(
    (resolve, reject) => {
        if (number > 10) {
            resolve("number is bigger than 10");
        } else {
            reject("number smaller than 11");
        }

    }
);


const isBiggerThan10 = (number) => {
    number
        .then(function (resolved) {
            console.log(resolved);
        })
        .catch(function (rejected) {
            console.log(rejected);
        });
}

isBiggerThan10(testNum);

    
// Exercise 2: 
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];



const isElementAString = (currentValue) => typeof currentValue === "string"


const makeAllCaps = (arrayOfWords) => {
    const upperCasePromise = new Promise(
        (resolve, reject) => {
            if (arrayOfWords.every(isElementAString)) {        
                let arrayOfWordsUpperCase = [];
                for (const word of arrayOfWords) {
                    arrayOfWordsUpperCase.push(word.toUpperCase());
                }
                resolve(arrayOfWordsUpperCase);
            } else {
                const reason = new Error("Array element must be a string");
                reject(reason);
            }
        }
    );
    return upperCasePromise;
}


const sortWords = (arrayOfWords) => {
    const upperCasePromise = new Promise(
        (resolve) => {                  
                let arrayOfSortedWords = [];
                arrayOfSortedWords = arrayOfWords.sort()
                resolve(arrayOfSortedWords);
            }      
    );
    return upperCasePromise;
}


makeAllCaps(arrayOfWords)
    .then((resolved) => sortWords(resolved))
    .then((resolved) => console.log(resolved))   
    .catch((rejected) => console.log(rejected.message));


makeAllCaps(complicatedArray)
    .then((resolved) => sortWords(resolved))
    .then((resolved) => console.log(resolved))   
    .catch((rejected) => console.log(rejected.message));
    

