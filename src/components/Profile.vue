<template>
    <h1>Profile Page!</h1>
    <br>
    <h2>Hi, {{profile}}</h2>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name: "profile",
    data(){
        return {
            profile:""
        }
    },  
    created() {
    this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            this.profile = toParams.name;
            console.info(toParams.name, previousParams)
        }
        )
    },
    mounted(){
        const route= useRoute();
        this.profile = route.params.name;
        console.warn('routes', route.params.name);
    }
}
</script>

<style scoped>
h1{
    color: khaki;
}
h2{
    color: rgb(184, 36, 97);
}
</style>