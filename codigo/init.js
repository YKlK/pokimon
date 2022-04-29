 import Pikachu from "./clasePikachu.js"

document.addEventListener("DOMContentLoaded",function(){

   

// funciones 
function selecionDePokemon(text){
  if (text === "pikachu"){
       PokemonCharizard.classList.add("containerdifuso")
       PokemonVenazaur.classList.add("containerdifuso") 
       PokemonGraveler.classList.add("containerdifuso") 
       PokemonSnorlax.classList.add("containerdifuso") 
       PokemonPidgeot.classList.add("containerdifuso") 
       PokemonHitmonlee.classList.add("containerdifuso") 
       PokemonGardervoir.classList.add("containerdifuso")
       PokemonBlastoise.classList.add("containerdifuso") 
  }
  if (text === "charizard"){
       PokemonPikachu.classList.add("containerdifuso")
       PokemonVenazaur.classList.add("containerdifuso") 
       PokemonGraveler.classList.add("containerdifuso") 
       PokemonSnorlax.classList.add("containerdifuso") 
       PokemonPidgeot.classList.add("containerdifuso") 
       PokemonHitmonlee.classList.add("containerdifuso") 
       PokemonGardervoir.classList.add("containerdifuso")
       PokemonBlastoise.classList.add("containerdifuso") 
  }
  if (text === "venazaur"){
    PokemonPikachu.classList.add("containerdifuso")
    PokemonCharizard.classList.add("containerdifuso") 
    PokemonGraveler.classList.add("containerdifuso") 
    PokemonSnorlax.classList.add("containerdifuso") 
    PokemonPidgeot.classList.add("containerdifuso") 
    PokemonHitmonlee.classList.add("containerdifuso") 
    PokemonGardervoir.classList.add("containerdifuso")
    PokemonBlastoise.classList.add("containerdifuso") 
}
  if (text === "graveler"){
  PokemonPikachu.classList.add("containerdifuso")
  PokemonCharizard.classList.add("containerdifuso") 
  PokemonVenazaur.classList.add("containerdifuso") 
  PokemonSnorlax.classList.add("containerdifuso") 
  PokemonPidgeot.classList.add("containerdifuso") 
  PokemonHitmonlee.classList.add("containerdifuso") 
  PokemonGardervoir.classList.add("containerdifuso")
  PokemonBlastoise.classList.add("containerdifuso") 
}
if (text === "snorlax"){
  PokemonPikachu.classList.add("containerdifuso")
  PokemonCharizard.classList.add("containerdifuso") 
  PokemonVenazaur.classList.add("containerdifuso") 
  PokemonGraveler.classList.add("containerdifuso") 
  PokemonPidgeot.classList.add("containerdifuso") 
  PokemonHitmonlee.classList.add("containerdifuso") 
  PokemonGardervoir.classList.add("containerdifuso")
  PokemonBlastoise.classList.add("containerdifuso") 
}
if (text === "pidgeot"){
  PokemonPikachu.classList.add("containerdifuso")
  PokemonCharizard.classList.add("containerdifuso") 
  PokemonVenazaur.classList.add("containerdifuso") 
  PokemonGraveler.classList.add("containerdifuso") 
  PokemonSnorlax.classList.add("containerdifuso") 
  PokemonHitmonlee.classList.add("containerdifuso") 
  PokemonGardervoir.classList.add("containerdifuso")
  PokemonBlastoise.classList.add("containerdifuso") 
}
if (text === "hitmonlee"){
  PokemonPikachu.classList.add("containerdifuso")
  PokemonCharizard.classList.add("containerdifuso") 
  PokemonVenazaur.classList.add("containerdifuso") 
  PokemonGraveler.classList.add("containerdifuso") 
  PokemonSnorlax.classList.add("containerdifuso") 
  PokemonPidgeot.classList.add("containerdifuso") 
  PokemonGardervoir.classList.add("containerdifuso")
  PokemonBlastoise.classList.add("containerdifuso") 
}
if (text === "gardervoir"){
  PokemonPikachu.classList.add("containerdifuso")
  PokemonCharizard.classList.add("containerdifuso") 
  PokemonVenazaur.classList.add("containerdifuso") 
  PokemonGraveler.classList.add("containerdifuso") 
  PokemonSnorlax.classList.add("containerdifuso") 
  PokemonPidgeot.classList.add("containerdifuso") 
  PokemonHitmonlee.classList.add("containerdifuso")
  PokemonBlastoise.classList.add("containerdifuso") 
}

if (text === "blastoise"){
  PokemonPikachu.classList.add("containerdifuso")
  PokemonCharizard.classList.add("containerdifuso") 
  PokemonVenazaur.classList.add("containerdifuso") 
  PokemonGraveler.classList.add("containerdifuso") 
  PokemonSnorlax.classList.add("containerdifuso") 
  PokemonPidgeot.classList.add("containerdifuso") 
  PokemonGardervoir.classList.add("containerdifuso")
  PokemonHitmonlee.classList.add("containerdifuso") 
}

}

//funciones



/*variables pendejas que usare por mis webos tu viste klk conmigo */
const pika =new Pikachu()

/*variables pendejas que usare por mis webos tu viste klk conmigo */


/*variables de etiquetas */
const cuerpo = document.getElementById("body")
const containerSeleccion = document.getElementById("container");
const iframeespera = document.getElementById("espera")
const PokemonPikachu = document.getElementById("pikachu")
const PokemonCharizard = document.getElementById("charizard")
const PokemonVenazaur = document.getElementById("venazaur")
const PokemonGraveler = document.getElementById("graveler")
const PokemonSnorlax = document.getElementById("snorlax")
const PokemonPidgeot = document.getElementById("pidgeot")
const PokemonHitmonlee = document.getElementById("hitmonlee")
const PokemonGardervoir = document.getElementById("gardervoir")
const PokemonBlastoise = document.getElementById("blastoise")
/*variables de etiquetas */




PokemonPikachu.addEventListener("click",()=>{ 
     
  pika.reproducirSonido() 
  selecionDePokemon("pikachu")
  setTimeout(()=>{ 
      cuerpo.removeChild(containerSeleccion)
      iframeespera.classList.remove("containerdifuso")
  },2000)
  
})









})

