
// Div de bienvenida y nombres
const app1 = new Vue({
    el: '#Bienv',
    data: {
        bienvenida : 'Vue.js ',
        nombres: ['Andes Garcia', 'Leon Avalos', 'Alexis Echavarria']
    }
})

//Aca es donde se maneja todo el CRUD de vue.js
var app = new Vue({
    el: '#app',
    //Aca es donde esta los datos que el usuario guardo (el index, nombre y estado)
    data: {
        titulo: 'Control de actividades',
        actividades: [],
        nuevaActividad: ''
    },
    methods: {
        //Este método se encarga de guardar los elementos en la base de datos local
        agregarActividad: function () {
            this.actividades.push({
                nombre: this.nuevaActividad,
                estado: false
            });
            //Se vuelve a vaciar los elementos que se guardo
            this.nuevaActividad = '';
            //Se guardar a los elementos en la base de datos local
            localStorage.setItem('actividades',
                JSON.stringify(this.actividades));
    },
    //Este método que se encarga de editar el estado de lo que se guardo en la base de datos local
    editarActividad: function (index) {
        if (this.actividades[index].estado == false) {
            this.actividades[index].estado = true;
        } else {
            this.actividades[index].estado = false;
        }
        //Se guarda el elemennto editado en la base de datos local
        localStorage.setItem('actividades',
            JSON.stringify(this.actividades));

    },
    //Este método se encarga de eliminar un  dato que se guardo en la base de datos local
    eliminarActividad: function (index) {
        this.actividades.splice(index, 1);
        localStorage.setItem('actividades',
            JSON.stringify(this.actividades));
    }
},
    //Esta función se encarga de cuando de nuevo se abra el navegador se crguen los datos que estaban guardaos anteriormente.
    created: function (index) {
        var datosActividades = JSON.parse(localStorage.getItem('actividades'));
        if (datosActividades === null) {
            this.actividades = [];
        } else {
            this.actividades = datosActividades;
        }

    }
});
