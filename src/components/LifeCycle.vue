<template>
<h1> Life Cycle Methods</h1>
    {{ create }} <br>
    {{ munt }} 
    <br>
    <h2 ref="count">{{ count }}</h2>
    <button v-on:click="count+=1">update</button>
<br>
<br>
<br>
<button v-on:click="show=!show">Toggle</button>
    <User2 v-if="show"/>
</template>
<script>    
import User2 from './User2.vue';
export default{

    name: "Life Cycle",
    components:{
        User2
    },
    data(){
        return {
            create: "hello",
            munt: "hi",
            count: 0,
            show:true
        };
    },
    beforeCreate(){
        this.test = "hello before created";
        // alert("brfore created");
    },
    created(){
        this.test = "hello created";
        // alert("created");
    },
    beforeMount(){
        this.munt = "hello before created";
        console.log(this.$el);
    },
    mounted(){
        this.munt = "hello before created";
        console.log(this.$el);
    },
    beforeUpdate(){
        // console.log("Before Update",this.$refs['count'].textContent);
    },
    updated(){
        // console.log("Updated",this.$refs['count'].textContent);
    },
    beforeUnmount(){

    },
    unmounted(){

    }
}
</script>
<style scoped></style>