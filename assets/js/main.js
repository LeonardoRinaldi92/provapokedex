const { createApp } = Vue

createApp({
    data() {
      return {
        listapokemon :[],
        contatore : 0,
        contatoreImg : 0,
        posizionetriangolo : "top: 0%",
        scelta : false,
      }
    },
    methods: {
        trovapokemon () {
            for (let i = 1; i <=151; i++){
                let pokemon ={};
                axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then( (res) => 
                {
                    pokemon.name = res.data.forms[0].name;
                    if (res.data.id < 10){
                        pokemon.id = "00" +  res.data.id
                    } else if (res.data.id < 100){
                        pokemon.id = "0" +  res.data.id
                    }else if (res.data.id >= 100){
                        pokemon.id = res.data.id
                    };
                    pokemon.image = res.data.sprites.other.dream_world.front_default;
                    pokemon.weight = ((res.data.weight)/10) + " " + "kg";
                    pokemon.height = ((res.data.height)* 10) + " " + "cm";
                    if (res.data.types.length == 2){
                        pokemon.type = res.data.types.map ((type) =>
                        type.type.name).join(', ')}
                        else {
                        pokemon.type = res.data.types[0].type.name
                        };
                    this.listapokemon.push(pokemon)
                })
            }
            console.log(this.listapokemon)
        },
        aumenta(){
            if (this.contatore < 151) {
            this.contatoreImg ++
            if (this.posizionetriangolo === "top: 0%") {
                this.posizionetriangolo = "top: calc(100% / 6)"
            } else if (this.posizionetriangolo === "top: calc(100% / 6)") {
                this.posizionetriangolo = "top: calc((100% / 6)*2)"
            } else if (this.posizionetriangolo === "top: calc((100% / 6)*2)") {
                this.posizionetriangolo = "top: calc((100% / 6)*3)"
            } else if (this.posizionetriangolo === "top: calc((100% / 6)*3)") {
                this.posizionetriangolo = "top: calc((100% / 6)*4)"
            } else if (this.posizionetriangolo === "top: calc((100% / 6)*4)") {
                this.posizionetriangolo = "top: calc((100% / 6)*5)"
            } else if (this.posizionetriangolo === "top: calc((100% / 6)*5)") {
                this.contatore ++
            }    
            } else {
                this.contatore = 0;
                this.contatoreImg = 0;
            }
        },
        diminuisci(){
            if (this.contatoreImg > 0) {
                this.contatoreImg --;
            if (this.posizionetriangolo === "top: calc((100% / 6)*5)") {
                this.posizionetriangolo = "top: calc((100% / 6)*4)"
                } else if (this.posizionetriangolo === "top: calc((100% / 6)*4)") {
                    this.posizionetriangolo = "top: calc((100% / 6)*3)"
                } else if (this.posizionetriangolo === "top: calc((100% / 6)*3)") {
                    this.posizionetriangolo = "top: calc((100% / 6)*2)"
                } else if (this.posizionetriangolo === "top: calc((100% / 6)*2)") {
                    this.posizionetriangolo = "top: calc(100% / 6)"
                } else if (this.posizionetriangolo === "top: calc(100% / 6)") {
                    this.posizionetriangolo = "top: 0%"
                } else if ( this.posizionetriangolo === "top: 0%") {
                    this.posizionetriangolo = "top: 0%"
                    this.contatore --
                }
            }
        },

        scegli(){
            if (!this.scelta){
            this.scelta = true
            }
        },
        back(){
            if (this.scelta){
            this.scelta = false
            } else {
                this.contatore = 0;
            this.contatoreImg = 0;
            this.posizionetriangolo = "top: 0%"
            }
        },

        
    },
    created() {
        this.trovapokemon()
    },

}).mount('#app')


