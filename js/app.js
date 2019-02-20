var app = new Vue({ 
    el: '#app',
    data: {
        titulo: 'Control de actividades',
        actividades: [],
        nuevaActividad: ''
    },
    methods: {
        agregarActividad: function(){
            this.actividades.push({
                nombre: this.nuevaActividad,
                estado: false
            });
            this.nuevaActividad = '';
            localStorage.setItem('actividades',
            JSON.stringify(this.actividades));
        },
        editarActividad: function(index){
            if(this.actividades[index].estado == false){
                this.actividades[index].estado = true;
            }else{
                this.actividades[index].estado = false;
            }
            localStorage.setItem('actividades',
            JSON.stringify(this.actividades));
            
        },
        eliminarActividad: function(index){
            this.actividades.splice(index, 1);
            localStorage.setItem('actividades',
            JSON.stringify(this.actividades));
        }
    },
    created: function(index){
        var datosActividades = JSON.parse(localStorage.getItem('actividades'));
        if(datosActividades === null){
            this.actividades = [];
        }else{
            this.actividades = datosActividades;
        }

    }
});
