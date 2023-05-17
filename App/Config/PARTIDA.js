
export default class partida {

    constructor(pokemon,pokemonPelea){
    this.pokemonprincipal = pokemon   
    this.pokemonenemigo = pokemonPelea
    this.tablero = pokemon.fotoPolla + pokemonPelea.fotoPollaEnemiga
    this.turno = true
}

    turno(){
        if(this.turno){
        
            // this.turno=false
        }
        else{
            // this.turno=true
        }
    }

    


}