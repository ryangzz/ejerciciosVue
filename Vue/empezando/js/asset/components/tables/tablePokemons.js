export default{
    data(){
        return{

        }
    },
    props:{
        pokemons:{
            type:Array,
        }
    },

    template:/* html */`
    <div>
    <table class="table">
        <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Recurso</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(pokemon, index) of pokemons" :key="index">
                <td>{{index+1}}</td>
                <td><strong>{{pokemon.name.toUpperCase()}}</strong></td>
                <td>{{pokemon.url}}</td>
            </tr>
        </tbody>
    </table>
    </div>
    `
}