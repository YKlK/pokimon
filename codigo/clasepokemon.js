class Pokemon{

    constructor(){
    let vida = 0;
    let ataque = 0;
    // let ataqueEspecial; heredable
    // let defensaEspecia; heredable
    let defensa = 0;
    let velocidad = 0;
    let estadoVital = 0;
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