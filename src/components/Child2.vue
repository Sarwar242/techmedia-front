<template>
    <h1>Child Component</h1>
 
    <!-- <slot></slot> -->
    <h3>{{d.title}}</h3>
</template>
<script>
export default {
    name: "Child2",
    props: {
        idx:String,
    },
    data(){
        return {
            red:false,
        }
    }
}
</script>

<style scoped>
h1{
    color: rgb(207, 181, 250);
}
</style>