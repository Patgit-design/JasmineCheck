let selectElementsStartingWithA = (array) => {
    return array.filter(letter => letter[0] == "a");
};


let selectElementsStartingWithVowel = (array) => {
    return array.filter(vowel => /^[aeiou]/i.test(vowel));
}

let removeNullElements = (array) => {
    return array.filter(element => element != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(element => element != null && element !== false);
}

let reverseWordsInArray = (array) => {
    return array.map(element => element.split('').reverse().join(''));
}

let everyPossiblePair = (array) => {
    let arr = [];
    let x = 0;
    let y = x + 1;
    array.sort();
    while (y < array.length) {
        arr.push([array[x], array[y]])
        y++
        if (y === array.length) {
            x++;
            y = x + 1;
        }
    }
    // console.log(arr.sort());
    return (arr.sort());

    //    let arraySorted = array.sort();
    //   return arraySorted;
    //   console.log(arraySorted);
    //return array.flatMap((v, i) => array.slice(i + 1).map(w => v + ' ' + w));

    /////////
    /*  let pairs = (array) => array.map((v, i) => array.slice(i + 1).map(w => [w, v])).flat();
      return pairs(array).sort();*/

    //////////
    /*  let res = [],

          for (let i = 0; i < array.length; ++i)
              for (let j = i + 1; j < res.length; ++j)
                  res.push([array[i], array[j]]);
      return res;*/

    ////////////////////////////////////////////
    /*  let results = [];
      for (let index = 0; index < array.length - 1; index++) {
          for (let j = index + 1; j < array.length; j++) {
              results.push([array[index] + ' ' + array[j]]);

          }


      }
      // return results;
      console.log(results);*/

}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3);
}

let addElementToBeginning = (array, element) => {
    // return array.unshift(element);
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {

        return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    }
    //https://www.codegrepper.com/code-examples/javascript/javascript+sort+array+by+last+letters

let getFirstHalf = (string) => {
    //  return string.substring(0, Math.floor(string.length / 2));
    return string.substr(0, Math.round(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(element => element === element.split('').reverse().join('')).length;
}

let shortestWord = (array) => {
    // return Math.min(array.map(word => word.length));
    //  return Math.min(...array.length);
    ////////////////////////////
    return array.reduce((a, b) => a.length <= b.length ? a : b);
}

let longestWord = (array) => {
    // return Math.max(...(x.map(el => el.length)));;
    ////////////////////
    return array.reduce((a, b) => a.length > b.length ? a : b);
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

let repeatElements = (array) => {
        array.forEach(ele => {
            array.push(ele)
        })
        return array;
    }
    //  return Array.from({ length: 3 * array.length }, (_, i) => array[i % array.length]);;


let stringToNumber = (string) => {
    return new Number(string);
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => a + b, 0) / array.length;

}

let getElementsUntilGreaterThanFive = (array) => {
    //  return array.filter(i => i > 5);
    return array.slice(0, array.find((element) => element > 5));


}

let convertArrayToObject = (array) => {
    let object = {};
    for (let x = 0; x < array.length; x += 2) {
        object[array[x]] = array[x + 1];
    }
    return object;
    // const obj = Object.fromEntries(array);
    //  return obj;
    //////////////////
    //  let arrayConverted = Object.fromEntries(array);
    //return array;
    /////////////////////////////////
    //  const obj = Object.assign({}, array);
    //  console.log(obj);
}

let getAllLetters = (array) => {
    return [...new Set(array)].join('').split('').sort();
}

let swapKeysAndValues = (object) => {
        let keysAndValuesSwapped = {};

        function swap(object) {
            for (let key in object) {
                keysAndValuesSwapped[object[key]] = key;
            }
            return keysAndValuesSwapped;
        }
        return swap(object);
        // let keysAndValuesSwapped = {};
        //Object.keys(object).forEach(key => {
        //  newObj[object[key]] = key;
        // });
        //  return keysAndValuesSwapped;
        //  console.log(keysAndValuesSwapped);
        ////////////////////////////////////
        //   function swap(object) {
        //    let ret = {};
        //   for (const key in object) {
        //    ret[object[key]] = key;
    }
    // return ret;

// console.log(swap);
//console.log(ret);


let sumKeysAndValues = (object) => { /////////A revoir pas compris !!!!!!
    let arr = [];
    let result = 0;
    arr.push(Object.values(object), (Object.keys(object).map(Number)))
    arr = arr[0].concat(arr[1])
    for (let x = 0; x < arr.length; x++) {
        result = result + arr[x]
    }
    return result;
    ////////////////////////////////
    // return object.map(v => ({...v, isActive: true }));
    //////////////////////////////////////////////
    //   const sumValues = Object.values(object).reduce((a, b) => a + b);
    //  return sumValues;
}

let removeCapitals = (string) => {
    let stringRem = string.replace(/[A-Z]/g, '');
    return stringRem;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr-Fr");
}

let getDomainName = (string) => {
    // let domain = string.substring(string.IndexOf("@") + 1);

    // return domain;
    return string.split('@').pop().split('.com').shift();
}

let titleize = (string) => {
    /*    Divide all the words in the sentence individually. This task can be achieved by using string.split() method.
    Convert all the elements in each and every word in to lowercase using string.toLowerCase() method. 
    Loop through first elements of all the words using for loop and convert them in to uppercase. After converting, concatenate them with the remaining elements of their respective word, leading to a original word with first element in upper case. 
    Join all the words using String.join() with a space between them so as to convert it in to its original string but title cased.*/
    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence.join(" ");
}

/*
    string.split(' ');
    string.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
    string.join(' ');
    return (titleize(string));
*/



//////////////////////////////////////
/*  return string
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');*/
/*  let sentence = string.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  return sentence.join(" ");*/


let checkForSpecialCharacters = (string) => {
    return /[\W_]/g.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    return factorial(number);
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    //  const fahrenheitToCelsius = number => (number - 32) * 5 / 9;
    return Math.round(5 * (number - 32) / 9);
}

let letterPosition = (array) => {
    return array.map(element => element.toLowerCase().charCodeAt(0) - 96);
}