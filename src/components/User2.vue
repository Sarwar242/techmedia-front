<template>
    <h1 ref="user"> User Component </h1>
</template>
<script>
export default{
    name: 'user-component',
    
    beforeUnmount(){
        console.log('beforeUnmount', this.$refs['user']);
    },
    unmounted(){
        console.log('Unmounted', this.$refs['user']);
    }
}
</script>