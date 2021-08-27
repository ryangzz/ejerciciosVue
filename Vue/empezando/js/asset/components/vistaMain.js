import tablePokemons from "./tables/tablePokemons.js";
export default{
    data(){
        return {
            pokemons:[]
        }
    },
    methods:{
        getAllPokemons(){
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=200").then(resp=>{
                if(resp.data.results) this.pokemons = resp.data.results;
            })
        }
    },
    created(){
        this.getAllPokemons();
    },
    props:{
        mensaje:{
            type: String, 
            default:''
        },
    },
    components:{
        'table-pokemon':tablePokemons
    },
    template:/* html */`
        <div class="container">
            <h1>{{mensaje}}</h1>
            <div class="row-fluid">
                <table-pokemon :pokemons="pokemons"></table-pokemon>
            </div>
        </div>
    `
}