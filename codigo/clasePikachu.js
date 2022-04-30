import Pokemon from "./clasepokemon.js";
export default class Pikachu extends Pokemon{
    constructor(){
        super()
        this.identificador = 0
        this.ataqueEspecial = 0;
        this.defensaEspecial = 0;
        this.sonidoPikachu = new Audio()
        this.sonidoPikachu.src = "/musicaAmbientalPapu/pikachu.mp3"
        this.fotoPolla=`<img class="poke" src="imagenes_de_pelea/pikachu.png" alt="fotopolla">
        <input class="pokevida"  type="number" min="0" max="120" name="" id="vida" readonly="true">
       <div class="botonPelea">
           <button id="" class="botones"></button>
           <button id="" class="botones"></button>
           <button id="" class="botones"></button>
           <button id="" class="botones" ></button>`
        this.fotoPollaEnemiga=`img  class="pokeenemigo"  src="imagenes_de_pelea/pikachuPelea.png" alt="fotopolla">
        <input class="pokeenemigovida"  type="number" min="0" max="120" name="" id="vidaenemiga" readonly="true">`
    }


    reproducirSonido(){
        this.sonidoPikachu.play()
    }

    impactrueno(){
// 10% de probabilidad de paralizis
    }

    agilidad(){
        //aumenta la agilidad
        //40 de poder

    }

    ataque_rapido(){
        // aumenta la velocidad por un ataque ___ daño normal
    }

    chispa(){
        //30% de probablidad de daño

    }
}