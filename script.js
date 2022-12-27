
const{
    createApp
}=Vue;
createApp({
    data(){
        return{
            inputVal: '',
            nuovoId: 0,
            lista: [
                {
                    nome:'uova',
                },
                {
                    nome:'vino',
                },
                {
                    nome:'olio',
                },
                {
                    nome:'sale',
                },
            ]
        }    
    },
    methods: {
        aggiungiVal: function() {
            if(this.inputVal) {
                this.lista.push({
                    id: this.nuovoId++,
                    item: this.inputVal,
                });
            };
            this.inputVal = ''
        },
        fatto: function(voce) {
            if(voce.completato){
                voce.completato = false
            }
            else{
                voce.completato = true
            }    
        },
        checkTask(index) {
        let task =this.lista[index];
        }
    }
}).mount('#app')
