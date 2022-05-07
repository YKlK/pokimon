
export class Pokemon{

    constructor(){
     
    this.vida = 0;
    this.ataque = 0;
    // let ataqueEspecial; heredable
    // let defensaEspecia; heredable
    this.defensa = 0;
    this.velocidad = 0;
    this.estadoVital = 0;
    this.comentarista = document.createElement("P")
    this.botonpelea = document.createElement("DIV")
    }


 
//    atacar(){

//    }


//    PerderVida(){

//    }


//    defenderse(){
    
//    }

//    estadoDeVida(){

//    }
}




export class Pikachu extends Pokemon{
    constructor(){
        super()
        this.imagenEnemigo;
        this.imagenprincipal;
        this.vidaEnemigo = 0;
        this.ataqueEspecial = 0;
        this.defensaEspecial = 0;
        this.sonidoPikachu = new Audio()
        this.sonidoPikachu.src = "musicaAmbientalPapu/pikachu.mp3"
        this.impactruenobtn 
        this.agilidadbtn 
        this.ataque_rapidobtn 
        this.chispabtn
        

    //     this.sonidoPikachu.src = "/musicaAmbientalPapu/pikachu.mp3"
    //     this.fotoPolla=`<img class="poke" src="imagenes_de_pelea/pikachu.png" alt="fotopolla">
    //     <input class="pokevida"  type="number" min="0" max="120" name="" id="vida" readonly="true" value="120">
    //    <div class="botonPelea">
    //        <button id="impactrueno" class="botones">impactrueno</button>
    //        <button id="agilidad" class="botones">agilidad</button>
    //        <button id="ataque_rapido" class="botones">ataque rapido</button>
    //        <button id="chispa" class="botones">chispa</button>
    //        </div>`
    //     this.fotoPollaEnemiga=`<img  class="pokeenemigo"  src="imagenes_de_pelea/pikachuPelea.png" alt="fotopolla">
    //     <input class="pokeenemigovida"  type="number" min="0" max="120" name="" id="vidaenemiga" readonly="true" value="120">`
    }


    reproducirSonido(){
        this.sonidoPikachu.play()
    }

    establecerdorDeEstadisticasEnemigas(){

        /*estadisticas */
        this.imagenEnemigo = document.createElement("IMG");
        this.imagenEnemigo.src = "imagenes_de_pelea/pikachuPelea.png"
        this.vidaEnemigo = document.createElement("INPUT")
        this.vidaEnemigo.value = 120

        /*estableciendo atributos */
        this.vidaEnemigo.setAttribute("type","number")
        this.vidaEnemigo.setAttribute("readonly","true")
        this.vidaEnemigo.setAttribute("min",0)
        this.vidaEnemigo.setAttribute("max",120)

        /*estableciendo clases */
        this.imagenEnemigo.classList.add("pokeenemigo")
        this.vidaEnemigo.classList.add("pokeenemigovida")




    }

    establecedorDeEstadisticasPrincipal(){
        /*estableciendo estadisticas */
        this.imagenprincipal= document.createElement("IMG");
        this.imagenprincipal.src = "imagenes_de_pelea/pikachu.png";
        this.vida = document.createElement("INPUT");
        this.vida.value = 120;

        /* estableciendo botones */
        this.impactruenobtn = document.createElement("BUTTON");
        this.agilidadbtn = document.createElement("BUTTON") ;
        this.ataque_rapidobtn = document.createElement("BUTTON");
        this.chispabtn = document.createElement("BUTTON");

        /*estableciendo atributos */


        this.vida.setAttribute("type","number")
        this.vida.setAttribute("readonly","true")
        this.vida.setAttribute("min",0)
        this.vida.setAttribute("max",120)

        this.impactruenobtn.setAttribute("id","impactrueno")
        this.agilidadbtn.setAttribute("id","agilidad")
        this.chispabtn.setAttribute("id","chispa")
        this.ataque_rapidobtn.setAttribute("id","ataque_rapido")

        this.impactruenobtn.textContent="IMPACTRUENO"
        this.agilidadbtn.textContent="agilidad"
        this.chispabtn.textContent="chispas"
        this.ataque_rapidobtn.textContent="ataque rapido"

        this.impactruenobtn.title = "lo mismo que chispa pero con 10 y un poco mas de daño joder ahora que lo pienso este pokemon esta roto"
        this.agilidadbtn.title = "la misma mierda que ataque rapido pero sin atacar pero te duplica la velocidad "
        this.chispabtn.title = " hace daño fuerte de rayo con un 30 porciernto de aturdimiento que no programare un un buen rato xd"
        this.ataque_rapidobtn.title = "hace un ataque rapido y te aumenta la velocidad por un turno"
 
        /*agregando las clases */
        this.imagenprincipal.classList.add("poke")
        this.vida.classList.add("pokevida")
        this.impactruenobtn.classList.add("botones")
        this.agilidadbtn.classList.add("botones")
        this.chispabtn.classList.add("botones")
        this.ataque_rapidobtn.classList.add("botones")
        this.comentarista.classList.add("narrador")


        /* agregando al div */
        this.botonpelea.appendChild(this.agilidadbtn)
        this.botonpelea.appendChild(this.chispabtn)
        this.botonpelea.appendChild(this.ataque_rapidobtn)
        this.botonpelea.appendChild(this.impactruenobtn)
        
        // const retornador=[ 
        //     this.imagenprincipal
        //    ,this.vida
        //    ,this.botonpelea
        //    ,this.comentarista]
        // return retornador
    }

    devolverTodoPrincipal(){
      //poner botones aqui
      

        return [ this.imagenprincipal
                ,this.vida
                ,this.botonpelea
                ,this.comentarista]
    }
    devolverTodoEnemigo(){
        return [this.imagenEnemigo,this.vidaEnemigo]
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


 export class partida {

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