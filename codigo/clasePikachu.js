import Pokemon from "./clasepokemon.js";
export default class Pikachu extends Pokemon{
    constructor(){
        super()
        
        this.ataqueEspecial = 0;
        this.defensaEspecial = 0;
        this.sonidoPikachu = new Audio()
        this.impactruenobtn = document.getElementById("impactrueno")
        this.agilidadbtn = document.getElementById("agilidad")
        this.ataque_rapidobtn = document.getElementById("ataque_rapido")
        this.chispabtn = document.getElementById("chispa")


        this.sonidoPikachu.src = "/musicaAmbientalPapu/pikachu.mp3"
        this.fotoPolla=`<img class="poke" src="imagenes_de_pelea/pikachu.png" alt="fotopolla">
        <input class="pokevida"  type="number" min="0" max="120" name="" id="vida" readonly="true" value="120">
       <div class="botonPelea">
           <button id="impactrueno" class="botones">impactrueno</button>
           <button id="agilidad" class="botones">agilidad</button>
           <button id="ataque_rapido" class="botones">ataque rapido</button>
           <button id="chispa" class="botones">chispa</button>
           </div>`
        this.fotoPollaEnemiga=`<img  class="pokeenemigo"  src="imagenes_de_pelea/pikachuPelea.png" alt="fotopolla">
        <input class="pokeenemigovida"  type="number" min="0" max="120" name="" id="vidaenemiga" readonly="true" value="120">`
    }


    reproducirSonido(){
        this.sonidoPikachu.play()
    }

    establecedorDeEstadisticas(){
       
        this.ataqueEspecial = Math.random
        this.defensaEspecial = Math.random
        this.vida = document.getElementById("vida")
 
        this.ataque = Math.random
        // let ataqueEspecial; heredable
        // let defensaEspecia; heredable
        this.defensa = Math.random
        this.velocidad = Math.random * 100
        
    }




    impactrueno(vida){

// 10% de probabilidad de paralizis
        vida = -10 - this.ataqueEspecial
        return vida 
    }

    agilidad(vida){
        //aumenta la agilidad
        //40 de poder

        return vida 
    }   

    ataque_rapido(vida){
        // aumenta la velocidad por un ataque ___ daño normal

        return vida 
    }

    chispa(vida){
        //30% de probablidad de daño
        vida = - 30 - this.ataqueEspecial  
        return vida 
    }



    // this.impactruenobtn.addEventListener("click",function(){


    // })
    // this.agilidadbtn.addEventListener("click",function(){ 


    // })
    // this.ataque_rapidobtn.addEventListener("click",function(){


    // })
    // this.chispabtn.addEventListener("click",function(){


    // })




}