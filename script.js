
const{
    createApp
}=Vue;
createApp({
    data(){
        return{
            inputVal: '',
            nuovoId: 0,
            lista: []
        }    
    },
    methods: {
        aggiungiVal: function() {
            if(this.inputVal) {
                this.lista.push({
                    id: this.nuovoId++,
                    item: this.inputVal,
                    completato: false
                });
            };
            this.inputVal = ''
        },
        fatto: function(voce) {
            if(voce.completato === false){
                voce.completato = true
            }
            else{
                voce.completato = false
            }    
        }
    }
}).mount('#app')
