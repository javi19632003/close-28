// child.js
/*
process.on("message", (msg) => {
  let min = 1;
  let max = 1000;
  let x = 0;
  let result = {};

  for (let i = 0; i < msg; i++){
    x = Math.random()*(max - min)+min; 
   
  } 
 
  console.log(`mensaje del padre: ${msg}`);
  process.send("mundo!");
  process.exit();
});

process.send("listo");*/

function numeros (veces) {

  let min = 1;
  let max = 10;
  let x = 0;
  let result = [];
  
  for (let i = 0; i < veces; i++){
    x = Math.trunc(Math.random()*(max - min)+min); 
  
    const elementoIndex = result.findIndex(elemento => elemento.id === x)
    if(elementoIndex === -1){
      result.push({id: x, cant: 1});
    } else {
      console.log() ;
    }
    
  } 

  return result;

}


function numerosRandom(numeros) {  
  let min = 1;
  let max = 5;
  let randomN = [];
  for (let i = 0; i < numeros; i++) {
    randomN.push (Math.trunc(Math.random()*(max - min)+min));
  }
  randomN.forEach((x) => {
    randomN[x] = ( randomN[x] || 0) + 1;
  });
  console.log(randomN)
  return randomN.reduce((acc, curr) => {
   // console.log(acc)
   // console.log(curr)
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}



console.log(numerosRandom(3));
