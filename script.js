

const offsetMultiplier=25
let currentNumber=0


function increment(){
    if(currentNumber<10){
        currentNumber++
        updateCount()
    }

}

function decrement(){
    if(currentNumber>0){
        currentNumber--
        updateCount()
    }
}

function updateCount(){
    document.documentElement.style.setProperty('--offset', `${(offsetMultiplier*currentNumber)-(currentNumber/2)}px`)
    
}