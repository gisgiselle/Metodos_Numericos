

var randomNumbersDict = {}

function squareCenterMethod(seed){
    //checks if random number key has a value of 2 to stop
    while (randomNumbersDict[seed] == 1 || randomNumbersDict[seed] == null){   
        //console.log('seed is '+ seed)
        var generator = Math.pow(seed, 2)

        //If number has less than 8 digits, then n 0's are added to the left
        if (String(generator).length < 8){
           generator = String(generator).padStart(8,'0')
           //console.log('0s on the left '+generator) 
        }

        //changes number to array of numbers
        let changeToArray = num => Number(num)
        var seedArray = Array.from(String(generator),changeToArray)
        
        //removes first two digits 
        generator = seedArray.slice(0,-2)
        //Removes last two digits 
        generator = seedArray.splice(2,4)
        
        //Creates the new random number from the generator
        var randomNumber = Number(generator.join(''))
        //console.log('random number: '+ randomNumber)

        //adds new generated random number to dictionary
        //value is x_n
        if(randomNumber in randomNumbersDict == false){
            randomNumbersDict[randomNumber]=1
            
        }else {
            randomNumbersDict[randomNumber]=2
            return console.log('repeated random number is : '+ Object.keys(randomNumbersDict))
        }
   
        //Gets Ri value
        var Ri = randomNumber/10000

        seed = randomNumber
    }
}

//squareCenterMethod(3547)