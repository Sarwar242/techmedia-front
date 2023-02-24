<template>
    <h1>Personal Information of: {{ user.name }}</h1>
    <h2>{{ user.name }}</h2>
    <h2>{{ user.email }}</h2>
    <h2>{{ user.phone }}</h2>
    <button v-on:click="getName(user.name)">Get Name!</button>
</template>

<script>
export default {
    name: "User",
    props: {
        user: Object,
        getName: Function,
    },
};
</script>

<style scoped>
    h1 {
        color: orange;
    }

    h2 {
        color: olivedrab;
    }
    button{
        background-color:gold;
        color: rgb(231, 0, 0);
    }
</style>
