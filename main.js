function getEvenNumbers(arr) {
  
   return  arr.filter((el) => 
        el %2===0
       
    )
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе: [2, 4, 6]
console.log(getEvenNumbers([7, 8, 9, 10])); // Виведе: [8, 10]
console.log(getEvenNumbers([11, 13, 15])); // Виведе: []