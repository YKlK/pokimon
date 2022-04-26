import { default as Pokemon } from "./clasepokemon.js"
export default Pikachu

class Pikachu extends Pokemon{
    constructor(){
        super()
        let identificador = 0
        let ataqueEspecial = 0;
        let defensaEspecial = 0; 
    }

    /* getters y setters */
        get ataqueEspecial(){
            return this.ataqueEspecial
        }

        set ataqueEspecial(ataqueEspecial){
            this.ataqueEspecial = ataqueEspecial
        }

        get defensaEspecial(){
            return this.defensaEspecial
        }

        set defensaEspecial(defensaEspecial){
            this.defensaEspecial=defensaEspecial
        }
    /* getters y setters */

    reproducirSonido(){

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

// const pika = pikachu()