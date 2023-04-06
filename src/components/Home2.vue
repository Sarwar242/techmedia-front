<template>
    <h1>Home Component</h1> <br>
    <h2>Slots in Vue js</h2> <br>
    <ul>
        <li v-for="item in list" :key="item.id">
            <Child><h3> <span> Post id-{{item.id}} : </span>{{item.title}}</h3></Child>
        </li>
    </ul>
    

</template>
<script>
import Child2 from './Child2.vue';
import axios from 'axios';

export default {
    name: "Home2",
    components:{
        Child2
    },
    data(){
        return {
            name: "Child",
            red:false,
            background:false,
            list:[]
        }
    },
      methods:{
        apply(){
            this.red=!this.red;
            this.background=!this.background;
            this.size=!this.size;
        }
      },
      async mounted(){
        const res= await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
        this.list=res.data;
        console.log("result",res.data);
    }
}
</script>

<style scoped>
h1{
    color: green;
}
h2{
    color: rgb(68, 71, 68);
}
</style>