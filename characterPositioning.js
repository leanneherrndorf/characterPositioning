//creates object to output
var outputObject = {};

function countLetters(letters){

  var lowered = letters.toLowerCase();
  for(var i = 0; i < lowered.length; i++){

    var character = lowered[i];

    if('abcdefghijklmnopqrstuvwxyz'.includes(character)){
      if(outputObject[character] === undefined){
         //calculate position of character in string
        outputObject[character] = [i];
      }else{
        outputObject[character].push(i);
      }
    }
  }
return outputObject;
}

countLetters('pa rAgraph');
console.log(outputObject); //test output
