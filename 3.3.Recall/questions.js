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
    // const obj = Object.fromEntries(array);
    //  return obj;
    //////////////////
    const obj = Object.assign({}, array);
    console.log(obj);
}

let getAllLetters = (array) => {
    return [...new Set(array)].join('').split('').sort();
}

let swapKeysAndValues = (object) => {
    /*   function swap(object) {
           let ret = {};
           for (const key in object) {
               ret[object[key]] = key;
           }
           return ret;
       }*/

}

let sumKeysAndValues = (object) => {
    // return object.map(v => ({...v, isActive: true }));
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
    /*  return string
          .split(' ')
          .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');*/
    /*  let sentence = string.toLowerCase().split(" ");
      for (let i = 0; i < sentence.length; i++) {
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }

      return sentence.join(" ");*/
}

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