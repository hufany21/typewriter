const sentence = "hello";
let ms = 0
const typewriter = function (sentence){
  sentence.split()
for (let letter of sentence) {
  ms++
  setTimeout(() => {
  process.stdout.write(letter)
  }, 250 * ms++ )
  
//}
}

console.log('\n')

};

typewriter(sentence)



// loop through each letter
// each time it loops add 50 seconds to set