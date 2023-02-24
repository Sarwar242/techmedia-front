<template>
    <h1>Child Component</h1>
    <slot></slot>
</template>
<script>
export default {
    name: "Child2",
    props: {

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