class Pokemon{

    constructor(){
    let vida;
    let ataque;
    // let ataqueEspecial; heredable
    // let defensaEspecia; heredable
    let defensa;
    let velocidad;
    let estadoVital;
    }


    /*funciones getters y setters */
    get vida(){
        return this.vida
    }

    set vida(vida){
        this.vida = vida
    }

    get ataque(){
        return this.ataque
    }

    set ataque(ataque){
        this.ataque = ataque
    }

    get defensa(){
        return this.defensa
    }

    set defensa(defensa){
        this.defensa = defensa
    }

    get velocidad(){
        return this.velocidad;  
    }

    set velocidad(velocidad){
        this.velocidad = velocidad
    }

    get estadoVital(){
        return this.estadoVital
    }

    set estadoVital(estadoVital){
        this.estadoVital = estadoVital
    }

    /*funciones getters y setters */

   atacar(){

   }


   PerderVida(){

   }


   defenderse(){

   }

   estadoDeVida(){

   }
}