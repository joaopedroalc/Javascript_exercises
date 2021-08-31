const operationsNumber = (num) =>{
  
    switch(typeof num === 'number'){ 
        case num % 3 === 0 && num % 5 === 0:
            return 'FizzBuzz'
            break;
        
        case num % 3 !== 0 && num % 5 !== 0:
            return num
            break;
        
        case num % 3 === 0 :
            return 'Fizz'
            break;
            
        case num % 5 === 0:
            return 'Buzz'
        }
    }

for (let i = 0; i< 100; i++){
    console.log(i, operationsNumber(i))
}