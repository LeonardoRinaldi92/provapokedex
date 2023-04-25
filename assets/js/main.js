const { createApp } = Vue

createApp({
    data() {
      return {
        listapokemon : [],
        numero : 1,
        visibilitaSopra : true,
        numerosopra : this.numeroSopra()
      }
    },
    methods: {
        trovaMail () {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then( (res) => 
            {this.listapokemon = res.data.results
            console.log(this.listapokemon)})
        },
        numeropiu() {
            this.numero ++
        },
        numeroSopra() {
            let  numero = 1
            if (this.numero - 1 ==! 1 || this.numero == 1) {
                visibilitaSopra = true 
                return this.numero - 1
            } else {
                visibilitaSopra = false
                return this.numero - 1
            }

        }
    },
    created() {
        this.trovaMail()
    },


}).mount('#app')