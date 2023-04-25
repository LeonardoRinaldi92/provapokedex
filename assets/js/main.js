const { createApp } = Vue

createApp({
    data() {
      return {
        listapokemon :[],
      }
    },
    methods: {
        trovapokemon () {
            for (let i = 1; i <=151; i++){
                let pokemon ={};
                axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then( (res) => 
                {pokemon.name = res.data.forms[0].name;
                pokemon.id = res.data.id;
                pokemon.image = res.data.sprites.other.dream_world.front_default;
                this.listapokemon.push(pokemon)
                })
            }
            console.log(this.listapokemon)
        },
    },
    created() {
        this.trovapokemon()
    },

        // numeropiu() {
        //     this.numero ++
        // },
        // numeroSopra() {
        //     let  numero = 1
        //     if (this.numero - 1 ==! 1 || this.numero == 1) {
        //         visibilitaSopra = true 
        //         return this.numero - 1
        //     } else {
        //         visibilitaSopra = false
        //         return this.numero - 1
        //     }

    //     }
    // },
    // created() {
    //     this.trovaMail()
    // },


}).mount('#app')