let valorTotal = 30000;
let entrada = 3000;
let prestacao = 750;
let valorAbatido = 0;
let vezes=0;
function abaterValor(valorTotal){
    
    valorAbatido = valorTotal - entrada;   
    
    return valorAbatido;
}


function vezesPrestacao(valorAbatido){

  for(i=1;i<40;i++){
  	
    console.log(i);
    console.log(valorAbatido);
   
  	if(i/valorAbatido===750){
    	let vezes=i;
    }
     console.log(vezes);
  
  } 
   return vezes;
}

console.log("Valor abatido= "+(abaterValor(valorTotal)));
console.log("Quantidade de prestações= "+(parseInt(vezesPrestacao(valorAbatido))));