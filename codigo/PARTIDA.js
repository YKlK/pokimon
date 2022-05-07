import Pikachu from "./clasePikachu.js"


export default class partida {

    constructor(principal,enemigo,arena){
    this.arena = arena
    this.pokemonprincipal = principal
    this.pokemonenemigo = enemigo
   
    
    }

    crearTablero(){
        for(let i =0 ; i< 4 ;i++){
            this.arena.appendChild(this.pokemonprincipal.devolverTodoPrincipal()[i])
                if(i<2){
                    this.arena.appendChild(this.pokemonenemigo.devolverTodoEnemigo()[i])
                } 
            }

        }
    

    turno(){
        
        if (this.pokemonprincipal instanceof Pikachu){
            alert("si")
        }
        

            

            // this.turno=false
        
        

    //         // this.turno=true
        
    }

    // init__partida(){
    //     if(this.pokemonprincipal.vida.value > 0 ){
    //         this.turno()
    //     }

    // }

    


}