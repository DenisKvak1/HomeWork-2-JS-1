let ICAO = {
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliet",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
  };
function readICAO(string, Alphabet){
    let newArray=[]
    string = string.replace(/\s/g, '');
    string = string.toUpperCase()
    string.split('').forEach(letter => {
        if (Alphabet[letter]) {
            newArray.push(Alphabet[letter])
        }
        else{
            console.log(`Буквы: "${letter}" нету в латинском алфавите`)
        }
    });;
    return newArray.join(' ')   
}

console.log(readICAO("KL136", ICAO))
function render(){
    let inputValue=document.getElementById("inputICAO").value
    document.getElementById('result').textContent=readICAO(inputValue, ICAO)
}