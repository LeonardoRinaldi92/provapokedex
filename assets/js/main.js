const { createApp } = Vue

createApp({
    data() {
      return {
        listapokemon :[],
        contatore : 0,
        contatoreImg : 0,
        posizionetriangolo : "top: 0%",
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
                    this.listapokemon.push(pokemon)
                })
            }
            console.log(this.listapokemon)
        },
        aumenta(){
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
        },
    },
    created() {
        this.trovapokemon()
    },

}).mount('#app')


/* <img class="pics":src="listapokemon[contatoreImg].image" alt=""> */