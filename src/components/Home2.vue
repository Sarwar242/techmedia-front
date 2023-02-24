<template>
    <h1>Home Component</h1>
    <h2>Slots in Vue js</h2>
    <Child2> <h3>Sarwar here</h3> </Child2>
</template>
<script>
import Child2 from './Child2.vue';

export default {
    name: "Home2",
    components:{
        Child2
    },
    data(){
        return {
            name: "Child",
            red:false,
            background:false
        }
    },
      methods:{
        apply(){
            this.red=!this.red;
            this.background=!this.background;
            this.size=!this.size;
        }
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